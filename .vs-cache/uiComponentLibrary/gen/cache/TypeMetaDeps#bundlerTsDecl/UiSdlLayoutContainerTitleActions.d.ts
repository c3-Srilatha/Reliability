export interface UiSdlLayoutContainerTitleActions {

  readonly tertiaryLink?: UiSdlLayoutContainerTertiaryLink | null;
  withTertiaryLink(tertiaryLink: IUiSdlLayoutContainerTertiaryLink | null): UiSdlLayoutContainerTitleActions;

  readonly iconButton?: C3.Array<UiSdlAction | null>;
  withIconButton(iconButton: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): UiSdlLayoutContainerTitleActions;
}

