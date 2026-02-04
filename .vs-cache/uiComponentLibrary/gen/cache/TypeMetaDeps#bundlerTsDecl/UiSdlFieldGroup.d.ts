export interface UiSdlFieldGroup {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFieldGroup;

  readonly id?: string | null;
  withId(id: string | null): UiSdlFieldGroup;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFieldGroup;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlFieldGroup;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFieldGroup;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFieldGroup;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFieldGroup;

  readonly fieldGroupFields?: C3.Array<UiSdlFieldSetFormFieldSetting | null>;
  withFieldGroupFields(fieldGroupFields: C3.Array<UiSdlFieldSetFormFieldSetting | null> | Array<IUiSdlFieldSetFormFieldSetting | null>): UiSdlFieldGroup;

  readonly widthRatio?: C3.Array<number | null>;
  withWidthRatio(widthRatio: C3.Array<number | null> | Array<number | null>): UiSdlFieldGroup;
}

