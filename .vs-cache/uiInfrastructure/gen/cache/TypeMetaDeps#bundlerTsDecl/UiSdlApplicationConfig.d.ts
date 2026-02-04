export interface UiSdlApplicationConfig {

  readonly parent?: UiSdlConfig | null;
  withParent(parent: IUiSdlConfig | null): UiSdlApplicationConfig;
}

