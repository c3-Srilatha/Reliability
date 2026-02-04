export interface UiSdlLayoutContainerTitle {

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlLayoutContainerTitle;

  readonly hoverDescription?: string | null;
  withHoverDescription(hoverDescription: string | null): UiSdlLayoutContainerTitle;

  readonly actionButtons?: UiSdlLayoutContainerTitleActions | null;
  withActionButtons(actionButtons: IUiSdlLayoutContainerTitleActions | null): UiSdlLayoutContainerTitle;
}

