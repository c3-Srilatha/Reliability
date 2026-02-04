export interface UiSdlTextFieldReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlTextFieldReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlTextFieldReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlTextFieldReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlTextFieldReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTextFieldReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlTextFieldReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlTextFieldReact;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlTextFieldReact;

  readonly status?: string | null;
  withStatus(status: string | null): UiSdlTextFieldReact;

  readonly width?: string | null;
  withWidth(width: string | null): UiSdlTextFieldReact;

  readonly placeholder?: string | null | UiSdlDynamicValueSpec | null | null;
  withPlaceholder(placeholder: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTextFieldReact;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlTextFieldReact;

  readonly initialValue?: string | null | UiSdlDynamicValueSpec | null | null;
  withInitialValue(initialValue: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTextFieldReact;
}

