export interface UiSdlCheckboxTreeFilterReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCheckboxTreeFilterReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlCheckboxTreeFilterReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlCheckboxTreeFilterReact;

  readonly dataSpec?: UiSdlCheckboxTreeDataSpec | null;
  withDataSpec(dataSpec: IUiSdlCheckboxTreeDataSpec | null): UiSdlCheckboxTreeFilterReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCheckboxTreeFilterReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCheckboxTreeFilterReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCheckboxTreeFilterReact;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlCheckboxTreeFilterReact;

  readonly nodes?: C3.Array<any | null>;
  withNodes(nodes: C3.Array<any | null> | Array<any | null>): UiSdlCheckboxTreeFilterReact;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlCheckboxTreeFilterReact;

  readonly expanded?: C3.Array<string | null>;
  withExpanded(expanded: C3.Array<string | null> | Array<string | null>): UiSdlCheckboxTreeFilterReact;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlCheckboxTreeFilterReact;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlCheckboxTreeFilterReact;
}

