export interface UiSdlFormPageTest {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFormPageTest;

  readonly id?: string | null;
  withId(id: string | null): UiSdlFormPageTest;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFormPageTest;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlFormPageTest;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFormPageTest;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFormPageTest;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFormPageTest;

  readonly componentReferenceSelector?: string | null;
  withComponentReferenceSelector(componentReferenceSelector: string | null): UiSdlFormPageTest;

  readonly title?: string | null;
  withTitle(title: string | null): UiSdlFormPageTest;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlFormPageTest;
}

