export interface UiSdlDynamicComponentMetadata {

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null | UiSdlConnected<UiSdlComponent | null> | null | UiSdlComponent<any> | null | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null | UiSdlConnected<UiSdlComponent | null> | null | UiSdlComponent<any> | null | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null | IUiSdlConnected<UiSdlComponent | null> | null | IUiSdlComponent<any> | null | null>): UiSdlDynamicComponentMetadata;

  readonly componentRefs?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null | UiSdlConnected<UiSdlComponent | null> | null | UiSdlComponent<any> | null | null>;
  withComponentRefs(componentRefs: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null | UiSdlConnected<UiSdlComponent | null> | null | UiSdlComponent<any> | null | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null | IUiSdlConnected<UiSdlComponent | null> | null | IUiSdlComponent<any> | null | null>): UiSdlDynamicComponentMetadata;
}

