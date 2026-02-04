export interface StudioTypeIcon {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioTypeIcon;

  readonly id?: string | null;
  withId(id: string | null): StudioTypeIcon;

  readonly name?: string | null;
  withName(name: string | null): StudioTypeIcon;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioTypeIcon;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioTypeIcon;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioTypeIcon;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioTypeIcon;

  readonly valueType?: ValueType | null;
  withValueType(valueType: IValueType | null): StudioTypeIcon;

  readonly isValueTypeTransformed?: boolean;
  withIsValueTypeTransformed(isValueTypeTransformed: boolean): StudioTypeIcon;
}

