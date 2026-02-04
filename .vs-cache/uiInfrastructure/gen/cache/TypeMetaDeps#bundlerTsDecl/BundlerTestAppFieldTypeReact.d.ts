export interface BundlerTestAppFieldTypeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppFieldTypeReact;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppFieldTypeReact;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppFieldTypeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppFieldTypeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppFieldTypeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppFieldTypeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppFieldTypeReact;

  readonly booleanProp?: boolean;
  withBooleanProp(booleanProp: boolean): BundlerTestAppFieldTypeReact;

  readonly anyOfMultipleTypesWithoutDefault?: BundlerTestAppAmbiguousType | null | BundlerTestAppChart | null | null;
  withAnyOfMultipleTypesWithoutDefault(anyOfMultipleTypesWithoutDefault: IBundlerTestAppAmbiguousType | null | IBundlerTestAppChart | null | null): BundlerTestAppFieldTypeReact;

  readonly anyOfMultipleTypesWithDefault?: BundlerTestAppAmbiguousType | null | BundlerTestAppComponent | null | null;
  withAnyOfMultipleTypesWithDefault(anyOfMultipleTypesWithDefault: IBundlerTestAppAmbiguousType | null | IBundlerTestAppComponent | null | null): BundlerTestAppFieldTypeReact;

  readonly anyOfCollectionTypes?: C3.Array<BundlerTestAppAmbiguousType | null> | C3.Array<BundlerTestAppChart | null> | null;
  withAnyOfCollectionTypes(anyOfCollectionTypes: C3.Array<BundlerTestAppAmbiguousType | null> | Array<IBundlerTestAppAmbiguousType | null> | C3.Array<BundlerTestAppChart | null> | Array<IBundlerTestAppChart | null> | null): BundlerTestAppFieldTypeReact;

  readonly selfReferenceField?: BundlerTestAppComponent | null;
  withSelfReferenceField(selfReferenceField: IBundlerTestAppComponent | null): BundlerTestAppFieldTypeReact;

  readonly size?: string | null;
  withSize(size: string | null): BundlerTestAppFieldTypeReact;

  readonly referenceFieldWithoutDefault?: BundlerTestAppReferenceType | null;
  withReferenceFieldWithoutDefault(referenceFieldWithoutDefault: IBundlerTestAppReferenceType | null): BundlerTestAppFieldTypeReact;

  readonly referenceFieldWithDefault?: BundlerTestAppReferenceType | null;
  withReferenceFieldWithDefault(referenceFieldWithDefault: IBundlerTestAppReferenceType | null): BundlerTestAppFieldTypeReact;

  readonly referenceFieldWithSomeDefault?: BundlerTestAppReferenceType | null;
  withReferenceFieldWithSomeDefault(referenceFieldWithSomeDefault: IBundlerTestAppReferenceType | null): BundlerTestAppFieldTypeReact;

  readonly referenceFieldWithOverrideDefault?: BundlerTestAppReferenceType | null;
  withReferenceFieldWithOverrideDefault(referenceFieldWithOverrideDefault: IBundlerTestAppReferenceType | null): BundlerTestAppFieldTypeReact;
}

