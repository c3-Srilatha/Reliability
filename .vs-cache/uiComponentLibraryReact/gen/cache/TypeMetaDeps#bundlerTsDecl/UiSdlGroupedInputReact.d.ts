export interface UiSdlGroupedInputReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGroupedInputReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGroupedInputReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGroupedInputReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlGroupedInputReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGroupedInputReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGroupedInputReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGroupedInputReact;

  readonly action?: UiSdlActionGroup | null;
  withAction(action: IUiSdlActionGroup | null): UiSdlGroupedInputReact;

  readonly groupField: UiSdlFieldSettingNested;
  withGroupField(groupField: IUiSdlFieldSettingNested): UiSdlGroupedInputReact;

  readonly postfixGroupField?: UiSdlFieldSettingNested | null;
  withPostfixGroupField(postfixGroupField: IUiSdlFieldSettingNested | null): UiSdlGroupedInputReact;

  readonly widthRatioPercentage?: string | null;
  withWidthRatioPercentage(widthRatioPercentage: string | null): UiSdlGroupedInputReact;
}

