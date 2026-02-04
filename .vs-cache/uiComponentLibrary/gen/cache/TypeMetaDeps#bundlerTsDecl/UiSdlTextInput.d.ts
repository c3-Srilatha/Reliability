export interface UiSdlTextInput {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlTextInput;

  readonly id?: string | null;
  withId(id: string | null): UiSdlTextInput;

  readonly name?: string | null;
  withName(name: string | null): UiSdlTextInput;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlTextInput;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlTextInput;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlTextInput;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlTextInput;

  readonly submittable?: boolean;
  withSubmittable(submittable: boolean): UiSdlTextInput;

  readonly value?: any;
  withValue(value: any): UiSdlTextInput;

  readonly invalid?: boolean;
  withInvalid(invalid: boolean): UiSdlTextInput;

  readonly debounceTime?: number | null;
  withDebounceTime(debounceTime: number | null): UiSdlTextInput;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlTextInput;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlTextInput;

  readonly appendedTag?: string | null;
  withAppendedTag(appendedTag: string | null): UiSdlTextInput;

  readonly confirmable?: boolean;
  withConfirmable(confirmable: boolean): UiSdlTextInput;
}

