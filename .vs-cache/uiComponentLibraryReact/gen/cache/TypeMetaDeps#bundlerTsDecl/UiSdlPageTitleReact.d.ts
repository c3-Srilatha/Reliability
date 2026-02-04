export interface UiSdlPageTitleReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlPageTitleReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlPageTitleReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlPageTitleReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): UiSdlPageTitleReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlPageTitleReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlPageTitleReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlPageTitleReact;

  readonly activeTab?: string | null;
  withActiveTab(activeTab: string | null): UiSdlPageTitleReact;

  readonly tabs?: C3.Array<UiSdlPageTab | null>;
  withTabs(tabs: C3.Array<UiSdlPageTab | null> | Array<IUiSdlPageTab | null>): UiSdlPageTitleReact;

  readonly defaultPageTitle?: string | null | UiSdlDynamicValueSpec | null | null;
  withDefaultPageTitle(defaultPageTitle: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlPageTitleReact;

  readonly title?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitle(title: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlPageTitleReact;

  readonly HTMLTitle?: string | null;
  withHTMLTitle(HTMLTitle: string | null): UiSdlPageTitleReact;

  readonly titleInfoTooltip?: string | null | UiSdlDynamicValueSpec | null | null;
  withTitleInfoTooltip(titleInfoTooltip: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlPageTitleReact;

  readonly actionGroup?: UiSdlPageTitleActionGroup | null;
  withActionGroup(actionGroup: IUiSdlPageTitleActionGroup | null): UiSdlPageTitleReact;

  readonly fixedPosition?: boolean;
  withFixedPosition(fixedPosition: boolean): UiSdlPageTitleReact;

  readonly globalInputField?: UiSdlComponentRef<UiSdlInputBase | null> | null;
  withGlobalInputField(globalInputField: IUiSdlComponentRef<UiSdlInputBase | null> | null): UiSdlPageTitleReact;

  readonly autoFill?: boolean;
  withAutoFill(autoFill: boolean): UiSdlPageTitleReact;
}

