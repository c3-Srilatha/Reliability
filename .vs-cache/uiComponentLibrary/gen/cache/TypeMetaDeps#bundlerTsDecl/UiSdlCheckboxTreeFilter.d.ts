export interface UiSdlCheckboxTreeFilter {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCheckboxTreeFilter;

  readonly id?: string | null;
  withId(id: string | null): UiSdlCheckboxTreeFilter;

  readonly name?: string | null;
  withName(name: string | null): UiSdlCheckboxTreeFilter;

  readonly dataSpec?: UiSdlCheckboxTreeDataSpec | null;
  withDataSpec(dataSpec: IUiSdlCheckboxTreeDataSpec | null): UiSdlCheckboxTreeFilter;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCheckboxTreeFilter;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCheckboxTreeFilter;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCheckboxTreeFilter;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlCheckboxTreeFilter;

  readonly nodes?: C3.Array<any | null>;
  withNodes(nodes: C3.Array<any | null> | Array<any | null>): UiSdlCheckboxTreeFilter;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlCheckboxTreeFilter;

  readonly expanded?: C3.Array<string | null>;
  withExpanded(expanded: C3.Array<string | null> | Array<string | null>): UiSdlCheckboxTreeFilter;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlCheckboxTreeFilter;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlCheckboxTreeFilter;
}

