export interface UiSdlCheckboxTreeReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlCheckboxTreeReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlCheckboxTreeReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlCheckboxTreeReact;

  readonly dataSpec?: UiSdlCheckboxTreeDataSpec | null;
  withDataSpec(dataSpec: IUiSdlCheckboxTreeDataSpec | null): UiSdlCheckboxTreeReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlCheckboxTreeReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlCheckboxTreeReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlCheckboxTreeReact;

  readonly options?: C3.Array<any | null>;
  withOptions(options: C3.Array<any | null> | Array<any | null>): UiSdlCheckboxTreeReact;

  readonly nodes?: C3.Array<any | null>;
  withNodes(nodes: C3.Array<any | null> | Array<any | null>): UiSdlCheckboxTreeReact;

  readonly clear?: boolean;
  withClear(clear: boolean): UiSdlCheckboxTreeReact;

  readonly expanded?: C3.Array<string | null>;
  withExpanded(expanded: C3.Array<string | null> | Array<string | null>): UiSdlCheckboxTreeReact;

  readonly displayField?: string | null;
  withDisplayField(displayField: string | null): UiSdlCheckboxTreeReact;

  readonly valueField?: string | null;
  withValueField(valueField: string | null): UiSdlCheckboxTreeReact;
}

