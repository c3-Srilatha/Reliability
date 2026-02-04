export interface UiSdlLayoutContainerReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlLayoutContainerReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlLayoutContainerReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlLayoutContainerReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlLayoutContainerReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlLayoutContainerReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlLayoutContainerReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlLayoutContainerReact;

  readonly subtitle?: string | null;
  withSubtitle(subtitle: string | null): UiSdlLayoutContainerReact;

  readonly title?: UiSdlLayoutContainerTitle | null;
  withTitle(title: IUiSdlLayoutContainerTitle | null): UiSdlLayoutContainerReact;

  readonly wrapped?: boolean;
  withWrapped(wrapped: boolean): UiSdlLayoutContainerReact;

  readonly children?: C3.Array<C3.Array<UiSdlVariableWidthComponentRef | null>>;
  withChildren(children: C3.Array<C3.Array<UiSdlVariableWidthComponentRef | null>> | Array<C3.Array<UiSdlVariableWidthComponentRef | null> | Array<IUiSdlVariableWidthComponentRef | null>>): UiSdlLayoutContainerReact;
}

