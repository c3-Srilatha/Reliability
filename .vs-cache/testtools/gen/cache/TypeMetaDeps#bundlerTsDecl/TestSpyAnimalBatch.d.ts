export interface TestSpyAnimalBatch {

  readonly animals?: C3.Array<string | null>;
  withAnimals(animals: C3.Array<string | null> | Array<string | null>): TestSpyAnimalBatch;
}

