export interface UiSdlPageTitleTimezoneReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlPageTitleTimezoneReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlPageTitleTimezoneReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlPageTitleTimezoneReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlPageTitleTimezoneReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlPageTitleTimezoneReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlPageTitleTimezoneReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlPageTitleTimezoneReact;

  readonly activeTab?: string | null;
  withActiveTab(activeTab: string | null): UiSdlPageTitleTimezoneReact;

  readonly tabs?: C3.Array<UiSdlPageTab | null>;
  withTabs(tabs: C3.Array<UiSdlPageTab | null> | Array<IUiSdlPageTab | null>): UiSdlPageTitleTimezoneReact;

  readonly defaultPageTitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withDefaultPageTitle(defaultPageTitle: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlPageTitleTimezoneReact;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlPageTitleTimezoneReact;

  readonly HTMLTitle?: string | null;
  withHTMLTitle(HTMLTitle: string | null): UiSdlPageTitleTimezoneReact;

  readonly titleInfoTooltip?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitleInfoTooltip(titleInfoTooltip: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlPageTitleTimezoneReact;

  readonly actionGroup?: UiSdlPageTitleActionGroup | null;
  withActionGroup(actionGroup: IUiSdlPageTitleActionGroup | null): UiSdlPageTitleTimezoneReact;

  readonly fixedPosition?: boolean;
  withFixedPosition(fixedPosition: boolean): UiSdlPageTitleTimezoneReact;

  readonly globalInputField?: UiSdlComponentRef<UiSdlInputBase | null> | null;
  withGlobalInputField(globalInputField: IUiSdlComponentRef<UiSdlInputBase | null> | null): UiSdlPageTitleTimezoneReact;

  readonly autoFill?: boolean;
  withAutoFill(autoFill: boolean): UiSdlPageTitleTimezoneReact;
}

