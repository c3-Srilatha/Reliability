export interface UiSdlFormPageTestReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFormPageTestReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlFormPageTestReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFormPageTestReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlFormPageTestReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFormPageTestReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFormPageTestReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFormPageTestReact;

  readonly componentReferenceSelector?: string | null;
  withComponentReferenceSelector(componentReferenceSelector: string | null): UiSdlFormPageTestReact;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlFormPageTestReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlFormPageTestReact;
}

