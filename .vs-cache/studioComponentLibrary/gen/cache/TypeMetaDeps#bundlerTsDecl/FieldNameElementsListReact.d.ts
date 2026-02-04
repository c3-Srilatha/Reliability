export interface FieldNameElementsListReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): FieldNameElementsListReact;

  readonly id?: string | null;
  withId(id: string | null): FieldNameElementsListReact;

  readonly name?: string | null;
  withName(name: string | null): FieldNameElementsListReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): FieldNameElementsListReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): FieldNameElementsListReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): FieldNameElementsListReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): FieldNameElementsListReact;

  readonly elements?: C3.Array<any | null>;
  withElements(elements: C3.Array<any | null> | Array<any | null>): FieldNameElementsListReact;

  readonly emptyConfig?: UiSdlAction | null;
  withEmptyConfig(emptyConfig: IUiSdlAction | null): FieldNameElementsListReact;

  readonly concatenate?: boolean;
  withConcatenate(concatenate: boolean): FieldNameElementsListReact;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): FieldNameElementsListReact;
}

