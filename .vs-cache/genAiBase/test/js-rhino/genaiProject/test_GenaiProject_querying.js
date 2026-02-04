/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_GenaiProject_querying';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    Genai.PyUtil.terminateAllEngines();
    TestApi.setOpenAiApiKey();

    this.unfilteredProject = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      id: 'unfiltered',
      projectType: 'tutorial',
      unstructuredQueryEngineConfigName: 'worldFacts',
      chunkerConfig: 'default',
    });

    this.projectFilters = {
      tags: [
        {
          target: ['projectA', 'projectB'],
          wrappingExp: 'all',
        },
        {
          target: ['projectC'],
        },
      ],
      date: [{ target: ['2021-01-01', '2021-12-31'], wrappingExp: 'between' }],
    };

    this.filteredProject = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
      id: 'filtered',
      projectType: 'tutorial',
      unstructuredQueryEngineConfigName: 'worldFacts',
      chunkerConfig: 'default',
      sourceFilters: this.projectFilters,
    });

    this.getInitialResult = function (searchQuery) {
      return TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
        searchQuery: searchQuery,
      });
    };

    this.filteredProject.initialize();
    this.filteredProject = this.filteredProject.get();
    this.unfilteredProject.initialize();
    this.unfilteredProject = this.unfilteredProject.get();
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
    Genai.PyUtil.terminateAllEngines();
  });

  describe('#addProjectFilter', function () {
    beforeAll(function () {
      this.unfilteredQuery = Genai.Query.fromString('What is a C3 ML Pipeline?');
      this.filteredQuery = Genai.Query.fromString('What is a C3 ML Pipeline? file:test.pdf tags:any("tag1","tag2")');
    });

    describe('with no sourceFilters defined on the project', function () {
      it('returns the query unchanged', function () {
        var initialResult = this.getInitialResult(this.unfilteredQuery).getMissing({ include: 'searchQuery' });
        var filteredResult = this.unfilteredProject.addProjectFilter(initialResult);
        expect(filteredResult).toEqual(initialResult);
      });
    });

    describe('with sourceFilters defined on the project but not the query', function () {
      it("returns the query with the project's sourceFilters", function () {
        var initialResult = this.getInitialResult(this.unfilteredQuery);
        var filteredResult = this.filteredProject.addProjectFilter(initialResult);

        expect(filteredResult.standaloneQuery).toEqual(filteredResult.standaloneQuery);

        var expectedFilter = Genai.Query.make({ filters: this.projectFilters }).toC3Filter();
        expect(filteredResult.searchQuery.toC3Filter()).toEqual(expectedFilter);
      });
    });

    describe('with sourceFilters defined on the project and the query', function () {
      it('returns the query with the both sourceFilters combined with an AND', function () {
        var initialResult = this.getInitialResult(this.filteredQuery);
        var filteredResult = this.filteredProject.addProjectFilter(initialResult);

        expect(filteredResult.standaloneQuery).toEqual(filteredResult.standaloneQuery);

        expect(filteredResult.searchQuery.filters).toEqual({
          date: [{ target: ['2021-01-01', '2021-12-31'], wrappingExp: 'between', linkingOperator: 'OR' }],
          fileName: [{ target: ['test.pdf'], linkingOperator: 'OR' }],
          tags: [
            {
              target: ['tag1', 'tag2'],
              wrappingExp: 'any',
              openingParens: 1,
              closingParens: 1,
              linkingOperator: 'OR',
            },
            {
              target: ['projectA', 'projectB'],
              wrappingExp: 'all',
              openingParens: 1,
              linkingOperator: 'AND',
            },
            {
              target: ['projectC'],
              closingParens: 1,
              linkingOperator: 'OR',
            },
          ],
        });

        var projectsTagFilter = Filter.exists(Filter.intersects('metadata.tags', ['projectA']))
          .and(Filter.exists(Filter.intersects('metadata.tags', ['projectB'])))
          .or()
          .intersects('metadata.tags', ['projectC']);
        var queryTagFilter = Filter.intersects('metadata.tags', ['tag1']).or(
          Filter.intersects('metadata.tags', ['tag2'])
        );
        var projectsDateFilter = Filter.ge('metadata.date', '2021-01-01').and().le('metadata.date', '2021-12-31');
        var queryFileFilter = Filter.intersects('metadata.fileName', ['test.pdf']);

        var combinedTagFilter = Filter.paren(queryTagFilter).and().paren(projectsTagFilter);
        var completeFilter = projectsDateFilter.and(queryFileFilter).and(combinedTagFilter);

        expect(filteredResult.searchQuery.toC3Filter()).toEqual(completeFilter);
      });
    });
  });

  describe('#query', function () {
    beforeAll(function () {
      this.expectedResult = ['American Automobile Association', 'AAA', 'American Automobile Touring Alliance', 'AATA'];
      this.filteredProject = this.filteredProject
        .withSourceFilters({ fileName: [{ target: ['UK*'] }] })
        .merge({ mergeInclude: 'sourceFilters', returnInclude: 'this' });
      this.searchQuery = Genai.Query.fromString('What should I do to get an international driving permit?');
    });

    describe('without filters', function () {
      beforeAll(function () {
        var res = this.getInitialResult(this.searchQuery);
        this.unfilteredProject.query(res);
        this.res = res.get('answer, passages.sourceFile.metadata');
      });

      it('returns an answer', function () {
        TestApi.checkResultSucceeded(this.res);
        TestApi.checkStringMatches(this.res.answer, this.expectedResult);
      });

      it("returns passages not meeting the project's sourceFilters", function () {
        expect(
          this.res.passages.filter((passage) => {
            return passage.sourceFile.metadata.fileName.slice(0, 2) !== 'UK';
          }).length
        ).toBeGreaterThan(0);
      });
    });

    describe('with filters', function () {
      beforeAll(function () {
        var res = this.getInitialResult(this.searchQuery);
        this.filteredProject.query(res);
        this.res = res.get('answer, passages.sourceFile.metadata');
      });

      it('returns an answer', function () {
        TestApi.checkResultSucceeded(this.res);
        TestApi.checkStringMatches(this.res.answer, this.expectedResult);
      });

      it("returns passages filtered by the project's sourceFilters", function () {
        expect(this.res.passages.length).toBeGreaterThan(0);
        this.res.passages.each((passage) => {
          expect(passage.sourceFile.metadata.fileName.slice(0, 2)).toEqual('UK');
        });
      });
    });
  });

  describe('with same queryOrchestratorConfigName', function () {
    beforeAll(function () {
      this.queryOrchestratorConfigName = 'test-config';
      this.project1 = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
        id: 'project1',
        projectType: 'tutorial',
        queryOrchestratorConfigName: this.queryOrchestratorConfigName,
        chunkerConfig: 'default',
      });

      this.project2 = TestApi.upsertEntity(this.ctx, 'Genai.Project', {
        id: 'project2',
        projectType: 'tutorial',
        chunkerConfig: 'default',
      });
    });

    it('should fail to merge existing project2 with the same queryOrchestratorConfigName as project1', function () {
      var project2 = this.project2;
      var usedOQConfigName = this.queryOrchestratorConfigName;

      expect(function () {
        project2.withQueryOrchestratorConfigName(usedOQConfigName).merge();
      }).toThrowError(/QueryOrchestrator config test-config is already used in another project/);
    });

    it('should fail the merge if the current batch of projects has duplicate QO config names', function () {
      var ctx = this.ctx;

      expect(function () {
        TestApi.upsertBatchEntity(ctx, 'Genai.Project', [
          {
            id: 'project1',
            projectType: 'tutorial',
            queryOrchestratorConfigName: 'test-config10',
            chunkerConfig: 'default',
          },
          {
            id: 'project2',
            projectType: 'tutorial',
            queryOrchestratorConfigName: 'test-config10',
            chunkerConfig: 'default',
          },
          {
            id: 'project6',
            projectType: 'tutorial',
            queryOrchestratorConfigName: 'test-config11',
            chunkerConfig: 'default',
          },
        ]);
      }).toThrowError(/QueryOrchestrator config test-config10 is already used in another project from this batch/);
    });

    it('should fail the merge if the current batch of projects has both duplicate QO config names + existing project with same QO', function () {
      var ctx = this.ctx;
      var { errors, objs } = Genai.Project.beforeUpdate([
        {
          id: 'project10',
          projectType: 'tutorial',
          queryOrchestratorConfigName: 'test-config10',
          chunkerConfig: 'default',
        },
        {
          id: 'project15',
          projectType: 'tutorial',
          queryOrchestratorConfigName: 'test-config10',
          chunkerConfig: 'default',
        },
        {
          id: 'project20',
          projectType: 'tutorial',
          queryOrchestratorConfigName: 'test-config',
          chunkerConfig: 'default',
        },
      ]);

      expect(errors.length).toBe(2);
      expect(errors[0].message).toContain(
        'QueryOrchestrator config test-config10 is already used in another project from this batch'
      );
      expect(errors[1].message).toContain('QueryOrchestrator config test-config is already used in another project');
      expect(objs.length).toBe(1);
      expect(objs[0].id).toBe('project10'); // Only 1 project should be successful - project10
    });
  });
});
