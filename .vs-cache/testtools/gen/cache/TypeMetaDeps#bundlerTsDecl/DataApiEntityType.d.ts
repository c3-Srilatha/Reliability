export interface DataApiEntityType {

  readonly mixinIntField?: number | null;
  withMixinIntField(mixinIntField: number | null): DataApiEntityType;

  readonly id: string;
  withId(id: string): DataApiEntityType;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): DataApiEntityType;

  readonly name?: string | null;
  withName(name: string | null): DataApiEntityType;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): DataApiEntityType;

  readonly version?: number | null;
  withVersion(version: number | null): DataApiEntityType;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): DataApiEntityType;

  readonly intField?: number | null;
  withIntField(intField: number | null): DataApiEntityType;

  readonly datetimeField?: DateTime | null;
  withDatetimeField(datetimeField: DateTime | Date | string | null): DataApiEntityType;

  readonly doubleField?: number | null;
  withDoubleField(doubleField: number | null): DataApiEntityType;

  readonly booleanField?: boolean;
  withBooleanField(booleanField: boolean): DataApiEntityType;

  readonly referenceField?: TestApiEntityType | null;
  withReferenceField(referenceField: ITestApiEntityType | null): DataApiEntityType;

  readonly requiredField: number;
  withRequiredField(requiredField: number): DataApiEntityType;

  readonly foreignKeyReferenceField?: TestApiEntityType | null;
  withForeignKeyReferenceField(foreignKeyReferenceField: ITestApiEntityType | null): DataApiEntityType;

  readonly foreignKeyReferenceCollectionField?: C3.Array<TestApiEntityType | null>;
  withForeignKeyReferenceCollectionField(foreignKeyReferenceCollectionField: C3.Array<TestApiEntityType | null> | Array<ITestApiEntityType | null>): DataApiEntityType;

  readonly dimensionField?: Dimension | null;
  withDimensionField(dimensionField: IDimension | null): DataApiEntityType;

  readonly unitField?: Unit | null;
  withUnitField(unitField: IUnit | null): DataApiEntityType;

  readonly storedCalcField?: number | null;
  withStoredCalcField(storedCalcField: number | null): DataApiEntityType;

  readonly storedCollectionField?: C3.Array<TestApiEntityType | null>;
  withStoredCollectionField(storedCollectionField: C3.Array<TestApiEntityType | null> | Array<ITestApiEntityType | null>): DataApiEntityType;

  readonly durationField?: Duration | null;
  withDurationField(durationField: IDuration | null): DataApiEntityType;
}

