export interface UiSdlGraphVisualizationGraphWarningModal {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationGraphWarningModal;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationGraphWarningModal;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationGraphWarningModal;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlGraphVisualizationGraphWarningModal;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationGraphWarningModal;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationGraphWarningModal;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationGraphWarningModal;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlGraphVisualizationGraphWarningModal;

  readonly closeWithStackedModal?: boolean;
  withCloseWithStackedModal(closeWithStackedModal: boolean): UiSdlGraphVisualizationGraphWarningModal;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlGraphVisualizationGraphWarningModal;

  readonly open?: boolean;
  withOpen(open: boolean): UiSdlGraphVisualizationGraphWarningModal;

  readonly header?: UiSdlModalHeaderConfig | null;
  withHeader(header: IUiSdlModalHeaderConfig | null): UiSdlGraphVisualizationGraphWarningModal;

  readonly subHeader?: UiSdlModalSubHeaderConfig | null;
  withSubHeader(subHeader: IUiSdlModalSubHeaderConfig | null): UiSdlGraphVisualizationGraphWarningModal;

  readonly showTopDivider?: boolean;
  withShowTopDivider(showTopDivider: boolean): UiSdlGraphVisualizationGraphWarningModal;

  readonly showBottomDivider?: boolean;
  withShowBottomDivider(showBottomDivider: boolean): UiSdlGraphVisualizationGraphWarningModal;

  readonly content?: UiSdlModalContentConfig | null;
  withContent(content: IUiSdlModalContentConfig | null): UiSdlGraphVisualizationGraphWarningModal;

  readonly modalType?: UiSdlOneButtonModal | null | UiSdlTwoButtonModal | null | UiSdlThreeButtonModal | null | null;
  withModalType(modalType: IUiSdlOneButtonModal | null | IUiSdlTwoButtonModal | null | IUiSdlThreeButtonModal | null | null): UiSdlGraphVisualizationGraphWarningModal;

  readonly disablePrimaryButton?: boolean;
  withDisablePrimaryButton(disablePrimaryButton: boolean): UiSdlGraphVisualizationGraphWarningModal;

  readonly disableSecondaryButton?: boolean;
  withDisableSecondaryButton(disableSecondaryButton: boolean): UiSdlGraphVisualizationGraphWarningModal;

  readonly disableTertiaryButton?: boolean;
  withDisableTertiaryButton(disableTertiaryButton: boolean): UiSdlGraphVisualizationGraphWarningModal;

  readonly isLoadingPrimaryButton?: boolean;
  withIsLoadingPrimaryButton(isLoadingPrimaryButton: boolean): UiSdlGraphVisualizationGraphWarningModal;

  readonly isLoadingSecondaryButton?: boolean;
  withIsLoadingSecondaryButton(isLoadingSecondaryButton: boolean): UiSdlGraphVisualizationGraphWarningModal;

  readonly isLoadingTertiaryButton?: boolean;
  withIsLoadingTertiaryButton(isLoadingTertiaryButton: boolean): UiSdlGraphVisualizationGraphWarningModal;

  readonly primaryButtonClickDebounce?: number | null;
  withPrimaryButtonClickDebounce(primaryButtonClickDebounce: number | null): UiSdlGraphVisualizationGraphWarningModal;

  readonly secondaryButtonClickDebounce?: number | null;
  withSecondaryButtonClickDebounce(secondaryButtonClickDebounce: number | null): UiSdlGraphVisualizationGraphWarningModal;

  readonly tertiaryButtonClickDebounce?: number | null;
  withTertiaryButtonClickDebounce(tertiaryButtonClickDebounce: number | null): UiSdlGraphVisualizationGraphWarningModal;

  readonly uiSdlGraphVisualizationComponentId?: string | null;
  withUiSdlGraphVisualizationComponentId(uiSdlGraphVisualizationComponentId: string | null): UiSdlGraphVisualizationGraphWarningModal;
}

