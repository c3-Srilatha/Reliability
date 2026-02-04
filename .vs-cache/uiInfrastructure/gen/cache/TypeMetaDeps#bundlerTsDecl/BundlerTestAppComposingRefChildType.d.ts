export interface BundlerTestAppComposingRefChildType {

  readonly title?: string | null;
  withTitle(title: string | null): BundlerTestAppComposingRefChildType;

  readonly componentRef?: UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null;
  withComponentRef(componentRef: IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null): BundlerTestAppComposingRefChildType;
}

