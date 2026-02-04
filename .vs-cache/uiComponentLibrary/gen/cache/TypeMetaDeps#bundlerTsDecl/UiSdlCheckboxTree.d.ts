export interface UiSdlCheckboxTree {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCheckboxTree;

  readonly id?: string | null;
  withId(id: string | null): UiSdlCheckboxTree;

  readonly name?: string | null;
  withName(name: string | null): UiSdlCheckboxTree;

  readonly dataSpec?: UiSdlCheckboxTreeDataSpec | null;
  withDataSpec(dataSpec: IUiSdlCheckboxTreeDataSpec | null): UiSdlCheckboxTree;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCheckboxTree;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCheckboxTree;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCheckboxTree;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlCheckboxTree;

  readonly nodes?: C3.Array<any | null>;
  withNodes(nodes: C3.Array<any | null> | Array<any | null>): UiSdlCheckboxTree;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlCheckboxTree;

  readonly expanded?: C3.Array<string | null>;
  withExpanded(expanded: C3.Array<string | null> | Array<string | null>): UiSdlCheckboxTree;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlCheckboxTree;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlCheckboxTree;
}

