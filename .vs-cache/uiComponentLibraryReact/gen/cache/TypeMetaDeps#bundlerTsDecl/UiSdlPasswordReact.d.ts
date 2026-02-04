export interface UiSdlPasswordReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlPasswordReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlPasswordReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlPasswordReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlPasswordReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlPasswordReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlPasswordReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlPasswordReact;

  readonly appendedIcon?: any;
  withAppendedIcon(appendedIcon: any): UiSdlPasswordReact;

  readonly field?: string | null;
  withField(field: string | null): UiSdlPasswordReact;

  readonly hintLink?: any | null;
  withHintLink(hintLink: any | null): UiSdlPasswordReact;

  readonly inputProps?: any;
  withInputProps(inputProps: any): UiSdlPasswordReact;

  readonly placeholder?: string | null;
  withPlaceholder(placeholder: string | null): UiSdlPasswordReact;

  readonly prependedIcon?: any;
  withPrependedIcon(prependedIcon: any): UiSdlPasswordReact;

  readonly value?: string | null;
  withValue(value: string | null): UiSdlPasswordReact;

  readonly fluid?: boolean;
  withFluid(fluid: boolean): UiSdlPasswordReact;
}

