export interface BundlerTestAppComponentReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppComponentReact;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppComponentReact;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppComponentReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppComponentReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppComponentReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppComponentReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppComponentReact;

  readonly booleanProp?: boolean;
  withBooleanProp(booleanProp: boolean): BundlerTestAppComponentReact;

  readonly anyOfMultipleTypesWithoutDefault?: BundlerTestAppAmbiguousType | null | BundlerTestAppChart | null | null;
  withAnyOfMultipleTypesWithoutDefault(anyOfMultipleTypesWithoutDefault: IBundlerTestAppAmbiguousType | null | IBundlerTestAppChart | null | null): BundlerTestAppComponentReact;

  readonly anyOfMultipleTypesWithDefault?: BundlerTestAppAmbiguousType | null | BundlerTestAppComponent | null | null;
  withAnyOfMultipleTypesWithDefault(anyOfMultipleTypesWithDefault: IBundlerTestAppAmbiguousType | null | IBundlerTestAppComponent | null | null): BundlerTestAppComponentReact;

  readonly anyOfCollectionTypes?: C3.Array<BundlerTestAppAmbiguousType | null> | C3.Array<BundlerTestAppChart | null> | null;
  withAnyOfCollectionTypes(anyOfCollectionTypes: C3.Array<BundlerTestAppAmbiguousType | null> | Array<IBundlerTestAppAmbiguousType | null> | C3.Array<BundlerTestAppChart | null> | Array<IBundlerTestAppChart | null> | null): BundlerTestAppComponentReact;

  readonly selfReferenceField?: BundlerTestAppComponent | null;
  withSelfReferenceField(selfReferenceField: IBundlerTestAppComponent | null): BundlerTestAppComponentReact;

  readonly size?: string | null;
  withSize(size: string | null): BundlerTestAppComponentReact;

  readonly referenceFieldWithoutDefault?: BundlerTestAppReferenceType | null;
  withReferenceFieldWithoutDefault(referenceFieldWithoutDefault: IBundlerTestAppReferenceType | null): BundlerTestAppComponentReact;

  readonly referenceFieldWithDefault?: BundlerTestAppReferenceType | null;
  withReferenceFieldWithDefault(referenceFieldWithDefault: IBundlerTestAppReferenceType | null): BundlerTestAppComponentReact;

  readonly referenceFieldWithSomeDefault?: BundlerTestAppReferenceType | null;
  withReferenceFieldWithSomeDefault(referenceFieldWithSomeDefault: IBundlerTestAppReferenceType | null): BundlerTestAppComponentReact;

  readonly referenceFieldWithOverrideDefault?: BundlerTestAppReferenceType | null;
  withReferenceFieldWithOverrideDefault(referenceFieldWithOverrideDefault: IBundlerTestAppReferenceType | null): BundlerTestAppComponentReact;
}

