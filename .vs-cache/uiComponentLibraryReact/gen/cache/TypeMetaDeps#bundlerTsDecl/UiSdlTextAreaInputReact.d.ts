export interface UiSdlTextAreaInputReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlTextAreaInputReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlTextAreaInputReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlTextAreaInputReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlTextAreaInputReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTextAreaInputReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlTextAreaInputReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlTextAreaInputReact;

  readonly debounceTime?: number | null;
  withDebounceTime(debounceTime: number | null): UiSdlTextAreaInputReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlTextAreaInputReact;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlTextAreaInputReact;
}

