export interface BundlerTestAppComposingRefParentTypeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): BundlerTestAppComposingRefParentTypeReact;

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppComposingRefParentTypeReact;

  readonly name?: string | null;
  withName(name: string | null): BundlerTestAppComposingRefParentTypeReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): BundlerTestAppComposingRefParentTypeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): BundlerTestAppComposingRefParentTypeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): BundlerTestAppComposingRefParentTypeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): BundlerTestAppComposingRefParentTypeReact;

  readonly content?: BundlerTestAppComposingRefChildType | null;
  withContent(content: IBundlerTestAppComposingRefChildType | null): BundlerTestAppComposingRefParentTypeReact;
}

