export interface UiSdlGroupedInput {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGroupedInput;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGroupedInput;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGroupedInput;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlGroupedInput;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGroupedInput;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGroupedInput;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGroupedInput;

  readonly action?: UiSdlActionGroup | null;
  withAction(action: IUiSdlActionGroup | null): UiSdlGroupedInput;

  readonly groupField: UiSdlFieldSettingNested;
  withGroupField(groupField: IUiSdlFieldSettingNested): UiSdlGroupedInput;

  readonly postfixGroupField?: UiSdlFieldSettingNested | null;
  withPostfixGroupField(postfixGroupField: IUiSdlFieldSettingNested | null): UiSdlGroupedInput;

  readonly widthRatioPercentage?: string | null;
  withWidthRatioPercentage(widthRatioPercentage: string | null): UiSdlGroupedInput;
}

