/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * Copyright 2009-2024 C3 AI (www.c3.ai). All Rights Reserved.
 * Confidential and Proprietary C3 Materials.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_Query_Result';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.query = 'What is an ML Pipeline?';

    this.verifyInterimStatus = function (position, status) {
      var statusHistory = this.result.get('statusHistory.status').statusHistory;
      expect(statusHistory[position].status).toEqual(status);
    };
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe(':updateStatus', function () {
    beforeAll(function () {
      this.result = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
        searchQuery: Genai.Query.fromString(this.query),
      }).get('this');
    });

    it('adds a new status for every call', function () {
      this.result.updateStatus(Genai.Query.Result.InterimStatusEnum.PROCESS_QUERY);

      expect(this.result.get('statusHistory.status').statusHistory.length).toEqual(1);
      this.verifyInterimStatus(0, Genai.Query.Result.InterimStatusEnum.PROCESS_QUERY);
    });

    it('adds multiple statuses in the order', function () {
      this.result.updateStatus(Genai.Query.Result.InterimStatusEnum.QUERY_DATABASE);
      this.result.updateStatus(Genai.Query.Result.InterimStatusEnum.SEARCH_DOCUMENTS);
      this.result.updateStatus(Genai.Query.Result.InterimStatusEnum.GENERATE_VISUALIZATION);
      this.result.updateStatus(Genai.Query.Result.InterimStatusEnum.GENERATE_ANSWER);
      this.result.updateStatus(Genai.Query.Result.InterimStatusEnum.COMPLETED);

      this.verifyInterimStatus(0, Genai.Query.Result.InterimStatusEnum.PROCESS_QUERY);
      this.verifyInterimStatus(1, Genai.Query.Result.InterimStatusEnum.QUERY_DATABASE);
      this.verifyInterimStatus(2, Genai.Query.Result.InterimStatusEnum.SEARCH_DOCUMENTS);
      this.verifyInterimStatus(3, Genai.Query.Result.InterimStatusEnum.GENERATE_VISUALIZATION);
      this.verifyInterimStatus(4, Genai.Query.Result.InterimStatusEnum.GENERATE_ANSWER);
      this.verifyInterimStatus(5, Genai.Query.Result.InterimStatusEnum.COMPLETED);
    });

    describe('when "inPlace" is set to true', function () {
      beforeAll(function () {
        this.result = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
          searchQuery: Genai.Query.fromString(this.query),
        }).get('this');
      });

      it('adding the same status multiple times does not add a new status', function () {
        this.result.updateStatus(Genai.Query.Result.InterimStatusEnum.QUERY_DATABASE, undefined, true);
        expect(this.result.get('statusHistory.status').statusHistory.length).toEqual(1);

        // Update with the same status again
        this.result.updateStatus(Genai.Query.Result.InterimStatusEnum.QUERY_DATABASE, undefined, true);
        expect(this.result.get('statusHistory.status').statusHistory.length).toEqual(1);
      });
    });

    describe('when a statusParent is provided', function () {
      beforeAll(function () {
        this.result = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
          searchQuery: Genai.Query.fromString(this.query),
        }).get('this');

        this.parentStatus = this.result.updateStatus(Genai.Query.Result.InterimStatusEnum.PROCESS_QUERY).updatedStatus;
      });

      it('adds a new status with the statusParent', function () {
        this.result.updateStatus(Genai.Query.Result.InterimStatusEnum.QUERY_DATABASE, this.parentStatus);
        expect(this.result.get('statusHistory.status').statusHistory.length).toEqual(2);
        expect(this.result.get('statusHistory.statusParent').statusHistory[1].statusParent.id).toEqual(
          this.parentStatus.id
        );
      });
    });
  });

  describe(':beforeRemove', function () {
    beforeAll(function () {
      this.result = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {
        searchQuery: Genai.Query.fromString(this.query),
      }).get('this');
    });

    it('removes all Genai.Query.Result.InterimStatusHistory objects associated with the Genai.Query.Result', function () {
      this.result.updateStatus(Genai.Query.Result.InterimStatusEnum.PROCESS_QUERY);
      this.result.updateStatus(Genai.Query.Result.InterimStatusEnum.GENERATE_VISUALIZATION);
      this.result.updateStatus(Genai.Query.Result.InterimStatusEnum.COMPLETED);
      var resultId = this.result.id;

      this.interimStatusesBeforeRemove = Genai.Query.Result.InterimStatusHistory.fetchCount({
        filter: Filter.eq('parent.id', resultId),
      });
      expect(this.interimStatusesBeforeRemove).toEqual(3);

      this.result.remove();

      this.interimStatusesBeforeRemove = Genai.Query.Result.InterimStatusHistory.fetchCount({
        filter: Filter.eq('parent.id', resultId),
      });
      expect(this.interimStatusesBeforeRemove).toEqual(0);
    });
  });

  describe('for a query result with child results', function () {
    beforeAll(function () {
      this.headResultId = 'headResult';
      this.childAId = 'childA';
      this.childAAId = 'childAA';
      this.childABId = 'childAB';
      this.childBId = 'childB';
      this.childBAId = 'childBA';
      this.childBBId = 'childBB';

      /**
       *               HeadResult
       *             /           \
       *         ChildA          ChildB
       *        /      \         /     \
       *   ChildAA   ChildAB  ChildBA  ChildBB
       */
      this.results = TestApi.upsertBatchEntity(this.ctx, 'Genai.Query.Result', [
        {
          id: this.headResultId,
          searchQuery: Genai.Query.fromString('Head Result'),
        },
        {
          id: this.childAId,
          searchQuery: Genai.Query.fromString('Child A'),
          parent: this.headResultId,
        },
        {
          id: this.childAAId,
          searchQuery: Genai.Query.fromString('Child AA'),
          parent: this.childAId,
        },
        {
          id: this.childABId,
          searchQuery: Genai.Query.fromString('Child AB'),
          parent: this.childAId,
        },
        {
          id: this.childBId,
          searchQuery: Genai.Query.fromString('Child B'),
          parent: this.headResultId,
        },
        {
          id: this.childBAId,
          searchQuery: Genai.Query.fromString('Child BA'),
          parent: this.childBId,
        },
        {
          id: this.childBBId,
          searchQuery: Genai.Query.fromString('Child BB'),
          parent: this.childBId,
        },
      ]);
    });

    describe('#allSources', function () {
      beforeAll(function () {
        this.headResultUrlSource = {
          id: 'www.c3.ai',
          domain: 'www.c3.ai',
          displayName: 'C3.ai',
        };

        this.headResultUrlSourceRelation = {
          id: 'headResultUrlSourceRelation',
          to: this.headResultUrlSource.id,
          from: this.headResultId,
          url: 'www.c3.ai/something-else',
          displayName: 'Specific C3.ai page',
          passageUiDisplayIndex: 1,
        };

        this.childAUrlSource = {
          id: 'www.google.com',
          domain: 'www.google.com',
          displayName: 'Google',
        };

        this.childAUrlSourceRelation = {
          id: 'childAUrlSourceRelation',
          to: this.childAUrlSource.id,
          from: this.childAId,
          url: 'www.google.com/specific-search-query',
          passageUiDisplayIndex: 2,
        };

        this.childAAUrlSource = {
          id: 'www.yahoo.com',
          domain: 'www.yahoo.com',
          displayName: 'Yahoo!',
        };

        this.childAAUrlSourceRelation = {
          id: 'childAAUrlSourceRelation',
          to: this.childAAUrlSource.id,
          from: this.childAAId,
          url: 'www.yahoo.com/specific-search-query',
          passageUiDisplayIndex: 3,
        };

        TestApi.upsertBatchEntity(this.ctx, 'Genai.Query.Result.Source.Url', [
          this.headResultUrlSource,
          this.childAUrlSource,
          this.childAAUrlSource,
        ]);

        TestApi.upsertBatchEntity(this.ctx, 'Genai.Query.ResultToUrlSourceRelation', [
          this.headResultUrlSourceRelation,
          this.childAUrlSourceRelation,
          this.childAAUrlSourceRelation,
        ]);

        this.childBStructuredQuerySource = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result.Source.StructuredData', {
          id: 'User',
          displayName: 'User',
          structuredQuerySpec: Genai.StructuredQuery.Spec.make({
            sourceType: 'User',
            spec: { projection: 'id' },
          }),
        }).get('this, structuredQuerySpec');

        this.childBStructuredQuerySourceRelation = TestApi.upsertEntity(
          this.ctx,
          'Genai.Query.ResultToStructuredDataSourceRelation',
          {
            id: 'childBStructuredQuerySourceRelation',
            to: this.childBStructuredQuerySource.id,
            from: this.childBId,
            numRows: 10,
            displayName: 'User data',
            passageUiDisplayIndex: 3,
          }
        ).get('this');

        this.allSources = Genai.Query.Result.make(this.headResultId).allSources();
      });

      it('recursively fetches all sources', function () {
        expect(this.allSources.length).toEqual(4);
        expect(
          this.allSources.map((s) => {
            return s.id;
          })
        ).toEqual([
          this.headResultUrlSourceRelation.id,
          this.childAUrlSourceRelation.id,
          this.childAAUrlSourceRelation.id,
          this.childBStructuredQuerySourceRelation.id,
        ]);
      });

      describe('includes the required information for each source', function () {
        describe('for a url source', function () {
          it('includes the url from the source relation record', function () {
            expect(this.allSources[0].url).toEqual(this.headResultUrlSourceRelation.url);
            expect(this.allSources[1].url).toEqual(this.childAUrlSourceRelation.url);
            expect(this.allSources[2].url).toEqual(this.childAAUrlSourceRelation.url);
          });

          it('includes the display name from the source relation record', function () {
            expect(this.allSources[0].displayName).toEqual(this.headResultUrlSourceRelation.displayName);
            expect(this.allSources[1].displayName).toEqual(this.childAUrlSourceRelation.displayName);
            expect(this.allSources[2].displayName).toEqual(this.childAAUrlSourceRelation.displayName);
          });

          it('includes the display index from the source relation record', function () {
            expect(this.allSources[0].passageUiDisplayIndex).toEqual(
              this.headResultUrlSourceRelation.passageUiDisplayIndex
            );
            expect(this.allSources[1].passageUiDisplayIndex).toEqual(
              this.childAUrlSourceRelation.passageUiDisplayIndex
            );
            expect(this.allSources[2].passageUiDisplayIndex).toEqual(
              this.childAAUrlSourceRelation.passageUiDisplayIndex
            );
          });

          it('includes the typeIdent from the source relation record', function () {
            expect(this.allSources[0].typeIdent).toEqual('RSLTSRCREL:URL');
            expect(this.allSources[1].typeIdent).toEqual('RSLTSRCREL:URL');
            expect(this.allSources[2].typeIdent).toEqual('RSLTSRCREL:URL');
          });

          it('includes the domain from the source record', function () {
            expect(this.allSources[0].to.domain).toEqual(this.headResultUrlSource.domain);
            expect(this.allSources[1].to.domain).toEqual(this.childAUrlSource.domain);
            expect(this.allSources[2].to.domain).toEqual(this.childAAUrlSource.domain);
          });

          it('includes the display name from the source record', function () {
            expect(this.allSources[0].to.displayName).toEqual(this.headResultUrlSource.displayName);
            expect(this.allSources[1].to.displayName).toEqual(this.childAUrlSource.displayName);
            expect(this.allSources[2].to.displayName).toEqual(this.childAAUrlSource.displayName);
          });

          it('includes the typeIdent from the source record', function () {
            expect(this.allSources[0].to.typeIdent).toEqual('URL');
            expect(this.allSources[1].to.typeIdent).toEqual('URL');
            expect(this.allSources[2].to.typeIdent).toEqual('URL');
          });
        });

        describe('for a structured data source', function () {
          it('includes the numRows from the source relation record', function () {
            expect(this.allSources[3].numRows).toEqual(this.childBStructuredQuerySourceRelation.numRows);
          });

          it('includes the typeIdent from the source relation record', function () {
            expect(this.allSources[3].typeIdent).toEqual('RSLTSRCREL:STR');
          });

          it('includes the display index from the source relation record', function () {
            expect(this.allSources[3].passageUiDisplayIndex).toEqual(
              this.childBStructuredQuerySourceRelation.passageUiDisplayIndex
            );
          });

          it('includes the display name from the source record', function () {
            expect(this.allSources[3].to.displayName).toEqual(this.childBStructuredQuerySource.displayName);
          });

          it('includes the typeIdent from the source record', function () {
            expect(this.allSources[3].to.typeIdent).toEqual('STRC_QRY');
          });

          it('includes the structuredQuerySpec from the source record', function () {
            expect(this.allSources[3].to.structuredQuerySpec).toEqual(
              this.childBStructuredQuerySource.structuredQuerySpec
            );
          });
        });
      });
    });

    describe('#allRationaleSources', function () {
      beforeAll(function () {
        this.headResultSourceFileRelation = {
          id: 'headResultSourceFileRelation',
          from: this.headResultId,
          passage: Genai.SourcePassage.make({
            source: Genai.Source.make({ id: 'dummySource' }),
            intraSourceId: 'headResultIntraSourceId',
          }),
          sourceFile: Genai.SourceFile.make({ id: 'dummySourceFile' }),
          passageUiDisplayIndex: 1,
        };

        this.childBASourceFileRelation = {
          id: 'childBASourceFileRelation',
          from: this.childBAId,
          passage: Genai.SourcePassage.make({
            source: Genai.Source.make({ id: 'dummySource' }),
            intraSourceId: 'childBAIntraSourceId',
          }),
          sourceFile: Genai.SourceFile.make({ id: 'dummySourceFile' }),
          passageUiDisplayIndex: 2,
        };

        TestApi.upsertBatchEntity(this.ctx, 'Genai.Query.ResultToSourceFileRelation', [
          this.headResultSourceFileRelation,
          this.childBASourceFileRelation,
        ]);
      });

      it('recursively fetches all rationale sources', function () {
        var allRationaleSources = Genai.Query.Result.make(this.headResultId).allRationaleSources();
        expect(allRationaleSources.length).toEqual(2);
        expect(
          allRationaleSources.map((s) => {
            return s.id;
          })
        ).toEqual([this.headResultSourceFileRelation.id, this.childBASourceFileRelation.id]);
      });
    });

    describe('#allVisualizations', function () {
      beforeAll(function () {
        this.headResultVisualization = {
          sourceType: 'Genai.Aircraft',
          visualizationConfiguration: { id: 'headResultVisualizationConfig' },
        };

        this.childBBVisualization = {
          sourceType: 'Genai.Airport',
          visualizationConfiguration: { id: 'childBBVisualizationConfig' },
        };

        Genai.Query.Result.make(this.headResultId).withVisualization(this.headResultVisualization).merge();
        Genai.Query.Result.make(this.childBBId).withVisualization(this.childBBVisualization).merge();
      });

      it('recursively fetches all visualizations', function () {
        var allVisualizations = Genai.Query.Result.make(this.headResultId).allVisualizations();
        expect(allVisualizations.length).toEqual(2);
        expect(
          allVisualizations.map((v) => {
            return v.sourceType;
          })
        ).toEqual([this.headResultVisualization.sourceType, this.childBBVisualization.sourceType]);
        expect(
          allVisualizations.map((v) => {
            return v.visualizationConfiguration.id;
          })
        ).toEqual([
          this.headResultVisualization.visualizationConfiguration.id,
          this.childBBVisualization.visualizationConfiguration.id,
        ]);
      });
    });

    describe('#allStructuredDataSources', function () {
      beforeAll(function () {
        this.allStructuredDataSources = Genai.Query.Result.make(this.headResultId).allStructuredDataSources();
      });

      it('recursively fetches all structuredDataSources', function () {
        expect(this.allStructuredDataSources.length).toEqual(1);
        expect(
          this.allStructuredDataSources.map((s) => {
            return s.id;
          })
        ).toEqual(['childBStructuredQuerySourceRelation']);
      });
    });
  });

  describe('::addToolNamesFromToolkit', function () {
    beforeEach(function () {
      this.result = TestApi.upsertEntity(this.ctx, 'Genai.Query.Result', {}).get('this');
    });

    afterEach(function () {
      this.result.remove();
    });

    it('QueryOrchestrator_evalOnly', function () {
      const query = this.result.addToolNamesFromToolkit('QueryOrchestrator_evalOnly');

      expect(query.allToolNames).toEqual(['relationalDatabaseQuery()']); // Returned value
      expect(query.get('allToolNames').allToolNames).toEqual(['relationalDatabaseQuery()']); // Persisted value
    });

    it('QueryOrchestrator_evalAndUnstructured_v2', function () {
      const query = this.result.addToolNamesFromToolkit('QueryOrchestrator_evalAndUnstructured_v2');

      expect(query.allToolNames.sorted()).toEqual(['documentQuestionAnswer()', 'relationalDatabaseQuery()']); // Returned value
      expect(query.get('allToolNames').allToolNames.sorted()).toEqual([
        'documentQuestionAnswer()',
        'relationalDatabaseQuery()',
      ]); // Persisted value
    });
  });
});
