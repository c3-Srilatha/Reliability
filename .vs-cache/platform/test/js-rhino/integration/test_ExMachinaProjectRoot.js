/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

var filename = 'test_ExMachinaProjectRoot';

describe(filename, function () {
  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
  });

  describe('publishProject', function () {
    describe('throws an error', function () {
      beforeAll(function () {
        var projectData = TestApi.createTestProject(this.ctx);
        this.projectRoot = projectData.projectRoot;
        this.projectRoot = this.projectRoot.withField('kind', ExMachinaProjectKind.PIPELINE);
      });

      it('when the pipeline asset id is not provided', () => {
        expect(function () {
          this.projectRoot.publishProject({});
        }).toThrowError();
      });

      it('when the pipeline asset id has not been yet persisted', () => {
        expect(function () {
          this.projectRoot.publishProject({}, 'pipeline does not exist');
        }).toThrowError();
      });
    });

    describe('if the pipeline has already been persisted', function () {
      describe('if the form object is not provided', function () {
        beforeAll(function () {
          var projectData = TestApi.createTestProject(this.ctx);
          this.projectRoot = projectData.projectRoot;
          this.projectRoot = this.projectRoot.withField('kind', ExMachinaProjectKind.PIPELINE).merge();
          this.projectBeforeUpdate = projectData.project;

          this.pipeline = TestApi.upsertEntity(this.ctx, 'ExMachinaPipeline', {
            name: 'pipeline-no-formObj',
          });

          this.newProjectHead = this.projectRoot.publishProject({}, this.pipeline.id);
          this.projectAfterUpdate = this.projectBeforeUpdate.get('id, name, description, definition, format, asset');
        });

        it('persists the current project head with the name from the project root', function () {
          expect(this.projectAfterUpdate.name).toEqual(this.projectRoot.get('name').name);
        });

        it('adds the pipeline asset to the current project head', function () {
          expect(this.projectAfterUpdate.asset.id).toEqual(this.pipeline.id);
        });

        it('creates the new project head with the expected fields populated', function () {
          var newProjectHead = this.newProjectHead.get('root.id, parent.id, format, definition');
          expect(newProjectHead.root.id).toEqual(this.projectRoot.id);
          expect(newProjectHead.parent.id).toEqual(this.projectAfterUpdate.id);
          expect(newProjectHead.format).toEqual(this.projectAfterUpdate.format);
          expect(newProjectHead.definition).toEqual(this.projectAfterUpdate.definition);
        });

        it('updates the calc fields so the project root is aware of the new project head', function () {
          expect(this.projectRoot.get('currentHead.id').currentHead.id).toEqual(this.newProjectHead.id);
        });

        afterAll(function () {
          this.newProjectHead.remove();
        });
      });

      describe('if the form object is provided', function () {
        beforeAll(function () {
          var projectData = TestApi.createTestProject(this.ctx);
          this.projectRoot = projectData.projectRoot;
          this.projectRoot = this.projectRoot.withField('kind', ExMachinaProjectKind.PIPELINE).merge();
          this.projectBeforeUpdate = projectData.project;
          this.formObj = {
            name: 'New Name',
            description: 'This is what changed since the last version',
          };

          this.pipeline = TestApi.upsertEntity(this.ctx, 'ExMachinaPipeline', {
            name: 'pipeline-formObj',
          });

          this.newProjectHead = this.projectRoot.publishProject(this.formObj, this.pipeline.id);
          this.projectAfterUpdate = this.projectBeforeUpdate.get('id, name, description, definition, format, asset');
        });

        it('persists the current project head with the name and description from the form', function () {
          expect(this.projectAfterUpdate.name).toEqual(this.formObj.name);
          expect(this.projectAfterUpdate.description).toEqual(this.formObj.description);
        });

        it('adds the pipeline asset to the current project head', function () {
          expect(this.projectAfterUpdate.asset.id).toEqual(this.pipeline.id);
        });

        it('creates the new project head with the expected fields populated', function () {
          var newProjectHead = this.newProjectHead.get('root.id, parent.id, format, definition');
          expect(newProjectHead.root.id).toEqual(this.projectRoot.id);
          expect(newProjectHead.parent.id).toEqual(this.projectAfterUpdate.id);
          expect(newProjectHead.format).toEqual(this.projectAfterUpdate.format);
          expect(newProjectHead.definition).toEqual(this.projectAfterUpdate.definition);
        });

        it('updates the calc fields so the project root is aware of the new project head', function () {
          expect(this.projectRoot.get('currentHead.id').currentHead.id).toEqual(this.newProjectHead.id);
        });

        afterAll(function () {
          this.newProjectHead.remove();
        });
      });
    });
  });

  describe('pipelineProjectVersionLineage', function () {
    beforeAll(function () {
      var projectData = TestApi.createTestProject(this.ctx);

      /**
       * ExMachinaProjectRoot.projects has a db order annotation on meta.created. This ensures we create new
       * ExMachinaProjects at least a millisecond apart.
       */
      TestApi.sleepServer(1);

      this.versionLineageProjectRoot = projectData.projectRoot;
      this.versionLineageProject = projectData.project.get('id, name, description, meta.created, meta.updated');

      Logger.for(filename).info('Initial project created at ' + this.versionLineageProject.meta.created);

      var datasetTopic = TestApi.upsertEntity(this.ctx, 'ExMachinaDatasetTopic', {
        name: 'Dataset Topic',
      });

      this.dataset = TestApi.upsertEntity(this.ctx, 'ExMachinaDatasetMetadata', {
        name: 'Dataset',
        description: 'Dataset',
        format: 'parquet',
        topic: datasetTopic,
      });

      this.secondVersionLineageProject = TestApi.upsertEntity(this.ctx, 'ExMachinaProject', {
        format: 'format',
        description: "Head project's parent",
        definition: 'definition',
        parent: this.versionLineageProject,
        root: this.versionLineageProjectRoot,
      }).get('id, name, description, meta.created, meta.updated');

      Logger.for(filename).info('Second project created at ' + this.secondVersionLineageProject.meta.created);

      /**
       * ExMachinaProjectRoot.projects has a db order annotation on meta.created. This ensures we create new
       * ExMachinaProjects at least a millisecond apart.
       */
      TestApi.sleepServer(1);

      // A dataset might be "unavailable" if the record was deleted or if ACLs restrict the user from accessing it
      this.unavailableDatasetId = 'an-unavailable-dataset-id';

      this.headVersionLineageProject = TestApi.upsertEntity(this.ctx, 'ExMachinaProject', {
        format: 'format',
        description: 'Head project',
        definition: {
          inputNodes: [
            {
              id: '2',
              classId: 'load-dataset',
              properties: {
                'dataset-id': {
                  datasetId: this.dataset.id,
                },
              },
            },
            {
              id: '7',
              classId: 'load-dataset',
              properties: {
                'dataset-id': {
                  datasetId: this.dataset.id,
                },
              },
            },
            {
              id: '8',
              classId: 'load-dataset',
              properties: {
                'dataset-id': {
                  datasetId: this.unavailableDatasetId,
                },
              },
            },
          ],
        },
        parent: this.secondVersionLineageProject,
        root: this.versionLineageProjectRoot,
      }).get('id, name, description, meta.created, meta.updated');

      TestApi.sleepServer(1);
      Logger.for(filename).info('Head (third) project created at ' + this.headVersionLineageProject.meta.created);

      TestApi.upsertBatchEntity(this.ctx, 'ExMachinaPipeline', [
        {
          name: 'Pipeline 1',
          project: this.versionLineageProject,
          metadata: { datasetIds: [this.dataset.id] },
        },
        {
          name: 'Pipeline 2',
          project: this.secondVersionLineageProject,
          metadata: { datasetIds: [this.dataset.id] },
        },
      ]);

      ExMachinaProjectRoot.make(
        {
          id: this.versionLineageProjectRoot.id,
          currentHead: this.headVersionLineageProject,
        },
        true
      ).merge();

      TestApi.waitForSetup(this.ctx);

      this.datasetFetchSpy = TestApi.spyOn(this.ctx, 'ExMachinaDatasetMetadata', 'fetch').callThrough().register();

      Logger.for(filename).info(
        'Projects array ' + JSON.stringify(this.versionLineageProjectRoot.get('projects.this').projects)
      );
      this.result = this.versionLineageProjectRoot.get().pipelineProjectVersionLineage();
    });

    it('returns the expected number of results', function () {
      expect(this.result.length).toBe(3);
    });

    it('only fetches the dataset once because they get cached', function () {
      expect(this.datasetFetchSpy.callCount()).toBe(1);
    });

    it('returns the expected data for the head project at position 0 in the resulting array', function () {
      var headProjectResult = this.result[0];
      var projectMeta = this.headVersionLineageProject.meta;
      expect(headProjectResult.id).toEqual(this.headVersionLineageProject.id);
      expect(headProjectResult.name).toEqual(this.headVersionLineageProject.name);
      expect(headProjectResult.parent).toEqual(this.secondVersionLineageProject.id);
      expect(headProjectResult.version).toEqual(3);
      expect(headProjectResult.parentVersion).toEqual(2);
      expect(headProjectResult.childrenVersions).toEqual([]);
      expect(headProjectResult.isHead).toBe(true);
      expect(headProjectResult.created.toString()).toEqual(projectMeta.created.toString());
      expect(headProjectResult.updated.toString()).toEqual(projectMeta.updated.toString());
      expect(headProjectResult.description).toEqual(this.headVersionLineageProject.description);
      expect(headProjectResult.datasets.length).toBe(2);
      expect(headProjectResult.datasets[0].id).toEqual(this.dataset.id);
      expect(headProjectResult.datasets[1].id).toEqual(this.dataset.id);
      expect(headProjectResult.unavailableDatasetIds[0]).toEqual(this.unavailableDatasetId);
    });

    it('returns the expected data for the middle project', function () {
      var secondProjectResult = this.result[1];
      var projectMeta = this.secondVersionLineageProject.meta;
      expect(secondProjectResult.id).toEqual(this.secondVersionLineageProject.id);
      expect(secondProjectResult.name).toEqual(this.secondVersionLineageProject.name);
      expect(secondProjectResult.parent).toEqual(this.versionLineageProject.id);
      expect(secondProjectResult.version).toEqual(2);
      expect(secondProjectResult.parentVersion).toEqual(1);
      expect(secondProjectResult.childrenVersions).toEqual([3]);
      expect(secondProjectResult.isHead).toBe(false);
      expect(secondProjectResult.created.toString()).toEqual(projectMeta.created.toString());
      expect(secondProjectResult.updated.toString()).toEqual(projectMeta.updated.toString());
      expect(secondProjectResult.description).toEqual(this.secondVersionLineageProject.description);
      expect(secondProjectResult.datasets.length).toBe(1);
      expect(secondProjectResult.datasets[0].id).toEqual(this.dataset.id);
    });

    it('returns the expected data for the initial project', function () {
      var initialProjectResult = this.result[2];
      var projectMeta = this.versionLineageProject.get('meta.created, meta.updated').meta;
      expect(initialProjectResult.id).toEqual(this.versionLineageProject.id);
      expect(initialProjectResult.name).toEqual(this.versionLineageProject.name);
      expect(initialProjectResult.parent).toEqual(undefined);
      expect(initialProjectResult.version).toEqual(1);
      expect(initialProjectResult.parentVersion).toEqual(undefined);
      expect(initialProjectResult.childrenVersions).toEqual([2]);
      expect(initialProjectResult.isHead).toBe(false);
      expect(initialProjectResult.created.toString()).toEqual(projectMeta.created.toString());
      expect(initialProjectResult.updated.toString()).toEqual(projectMeta.updated.toString());
      expect(initialProjectResult.description).toEqual(this.versionLineageProject.description);
      expect(initialProjectResult.datasets.length).toBe(1);
      expect(initialProjectResult.datasets[0].id).toEqual(this.dataset.id);
    });
  });

  describe('revertToPreviousVersion', function () {
    beforeAll(function () {
      var projectData = TestApi.createTestProject(this.ctx);
      this.revertProjectRoot = projectData.projectRoot;
      this.revertProject = projectData.project;

      this.secondRevertProject = TestApi.upsertEntity(this.ctx, 'ExMachinaProject', {
        format: 'second-format',
        definition: {
          nodeDefinition: [
            {
              id: 'node-1',
            },
          ],
        },
        parent: this.revertProject,
        root: this.revertProjectRoot,
      });

      ExMachinaProjectRoot.make(
        {
          id: this.revertProjectRoot.id,
          currentHead: this.secondRevertProject,
        },
        true
      ).merge();

      this.revertProjectRoot = this.revertProjectRoot.get(
        'id, name, description, currentHead.format, currentHead.definition'
      );
      this.revertProject = this.revertProject.get('id, name, root.id, parent.id, format, definition');
    });

    describe('when the project to revert to does not exist', function () {
      it('throw an error', function () {
        expect(function () {
          this.revertProjectRoot.revertToPreviousVersion('does-not-exist');
        }).toThrow();
      });
    });

    describe('when the project to revert to does exist', function () {
      describe('but the project does not have the same root, so it does not exist in the lineage', function () {
        beforeAll(function () {
          var otherProjectData = TestApi.createTestProject(this.ctx);
          this.otherProjectId = otherProjectData.project.id;
        });

        it('throws an error', function () {
          expect(function () {
            this.revertProjectRoot.revertToPreviousVersion(this.otherProjectId);
          }).toThrow();
        });
      });

      describe('and the project exists in the project lineage', function () {
        it('updates current head project to match the definition and format of the project to revert to', function () {
          this.revertProjectRoot.revertToPreviousVersion(this.revertProject.id);
          var revertedTo = ExMachinaProject.make(this.revertProject, true).get('id, format, definition');
          var updatedHead = ExMachinaProject.make({ id: this.secondRevertProject.id }, true).get(
            'format, definition, parent.id'
          );
          expect(updatedHead.format).toEqual(revertedTo.format);
          expect(updatedHead.definition).toEqual(revertedTo.definition);
          expect(updatedHead.parent.id).toEqual(revertedTo.id);
        });
      });
    });
  });

  describe('getPipelineAssetDetails', function () {
    beforeAll(function () {
      var projectData = TestApi.createTestProject(this.ctx);
      this.assetDetailsProjectRoot = projectData.projectRoot;
      this.assetDetailsProject = projectData.project.get('id, name, description');

      this.headProject = TestApi.upsertEntity(this.ctx, 'ExMachinaProject', {
        format: 'format',
        definition: { id: 'project-definition' },
        parent: this.assetDetailsProject,
        root: this.assetDetailsProjectRoot,
      });

      this.pipelineAsset = TestApi.upsertEntity(this.ctx, 'ExMachinaPipeline', {
        name: 'Pipeline 1',
        project: this.assetDetailsProject,
        metadata: { id: 'test-metadata' },
        definition: { id: 'pipeline-definition' },
      }).get('id, metadata, definition');

      this.assetDetailsProjectRoot = ExMachinaProjectRoot.make(
        {
          id: this.assetDetailsProjectRoot.id,
          currentHead: this.headVersionLineageProject,
        },
        true
      )
        .merge()
        .get('id, name, description');

      this.result = this.assetDetailsProjectRoot.getPipelineAssetDetails();
    });

    it('returns the expected information about the project root', function () {
      expect(this.result.id).toEqual(this.assetDetailsProjectRoot.id);
      expect(this.result.name).toEqual(this.assetDetailsProjectRoot.name);
      expect(this.result.description).toEqual(this.assetDetailsProjectRoot.description);
    });

    it('does not retrieve information about the head project', function () {
      expect(this.result.pipelineAssetMetadata.length).toEqual(1);
    });

    it('returns the expected information about the published project', function () {
      expect(this.result.pipelineAssetMetadata[0].projectId).toEqual(this.assetDetailsProject.id);
      expect(this.result.pipelineAssetMetadata[0].name).toEqual(this.assetDetailsProject.name);
      expect(this.result.pipelineAssetMetadata[0].description).toEqual(this.assetDetailsProject.description);
      expect(this.result.pipelineAssetMetadata[0].versionNumber).toEqual(1);
      expect(this.result.pipelineAssetMetadata[0].created).toBeDefined();
    });

    it('returns the expected information about the pipeline asset', function () {
      expect(this.result.pipelineAssetMetadata[0].pipelineId).toEqual(this.pipelineAsset.id);
      expect(this.result.pipelineAssetMetadata[0].assetMetadata).toEqual(this.pipelineAsset.metadata);
      expect(this.result.pipelineAssetMetadata[0].assetDefinition).toEqual(this.pipelineAsset.definition);
    });
  });

  describe('#cloneProject', function () {
    describe('creates a project from template', function () {
      beforeEach(function () {
        this.projectFields = {
          id: 'toClone',
          name: 'ToClone',
          definition: {},
          fromTemplate: 'dummy-template',
        };
        var projectToClone = TestApi.createTestProject(this.ctx, {
          projectRootId: this.projectFields.id,
          projectRootName: this.projectFields.name,
          projectRootDescription: this.projectFields.description,
          projectDefinition: this.projectFields.definition,
          fromTemplateId: this.projectFields.fromTemplate,
        }).projectRoot;

        this.projectId = ExMachinaProjectRoot.cloneProject(projectToClone).id;
        this.project = ExMachinaProjectRoot.make({ id: this.projectId }, true).get(
          'name, graph, { currentHead: [definition] }, cloned.id, fromTemplate'
        );
      });

      afterEach(function () {
        this.project.remove();
      });

      it('clones the project', function () {
        expect(this.project.name).toEqual(this.projectFields.name + '-Copy1');
        expect(this.project.currentHead.definition).toEqual(this.projectFields.definition);
        expect(this.project.cloned.id).toEqual(this.projectFields.id);
        expect(this.project.fromTemplate.id).toEqual(this.projectFields.fromTemplate);
      });
    });
  });

  describe('#createFromTemplate', function () {
    beforeAll(function () {
      this.template = VadProjectTemplate.make({
        id: 'blank',
      }).get('this, definition');
    });

    describe('with the name generated using the template name when the field projectName is not provided', function () {
      beforeEach(function () {
        this.projectId = ExMachinaProjectRoot.createFromTemplate(this.template).id;
        this.project = ExMachinaProjectRoot.make({ id: this.projectId }, true).get(
          'name, fromTemplate, { currentHead: [definition] }'
        );
      });

      afterEach(function () {
        this.project.remove();
      });

      it('creates a project from template', function () {
        expect(this.project.name).toEqual(this.template.name);
        expect(this.project.currentHead.definition).toEqual(this.template.definition);
        expect(this.project.fromTemplate.id).toEqual(this.template.id);
      });
    });

    describe('with the name provided', function () {
      beforeEach(function () {
        this.projectName = 'my project';
        this.projectId = ExMachinaProjectRoot.createFromTemplate(this.template, this.projectName).id;
        this.project = ExMachinaProjectRoot.make({ id: this.projectId }, true).get('name');
      });

      afterEach(function () {
        this.project.remove();
      });

      it('creates a project from template', function () {
        expect(this.project.name).toEqual(this.projectName);
      });
    });

    describe('when no template is found', function () {
      it('doCreateFromTemplate helper function throws an error', function () {
        expect(function () {
          return ExMachinaProjectRoot.createFromTemplate({ id: 'non-existent-template' }, 'my project').id;
        }).toThrowError();
      });
    });
  });

  describe('removeProject', function () {
    it('soft-removes the project', function () {
      var projectId = 'to-remove';
      var project = TestApi.upsertEntity(this.ctx, 'ExMachinaProjectRoot', {
        id: projectId,
        name: projectId,
        kind: ExMachinaProjectKind.STANDARD,
      });
      project.removeProject();
      expect(project.get('softRemoved').at('softRemoved')).toBe(true);
    });
  });

  describe('remove', function () {
    beforeAll(function () {
      this.projectToRemove = TestApi.createTestProject(this.ctx).projectRoot;

      this.cancelGraphSpy = TestApi.spyOn(this.ctx, 'ExMachina.Api', 'cancelGraph').returnValue({}).register();
      this.isActiveSpy = TestApi.spyOn(this.ctx, 'ExMachinaSession', 'isActive').returnValue(true).register();
      this.purgeGraphsSpy = TestApi.spyOn(this.ctx, 'ExMachina.Api', 'purgeGraphs').returnValue(true).register();

      this.session = TestApi.upsertEntity(this.ctx, 'ExMachinaSession', {
        started: DateTime.now(),
        instance: 'test',
      });

      this.fetchSessionsSpy = TestApi.spyOn(this.ctx, 'ExMachinaSession', 'fetch')
        .returnValue({
          objs: [this.session],
          count: 1,
        })
        .register();

      TestApi.spyOn(this.ctx, 'ExMachinaSession', 'api').returnValue(ExMachina.Api.make()).register();

      this.cgBeforeCount = this.cancelGraphSpy.callCount();
      this.purgeGraphsBeforeCount = this.purgeGraphsSpy.callCount();
      this.projectToRemove.remove();
    });

    it('cancels the project', function () {
      expect(this.cancelGraphSpy.callCount()).toEqual(this.cgBeforeCount + 1);
    });

    it('purges the project from the VAD Server', function () {
      expect(this.purgeGraphsSpy.callCount()).toEqual(this.purgeGraphsBeforeCount + 1);
    });

    it('removes the project', function () {
      expect(ExMachinaProjectRoot.make({ id: this.projectToRemove.id }, true).get()).toBeNull();
    });
  });

  afterAll(function () {
    if (this.projectId) {
      ExMachinaProjectRoot.make({ id: this.projectId }, true).remove();
    }

    TestApi.teardown(this.ctx);
  });
});
