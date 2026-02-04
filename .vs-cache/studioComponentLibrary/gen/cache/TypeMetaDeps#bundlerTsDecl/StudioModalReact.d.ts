export interface StudioModalReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioModalReact;

  readonly id?: string | null;
  withId(id: string | null): StudioModalReact;

  readonly name?: string | null;
  withName(name: string | null): StudioModalReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioModalReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioModalReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioModalReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioModalReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): StudioModalReact;

  readonly closeWithStackedModal?: boolean;
  withCloseWithStackedModal(closeWithStackedModal: boolean): StudioModalReact;

  readonly size?: string | null;
  withSize(size: string | null): StudioModalReact;

  readonly open?: boolean;
  withOpen(open: boolean): StudioModalReact;

  readonly header?: UiSdlModalHeaderConfig | null;
  withHeader(header: IUiSdlModalHeaderConfig | null): StudioModalReact;

  readonly subHeader?: UiSdlModalSubHeaderConfig | null;
  withSubHeader(subHeader: IUiSdlModalSubHeaderConfig | null): StudioModalReact;

  readonly showTopDivider?: boolean;
  withShowTopDivider(showTopDivider: boolean): StudioModalReact;

  readonly showBottomDivider?: boolean;
  withShowBottomDivider(showBottomDivider: boolean): StudioModalReact;

  readonly content?: UiSdlModalContentConfig | null;
  withContent(content: IUiSdlModalContentConfig | null): StudioModalReact;

  readonly modalType?: UiSdlOneButtonModal | null | UiSdlTwoButtonModal | null | UiSdlThreeButtonModal | null | null;
  withModalType(modalType: IUiSdlOneButtonModal | null | IUiSdlTwoButtonModal | null | IUiSdlThreeButtonModal | null | null): StudioModalReact;

  readonly disablePrimaryButton?: boolean;
  withDisablePrimaryButton(disablePrimaryButton: boolean): StudioModalReact;

  readonly disableSecondaryButton?: boolean;
  withDisableSecondaryButton(disableSecondaryButton: boolean): StudioModalReact;

  readonly disableTertiaryButton?: boolean;
  withDisableTertiaryButton(disableTertiaryButton: boolean): StudioModalReact;

  readonly isLoadingPrimaryButton?: boolean;
  withIsLoadingPrimaryButton(isLoadingPrimaryButton: boolean): StudioModalReact;

  readonly isLoadingSecondaryButton?: boolean;
  withIsLoadingSecondaryButton(isLoadingSecondaryButton: boolean): StudioModalReact;

  readonly isLoadingTertiaryButton?: boolean;
  withIsLoadingTertiaryButton(isLoadingTertiaryButton: boolean): StudioModalReact;

  readonly primaryButtonClickDebounce?: number | null;
  withPrimaryButtonClickDebounce(primaryButtonClickDebounce: number | null): StudioModalReact;

  readonly secondaryButtonClickDebounce?: number | null;
  withSecondaryButtonClickDebounce(secondaryButtonClickDebounce: number | null): StudioModalReact;

  readonly tertiaryButtonClickDebounce?: number | null;
  withTertiaryButtonClickDebounce(tertiaryButtonClickDebounce: number | null): StudioModalReact;

  readonly disableDefaultScroll?: boolean;
  withDisableDefaultScroll(disableDefaultScroll: boolean): StudioModalReact;
}

