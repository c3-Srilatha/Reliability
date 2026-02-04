export interface UiSdlNestedComponent {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlNestedComponent;

  readonly id?: string | null;
  withId(id: string | null): UiSdlNestedComponent;

  readonly name?: string | null;
  withName(name: string | null): UiSdlNestedComponent;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlNestedComponent;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlNestedComponent;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlNestedComponent;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlNestedComponent;

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlNestedComponent;

  readonly dataItem?: C3.Map<string | null, any>;
  withDataItem(dataItem: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlNestedComponent;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlNestedComponent;
}

