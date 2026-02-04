export interface BundlerTestAppNestedType {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppNestedType;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppNestedType;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppNestedType;

  readonly dataSpec?: BundlerTestAppNestedTypeDataSpec | null;
  withDataSpec(dataSpec: IBundlerTestAppNestedTypeDataSpec | null): BundlerTestAppNestedType;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppNestedType;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppNestedType;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppNestedType;

  readonly referenceField?: BundlerTestAppAmbiguousType | null;
  withReferenceField(referenceField: IBundlerTestAppAmbiguousType | null): BundlerTestAppNestedType;

  readonly referenceField2?: BundlerTestAppReferenceType | null;
  withReferenceField2(referenceField2: IBundlerTestAppReferenceType | null): BundlerTestAppNestedType;
}

