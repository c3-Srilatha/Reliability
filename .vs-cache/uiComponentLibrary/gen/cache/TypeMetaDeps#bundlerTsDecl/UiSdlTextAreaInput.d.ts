export interface UiSdlTextAreaInput {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlTextAreaInput;

  readonly id?: string | null;
  withId(id: string | null): UiSdlTextAreaInput;

  readonly name?: string | null;
  withName(name: string | null): UiSdlTextAreaInput;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlTextAreaInput;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTextAreaInput;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlTextAreaInput;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlTextAreaInput;

  readonly debounceTime?: number | null;
  withDebounceTime(debounceTime: number | null): UiSdlTextAreaInput;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlTextAreaInput;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlTextAreaInput;
}

