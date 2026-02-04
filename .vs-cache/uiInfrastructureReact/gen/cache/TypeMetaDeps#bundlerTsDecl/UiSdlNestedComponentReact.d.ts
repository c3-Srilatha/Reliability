export interface UiSdlNestedComponentReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlNestedComponentReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlNestedComponentReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlNestedComponentReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlNestedComponentReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlNestedComponentReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlNestedComponentReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlNestedComponentReact;

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlNestedComponentReact;

  readonly dataItem?: C3.Map<string | null, any>;
  withDataItem(dataItem: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlNestedComponentReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlNestedComponentReact;
}

