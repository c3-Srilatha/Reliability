export interface UiSdlButtonReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlButtonReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlButtonReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlButtonReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlButtonReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlButtonReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlButtonReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlButtonReact;

  readonly clickDebounce?: number | null;
  withClickDebounce(clickDebounce: number | null): UiSdlButtonReact;

  readonly content?: string | null;
  withContent(content: string | null): UiSdlButtonReact;

  readonly usage?: string | null;
  withUsage(usage: string | null): UiSdlButtonReact;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlButtonReact;

  readonly loading?: boolean;
  withLoading(loading: boolean): UiSdlButtonReact;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlButtonReact;
}

