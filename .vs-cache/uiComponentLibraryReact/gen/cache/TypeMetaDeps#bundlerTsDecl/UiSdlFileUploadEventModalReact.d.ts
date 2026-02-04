export interface UiSdlFileUploadEventModalReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFileUploadEventModalReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlFileUploadEventModalReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFileUploadEventModalReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlFileUploadEventModalReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFileUploadEventModalReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFileUploadEventModalReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFileUploadEventModalReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlFileUploadEventModalReact;

  readonly closeWithStackedModal?: boolean;
  withCloseWithStackedModal(closeWithStackedModal: boolean): UiSdlFileUploadEventModalReact;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlFileUploadEventModalReact;

  readonly open?: boolean;
  withOpen(open: boolean): UiSdlFileUploadEventModalReact;

  readonly header?: UiSdlModalHeaderConfig | null;
  withHeader(header: IUiSdlModalHeaderConfig | null): UiSdlFileUploadEventModalReact;

  readonly subHeader?: UiSdlModalSubHeaderConfig | null;
  withSubHeader(subHeader: IUiSdlModalSubHeaderConfig | null): UiSdlFileUploadEventModalReact;

  readonly showTopDivider?: boolean;
  withShowTopDivider(showTopDivider: boolean): UiSdlFileUploadEventModalReact;

  readonly showBottomDivider?: boolean;
  withShowBottomDivider(showBottomDivider: boolean): UiSdlFileUploadEventModalReact;

  readonly content?: UiSdlModalContentConfig | null;
  withContent(content: IUiSdlModalContentConfig | null): UiSdlFileUploadEventModalReact;

  readonly modalType?: UiSdlTwoButtonModal | null;
  withModalType(modalType: IUiSdlTwoButtonModal | null): UiSdlFileUploadEventModalReact;

  readonly disablePrimaryButton?: boolean;
  withDisablePrimaryButton(disablePrimaryButton: boolean): UiSdlFileUploadEventModalReact;

  readonly disableSecondaryButton?: boolean;
  withDisableSecondaryButton(disableSecondaryButton: boolean): UiSdlFileUploadEventModalReact;

  readonly disableTertiaryButton?: boolean;
  withDisableTertiaryButton(disableTertiaryButton: boolean): UiSdlFileUploadEventModalReact;

  readonly isLoadingPrimaryButton?: boolean;
  withIsLoadingPrimaryButton(isLoadingPrimaryButton: boolean): UiSdlFileUploadEventModalReact;

  readonly isLoadingSecondaryButton?: boolean;
  withIsLoadingSecondaryButton(isLoadingSecondaryButton: boolean): UiSdlFileUploadEventModalReact;

  readonly isLoadingTertiaryButton?: boolean;
  withIsLoadingTertiaryButton(isLoadingTertiaryButton: boolean): UiSdlFileUploadEventModalReact;

  readonly primaryButtonClickDebounce?: number | null;
  withPrimaryButtonClickDebounce(primaryButtonClickDebounce: number | null): UiSdlFileUploadEventModalReact;

  readonly secondaryButtonClickDebounce?: number | null;
  withSecondaryButtonClickDebounce(secondaryButtonClickDebounce: number | null): UiSdlFileUploadEventModalReact;

  readonly tertiaryButtonClickDebounce?: number | null;
  withTertiaryButtonClickDebounce(tertiaryButtonClickDebounce: number | null): UiSdlFileUploadEventModalReact;

  readonly uiFileUploadComponentId?: string | null;
  withUiFileUploadComponentId(uiFileUploadComponentId: string | null): UiSdlFileUploadEventModalReact;
}

