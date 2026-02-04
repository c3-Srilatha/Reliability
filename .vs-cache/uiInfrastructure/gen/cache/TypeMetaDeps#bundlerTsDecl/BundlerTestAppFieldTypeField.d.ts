export interface BundlerTestAppFieldTypeField {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppFieldTypeField;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppFieldTypeField;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppFieldTypeField;

  readonly dataSpec?: BundlerTestAppDeepNestedComponentDataSpec | null;
  withDataSpec(dataSpec: IBundlerTestAppDeepNestedComponentDataSpec | null): BundlerTestAppFieldTypeField;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppFieldTypeField;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppFieldTypeField;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppFieldTypeField;

  readonly fieldA?: BundlerTestAppNestedType | null;
  withFieldA(fieldA: IBundlerTestAppNestedType | null): BundlerTestAppFieldTypeField;
}

