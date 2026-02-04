export interface UiSdlFieldGroupReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlFieldGroupReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlFieldGroupReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFieldGroupReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlFieldGroupReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlFieldGroupReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlFieldGroupReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlFieldGroupReact;

  readonly fieldGroupFields?: C3.Array<UiSdlFieldSetFormFieldSetting | null>;
  withFieldGroupFields(fieldGroupFields: C3.Array<UiSdlFieldSetFormFieldSetting | null> | Array<IUiSdlFieldSetFormFieldSetting | null>): UiSdlFieldGroupReact;

  readonly widthRatio?: C3.Array<number | null>;
  withWidthRatio(widthRatio: C3.Array<number | null> | Array<number | null>): UiSdlFieldGroupReact;
}

