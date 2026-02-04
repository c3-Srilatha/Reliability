export interface BundlerTestAppNestedTypeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppNestedTypeReact;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppNestedTypeReact;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppNestedTypeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppNestedTypeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppNestedTypeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppNestedTypeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppNestedTypeReact;

  readonly booleanProp?: boolean;
  withBooleanProp(booleanProp: boolean): BundlerTestAppNestedTypeReact;

  readonly anyOfMultipleTypesWithoutDefault?: BundlerTestAppAmbiguousType | null | BundlerTestAppChart | null | null;
  withAnyOfMultipleTypesWithoutDefault(anyOfMultipleTypesWithoutDefault: IBundlerTestAppAmbiguousType | null | IBundlerTestAppChart | null | null): BundlerTestAppNestedTypeReact;

  readonly anyOfMultipleTypesWithDefault?: BundlerTestAppAmbiguousType | null | BundlerTestAppComponent | null | null;
  withAnyOfMultipleTypesWithDefault(anyOfMultipleTypesWithDefault: IBundlerTestAppAmbiguousType | null | IBundlerTestAppComponent | null | null): BundlerTestAppNestedTypeReact;

  readonly anyOfCollectionTypes?: C3.Array<BundlerTestAppAmbiguousType | null> | C3.Array<BundlerTestAppChart | null> | null;
  withAnyOfCollectionTypes(anyOfCollectionTypes: C3.Array<BundlerTestAppAmbiguousType | null> | Array<IBundlerTestAppAmbiguousType | null> | C3.Array<BundlerTestAppChart | null> | Array<IBundlerTestAppChart | null> | null): BundlerTestAppNestedTypeReact;

  readonly selfReferenceField?: BundlerTestAppComponent | null;
  withSelfReferenceField(selfReferenceField: IBundlerTestAppComponent | null): BundlerTestAppNestedTypeReact;

  readonly size?: string | null;
  withSize(size: string | null): BundlerTestAppNestedTypeReact;

  readonly referenceFieldWithoutDefault?: BundlerTestAppReferenceType | null;
  withReferenceFieldWithoutDefault(referenceFieldWithoutDefault: IBundlerTestAppReferenceType | null): BundlerTestAppNestedTypeReact;

  readonly referenceFieldWithDefault?: BundlerTestAppReferenceType | null;
  withReferenceFieldWithDefault(referenceFieldWithDefault: IBundlerTestAppReferenceType | null): BundlerTestAppNestedTypeReact;

  readonly referenceFieldWithSomeDefault?: BundlerTestAppReferenceType | null;
  withReferenceFieldWithSomeDefault(referenceFieldWithSomeDefault: IBundlerTestAppReferenceType | null): BundlerTestAppNestedTypeReact;

  readonly referenceFieldWithOverrideDefault?: BundlerTestAppReferenceType | null;
  withReferenceFieldWithOverrideDefault(referenceFieldWithOverrideDefault: IBundlerTestAppReferenceType | null): BundlerTestAppNestedTypeReact;
}

