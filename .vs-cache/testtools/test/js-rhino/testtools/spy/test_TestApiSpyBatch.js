/*
 * Copyright 2009-2025 C3 AI (www.c3.ai). All Rights Reserved.
 * This material, including without limitation any software, is the confidential trade secret and proprietary
 * information of C3 and its licensors. Reproduction, use and/or distribution of this material in any form is
 * strictly prohibited except as set forth in a written license agreement with C3 and/or its authorized distributors.
 * This material may be covered by one or more patents or pending patent applications.
 */

const filename = 'test_TestApiSpyBatch';

describe(filename, function () {
  const batchSize = 2;
  // Creat entity for the batch job and the expected values
  const numOfAnimals = 200; // Picked a large number to make the test fail consistently without proper multi-thread handling
  const batchEntity = [];
  const animalNames = [];
  for (let i = 1; i <= numOfAnimals; i++) {
    batchEntity.push({ animal: `animal${i}` });
    animalNames.push(`animal${i}`);
  }

  beforeAll(function () {
    this.ctx = TestApi.createContext(filename);
    this.animals = TestApi.upsertBatchEntity(this.ctx, 'TestSpyAnimal', batchEntity);
  });

  afterAll(function () {
    TestApi.teardown(this.ctx);
  });

  describe('run batch job', function () {
    beforeAll(function () {
      // Create and register the spy on TestSpyAnimal#createAnimal as a spy dispatcher
      this.spyOnCreateAnimal = TestApi.spyOn(this.ctx, TestSpyAnimal, 'createAnimal')
        .returnValue('Job is DONE')
        .register();
      // Create and upsert batch job
      this.job = TestSpyAnimalBatchJob.make({ id: 'testSpyAnimalBatchJob' });
      this.job.upsert();
      // Start a batch job which calls TestSpyAnimal#createAnimal. These action calls will be dispatched to the previously registered spy dispatcher
      this.job.start({ batchSize: batchSize });
      this.job.waitForCompletion();
      this.callHistory = this.spyOnCreateAnimal.getActionMock().callHistory(); // Get call history of the spy
    });

    afterAll(function () {
      this.spyOnCreateAnimal.unregister();
      this.job.remove();
      TestSpyAnimal.removeAll({ filter: Filter.intersects('animal', animalNames) }, true);
    });

    it('should calls the function TestSpyAnimal#createAnimal for each batch', function () {
      // Convert the call history into a format that allows easy iteration and modification.
      const jsonAnimals = this.callHistory.toJson();
      const animals = _.reduce(
        jsonAnimals,
        (acc, n) => {
          return _.concat(acc, n.args.animals);
        },
        []
      );
      expect(this.callHistory.length).toEqual(Math.ceil(numOfAnimals / batchSize)); // Currently 200/2 = 100 batches
      expect(animals).toEqual(jasmine.arrayContaining(animalNames));
    });
  });
});
