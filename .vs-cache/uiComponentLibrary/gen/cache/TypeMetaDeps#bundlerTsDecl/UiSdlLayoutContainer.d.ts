export interface UiSdlLayoutContainer {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlLayoutContainer;

  readonly id?: string | null;
  withId(id: string | null): UiSdlLayoutContainer;

  readonly name?: string | null;
  withName(name: string | null): UiSdlLayoutContainer;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlLayoutContainer;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlLayoutContainer;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlLayoutContainer;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlLayoutContainer;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlLayoutContainer;

  readonly title?: UiSdlLayoutContainerTitle | null;
  withTitle(title: IUiSdlLayoutContainerTitle | null): UiSdlLayoutContainer;

  readonly wrapped?: boolean;
  withWrapped(wrapped: boolean): UiSdlLayoutContainer;

  readonly children?: C3.Array<C3.Array<UiSdlVariableWidthComponentRef | null>>;
  withChildren(children: C3.Array<C3.Array<UiSdlVariableWidthComponentRef | null>> | Array<C3.Array<UiSdlVariableWidthComponentRef | null> | Array<IUiSdlVariableWidthComponentRef | null>>): UiSdlLayoutContainer;
}

