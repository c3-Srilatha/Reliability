export interface UiSdlTextarea {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlTextarea;

  readonly id?: string | null;
  withId(id: string | null): UiSdlTextarea;

  readonly name?: string | null;
  withName(name: string | null): UiSdlTextarea;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlTextarea;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTextarea;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlTextarea;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlTextarea;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlTextarea;

  readonly status?: string | null;
  withStatus(status: string | null): UiSdlTextarea;

  readonly width?: string | null;
  withWidth(width: string | null): UiSdlTextarea;

  readonly placeholder?: string | null | UiSdlDynamicValueSpec | null | null;
  withPlaceholder(placeholder: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTextarea;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlTextarea;

  readonly initialValue?: string | null | UiSdlDynamicValueSpec | null | null;
  withInitialValue(initialValue: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTextarea;
}

