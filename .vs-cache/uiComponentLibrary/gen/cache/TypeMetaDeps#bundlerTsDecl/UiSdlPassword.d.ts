export interface UiSdlPassword {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlPassword;

  readonly id?: string | null;
  withId(id: string | null): UiSdlPassword;

  readonly name?: string | null;
  withName(name: string | null): UiSdlPassword;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlPassword;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlPassword;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlPassword;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlPassword;

  readonly appendedIcon?: any;
  withAppendedIcon(appendedIcon: any): UiSdlPassword;

  readonly field?: string | null;
  withField(field: string | null): UiSdlPassword;

  readonly hintLink?: any | null;
  withHintLink(hintLink: any | null): UiSdlPassword;

  readonly inputProps?: any;
  withInputProps(inputProps: any): UiSdlPassword;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlPassword;

  readonly prependedIcon?: any;
  withPrependedIcon(prependedIcon: any): UiSdlPassword;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlPassword;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlPassword;
}

