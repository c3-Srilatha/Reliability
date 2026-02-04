export interface BundlerTestAppComponent {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppComponent;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppComponent;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppComponent;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppComponent;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppComponent;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppComponent;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppComponent;

  readonly booleanProp?: boolean;
  withBooleanProp(booleanProp: boolean): BundlerTestAppComponent;

  readonly anyOfMultipleTypesWithoutDefault?: BundlerTestAppAmbiguousType | null | BundlerTestAppChart | null | null;
  withAnyOfMultipleTypesWithoutDefault(anyOfMultipleTypesWithoutDefault: IBundlerTestAppAmbiguousType | null | IBundlerTestAppChart | null | null): BundlerTestAppComponent;

  readonly anyOfMultipleTypesWithDefault?: BundlerTestAppAmbiguousType | null | BundlerTestAppComponent | null | null;
  withAnyOfMultipleTypesWithDefault(anyOfMultipleTypesWithDefault: IBundlerTestAppAmbiguousType | null | IBundlerTestAppComponent | null | null): BundlerTestAppComponent;

  readonly anyOfCollectionTypes?: C3.Array<BundlerTestAppAmbiguousType | null> | C3.Array<BundlerTestAppChart | null> | null;
  withAnyOfCollectionTypes(anyOfCollectionTypes: C3.Array<BundlerTestAppAmbiguousType | null> | Array<IBundlerTestAppAmbiguousType | null> | C3.Array<BundlerTestAppChart | null> | Array<IBundlerTestAppChart | null> | null): BundlerTestAppComponent;

  readonly selfReferenceField?: BundlerTestAppComponent | null;
  withSelfReferenceField(selfReferenceField: IBundlerTestAppComponent | null): BundlerTestAppComponent;

  readonly size?: string | null;
  withSize(size: string | null): BundlerTestAppComponent;

  readonly referenceFieldWithoutDefault?: BundlerTestAppReferenceType | null;
  withReferenceFieldWithoutDefault(referenceFieldWithoutDefault: IBundlerTestAppReferenceType | null): BundlerTestAppComponent;

  readonly referenceFieldWithDefault?: BundlerTestAppReferenceType | null;
  withReferenceFieldWithDefault(referenceFieldWithDefault: IBundlerTestAppReferenceType | null): BundlerTestAppComponent;

  readonly referenceFieldWithSomeDefault?: BundlerTestAppReferenceType | null;
  withReferenceFieldWithSomeDefault(referenceFieldWithSomeDefault: IBundlerTestAppReferenceType | null): BundlerTestAppComponent;

  readonly referenceFieldWithOverrideDefault?: BundlerTestAppReferenceType | null;
  withReferenceFieldWithOverrideDefault(referenceFieldWithOverrideDefault: IBundlerTestAppReferenceType | null): BundlerTestAppComponent;
}

