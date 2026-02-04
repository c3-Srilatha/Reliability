export interface UiSdlDocumentationReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlDocumentationReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlDocumentationReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlDocumentationReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlDocumentationReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlDocumentationReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlDocumentationReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlDocumentationReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlDocumentationReact;

  readonly purpose?: string | null;
  withPurpose(purpose: string | null): UiSdlDocumentationReact;
}

