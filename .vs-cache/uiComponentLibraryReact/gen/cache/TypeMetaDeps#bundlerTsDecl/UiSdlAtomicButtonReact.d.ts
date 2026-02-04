export interface UiSdlAtomicButtonReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlAtomicButtonReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlAtomicButtonReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlAtomicButtonReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlAtomicButtonReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlAtomicButtonReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlAtomicButtonReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlAtomicButtonReact;

  readonly textContent?: string | null;
  withTextContent(textContent: string | null): UiSdlAtomicButtonReact;

  readonly leftIcon?: string | null;
  withLeftIcon(leftIcon: string | null): UiSdlAtomicButtonReact;

  readonly rightIcon?: string | null;
  withRightIcon(rightIcon: string | null): UiSdlAtomicButtonReact;

  readonly variant?: string | null;
  withVariant(variant: string | null): UiSdlAtomicButtonReact;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlAtomicButtonReact;

  readonly buttonType?: string | null;
  withButtonType(buttonType: string | null): UiSdlAtomicButtonReact;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlAtomicButtonReact;

  readonly loading?: boolean;
  withLoading(loading: boolean): UiSdlAtomicButtonReact;

  readonly textStyle?: string | null;
  withTextStyle(textStyle: string | null): UiSdlAtomicButtonReact;
}

