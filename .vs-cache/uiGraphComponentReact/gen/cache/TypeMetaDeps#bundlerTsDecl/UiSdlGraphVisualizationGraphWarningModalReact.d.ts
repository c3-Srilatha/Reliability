export interface UiSdlGraphVisualizationGraphWarningModalReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly closeWithStackedModal?: boolean;
  withCloseWithStackedModal(closeWithStackedModal: boolean): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly open?: boolean;
  withOpen(open: boolean): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly header?: UiSdlModalHeaderConfig | null;
  withHeader(header: IUiSdlModalHeaderConfig | null): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly subHeader?: UiSdlModalSubHeaderConfig | null;
  withSubHeader(subHeader: IUiSdlModalSubHeaderConfig | null): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly showTopDivider?: boolean;
  withShowTopDivider(showTopDivider: boolean): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly showBottomDivider?: boolean;
  withShowBottomDivider(showBottomDivider: boolean): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly content?: UiSdlModalContentConfig | null;
  withContent(content: IUiSdlModalContentConfig | null): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly modalType?: UiSdlOneButtonModal | null | UiSdlTwoButtonModal | null | UiSdlThreeButtonModal | null | null;
  withModalType(modalType: IUiSdlOneButtonModal | null | IUiSdlTwoButtonModal | null | IUiSdlThreeButtonModal | null | null): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly disablePrimaryButton?: boolean;
  withDisablePrimaryButton(disablePrimaryButton: boolean): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly disableSecondaryButton?: boolean;
  withDisableSecondaryButton(disableSecondaryButton: boolean): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly disableTertiaryButton?: boolean;
  withDisableTertiaryButton(disableTertiaryButton: boolean): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly isLoadingPrimaryButton?: boolean;
  withIsLoadingPrimaryButton(isLoadingPrimaryButton: boolean): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly isLoadingSecondaryButton?: boolean;
  withIsLoadingSecondaryButton(isLoadingSecondaryButton: boolean): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly isLoadingTertiaryButton?: boolean;
  withIsLoadingTertiaryButton(isLoadingTertiaryButton: boolean): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly primaryButtonClickDebounce?: number | null;
  withPrimaryButtonClickDebounce(primaryButtonClickDebounce: number | null): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly secondaryButtonClickDebounce?: number | null;
  withSecondaryButtonClickDebounce(secondaryButtonClickDebounce: number | null): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly tertiaryButtonClickDebounce?: number | null;
  withTertiaryButtonClickDebounce(tertiaryButtonClickDebounce: number | null): UiSdlGraphVisualizationGraphWarningModalReact;

  readonly uiSdlGraphVisualizationComponentId?: string | null;
  withUiSdlGraphVisualizationComponentId(uiSdlGraphVisualizationComponentId: string | null): UiSdlGraphVisualizationGraphWarningModalReact;
}

