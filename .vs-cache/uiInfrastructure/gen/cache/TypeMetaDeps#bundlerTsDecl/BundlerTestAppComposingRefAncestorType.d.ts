export interface BundlerTestAppComposingRefAncestorType {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppComposingRefAncestorType;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppComposingRefAncestorType;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppComposingRefAncestorType;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppComposingRefAncestorType;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppComposingRefAncestorType;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppComposingRefAncestorType;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppComposingRefAncestorType;

  readonly content?: BundlerTestAppComposingRefParentType | null;
  withContent(content: IBundlerTestAppComposingRefParentType | null): BundlerTestAppComposingRefAncestorType;
}

