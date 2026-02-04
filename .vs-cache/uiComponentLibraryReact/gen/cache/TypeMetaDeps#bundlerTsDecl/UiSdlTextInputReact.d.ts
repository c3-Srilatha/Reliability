export interface UiSdlTextInputReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlTextInputReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlTextInputReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlTextInputReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlTextInputReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTextInputReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlTextInputReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlTextInputReact;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlTextInputReact;

  readonly value?: any;
  withValue(value: any): UiSdlTextInputReact;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlTextInputReact;

  readonly debounceTime?: number | null;
  withDebounceTime(debounceTime: number | null): UiSdlTextInputReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlTextInputReact;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlTextInputReact;

  readonly appendedTag?: string | null;
  withAppendedTag(appendedTag: string | null): UiSdlTextInputReact;

  readonly confirmable?: boolean;
  withConfirmable(confirmable: boolean): UiSdlTextInputReact;
}

