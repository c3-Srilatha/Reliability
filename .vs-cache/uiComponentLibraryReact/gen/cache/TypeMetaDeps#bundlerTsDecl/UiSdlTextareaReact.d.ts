export interface UiSdlTextareaReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlTextareaReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlTextareaReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlTextareaReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlTextareaReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTextareaReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlTextareaReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlTextareaReact;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlTextareaReact;

  readonly status?: string | null;
  withStatus(status: string | null): UiSdlTextareaReact;

  readonly width?: string | null;
  withWidth(width: string | null): UiSdlTextareaReact;

  readonly placeholder?: string | null | UiSdlDynamicValueSpec | null | null;
  withPlaceholder(placeholder: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTextareaReact;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlTextareaReact;

  readonly initialValue?: string | null | UiSdlDynamicValueSpec | null | null;
  withInitialValue(initialValue: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlTextareaReact;
}

