export interface WithNotifications {

  readonly componentNotifications?: C3.Array<UiSdlInlineNotification | null>;
  withComponentNotifications(componentNotifications: C3.Array<UiSdlInlineNotification | null> | Array<IUiSdlInlineNotification | null>): WithNotifications;
}

