export interface TestNodeWithButton {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): TestNodeWithButton;

  readonly id?: string | null;
  withId(id: string | null): TestNodeWithButton;

  readonly name?: string | null;
  withName(name: string | null): TestNodeWithButton;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): TestNodeWithButton;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): TestNodeWithButton;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): TestNodeWithButton;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): TestNodeWithButton;

  readonly clickDebounce?: number | null;
  withClickDebounce(clickDebounce: number | null): TestNodeWithButton;

  readonly content?: string | null;
  withContent(content: string | null): TestNodeWithButton;

  readonly usage?: string | null;
  withUsage(usage: string | null): TestNodeWithButton;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): TestNodeWithButton;

  readonly loading?: boolean;
  withLoading(loading: boolean): TestNodeWithButton;

  readonly size?: string | null;
  withSize(size: string | null): TestNodeWithButton;

  readonly BUTTON_CLICK_SUFFIX?: string | null;
  withBUTTON_CLICK_SUFFIX(BUTTON_CLICK_SUFFIX: string | null): TestNodeWithButton;

  readonly clickCount?: number | null;
  withClickCount(clickCount: number | null): TestNodeWithButton;
}

