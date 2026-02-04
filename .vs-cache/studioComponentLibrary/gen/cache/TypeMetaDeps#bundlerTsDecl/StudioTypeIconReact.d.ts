export interface StudioTypeIconReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioTypeIconReact;

  readonly id?: string | null;
  withId(id: string | null): StudioTypeIconReact;

  readonly name?: string | null;
  withName(name: string | null): StudioTypeIconReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioTypeIconReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioTypeIconReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioTypeIconReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioTypeIconReact;

  readonly valueType?: ValueType | null;
  withValueType(valueType: IValueType | null): StudioTypeIconReact;

  readonly isValueTypeTransformed?: boolean;
  withIsValueTypeTransformed(isValueTypeTransformed: boolean): StudioTypeIconReact;
}

