export interface UiSdlPageTitle {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlPageTitle;

  readonly id?: string | null;
  withId(id: string | null): UiSdlPageTitle;

  readonly name?: string | null;
  withName(name: string | null): UiSdlPageTitle;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlPageTitle;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlPageTitle;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlPageTitle;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlPageTitle;

  readonly activeTab?: string | null;
  withActiveTab(activeTab: string | null): UiSdlPageTitle;

  readonly tabs?: C3.Array<UiSdlPageTab | null>;
  withTabs(tabs: C3.Array<UiSdlPageTab | null> | Array<IUiSdlPageTab | null>): UiSdlPageTitle;

  readonly defaultPageTitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withDefaultPageTitle(defaultPageTitle: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlPageTitle;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlPageTitle;

  readonly HTMLTitle?: string | null;
  withHTMLTitle(HTMLTitle: string | null): UiSdlPageTitle;

  readonly titleInfoTooltip?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitleInfoTooltip(titleInfoTooltip: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlPageTitle;

  readonly actionGroup?: UiSdlPageTitleActionGroup | null;
  withActionGroup(actionGroup: IUiSdlPageTitleActionGroup | null): UiSdlPageTitle;

  readonly fixedPosition?: boolean;
  withFixedPosition(fixedPosition: boolean): UiSdlPageTitle;

  readonly globalInputField?: UiSdlComponentRef<UiSdlInputBase | null> | null;
  withGlobalInputField(globalInputField: IUiSdlComponentRef<UiSdlInputBase | null> | null): UiSdlPageTitle;

  readonly autoFill?: boolean;
  withAutoFill(autoFill: boolean): UiSdlPageTitle;
}

