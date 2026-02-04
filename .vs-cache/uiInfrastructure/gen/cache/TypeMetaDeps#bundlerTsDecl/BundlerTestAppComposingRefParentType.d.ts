export interface BundlerTestAppComposingRefParentType {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppComposingRefParentType;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppComposingRefParentType;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppComposingRefParentType;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppComposingRefParentType;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppComposingRefParentType;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppComposingRefParentType;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppComposingRefParentType;

  readonly content?: BundlerTestAppComposingRefChildType | null;
  withContent(content: IBundlerTestAppComposingRefChildType | null): BundlerTestAppComposingRefParentType;
}

