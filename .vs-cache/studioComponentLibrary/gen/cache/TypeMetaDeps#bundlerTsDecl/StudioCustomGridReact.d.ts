export interface StudioCustomGridReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioCustomGridReact;

  readonly id?: string | null;
  withId(id: string | null): StudioCustomGridReact;

  readonly name?: string | null;
  withName(name: string | null): StudioCustomGridReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioCustomGridReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioCustomGridReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioCustomGridReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioCustomGridReact;

  readonly content?: C3.Array<any | null>;
  withContent(content: C3.Array<any | null> | Array<any | null>): StudioCustomGridReact;
}

