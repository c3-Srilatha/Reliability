export interface BundlerTestAppFieldType {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppFieldType;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppFieldType;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppFieldType;

  readonly dataSpec?: BundlerTestAppDeepNestedComponentDataSpec | null;
  withDataSpec(dataSpec: IBundlerTestAppDeepNestedComponentDataSpec | null): BundlerTestAppFieldType;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppFieldType;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppFieldType;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppFieldType;

  readonly fieldA?: BundlerTestAppNestedType | null;
  withFieldA(fieldA: IBundlerTestAppNestedType | null): BundlerTestAppFieldType;

  readonly fieldX?: any | null;
  withFieldX(fieldX: any | null): BundlerTestAppFieldType;
}

