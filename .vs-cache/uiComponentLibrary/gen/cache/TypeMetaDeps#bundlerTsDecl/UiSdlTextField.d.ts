export interface UiSdlTextField {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlTextField;

  readonly id?: string | null;
  withId(id: string | null): UiSdlTextField;

  readonly name?: string | null;
  withName(name: string | null): UiSdlTextField;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlTextField;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTextField;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlTextField;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlTextField;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlTextField;

  readonly status?: string | null;
  withStatus(status: string | null): UiSdlTextField;

  readonly width?: string | null;
  withWidth(width: string | null): UiSdlTextField;

  readonly placeholder?: string | null | UiSdlDynamicValueSpec | null | null;
  withPlaceholder(placeholder: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTextField;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlTextField;

  readonly initialValue?: string | null | UiSdlDynamicValueSpec | null | null;
  withInitialValue(initialValue: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTextField;
}

