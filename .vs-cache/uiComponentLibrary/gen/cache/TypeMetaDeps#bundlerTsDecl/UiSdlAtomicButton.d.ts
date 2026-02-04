export interface UiSdlAtomicButton {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlAtomicButton;

  readonly id?: string | null;
  withId(id: string | null): UiSdlAtomicButton;

  readonly name?: string | null;
  withName(name: string | null): UiSdlAtomicButton;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlAtomicButton;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlAtomicButton;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlAtomicButton;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlAtomicButton;

  readonly textContent?: string | null;
  withTextContent(textContent: string | null): UiSdlAtomicButton;

  readonly leftIcon?: string | null;
  withLeftIcon(leftIcon: string | null): UiSdlAtomicButton;

  readonly rightIcon?: string | null;
  withRightIcon(rightIcon: string | null): UiSdlAtomicButton;

  readonly variant?: string | null;
  withVariant(variant: string | null): UiSdlAtomicButton;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlAtomicButton;

  readonly buttonType?: string | null;
  withButtonType(buttonType: string | null): UiSdlAtomicButton;

  readonly disabled?: boolean;
  withDisabled(disabled: boolean): UiSdlAtomicButton;

  readonly loading?: boolean;
  withLoading(loading: boolean): UiSdlAtomicButton;

  readonly textStyle?: string | null;
  withTextStyle(textStyle: string | null): UiSdlAtomicButton;
}

