export interface FieldNameElementsList {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): FieldNameElementsList;

  readonly id?: string | null;
  withId(id: string | null): FieldNameElementsList;

  readonly name?: string | null;
  withName(name: string | null): FieldNameElementsList;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): FieldNameElementsList;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): FieldNameElementsList;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): FieldNameElementsList;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): FieldNameElementsList;

  readonly elements?: C3.Array<any | null>;
  withElements(elements: C3.Array<any | null> | Array<any | null>): FieldNameElementsList;

  readonly emptyConfig?: UiSdlAction | null;
  withEmptyConfig(emptyConfig: IUiSdlAction | null): FieldNameElementsList;

  readonly concatenate?: boolean;
  withConcatenate(concatenate: boolean): FieldNameElementsList;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): FieldNameElementsList;
}

