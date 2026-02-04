export interface UiSdlButton {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlButton;

  readonly id?: string | null;
  withId(id: string | null): UiSdlButton;

  readonly name?: string | null;
  withName(name: string | null): UiSdlButton;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlButton;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlButton;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlButton;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlButton;

  readonly clickDebounce?: number | null;
  withClickDebounce(clickDebounce: number | null): UiSdlButton;

  readonly content?: string | null;
  withContent(content: string | null): UiSdlButton;

  readonly usage?: string | null;
  withUsage(usage: string | null): UiSdlButton;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlButton;

  readonly loading?: boolean;
  withLoading(loading: boolean): UiSdlButton;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlButton;
}

