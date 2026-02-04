export interface UiSdlLayoutBaseReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlLayoutBaseReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlLayoutBaseReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlLayoutBaseReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlLayoutBaseReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlLayoutBaseReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlLayoutBaseReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlLayoutBaseReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlLayoutBaseReact;

  readonly dragAndDropEnabled?: boolean;
  withDragAndDropEnabled(dragAndDropEnabled: boolean): UiSdlLayoutBaseReact;
}

