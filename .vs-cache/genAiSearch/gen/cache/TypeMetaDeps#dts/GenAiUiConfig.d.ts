// TypeScript definitions for the C3 type GenAiUiConfig

/**
 * General configurations for UI components.
 *
 * @remarks this represents a value passed to a method that expects an instance of GenAiUiConfig
 */
declare interface IGenAiUiConfig {

  configOverride?: string;

  secretOverride?: string;

  /**
   * Captures any issues that occurred while deserializing from filesystem
   */
  issues?: Array_Type<string> | Array<string>;

  /**
   * Display name to use to refer to the app the in the UI.
   */
  appDisplayName: string;

  /**
   * Banner title to display in the UI.
   * Notice the banner will only render if an image is configured for it in {@link Genai.LogoImages.Config#banner}
   */
  bannerTitle?: string;

  /**
   * Subtitle to display in the UI.
   * Notice the banner will only render if an image is configured for it in {@link Genai.LogoImages.Config#banner}
   */
  bannerSubTitle?: string;

  /**
   * How much of the rationale should be displayed in the summary card.
   * GENAI-1989 Prefer this field to be boolean
   */
  rationaleVisibility: string;

  /**
   * Whether the {@link Genai.Query.Result}s should be lazily rendered in the UI.
   * False if multi-hop is enabled, otherwise true.
   * This is computed in the getUiConfig function.
   */
  lazyLoadResults: boolean;

  /**
   * How to render search query history, which appears in the UI as a list of suggestions under the search input.
   * - By default ("user"), each user will only see their own search query history. Note: if a user enters a query that
   *   was previously entered by another user, they will still see the cached result from the previous search.
   * - If set to "all", admin users (with the "Genai.AdminUser" role) are able to see search history from all users.
   *   Non-admin users, will still only be able to see their own search history, per `dataPermissions` on the
   *   "Genai.Common" {@link Role}.
   * - If set to "none", search query history will not be displayed for any users.
   */
  queryHistoryVisibility: string;

  /**
   * Whether the button that allows query tool selection should be rendered next to the search input.
   * - By default ("full"), the button will be rendered if and only if the list of
   *   {@link Genai.Agent.Config#uiSelectableTools} has more than one option. If that list of tools is empty or only
   *   has one option, the button will never be rendered. When rendered, an additional "All Search" option will be
   *   prepended to that list, allowing all tools to be considered when running a query (e.g., the orchestrator will
   *   take over).
   * - If set to "hidden", the button will never be rendered.
   * - If set to "hideAllOption", the button will be rendered, but the "All Search" option will not be prepended to the
   *   list of tools. This is useful when the users should be making a conscious decision around which tool to use.
   */
  queryToolSelectorVisibility: string;

  /**
   * The default option to select in the query tool selector.
   * - By default (`"ALL"`), _and_ if and only if #queryToolSelectorVisibility is set to `"full"`, the default
   *   option will be set to "All Search".
   * - Alternatively, this can be set to a specific {@link Genai.Agent.Tool.Config#id} within the list of
   *   {@link Genai.Agent.Config#uiSelectableTools} to set a different default.
   * - If #queryToolSelectorVisibility is set to `"hidden"` _or_ if the list of
   *   {@link Genai.Agent.Config#uiSelectableTools} is empty, this field will be ignored.
   * - If #queryToolSelectorVisibility is set to "hideAllOption" and this field is set to "ALL", the UI will
   *   default to the first tool in the list of {@link Genai.Agent.Config#uiSelectableTools}.
   */
  queryToolSelectorDefaultOption: string;

  /**
   * Whether the Filter Bar should be rendered in the Search Results page.
   * - By default ("full"), the filter bar will be rendered.
   * - If set to "hidden", the filter bar will not be rendered.
   * - If set to "disabled", the filter bar will be rendered but will not be interactive. This is not recommended at
   *   the config level (you probably just want to use "hidden" instead), but is technically supported and used within
   *   {@link Genai.Agent.Tool.Config.UiOptions#featureFlags}.
   */
  searchFilterBarVisibility: string;

  /**
   * Whether the relevance score should be rendered in the search results grid.
   */
  scoreVisibility: string;

  /**
   * Whether the metadata tags should be rendered in the search results grid.
   */
  tagsVisibility: string;

  /**
   * Whether the metadata tags tab panel should be rendered in the Documents admin page.
   */
  tagsPageVisibility: string;

  /**
   * Whether the Credentials and LLMs pages (Settings menu) should be rendered in the UI.
   */
  llmPageVisibility: string;

  /**
   * Whether the multi tool Response Container should be rendered in the UI.
   * - By default ("combined"), the sources from each tool will be combined in the UI
   * - If set to "tabs", the response from each tool will be rendered in separate tabs
   */
  multiToolResponseVisibility?: string;

  /**
   * Whether the GenAiUi.Chatbox should be rendered in the UI.
   */
  hideChatBox: boolean;

  /**
   * File types that will not be clickable in the search results grid
   */
  suppressedFileTypes?: Array_Type<string> | Array<string>;

  /**
   * Array of visualization modes to render in the UI. Possible values are:
   * - `"grid"`: renders the results in a grid
   * - `"defaultVisualization"`: renders the results in the default visualization (chart)
   *
   * The default mode rendered will be the first one in the array (ie: `["grid", "defaultVisualization"]` will render the grid by default)
   * Notice that rendering only `"grid"` will always work, but rendering only `"defaultVisualization"` will only work if the data can be
   * plotted in a chart. This is not always true, and therefore it is recommended to add `"grid"` as a fallback for users to access the data.
   */
  allowedVisualizationModes?: Array_Type<string> | Array<string>;

  /**
   * Determines whether to allow multiple tool selection in the dropdown
   */
  allowMultipleToolSelection: boolean;

  /**
   * Url to redirect to on the prompts to "Contact Sales". If no value is specified, then the button will not be rendered.
   */
  contactSalesUrl?: string;

  /**
   * Url to redirect to on the prompts to "Contact Customer Support". If no value is specified, then the button will not be rendered.
   */
  contactCustomerSupportUrl?: string;

  /**
   * Whether the UI should show access to the interactive onboarding tutorial (Pendo)
   */
  generalTutorialVisibility: string;

  /**
   * If defined, the Help modal will show a link to this video that will open in a new tab.
   */
  generalOnboardingVideoUrl?: string;

  /**
   * Whether lazy loading for interactive visualizations should be avoided. In that case, visualizations will load in memory regardless of their position with respect to the viewport.
   */
  interactiveVisualizationDoNotLazyLoad: boolean;

  /**
   * Scroll offset for the visualization to start loading. A value of 0 means the visualization will load only when it is visible on the screen; a value of X px means the
   * visualization will load X px before it is visible on the screen.
   */
  interactiveVisualizationLoadingOffset?: string;

  /**
   * Minimum height of the visualization container. This is used to prevent the visualization from collapsing when it is not visible on the screen.
   */
  interactiveVisualizationMinHeight: string;

  /**
   * Defines the method the app will use to sync the UI with the changes in Data Sources to render the banner prompting the user to "Sync" the model.
   * This is defined by {@link Genai.App.State#dataModelState}
   * - If set to "client", the app will detect the change in Data Sources through SDL Redux actions. This approach is the recommended one, as it works
   * both in MNEs and SNEs.
   * - If set to "server", the app will trigger a package listener in the backend. This listener detects changes on the Data Sources and then the UI
   * detects them through the polled data model state. This approach is recommended for development, but not recommended for MNEs.
   */
  appDataModelSyncStrategy: string;

  /**
   * Whether to show suggested queries after a search. If enabled, polling will continue after
   * a query has completed generating an answer, and the suggested queries will be displayed.
   * Notice that the polling that happens after the query result has an answer only fetches the
   * suggestedFollowUpQueries, reducing workload.
   */
  suggestedFollowUpQueriesVisibility: string;

  /**
   * The default tool or agent to use to answer suggested follow up queries.
   * - By default, the suggested queries will be routed to the default Dynamic Agent.
   * - Alternatively, a different agent can be used by setting this config to the name of the agent. The agent must be active for the
   *   query orchestrator used as a handler.
   * - Also, this can be set to a specific {@link Genai.Agent.Tool.Config#toolName} within the list of
   *   {@link Genai.Agent.Config#uiSelectableTools} to set a different default. If the tool is not available, the query will be routed to the one
   *  selected in the query tool selector.
   */
  suggestedFollowUpQueryDefaultTool: string;

  /**
   * Determines the formatting method the X axis on {@link GenAiUiChart} will follow.
   * - By default ("default"), the axis will render normally and automatically hide labels as needed to accommodate for space.
   * - All the other options will force all labels to be rendered regardless of space:
   *    - If set to "all", the labels will be rendered side by side.
   *    - If set to "staggered", the labels will be rendered in a staggered manner (alternating top and bottom).
   *    - If set to "diagonal", the labels will be rendered at a diagonal.
   */
  visualizationXAxisLabelStrategy: string;

  /**
   * Determines whether or not to use truncation on the labels of the X axis on {@link GenAiUiChart}.
   */
  visualizationXAxisLabelTruncation: boolean;

  /**
   * Only works when #visualizationXAxisLabelTruncation is true.
   * Determines the width at which the labels of the X axis on {@link GenAiUiChart} will be truncated.
   */
  visualizationXAxisLabelMaxWidth?: number;

  /**
   * Determines the possible page sizes for the grid in the {@link GenAiUiVisualizationContainer}.
   */
  visualizationGridPageSizes?: Array_Type<number> | Array<number>;

  /**
   * Whether the corroboration components should be rendered in the {@link GenAiUiSummaryCard}}.
   */
  attributionVisibility: string;

  /**
   * Whether to use the feed interface for search results.
   */
  viewMode: string;

  /**
   * Whether to show the planners in the query tool options.
   */
  showPlanners: boolean;

  /**
   * Whether to render the query result output with markdown for dynamic agent.
   */
  renderStringOutputWithMarkdown: boolean;

  /**
   * Whether to remove cited sources (like [#1]) when copying the answer text to clipboard with copy button.
   */
  removeCitationsFromCopiedAnswer: boolean;

  /**
   * Target to use for the anchors in the Summary AI Card.
   * - By default ("_blank"), the anchor will open in a new tab.
   */
  anchorTarget?: string;

  /**
   * Whether the Theme Toggle should be rendered in the NavMenu.
   */
  themeToggleVisibility: string;

  /**
   * Number of seeded queries that should be shown as suggestions in the home page.
   * If set to 0, no seeded queries will be shown.
   */
  seededQueriesLimit?: number;

  /**
   * Category of the seeded queries that should be shown as suggestions in the home page.
   */
  seededQueriesCategory?: string;

  /**
   * Whether the Help button should be rendered in the side navigation bar.
   */
  helpButtonVisibility: string;

  /**
   * Url to redirect to when users click on the Help button on the side navigation bar.
   */
  helpGuideUrl?: string;

  /**
   * Whether the feed results should not be loaded in a lazy way. If set to true, results
   * will be loaded at all times, even if they are not visible in the viewport.
   */
  feedResultsDoNotLazyLoad?: boolean;

  /**
   * Scroll offset for the feed results to start loading. A value of 0 means the results will load only when
   * they are visible on the screen; a value of X px means the
   * results will load X px before they are visible on the screen.
   */
  feedResultsLoadingOffset: string;

  /**
   * Minimum height of the feed results container. This is used to prevent the feed results from collapsing
   * when they are not visible on the screen.
   */
  feedResultsMinHeight: string;

  /**
   * Maximum number of results for which resources and visualization data should be persisted in the
   * application state. This is used to limit the memory usage of the application and the cleanup follows
   * a LRU strategy.
   */
  feedMaxResultsInState: number;

  /**
   * Dynamic Agent shows the plan and solution step on UI. This config controls whether the execute or the
   * code summary step should be shown as part of the response.
   */
  showExecuteSummaryStep: boolean;
}

/**
 * General configurations for UI components.
 *
 * @remarks this represents a made instance of GenAiUiConfig
 */
declare class GenAiUiConfig extends Obj  {

  readonly configOverride?: string;
  withConfigOverride(configOverride: string | null): GenAiUiConfig;

  static readonly configOverride?: string;

  readonly secretOverride?: string;
  withSecretOverride(secretOverride: string | null): GenAiUiConfig;

  static readonly secretOverride?: string;

  /**
   * Captures any issues that occurred while deserializing from filesystem
   */
  readonly issues?: Array_Type<string>;
  withIssues(issues: Array_Type<string> | Array<string> | null): GenAiUiConfig;

  /**
   * Captures any issues that occurred while deserializing from filesystem
   */
  static readonly issues?: Array_Type<string>;

  /**
   * Display name to use to refer to the app the in the UI.
   */
  readonly appDisplayName: string;
  withAppDisplayName(appDisplayName: string): GenAiUiConfig;

  /**
   * Display name to use to refer to the app the in the UI.
   */
  static readonly appDisplayName: string;

  /**
   * Banner title to display in the UI.
   * Notice the banner will only render if an image is configured for it in {@link Genai.LogoImages.Config#banner}
   */
  readonly bannerTitle?: string;
  withBannerTitle(bannerTitle: string | null): GenAiUiConfig;

  /**
   * Banner title to display in the UI.
   * Notice the banner will only render if an image is configured for it in {@link Genai.LogoImages.Config#banner}
   */
  static readonly bannerTitle?: string;

  /**
   * Subtitle to display in the UI.
   * Notice the banner will only render if an image is configured for it in {@link Genai.LogoImages.Config#banner}
   */
  readonly bannerSubTitle?: string;
  withBannerSubTitle(bannerSubTitle: string | null): GenAiUiConfig;

  /**
   * Subtitle to display in the UI.
   * Notice the banner will only render if an image is configured for it in {@link Genai.LogoImages.Config#banner}
   */
  static readonly bannerSubTitle?: string;

  /**
   * How much of the rationale should be displayed in the summary card.
   * GENAI-1989 Prefer this field to be boolean
   */
  readonly rationaleVisibility: string;
  withRationaleVisibility(rationaleVisibility: string): GenAiUiConfig;

  /**
   * How much of the rationale should be displayed in the summary card.
   * GENAI-1989 Prefer this field to be boolean
   */
  static readonly rationaleVisibility: string;

  /**
   * Whether the {@link Genai.Query.Result}s should be lazily rendered in the UI.
   * False if multi-hop is enabled, otherwise true.
   * This is computed in the getUiConfig function.
   */
  readonly lazyLoadResults: boolean;
  withLazyLoadResults(lazyLoadResults: boolean): GenAiUiConfig;

  /**
   * Whether the {@link Genai.Query.Result}s should be lazily rendered in the UI.
   * False if multi-hop is enabled, otherwise true.
   * This is computed in the getUiConfig function.
   */
  static readonly lazyLoadResults: boolean;

  /**
   * How to render search query history, which appears in the UI as a list of suggestions under the search input.
   * - By default ("user"), each user will only see their own search query history. Note: if a user enters a query that
   *   was previously entered by another user, they will still see the cached result from the previous search.
   * - If set to "all", admin users (with the "Genai.AdminUser" role) are able to see search history from all users.
   *   Non-admin users, will still only be able to see their own search history, per `dataPermissions` on the
   *   "Genai.Common" {@link Role}.
   * - If set to "none", search query history will not be displayed for any users.
   */
  readonly queryHistoryVisibility: string;
  withQueryHistoryVisibility(queryHistoryVisibility: string): GenAiUiConfig;

  /**
   * How to render search query history, which appears in the UI as a list of suggestions under the search input.
   * - By default ("user"), each user will only see their own search query history. Note: if a user enters a query that
   *   was previously entered by another user, they will still see the cached result from the previous search.
   * - If set to "all", admin users (with the "Genai.AdminUser" role) are able to see search history from all users.
   *   Non-admin users, will still only be able to see their own search history, per `dataPermissions` on the
   *   "Genai.Common" {@link Role}.
   * - If set to "none", search query history will not be displayed for any users.
   */
  static readonly queryHistoryVisibility: string;

  /**
   * Whether the button that allows query tool selection should be rendered next to the search input.
   * - By default ("full"), the button will be rendered if and only if the list of
   *   {@link Genai.Agent.Config#uiSelectableTools} has more than one option. If that list of tools is empty or only
   *   has one option, the button will never be rendered. When rendered, an additional "All Search" option will be
   *   prepended to that list, allowing all tools to be considered when running a query (e.g., the orchestrator will
   *   take over).
   * - If set to "hidden", the button will never be rendered.
   * - If set to "hideAllOption", the button will be rendered, but the "All Search" option will not be prepended to the
   *   list of tools. This is useful when the users should be making a conscious decision around which tool to use.
   */
  readonly queryToolSelectorVisibility: string;
  withQueryToolSelectorVisibility(queryToolSelectorVisibility: string): GenAiUiConfig;

  /**
   * Whether the button that allows query tool selection should be rendered next to the search input.
   * - By default ("full"), the button will be rendered if and only if the list of
   *   {@link Genai.Agent.Config#uiSelectableTools} has more than one option. If that list of tools is empty or only
   *   has one option, the button will never be rendered. When rendered, an additional "All Search" option will be
   *   prepended to that list, allowing all tools to be considered when running a query (e.g., the orchestrator will
   *   take over).
   * - If set to "hidden", the button will never be rendered.
   * - If set to "hideAllOption", the button will be rendered, but the "All Search" option will not be prepended to the
   *   list of tools. This is useful when the users should be making a conscious decision around which tool to use.
   */
  static readonly queryToolSelectorVisibility: string;

  /**
   * The default option to select in the query tool selector.
   * - By default (`"ALL"`), _and_ if and only if #queryToolSelectorVisibility is set to `"full"`, the default
   *   option will be set to "All Search".
   * - Alternatively, this can be set to a specific {@link Genai.Agent.Tool.Config#id} within the list of
   *   {@link Genai.Agent.Config#uiSelectableTools} to set a different default.
   * - If #queryToolSelectorVisibility is set to `"hidden"` _or_ if the list of
   *   {@link Genai.Agent.Config#uiSelectableTools} is empty, this field will be ignored.
   * - If #queryToolSelectorVisibility is set to "hideAllOption" and this field is set to "ALL", the UI will
   *   default to the first tool in the list of {@link Genai.Agent.Config#uiSelectableTools}.
   */
  readonly queryToolSelectorDefaultOption: string;
  withQueryToolSelectorDefaultOption(queryToolSelectorDefaultOption: string): GenAiUiConfig;

  /**
   * The default option to select in the query tool selector.
   * - By default (`"ALL"`), _and_ if and only if #queryToolSelectorVisibility is set to `"full"`, the default
   *   option will be set to "All Search".
   * - Alternatively, this can be set to a specific {@link Genai.Agent.Tool.Config#id} within the list of
   *   {@link Genai.Agent.Config#uiSelectableTools} to set a different default.
   * - If #queryToolSelectorVisibility is set to `"hidden"` _or_ if the list of
   *   {@link Genai.Agent.Config#uiSelectableTools} is empty, this field will be ignored.
   * - If #queryToolSelectorVisibility is set to "hideAllOption" and this field is set to "ALL", the UI will
   *   default to the first tool in the list of {@link Genai.Agent.Config#uiSelectableTools}.
   */
  static readonly queryToolSelectorDefaultOption: string;

  /**
   * Whether the Filter Bar should be rendered in the Search Results page.
   * - By default ("full"), the filter bar will be rendered.
   * - If set to "hidden", the filter bar will not be rendered.
   * - If set to "disabled", the filter bar will be rendered but will not be interactive. This is not recommended at
   *   the config level (you probably just want to use "hidden" instead), but is technically supported and used within
   *   {@link Genai.Agent.Tool.Config.UiOptions#featureFlags}.
   */
  readonly searchFilterBarVisibility: string;
  withSearchFilterBarVisibility(searchFilterBarVisibility: string): GenAiUiConfig;

  /**
   * Whether the Filter Bar should be rendered in the Search Results page.
   * - By default ("full"), the filter bar will be rendered.
   * - If set to "hidden", the filter bar will not be rendered.
   * - If set to "disabled", the filter bar will be rendered but will not be interactive. This is not recommended at
   *   the config level (you probably just want to use "hidden" instead), but is technically supported and used within
   *   {@link Genai.Agent.Tool.Config.UiOptions#featureFlags}.
   */
  static readonly searchFilterBarVisibility: string;

  /**
   * Whether the relevance score should be rendered in the search results grid.
   */
  readonly scoreVisibility: string;
  withScoreVisibility(scoreVisibility: string): GenAiUiConfig;

  /**
   * Whether the relevance score should be rendered in the search results grid.
   */
  static readonly scoreVisibility: string;

  /**
   * Whether the metadata tags should be rendered in the search results grid.
   */
  readonly tagsVisibility: string;
  withTagsVisibility(tagsVisibility: string): GenAiUiConfig;

  /**
   * Whether the metadata tags should be rendered in the search results grid.
   */
  static readonly tagsVisibility: string;

  /**
   * Whether the metadata tags tab panel should be rendered in the Documents admin page.
   */
  readonly tagsPageVisibility: string;
  withTagsPageVisibility(tagsPageVisibility: string): GenAiUiConfig;

  /**
   * Whether the metadata tags tab panel should be rendered in the Documents admin page.
   */
  static readonly tagsPageVisibility: string;

  /**
   * Whether the Credentials and LLMs pages (Settings menu) should be rendered in the UI.
   */
  readonly llmPageVisibility: string;
  withLlmPageVisibility(llmPageVisibility: string): GenAiUiConfig;

  /**
   * Whether the Credentials and LLMs pages (Settings menu) should be rendered in the UI.
   */
  static readonly llmPageVisibility: string;

  /**
   * Whether the multi tool Response Container should be rendered in the UI.
   * - By default ("combined"), the sources from each tool will be combined in the UI
   * - If set to "tabs", the response from each tool will be rendered in separate tabs
   */
  readonly multiToolResponseVisibility?: string;
  withMultiToolResponseVisibility(multiToolResponseVisibility: string | null): GenAiUiConfig;

  /**
   * Whether the multi tool Response Container should be rendered in the UI.
   * - By default ("combined"), the sources from each tool will be combined in the UI
   * - If set to "tabs", the response from each tool will be rendered in separate tabs
   */
  static readonly multiToolResponseVisibility?: string;

  /**
   * Whether the GenAiUi.Chatbox should be rendered in the UI.
   */
  readonly hideChatBox: boolean;
  withHideChatBox(hideChatBox: boolean): GenAiUiConfig;

  /**
   * Whether the GenAiUi.Chatbox should be rendered in the UI.
   */
  static readonly hideChatBox: boolean;

  /**
   * File types that will not be clickable in the search results grid
   */
  readonly suppressedFileTypes?: Array_Type<string>;
  withSuppressedFileTypes(suppressedFileTypes: Array_Type<string> | Array<string> | null): GenAiUiConfig;

  /**
   * File types that will not be clickable in the search results grid
   */
  static readonly suppressedFileTypes?: Array_Type<string>;

  /**
   * Array of visualization modes to render in the UI. Possible values are:
   * - `"grid"`: renders the results in a grid
   * - `"defaultVisualization"`: renders the results in the default visualization (chart)
   *
   * The default mode rendered will be the first one in the array (ie: `["grid", "defaultVisualization"]` will render the grid by default)
   * Notice that rendering only `"grid"` will always work, but rendering only `"defaultVisualization"` will only work if the data can be
   * plotted in a chart. This is not always true, and therefore it is recommended to add `"grid"` as a fallback for users to access the data.
   */
  readonly allowedVisualizationModes?: Array_Type<string>;
  withAllowedVisualizationModes(allowedVisualizationModes: Array_Type<string> | Array<string> | null): GenAiUiConfig;

  /**
   * Array of visualization modes to render in the UI. Possible values are:
   * - `"grid"`: renders the results in a grid
   * - `"defaultVisualization"`: renders the results in the default visualization (chart)
   *
   * The default mode rendered will be the first one in the array (ie: `["grid", "defaultVisualization"]` will render the grid by default)
   * Notice that rendering only `"grid"` will always work, but rendering only `"defaultVisualization"` will only work if the data can be
   * plotted in a chart. This is not always true, and therefore it is recommended to add `"grid"` as a fallback for users to access the data.
   */
  static readonly allowedVisualizationModes?: Array_Type<string>;

  /**
   * Determines whether to allow multiple tool selection in the dropdown
   */
  readonly allowMultipleToolSelection: boolean;
  withAllowMultipleToolSelection(allowMultipleToolSelection: boolean): GenAiUiConfig;

  /**
   * Determines whether to allow multiple tool selection in the dropdown
   */
  static readonly allowMultipleToolSelection: boolean;

  /**
   * Url to redirect to on the prompts to "Contact Sales". If no value is specified, then the button will not be rendered.
   */
  readonly contactSalesUrl?: string;
  withContactSalesUrl(contactSalesUrl: string | null): GenAiUiConfig;

  /**
   * Url to redirect to on the prompts to "Contact Sales". If no value is specified, then the button will not be rendered.
   */
  static readonly contactSalesUrl?: string;

  /**
   * Url to redirect to on the prompts to "Contact Customer Support". If no value is specified, then the button will not be rendered.
   */
  readonly contactCustomerSupportUrl?: string;
  withContactCustomerSupportUrl(contactCustomerSupportUrl: string | null): GenAiUiConfig;

  /**
   * Url to redirect to on the prompts to "Contact Customer Support". If no value is specified, then the button will not be rendered.
   */
  static readonly contactCustomerSupportUrl?: string;

  /**
   * Whether the UI should show access to the interactive onboarding tutorial (Pendo)
   */
  readonly generalTutorialVisibility: string;
  withGeneralTutorialVisibility(generalTutorialVisibility: string): GenAiUiConfig;

  /**
   * Whether the UI should show access to the interactive onboarding tutorial (Pendo)
   */
  static readonly generalTutorialVisibility: string;

  /**
   * If defined, the Help modal will show a link to this video that will open in a new tab.
   */
  readonly generalOnboardingVideoUrl?: string;
  withGeneralOnboardingVideoUrl(generalOnboardingVideoUrl: string | null): GenAiUiConfig;

  /**
   * If defined, the Help modal will show a link to this video that will open in a new tab.
   */
  static readonly generalOnboardingVideoUrl?: string;

  /**
   * Whether lazy loading for interactive visualizations should be avoided. In that case, visualizations will load in memory regardless of their position with respect to the viewport.
   */
  readonly interactiveVisualizationDoNotLazyLoad: boolean;
  withInteractiveVisualizationDoNotLazyLoad(interactiveVisualizationDoNotLazyLoad: boolean): GenAiUiConfig;

  /**
   * Whether lazy loading for interactive visualizations should be avoided. In that case, visualizations will load in memory regardless of their position with respect to the viewport.
   */
  static readonly interactiveVisualizationDoNotLazyLoad: boolean;

  /**
   * Scroll offset for the visualization to start loading. A value of 0 means the visualization will load only when it is visible on the screen; a value of X px means the
   * visualization will load X px before it is visible on the screen.
   */
  readonly interactiveVisualizationLoadingOffset?: string;
  withInteractiveVisualizationLoadingOffset(interactiveVisualizationLoadingOffset: string | null): GenAiUiConfig;

  /**
   * Scroll offset for the visualization to start loading. A value of 0 means the visualization will load only when it is visible on the screen; a value of X px means the
   * visualization will load X px before it is visible on the screen.
   */
  static readonly interactiveVisualizationLoadingOffset?: string;

  /**
   * Minimum height of the visualization container. This is used to prevent the visualization from collapsing when it is not visible on the screen.
   */
  readonly interactiveVisualizationMinHeight: string;
  withInteractiveVisualizationMinHeight(interactiveVisualizationMinHeight: string): GenAiUiConfig;

  /**
   * Minimum height of the visualization container. This is used to prevent the visualization from collapsing when it is not visible on the screen.
   */
  static readonly interactiveVisualizationMinHeight: string;

  /**
   * Defines the method the app will use to sync the UI with the changes in Data Sources to render the banner prompting the user to "Sync" the model.
   * This is defined by {@link Genai.App.State#dataModelState}
   * - If set to "client", the app will detect the change in Data Sources through SDL Redux actions. This approach is the recommended one, as it works
   * both in MNEs and SNEs.
   * - If set to "server", the app will trigger a package listener in the backend. This listener detects changes on the Data Sources and then the UI
   * detects them through the polled data model state. This approach is recommended for development, but not recommended for MNEs.
   */
  readonly appDataModelSyncStrategy: string;
  withAppDataModelSyncStrategy(appDataModelSyncStrategy: string): GenAiUiConfig;

  /**
   * Defines the method the app will use to sync the UI with the changes in Data Sources to render the banner prompting the user to "Sync" the model.
   * This is defined by {@link Genai.App.State#dataModelState}
   * - If set to "client", the app will detect the change in Data Sources through SDL Redux actions. This approach is the recommended one, as it works
   * both in MNEs and SNEs.
   * - If set to "server", the app will trigger a package listener in the backend. This listener detects changes on the Data Sources and then the UI
   * detects them through the polled data model state. This approach is recommended for development, but not recommended for MNEs.
   */
  static readonly appDataModelSyncStrategy: string;

  /**
   * Whether to show suggested queries after a search. If enabled, polling will continue after
   * a query has completed generating an answer, and the suggested queries will be displayed.
   * Notice that the polling that happens after the query result has an answer only fetches the
   * suggestedFollowUpQueries, reducing workload.
   */
  readonly suggestedFollowUpQueriesVisibility: string;
  withSuggestedFollowUpQueriesVisibility(suggestedFollowUpQueriesVisibility: string): GenAiUiConfig;

  /**
   * Whether to show suggested queries after a search. If enabled, polling will continue after
   * a query has completed generating an answer, and the suggested queries will be displayed.
   * Notice that the polling that happens after the query result has an answer only fetches the
   * suggestedFollowUpQueries, reducing workload.
   */
  static readonly suggestedFollowUpQueriesVisibility: string;

  /**
   * The default tool or agent to use to answer suggested follow up queries.
   * - By default, the suggested queries will be routed to the default Dynamic Agent.
   * - Alternatively, a different agent can be used by setting this config to the name of the agent. The agent must be active for the
   *   query orchestrator used as a handler.
   * - Also, this can be set to a specific {@link Genai.Agent.Tool.Config#toolName} within the list of
   *   {@link Genai.Agent.Config#uiSelectableTools} to set a different default. If the tool is not available, the query will be routed to the one
   *  selected in the query tool selector.
   */
  readonly suggestedFollowUpQueryDefaultTool: string;
  withSuggestedFollowUpQueryDefaultTool(suggestedFollowUpQueryDefaultTool: string): GenAiUiConfig;

  /**
   * The default tool or agent to use to answer suggested follow up queries.
   * - By default, the suggested queries will be routed to the default Dynamic Agent.
   * - Alternatively, a different agent can be used by setting this config to the name of the agent. The agent must be active for the
   *   query orchestrator used as a handler.
   * - Also, this can be set to a specific {@link Genai.Agent.Tool.Config#toolName} within the list of
   *   {@link Genai.Agent.Config#uiSelectableTools} to set a different default. If the tool is not available, the query will be routed to the one
   *  selected in the query tool selector.
   */
  static readonly suggestedFollowUpQueryDefaultTool: string;

  /**
   * Determines the formatting method the X axis on {@link GenAiUiChart} will follow.
   * - By default ("default"), the axis will render normally and automatically hide labels as needed to accommodate for space.
   * - All the other options will force all labels to be rendered regardless of space:
   *    - If set to "all", the labels will be rendered side by side.
   *    - If set to "staggered", the labels will be rendered in a staggered manner (alternating top and bottom).
   *    - If set to "diagonal", the labels will be rendered at a diagonal.
   */
  readonly visualizationXAxisLabelStrategy: string;
  withVisualizationXAxisLabelStrategy(visualizationXAxisLabelStrategy: string): GenAiUiConfig;

  /**
   * Determines the formatting method the X axis on {@link GenAiUiChart} will follow.
   * - By default ("default"), the axis will render normally and automatically hide labels as needed to accommodate for space.
   * - All the other options will force all labels to be rendered regardless of space:
   *    - If set to "all", the labels will be rendered side by side.
   *    - If set to "staggered", the labels will be rendered in a staggered manner (alternating top and bottom).
   *    - If set to "diagonal", the labels will be rendered at a diagonal.
   */
  static readonly visualizationXAxisLabelStrategy: string;

  /**
   * Determines whether or not to use truncation on the labels of the X axis on {@link GenAiUiChart}.
   */
  readonly visualizationXAxisLabelTruncation: boolean;
  withVisualizationXAxisLabelTruncation(visualizationXAxisLabelTruncation: boolean): GenAiUiConfig;

  /**
   * Determines whether or not to use truncation on the labels of the X axis on {@link GenAiUiChart}.
   */
  static readonly visualizationXAxisLabelTruncation: boolean;

  /**
   * Only works when #visualizationXAxisLabelTruncation is true.
   * Determines the width at which the labels of the X axis on {@link GenAiUiChart} will be truncated.
   */
  readonly visualizationXAxisLabelMaxWidth?: number;
  withVisualizationXAxisLabelMaxWidth(visualizationXAxisLabelMaxWidth: number | null): GenAiUiConfig;

  /**
   * Only works when #visualizationXAxisLabelTruncation is true.
   * Determines the width at which the labels of the X axis on {@link GenAiUiChart} will be truncated.
   */
  static readonly visualizationXAxisLabelMaxWidth?: number;

  /**
   * Determines the possible page sizes for the grid in the {@link GenAiUiVisualizationContainer}.
   */
  readonly visualizationGridPageSizes?: Array_Type<number>;
  withVisualizationGridPageSizes(visualizationGridPageSizes: Array_Type<number> | Array<number> | null): GenAiUiConfig;

  /**
   * Determines the possible page sizes for the grid in the {@link GenAiUiVisualizationContainer}.
   */
  static readonly visualizationGridPageSizes?: Array_Type<number>;

  /**
   * Whether the corroboration components should be rendered in the {@link GenAiUiSummaryCard}}.
   */
  readonly attributionVisibility: string;
  withAttributionVisibility(attributionVisibility: string): GenAiUiConfig;

  /**
   * Whether the corroboration components should be rendered in the {@link GenAiUiSummaryCard}}.
   */
  static readonly attributionVisibility: string;

  /**
   * Whether to use the feed interface for search results.
   */
  readonly viewMode: string;
  withViewMode(viewMode: string): GenAiUiConfig;

  /**
   * Whether to use the feed interface for search results.
   */
  static readonly viewMode: string;

  /**
   * Whether to show the planners in the query tool options.
   */
  readonly showPlanners: boolean;
  withShowPlanners(showPlanners: boolean): GenAiUiConfig;

  /**
   * Whether to show the planners in the query tool options.
   */
  static readonly showPlanners: boolean;

  /**
   * Whether to render the query result output with markdown for dynamic agent.
   */
  readonly renderStringOutputWithMarkdown: boolean;
  withRenderStringOutputWithMarkdown(renderStringOutputWithMarkdown: boolean): GenAiUiConfig;

  /**
   * Whether to render the query result output with markdown for dynamic agent.
   */
  static readonly renderStringOutputWithMarkdown: boolean;

  /**
   * Whether to remove cited sources (like [#1]) when copying the answer text to clipboard with copy button.
   */
  readonly removeCitationsFromCopiedAnswer: boolean;
  withRemoveCitationsFromCopiedAnswer(removeCitationsFromCopiedAnswer: boolean): GenAiUiConfig;

  /**
   * Whether to remove cited sources (like [#1]) when copying the answer text to clipboard with copy button.
   */
  static readonly removeCitationsFromCopiedAnswer: boolean;

  /**
   * Target to use for the anchors in the Summary AI Card.
   * - By default ("_blank"), the anchor will open in a new tab.
   */
  readonly anchorTarget?: string;
  withAnchorTarget(anchorTarget: string | null): GenAiUiConfig;

  /**
   * Target to use for the anchors in the Summary AI Card.
   * - By default ("_blank"), the anchor will open in a new tab.
   */
  static readonly anchorTarget?: string;

  /**
   * Whether the Theme Toggle should be rendered in the NavMenu.
   */
  readonly themeToggleVisibility: string;
  withThemeToggleVisibility(themeToggleVisibility: string): GenAiUiConfig;

  /**
   * Whether the Theme Toggle should be rendered in the NavMenu.
   */
  static readonly themeToggleVisibility: string;

  /**
   * Number of seeded queries that should be shown as suggestions in the home page.
   * If set to 0, no seeded queries will be shown.
   */
  readonly seededQueriesLimit?: number;
  withSeededQueriesLimit(seededQueriesLimit: number | null): GenAiUiConfig;

  /**
   * Number of seeded queries that should be shown as suggestions in the home page.
   * If set to 0, no seeded queries will be shown.
   */
  static readonly seededQueriesLimit?: number;

  /**
   * Category of the seeded queries that should be shown as suggestions in the home page.
   */
  readonly seededQueriesCategory?: string;
  withSeededQueriesCategory(seededQueriesCategory: string | null): GenAiUiConfig;

  /**
   * Category of the seeded queries that should be shown as suggestions in the home page.
   */
  static readonly seededQueriesCategory?: string;

  /**
   * Whether the Help button should be rendered in the side navigation bar.
   */
  readonly helpButtonVisibility: string;
  withHelpButtonVisibility(helpButtonVisibility: string): GenAiUiConfig;

  /**
   * Whether the Help button should be rendered in the side navigation bar.
   */
  static readonly helpButtonVisibility: string;

  /**
   * Url to redirect to when users click on the Help button on the side navigation bar.
   */
  readonly helpGuideUrl?: string;
  withHelpGuideUrl(helpGuideUrl: string | null): GenAiUiConfig;

  /**
   * Url to redirect to when users click on the Help button on the side navigation bar.
   */
  static readonly helpGuideUrl?: string;

  /**
   * Whether the feed results should not be loaded in a lazy way. If set to true, results
   * will be loaded at all times, even if they are not visible in the viewport.
   */
  readonly feedResultsDoNotLazyLoad?: boolean;
  withFeedResultsDoNotLazyLoad(feedResultsDoNotLazyLoad: boolean): GenAiUiConfig;

  /**
   * Whether the feed results should not be loaded in a lazy way. If set to true, results
   * will be loaded at all times, even if they are not visible in the viewport.
   */
  static readonly feedResultsDoNotLazyLoad?: boolean;

  /**
   * Scroll offset for the feed results to start loading. A value of 0 means the results will load only when
   * they are visible on the screen; a value of X px means the
   * results will load X px before they are visible on the screen.
   */
  readonly feedResultsLoadingOffset: string;
  withFeedResultsLoadingOffset(feedResultsLoadingOffset: string): GenAiUiConfig;

  /**
   * Scroll offset for the feed results to start loading. A value of 0 means the results will load only when
   * they are visible on the screen; a value of X px means the
   * results will load X px before they are visible on the screen.
   */
  static readonly feedResultsLoadingOffset: string;

  /**
   * Minimum height of the feed results container. This is used to prevent the feed results from collapsing
   * when they are not visible on the screen.
   */
  readonly feedResultsMinHeight: string;
  withFeedResultsMinHeight(feedResultsMinHeight: string): GenAiUiConfig;

  /**
   * Minimum height of the feed results container. This is used to prevent the feed results from collapsing
   * when they are not visible on the screen.
   */
  static readonly feedResultsMinHeight: string;

  /**
   * Maximum number of results for which resources and visualization data should be persisted in the
   * application state. This is used to limit the memory usage of the application and the cleanup follows
   * a LRU strategy.
   */
  readonly feedMaxResultsInState: number;
  withFeedMaxResultsInState(feedMaxResultsInState: number): GenAiUiConfig;

  /**
   * Maximum number of results for which resources and visualization data should be persisted in the
   * application state. This is used to limit the memory usage of the application and the cleanup follows
   * a LRU strategy.
   */
  static readonly feedMaxResultsInState: number;

  /**
   * Dynamic Agent shows the plan and solution step on UI. This config controls whether the execute or the
   * code summary step should be shown as part of the response.
   */
  readonly showExecuteSummaryStep: boolean;
  withShowExecuteSummaryStep(showExecuteSummaryStep: boolean): GenAiUiConfig;

  /**
   * Dynamic Agent shows the plan and solution step on UI. This config controls whether the execute or the
   * code summary step should be shown as part of the response.
   */
  static readonly showExecuteSummaryStep: boolean;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJson
   */
  static fromJson(json: any): GenAiUiConfig | null;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJsonString
   */
  static fromJsonString(json: string): GenAiUiConfig | null;

  /**
   * Load the XML-based representation and reconstruct the corresponding object.
   *
   * fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
   * may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
   * isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
   * will return an instance of the correct type.
   *
   * @see #toXmlString
   */
  static fromXmlString(xml: string): GenAiUiConfig | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): GenAiUiConfig | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): GenAiUiConfig;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  static replaceType(old: Type, new_: Type): GenAiUiConfig;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): GenAiUiConfig;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): GenAiUiConfig;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): GenAiUiConfig;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): GenAiUiConfig;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<GenAiUiConfig>;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<GenAiUiConfig>;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * asynchronous `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<GenAiUiConfig>;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * asynchronous `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<GenAiUiConfig>;

  /**
   * Result of this function call is a copy of current instance with specified field value replaced based on result of
   * the `mapper` invocation.
   * @param field
   *           field being mapped
   * @param includeEmpty
   *           if set, invokes mapper for fields with empty value
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): GenAiUiConfig;

  /**
   * Result of this function call is a copy of current instance with specified field value replaced based on result of
   * the `mapper` invocation.
   * @param field
   *           field being mapped
   * @param includeEmpty
   *           if set, invokes mapper for fields with empty value
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): GenAiUiConfig;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param action
   *           function to be executed for each pair of field type and Obj instance
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): GenAiUiConfig;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param action
   *           function to be executed for each pair of field type and Obj instance
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): GenAiUiConfig;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param includeEmpty
   *           if `true` will also process references with `null` / "Empty" references
   * @param mapper
   *           function to be executed for each pair of field type and Obj instance for producing new reference value
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): GenAiUiConfig;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param includeEmpty
   *           if `true` will also process references with `null` / "Empty" references
   * @param mapper
   *           function to be executed for each pair of field type and Obj instance for producing new reference value
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  static mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): GenAiUiConfig;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): GenAiUiConfig;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  static validateObj(): GenAiUiConfig;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           name of the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: string, value: any, doNotConvert?: boolean): GenAiUiConfig;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           name of the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  static withField(field: string, value: any, doNotConvert?: boolean): GenAiUiConfig;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: FieldType, value: any, doNotConvert?: boolean): GenAiUiConfig;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  static withField(field: FieldType, value: any, doNotConvert?: boolean): GenAiUiConfig;

  /**
   * Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
   * defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
   *
   * @param fields
   *           map of field names/values
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @return new Obj
   */
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): GenAiUiConfig;

  /**
   * Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
   * defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
   *
   * @param fields
   *           map of field names/values
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @return new Obj
   */
  static withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): GenAiUiConfig;

  /**
   * Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
   * If you would like to #unsetField, you should call #withoutFieldAtPath instead.
   *
   * Immutable objects may return the same instance if the field being set does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path to set value at
   * @param value
   *           value to set
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @param doNotCreateIfMissing
   *           true indicates that any empty reference along the path will not set the value
   * @return new Obj
   */
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): GenAiUiConfig;

  /**
   * Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
   * If you would like to #unsetField, you should call #withoutFieldAtPath instead.
   *
   * Immutable objects may return the same instance if the field being set does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path to set value at
   * @param value
   *           value to set
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @param doNotCreateIfMissing
   *           true indicates that any empty reference along the path will not set the value
   * @return new Obj
   */
  static withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): GenAiUiConfig;

  /**
   * Builds a new Obj without the specified path field.
   *
   * Immutable objects may return the same instance if the field being removed does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path for field to remove
   * @return new Obj
   *
   * @see #withFieldAtPath
   * @see #withoutField
   */
  withoutFieldAtPath(path: string): GenAiUiConfig;

  /**
   * Builds a new Obj without the specified path field.
   *
   * Immutable objects may return the same instance if the field being removed does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path for field to remove
   * @return new Obj
   *
   * @see #withFieldAtPath
   * @see #withoutField
   */
  static withoutFieldAtPath(path: string): GenAiUiConfig;

  /**
   * Builds a new Obj, removing the field with the provided name.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: string): GenAiUiConfig;

  /**
   * Builds a new Obj, removing the field with the provided name.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  static withoutField(field: string): GenAiUiConfig;

  /**
   * Builds a new Obj, removing the field with the provided field type.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: FieldType): GenAiUiConfig;

  /**
   * Builds a new Obj, removing the field with the provided field type.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  static withoutField(field: FieldType): GenAiUiConfig;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): GenAiUiConfig;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  static withoutFields(fields: Array_Type<string>): GenAiUiConfig;

  /**
   * Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
   * exact same type as the type of the obj to respect the "ordinal" of the field type
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           field types to remove
   * @return new Obj with removed fields
   */
  withoutFieldsByType(fields: Array_Type<FieldType>): GenAiUiConfig;

  /**
   * Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
   * exact same type as the type of the obj to respect the "ordinal" of the field type
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           field types to remove
   * @return new Obj with removed fields
   */
  static withoutFieldsByType(fields: Array_Type<FieldType>): GenAiUiConfig;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): GenAiUiConfig;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  static withoutSecretFields(): GenAiUiConfig;

  /**
   * Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
   * calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
   * {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
   * fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
   * fields that have already been set.
   *
   * {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
   * As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
   *
   * @param includeEmptyRefsWithDefaults
   *           it `true` then missing / empty child references that have fields with defaults will also be instantiated
   * @param defaultFields
   *           If not empty, a list of default field paths to populate.  Any default fields not specified in the
   *           array will be ignored.
   * @return new Obj
   *
   * @see #defaultField
   * @see FieldType#defaultValueConst
   * @see FieldType#defaultValue
   */
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): GenAiUiConfig;

  /**
   * Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
   * calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
   * {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
   * fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
   * fields that have already been set.
   *
   * {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
   * As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
   *
   * @param includeEmptyRefsWithDefaults
   *           it `true` then missing / empty child references that have fields with defaults will also be instantiated
   * @param defaultFields
   *           If not empty, a list of default field paths to populate.  Any default fields not specified in the
   *           array will be ignored.
   * @return new Obj
   *
   * @see #defaultField
   * @see FieldType#defaultValueConst
   * @see FieldType#defaultValue
   */
  static withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): GenAiUiConfig;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         name of the field to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: string): GenAiUiConfig;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         name of the field to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  static defaultField(field: string): GenAiUiConfig;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         field type to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: FieldType): GenAiUiConfig;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         field type to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  static defaultField(field: FieldType): GenAiUiConfig;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         name of the field to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: string): GenAiUiConfig;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         name of the field to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  static unsetField(field: string): GenAiUiConfig;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         field type to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: FieldType): GenAiUiConfig;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         field type to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  static unsetField(field: FieldType): GenAiUiConfig;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         name of the field to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: string): GenAiUiConfig;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         name of the field to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  static removeField(field: string): GenAiUiConfig;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         field type to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: FieldType): GenAiUiConfig;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         field type to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  static removeField(field: FieldType): GenAiUiConfig;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
   *
   * @param other
   *           object
   * @param fieldPathMergeSpec
   *           mapping of fields of the object to the respective merge annotations
   * @return the new merged Obj
   */
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): GenAiUiConfig;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
   *
   * @param other
   *           object
   * @param fieldPathMergeSpec
   *           mapping of fields of the object to the respective merge annotations
   * @return the new merged Obj
   */
  static mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): GenAiUiConfig;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence.
   *
   * @param other
   *           object
   * @param otherFieldsFilter
   *           only fields of otherFieldsFilter type from other are merged into this obj.
   * @return the new merged Obj
   */
  mergeObj(other: Obj, otherFieldsFilter: Type): GenAiUiConfig;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence.
   *
   * @param other
   *           object
   * @param otherFieldsFilter
   *           only fields of otherFieldsFilter type from other are merged into this obj.
   * @return the new merged Obj
   */
  static mergeObj(other: Obj, otherFieldsFilter: Type): GenAiUiConfig;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): GenAiUiConfig;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  static mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): GenAiUiConfig;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): GenAiUiConfig;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  static mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): GenAiUiConfig;

  mergeJson(json: any): GenAiUiConfig;

  static mergeJson(json: any): GenAiUiConfig;

  /**
   * Merge the obj references within the current obj
   * @param deep
   *        If set, traverses the reference fields within the obj as well for a deep merge
   * @param objKey
   *        lambda specifying how to obtain the key for the Obj while determining which Objs to merge
   * @param filter
   *        Field paths that need to be filtered from this merge
   * @return Obj with child references merged
   */
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): GenAiUiConfig;

  /**
   * Merge the obj references within the current obj
   * @param deep
   *        If set, traverses the reference fields within the obj as well for a deep merge
   * @param objKey
   *        lambda specifying how to obtain the key for the Obj while determining which Objs to merge
   * @param filter
   *        Field paths that need to be filtered from this merge
   * @return Obj with child references merged
   */
  static mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): GenAiUiConfig;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): GenAiUiConfig;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  static sumObj(other: Obj, deep?: boolean): GenAiUiConfig;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<GenAiUiConfig>;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonArray(): Array_Type<GenAiUiConfig>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<GenAiUiConfig> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<GenAiUiConfig> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<GenAiUiConfig>;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  static singletonSet(): Set_Type<GenAiUiConfig>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<GenAiUiConfig> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, GenAiUiConfig> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, GenAiUiConfig> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<GenAiUiConfig>;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  static toBuilder(): ObjBuilder<GenAiUiConfig>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<GenAiUiConfig>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): GenAiUiConfig;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): GenAiUiConfig;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): GenAiUiConfig;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): GenAiUiConfig;

  /**
   * Construct an instance from provided fields
   * @param fields
   *            Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
   *            field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
   *            to Panda.make()
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
   *            -> 0) populated. Passing an empty value for a field will result in the initial value being set if
   *            the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
   *
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): GenAiUiConfig;

  /**
   * Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
   *
   * ```js
   * User.make({
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   *
   * Obj.make({
   *   type: 'User',
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   * ```
   *
   * ```py
   * c3.User.make({
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.Obj.make({
   *   "type": 'User',
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.User(email='joe@smith.com', realName='Joe Smith')
   *
   * c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
   * ```
   *
   * Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
   * specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
   * such as {@link Ann.Ser} do not apply.
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: any, withDefaults?: boolean): GenAiUiConfig;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): GenAiUiConfig;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: Map_Type<FieldType, any>): Map_Type<FieldType, any> | null;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): GenAiUiConfig;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static afterMake(): GenAiUiConfig;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): GenAiUiConfig;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<GenAiUiConfig> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): GenAiUiConfig;

  /**
   * @return whether the cache already contains this instance
   */
  isCached(): boolean;

  /**
   * @return whether the cache already contains this instance
   */
  static isCached(): boolean;

  /**
   * @return stream of all available Cached instances.
   */
  static allCached(): Stream<GenAiUiConfig> | null;

  /**
   * @return existing instances of this type that satisfy filter from data cache. Will call `produceAll`
   *         if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
   *         Otherwise no population will be performed.
   */
  static find(filter?: string): Stream<GenAiUiConfig> | null;

  /**
   * @return existing instances of this type that satisfy filter from data cache. Will call `produceAll`
   *         if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
   *         Otherwise no population will be performed.
   */
  static findBy(field: string, value: any): Stream<GenAiUiConfig> | null;

  /**
   * @return cached instance.
   */
  getCached(): GenAiUiConfig | null;

  /**
   * @return cached instance.
   */
  static getCached(): GenAiUiConfig | null;

  /**
   * Returns cached instance by key, with secrets removed.
   */
  static forCacheKey(key: string): GenAiUiConfig | null;

  /**
   * @return cache key for this instance.
   */
  cacheKey(): string;

  /**
   * @return cache key for this instance.
   */
  static cacheKey(): string;

  /**
   * Should produce an entry for the cache key. This method should not be called directly.
   */
  static produce(key: string): GenAiUiConfig | null;

  /**
   * Should produces the entire content for the cached data. Will populate the cache with the produced data.
   */
  static produceAll(): Map_Type<string, GenAiUiConfig> | null;

  /**
   * Evicts this instance from cache on all nodes of this application.
   */
  evictFromCache(): void;

  /**
   * Evicts this instance from cache on all nodes of this application.
   */
  static evictFromCache(): void;

  /**
   * Evicts this instance from cache of the current node.
   */
  evictFromCacheLocalOnly(): void;

  /**
   * Evicts this instance from cache of the current node.
   */
  static evictFromCacheLocalOnly(): void;

  /**
   * Evicts this instance from cache on all local apps (c3-c3, env-c3, env-app) that live in the current node.
   * Will not trigger any cache invalidation broadcast.
   * see {@link Server#evictFromLocalAppsCaches}
   */
  evictFromCacheLocalOnlyAllApps(): void;

  /**
   * Evicts this instance from cache on all local apps (c3-c3, env-c3, env-app) that live in the current node.
   * Will not trigger any cache invalidation broadcast.
   * see {@link Server#evictFromLocalAppsCaches}
   */
  static evictFromCacheLocalOnlyAllApps(): void;

  /**
   * Clears the data cache for this type on all nodes of this application.
   */
  static clearCache(): void;

  /**
   * Clears the data cache for this type on the current node. Will not trigger any cache invalidation broadcast.
   */
  static clearCacheLocalOnly(): void;

  /**
   * Clears the data cache for this type on the current node for all local apps (c3-c3, env-c3, env-app) that live in the current node.
   * Will not trigger any cache invalidation broadcast.
   * see {@link Server#clearLocalAppsCaches}
   */
  static clearCacheLocalOnlyAllApps(): void;

  /**
   * Returns count of cached instances.
   */
  static cacheSize(): number | null;

  /**
   * Returns instance of the cache for this type.
   */
  static nativeCache(): any | null;

  /**
   * Return cached instance of configuration. For Identifiable configurations `id` field is required. For Nameable
   * configurations `name` field is required.
   *
   * Note that typical pattern is to use Configurable#config instead of this method.
   */
  getConfig(): GenAiUiConfig;

  /**
   * Return cached instance of configuration. For Identifiable configurations `id` field is required. For Nameable
   * configurations `name` field is required.
   *
   * Note that typical pattern is to use Configurable#config instead of this method.
   */
  static getConfig(): GenAiUiConfig;

  /**
   * @return cached config value for the provided field path if set or `null` or error otherwise depending on
   *         `failIfMissing`; note that will not return secret value.
   */
  configValue(path: string, failIfMissing?: boolean): any | null;

  /**
   * @return cached config value for the provided field path if set or `null` or error otherwise depending on
   *         `failIfMissing`; note that will not return secret value.
   */
  static configValue(path: string, failIfMissing?: boolean): any | null;

  /**
   * Return cached instance of configuration containing only secret values. For Identifiable configuration, `id` field
   * is required. For Nameable configurations `name` field is required.
   *
   * Note that typical pattern is to use Configurable#configWithSecrets instead of this method.
   */
  getSecret(): GenAiUiConfig;

  /**
   * Return cached instance of configuration containing only secret values. For Identifiable configuration, `id` field
   * is required. For Nameable configurations `name` field is required.
   *
   * Note that typical pattern is to use Configurable#configWithSecrets instead of this method.
   */
  static getSecret(): GenAiUiConfig;

  /**
   * @return cached secret value for the provided field path in this Config object or `null` if not set or error
   *         depending on `failIfMissing`.
   */
  secretValue(path: string, failIfMissing?: boolean): any | null;

  /**
   * @return cached secret value for the provided field path in this Config object or `null` if not set or error
   *         depending on `failIfMissing`.
   */
  static secretValue(path: string, failIfMissing?: boolean): any | null;

  /**
   * Reads and url decodes the content at the path.
   * Path must represent a string value.
   */
  decodedValue(path: string, failIfMissing?: boolean): string | null;

  /**
   * Reads and url decodes the content at the path.
   * Path must represent a string value.
   */
  static decodedValue(path: string, failIfMissing?: boolean): string | null;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.USER level.
   */
  isUserOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.USER level.
   */
  static isUserOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.APP level.
   */
  isAppOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.APP level.
   */
  static isAppOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.CLUSTER level.
   */
  isClusterOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.CLUSTER level.
   */
  static isClusterOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.ENV level.
   */
  isEnvOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.ENV level.
   */
  static isEnvOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.ROOT level.
   */
  isRootOverride(): boolean;

  /**
   * @return `true` if this configuration instance was set at ConfigOverride.ROOT level.
   */
  static isRootOverride(): boolean;

  /**
   * @return `true` if this configuration has not been set and comes from seed / defaults.
   */
  isSeed(): boolean;

  /**
   * @return `true` if this configuration has not been set and comes from seed / defaults.
   */
  static isSeed(): boolean;

  /**
   * @return `true` if provided path is a secret.
   */
  static isSecret(path: string): boolean;

  /**
   *  @return config key for this instance. The config key is a unique identifier for an instance of a config type.
   *  The config key varies based on whether the config is defined with:
   *     1. {@link Ann.Config#subfolder}
   *         In this case, the name of the subfolder will be included.
   *     2. {@link Ann.Config#minOverride} set to {@link ConfigOverride#USER}
   *         In this case, the ID of the {@link User} will be included.
   *     3. mixes in {@link Named} or {@link Identified}
   * In this case, the name or id of the config will be included. If the config does not mix Named or Identified,
   * the name of the config subtype will be used.
   *
   *  The config key includes the above three fields delimited by '/':
   *     {subfolder name if applicable}/{user ID if applicable}/{id or name or type name}
   *  ```
   *  | USER min Override | Identified or Named | Subfolder defined |      Example Config Key     |
   *  |-------------------|---------------------|-------------------|-----------------------------|
   *  |       no          |         no          |        no         |           MyConfType        |
   *  |       yes         |         no          |        no         |       myUserId/MyConfType   |
   *  |       no          |         yes         |        no         |             abc             |
   *  |       no          |         no          |        yes        |      folder1/MyConfType     |
   *  |       no          |         yes         |        yes        |          folder1/abc        |
   *  |       yes         |         yes         |        no         |          myUserId/abc       |
   *  |       yes         |         no          |        yes        | folder1/myUserId/MyConfType |
   *  |       yes         |         yes         |        yes        |     folder1/myUserId/abc    |
   *  ```
   *  Note that the config key is a computed value and is not set-able.
   *  For config subtypes that mixin both {@link Identifiable} and {@link Nameable}, the ID will be used as part of the key.
   */
  configKey(): string | null;

  /**
   *  @return config key for this instance. The config key is a unique identifier for an instance of a config type.
   *  The config key varies based on whether the config is defined with:
   *     1. {@link Ann.Config#subfolder}
   *         In this case, the name of the subfolder will be included.
   *     2. {@link Ann.Config#minOverride} set to {@link ConfigOverride#USER}
   *         In this case, the ID of the {@link User} will be included.
   *     3. mixes in {@link Named} or {@link Identified}
   * In this case, the name or id of the config will be included. If the config does not mix Named or Identified,
   * the name of the config subtype will be used.
   *
   *  The config key includes the above three fields delimited by '/':
   *     {subfolder name if applicable}/{user ID if applicable}/{id or name or type name}
   *  ```
   *  | USER min Override | Identified or Named | Subfolder defined |      Example Config Key     |
   *  |-------------------|---------------------|-------------------|-----------------------------|
   *  |       no          |         no          |        no         |           MyConfType        |
   *  |       yes         |         no          |        no         |       myUserId/MyConfType   |
   *  |       no          |         yes         |        no         |             abc             |
   *  |       no          |         no          |        yes        |      folder1/MyConfType     |
   *  |       no          |         yes         |        yes        |          folder1/abc        |
   *  |       yes         |         yes         |        no         |          myUserId/abc       |
   *  |       yes         |         no          |        yes        | folder1/myUserId/MyConfType |
   *  |       yes         |         yes         |        yes        |     folder1/myUserId/abc    |
   *  ```
   *  Note that the config key is a computed value and is not set-able.
   *  For config subtypes that mixin both {@link Identifiable} and {@link Nameable}, the ID will be used as part of the key.
   */
  static configKey(): string | null;

  /**
   * @return copy of the config with updated `id` if {@link Indentifiable} or `name` if {@link Nameable}, hence changing
   * the computed {@link Config#configKey}.
   * Note that configs set at USER level will still have user's Id as part of the config key. Config types with
   * @{link Ann.Config#subfolder} will also have the subfolder name as part of the config key.
   * ex. confType has @config(minOverride=ConfigOverride.USER)
   *     config = confType.withConfigKey("abc")
   *     config.configKey() => "myUserId/abc"
   * ex. confType has @config(subfolder="folder1")
   *     config = confType.withConfigKey("abc")
   *     config.configKey() => "folder1/abc"
   */
  withConfigKey(configKey: string): GenAiUiConfig;

  /**
   * @return copy of the config with updated `id` if {@link Indentifiable} or `name` if {@link Nameable}, hence changing
   * the computed {@link Config#configKey}.
   * Note that configs set at USER level will still have user's Id as part of the config key. Config types with
   * @{link Ann.Config#subfolder} will also have the subfolder name as part of the config key.
   * ex. confType has @config(minOverride=ConfigOverride.USER)
   *     config = confType.withConfigKey("abc")
   *     config.configKey() => "myUserId/abc"
   * ex. confType has @config(subfolder="folder1")
   *     config = confType.withConfigKey("abc")
   *     config.configKey() => "folder1/abc"
   */
  static withConfigKey(configKey: string): GenAiUiConfig;

  /**
   * @return copy without config key.
   */
  withoutConfigKey(): GenAiUiConfig;

  /**
   * @return copy without config key.
   */
  static withoutConfigKey(): GenAiUiConfig;

  /**
   * @return return cached config instance for provided config key.
   */
  static forConfigKey(configKey: string): GenAiUiConfig | null;

  /**
   * @return stream of all available Config keys for this type; #forConfigKey can be used to look up Config instance.
   */
  static listConfigKeys(): Stream<string> | null;

  /**
   * @param
   *
   * @return stream of all available Config instances for this type.
   */
  static listConfigs(parallel?: boolean, filter?: λPredicate<string>): Stream<GenAiUiConfig> | null;

  /**
   * @return all config template values by override.
   */
  allConfigValueOverrides(path: string): Map_Type<string, any> | null;

  /**
   * @return all config template values by override.
   */
  static allConfigValueOverrides(path: string): Map_Type<string, any> | null;

  /**
   * @return all config template jsons by override.
   */
  allConfigOverrides(): Map_Type<string, any> | null;

  /**
   * @return all config template jsons by override.
   */
  static allConfigOverrides(): Map_Type<string, any> | null;

  /**
   * @return all secret template values by override.
   */
  allSecretValueOverrides(path: string): Map_Type<string, any> | null;

  /**
   * @return all secret template values by override.
   */
  static allSecretValueOverrides(path: string): Map_Type<string, any> | null;

  /**
   * @return all secret templates by override.
   */
  allSecretOverrides(): Map_Type<string, any> | null;

  /**
   * @return all secret templates by override.
   */
  static allSecretOverrides(): Map_Type<string, any> | null;

  /**
   * Sets configuration field value at provided path in this Config object. Note will not set secret value.
   * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
   * @see clearConfigValue
   */
  setConfigValue(path: string, value: any, override?: string, embeddedFileName?: string): void;

  /**
   * Sets configuration field value at provided path in this Config object. Note will not set secret value.
   * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
   * @see clearConfigValue
   */
  static setConfigValue(path: string, value: any, override?: string, embeddedFileName?: string): void;

  /**
   * Sets multiple field values to those specified in the map. The map keys are the paths.
   *
   * @see setConfigValue
   */
  setConfigValues(from?: Map_Type<string, any>, override?: string): void;

  /**
   * Sets multiple field values to those specified in the map. The map keys are the paths.
   *
   * @see setConfigValue
   */
  static setConfigValues(from?: Map_Type<string, any>, override?: string): void;

  /**
   * Sets multiple field values to the be the same as the passed instance.
   *
   * @see setConfigValue
   */
  setConfigValues(from: GenAiUiConfig, override?: string): void;

  /**
   * Sets multiple field values to the be the same as the passed instance.
   *
   * @see setConfigValue
   */
  static setConfigValues(from: GenAiUiConfig, override?: string): void;

  /**
   * Sets configuration field value template at provided path in this Config object. Note will not set secret value.
   * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
   * @see clearConfigValue
   */
  setConfigValueTemplate(path: string, valueTemplate: string, override?: string): void;

  /**
   * Sets configuration field value template at provided path in this Config object. Note will not set secret value.
   * If `embeddedFileName` parameter is provided, then config value will be stored in a separate embedded file.
   * @see clearConfigValue
   */
  static setConfigValueTemplate(path: string, valueTemplate: string, override?: string): void;

  /**
   * Adds a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  insertConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string): void;

  /**
   * Adds a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static insertConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string): void;

  /**
   * Sets a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  setConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string): void;

  /**
   * Sets a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static setConfigElementAt(pathToCollectionField: string, index: number, value: any, override?: string): void;

  /**
   * Adds a single value to a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  addConfigElement(pathToCollectionField: string, value: any, override?: string): void;

  /**
   * Adds a single value to a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static addConfigElement(pathToCollectionField: string, value: any, override?: string): void;

  /**
   * Sets a key-value pair in specified map at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  setConfigMapValue(pathToMapField: string, key: any, value: any, override?: string): void;

  /**
   * Sets a key-value pair in specified map at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static setConfigMapValue(pathToMapField: string, key: any, value: any, override?: string): void;

  /**
   * Removes a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  removeConfigElementAt(pathToCollectionField: string, index: number, override?: string): void;

  /**
   * Removes a single value at the specified index in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static removeConfigElementAt(pathToCollectionField: string, index: number, override?: string): void;

  /**
   * Removes a single value in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  removeConfigElement(pathToCollectionField: string, value: any, override?: string): void;

  /**
   * Removes a single value in a collection at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static removeConfigElement(pathToCollectionField: string, value: any, override?: string): void;

  /**
   * Removes a single key in a map at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  removeConfigMapKey(pathToMapField: string, key: any, override?: string): void;

  /**
   * Removes a single key in a map at provided path in this Config object.
   * Note this will merge based on the {@link Ann.Merge} collection value for the field.
   */
  static removeConfigMapKey(pathToMapField: string, key: any, override?: string): void;

  /**
   * Url encodes the content at the path and returns new config object with the encoded value.
   * Path must represent a string value.
   */
  setEncodedValue(path: string, value: string, override: string): void;

  /**
   * Url encodes the content at the path and returns new config object with the encoded value.
   * Path must represent a string value.
   */
  static setEncodedValue(path: string, value: string, override: string): void;

  /**
   * Sets secret field value or secrets within value at provided path in this Config object.
   * @see clearSecretValue
   */
  setSecretValue(path: string, value: any, override?: string): void;

  /**
   * Sets secret field value or secrets within value at provided path in this Config object.
   * @see clearSecretValue
   */
  static setSecretValue(path: string, value: any, override?: string): void;

  /**
   * Sets secret field value template at provided path in this Config object.
   * @see clearSecretValue
   */
  setSecretValueTemplate(path: string, value: string, override?: string): void;

  /**
   * Sets secret field value template at provided path in this Config object.
   * @see clearSecretValue
   */
  static setSecretValueTemplate(path: string, value: string, override?: string): void;

  /**
   * Clears configuration field value at provided path in this Config object at provided override level. Note will not
   * clear secret value.
   */
  clearConfigValue(path: string, override?: string): void;

  /**
   * Clears configuration field value at provided path in this Config object at provided override level. Note will not
   * clear secret value.
   */
  static clearConfigValue(path: string, override?: string): void;

  /**
   * Clears secret field value at provided path in this Config object at provided override level.
   */
  clearSecretValue(path: string, override?: string): void;

  /**
   * Clears secret field value at provided path in this Config object at provided override level.
   */
  static clearSecretValue(path: string, override?: string): void;

  /**
   * Clears configuration field value at provided path in this Config object at all override levels. Note will not
   * clear secret value.
   */
  clearConfigValueAllOverrides(path: string): void;

  /**
   * Clears configuration field value at provided path in this Config object at all override levels. Note will not
   * clear secret value.
   */
  static clearConfigValueAllOverrides(path: string): void;

  /**
   * Clears secret field value at provided path in this Config object at all override levels.
   */
  clearSecretValueAllOverrides(path: string): void;

  /**
   * Clears secret field value at provided path in this Config object at all override levels.
   */
  static clearSecretValueAllOverrides(path: string): void;

  /**
   * @return cached config or secret value for the provided config key, field path and override if set or `null` or error
   *         otherwise depending on `failIfMissing`
   */
  static rawConfigOrSecretValue(configKey: string, path: string, override?: string, failIfMissing?: boolean): any | null;

  /**
   * Sets config or secret value for the provided config key, field path and override.
   */
  static setConfigOrSecretValue(configKey: string, path: string, value?: any, override?: string): void;

  /**
   * Sets config and secret value for the provided config key, field path and override. Equivalent to calling both
   * setConfigValue and setSecretValue
   */
  static setConfigAndSecretValue(configKey: string, path: string, value?: any, override?: string): void;

  /**
   * Sets config or secret value template for the provided config key, field path and override.
   */
  static setConfigOrSecretValueTemplate(configKey: string, path: string, valueTemplate?: string, override?: string): void;

  /**
   * @return `true` if this Config type has other sub types.
   */
  static hasSubTypes(): boolean;

  /**
   * @return true if this Config type has Ann.Config#secret annotation on the Config type of child config types
   */
  static hasSecretField(): boolean;

  /**
   * @return `true` if this Config type has only one instance.
   */
  static isSingleInstance(): boolean;

  /**
   * @returns `true` if this Config is user override-able.
   */
  static isUserOverridable(): boolean;

  /**
   * @return default configuration override level
   */
  static dfltOverride(override?: string): string;

  /**
   *  Loads config and secret by key if exists, default config, or `null` if `doNotDefaultIfMissing` config annotation is
   * true and config does not exist.
   *  Note that this skips caching and directly fetches config from the config store, and secret from vault.
   */
  static loadConfigAndSecret(configKey: string): GenAiUiConfig | null;

  /**
   * Loads config override template json if exists or `null`. Will not include secrets.
   * Note that this skips caching and directly fetches config from the config store.
   */
  loadConfigOverride(override: string): any | null;

  /**
   * Loads config override template json if exists or `null`. Will not include secrets.
   * Note that this skips caching and directly fetches config from the config store.
   */
  static loadConfigOverride(override: string): any | null;

  /**
   * Loads secret override template json if exists or `null`. Will not include non secrets.
   * Note that this skips caching and directly fetches secret from the vault.
   */
  loadSecretOverride(override: string): any | null;

  /**
   * Loads secret override template json if exists or `null`. Will not include non secrets.
   * Note that this skips caching and directly fetches secret from the vault.
   */
  static loadSecretOverride(override: string): any | null;

  /**
   * @return file for an embedded config value.
   */
  embeddedFile(embeddedFileName: string, override?: string): File;

  /**
   * @return file for an embedded config value.
   */
  static embeddedFile(embeddedFileName: string, override?: string): File;

  /**
   * @return config folder name
   */
  static configFolder(): string;

  /**
   * @return config sub folder name for this type
   */
  static configSubFolder(): string;

  /**
   * @return config file encoded path for a given key and potentially user under the config dir for this type.
   */
  static configFileEncodedPath(configKey: string, userOverride?: boolean): string;

  /**
   * @return pair of config and secret files for a given override; note that will always return instance of
   *         File even if physical file doesn't exist.
   */
  configAndSecretFiles(override: string): Pair<File, File> | null;

  /**
   * @return pair of config and secret files for a given override; note that will always return instance of
   *         File even if physical file doesn't exist.
   */
  static configAndSecretFiles(override: string): Pair<File, File> | null;

  /**
   * @return the config file path for a config instance at a given override;
   */
  configFilePath(override: string): string | null;

  /**
   * @return the config file path for a config instance at a given override;
   */
  static configFilePath(override: string): string | null;

  /**
   * @return the secret file path for a config instance at a given override;
   */
  secretFilePath(override: string): string | null;

  /**
   * @return the secret file path for a config instance at a given override;
   */
  static secretFilePath(override: string): string | null;

  /**
   * @return pair of config and secret files for provided override / appId; note that will always return pair
   *         of Files even if physical file doesn't exist.
   */
  configAndSecretFilePair(override: string, appId: string): Pair<File, File> | null;

  /**
   * @return pair of config and secret files for provided override / appId; note that will always return pair
   *         of Files even if physical file doesn't exist.
   */
  static configAndSecretFilePair(override: string, appId: string): Pair<File, File> | null;

  /**
   * @return map of pair of config and secret files by override; note that will always return instance of
   *         File even if physical file doesn't exist.
   */
  allConfigAndSecretFiles(): Map_Type<string, Pair<File, File>> | null;

  /**
   * @return map of pair of config and secret files by override; note that will always return instance of
   *         File even if physical file doesn't exist.
   */
  static allConfigAndSecretFiles(): Map_Type<string, Pair<File, File>> | null;

  /**
   * @return pair of config and secret template directories for override
   */
  static configAndSecretDirs(override?: string): Pair<File, File> | null;

  /**
   * @return map of pair of config and secret template directories by override; note that will always return instance of
   *         File even if physical folder doesn't exist.
   */
  static allConfigAndSecretDirs(): Map_Type<string, Pair<File, File>> | null;

  /**
   * @return pair of config and secret Base directories for the given override
   */
  static configAndSecretOverrideBaseDirs(override?: string): Pair<File, File> | null;

  /**
   * @return config key for a given config or secret file. If file is not a valid config or secret then will return
   *         `null` or fail based on `failIfInvalid`
   */
  static configKeyForFile(file: File, failIfInvalid?: boolean): string | null;

  /**
   * @return config key for a given config or secret file url. If file is not a valid config or secret then will return
   *         `null` or fail based on `failIfInvalid`
   */
  static configKeyForFileUrl(fileUrl: string): string | null;

  /**
   * @return Config sub-type for a config directory name.
   */
  static configTypeForDir(dir: string, failIdInvalid?: boolean): Type | null;

  /**
   * Sets configuration. For Identifiable configurations `id` field is required. Does not set secret values. Use
   * #setSecret or #setSecretValue for that.
   */
  setConfig(override?: string): void;

  /**
   * Sets configuration. For Identifiable configurations `id` field is required. Does not set secret values. Use
   * #setSecret or #setSecretValue for that.
   */
  static setConfig(override?: string): void;

  /**
   * Sets configuration. For Identifiable configurations `id` field is required. Does not set non secret values. Use
   * #setConfigValue or #setConfig for that.
   */
  setSecret(override?: string): void;

  /**
   * Sets configuration. For Identifiable configurations `id` field is required. Does not set non secret values. Use
   * #setConfigValue or #setConfig for that.
   */
  static setSecret(override?: string): void;

  /**
   * Executes actions on all config override levels (within a valid range) for a particular instance of config.
   */
  eachOverride(action?: λBiConsumer<Config, string>): void;

  /**
   * Executes actions on all config override levels (within a valid range) for a particular instance of config.
   */
  static eachOverride(action?: λBiConsumer<Config, string>): void;

  /**
   * Executes actions on all config override levels (within a valid range) for the Type itself (not instance).
   */
  static eachOverrideOnType(action?: λConsumer<string>): void;

  /**
   * @return minimum override for config - default is ConfigOverride#APP.
   */
  static minOverride(): string;

  /**
   * @return maximum override for config - default is ConfigOverride#ROOT
   */
  static maxOverride(): string;

  /**
   * Clears specified configuration override including secrets for this instance.
   *
   * @param override
   *        Specifies the {@link ConfigOverride} level, of this config to clear.
   */
  clearConfigAndSecretOverride(override: string): void;

  /**
   * Clears specified configuration override including secrets for this instance.
   *
   * @param override
   *        Specifies the {@link ConfigOverride} level, of this config to clear.
   */
  static clearConfigAndSecretOverride(override: string): void;

  /**
   * Clears specified configuration including secrets for this instance on all override levels.
   */
  clearConfigAndSecretAllOverrides(): void;

  /**
   * Clears specified configuration including secrets for this instance on all override levels.
   */
  static clearConfigAndSecretAllOverrides(): void;

  /**
   * Clears every config and secret instance for this type and subtypes on all overrides lower than the specified
   * override (that is, Config#clearAllConfigAndSecretOverrides with App override parameter will clear all configs on
   * {@link ConfigOverride#APP} and {@link ConfigOverride#USER} level).
   *
   * @param override
   *        Specifies the {@link ConfigOverride} level of this config to clear. All overrides lower than this override
   *        will also be cleared.
   * @param confirm
   *        Confirmation from user that they understand and confirm deletion of this configuration.
   */
  static clearAllConfigAndSecretOverrides(override: string, confirm?: boolean): void;

  /**
   * @return this config without any secret values.
   */
  removeSecrets(): GenAiUiConfig | null;

  /**
   * @return this config without any secret values.
   */
  static removeSecrets(): GenAiUiConfig | null;

  /**
   * @return this config with only secret values.
   */
  removeNonSecrets(): GenAiUiConfig | null;

  /**
   * @return this config with only secret values.
   */
  static removeNonSecrets(): GenAiUiConfig | null;

  /**
   * Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
   * validation and setup.
   */
  validate(): GenAiUiConfig;

  /**
   * Validates and alters fields in the configuration to fit specific requirements. sub-types can override to add custom
   * validation and setup.
   */
  static validate(): GenAiUiConfig;

  /**
   * @return merged Json of all defined configuration templates for this instance including secrets.
   */
  static rawJson(configKey: string): any | null;

  /**
   * @return sets Json template for a specified override.
   */
  static setJson(configKey: string, json: any, secret?: boolean, override?: string): File;

  /**
   * @return sets Json template field for a specified override.
   */
  static setJsonValue(configKey: string, field: string, json: any, override?: string): File;

  /**
   * @return sets Json template field for a specified override.
   */
  static setJsonField(configKey: string, field: string, json: any, secret?: boolean, override?: string): File;

  /**
   * Returns json containing configuration template bindings for a provided config key. Override this method to provide your
   * own list of template bindings
   */
  static templateBindings(configKey: string): any | null;

  /**
   * Evaluate a given template by applying the default config bindings.
   * Default config bindings are:
   * 1. owner - owner of the config
   * 2. region - abbreviated region in which the cluster is
   * 3. cluster - current cluster id
   * 4. env - current env id
   * 5. app - current app id
   * 7. user - current user
   * 8. type - type on which this api is called
   * For example, "${owner}--${cluster}-${env}-${app}"
   *
   * @param template
   *            Template string that needs to be evaluated. For example, "${owner}--${cluster}-${env}-${app}-${schemaName}"
   * @param extraBindings
   *            Any additional binding params not included in the default config bindings
   * @return evaluated template
   */
  static evalTemplate(template: string, extraBindings?: Map_Type<string, string>): string;

  /**
   * Returns count of cached raw Json.
   */
  static rawJsonCacheSize(): number | null;

  /**
   * Returns instance of the cache for this type for raw Json.
   */
  static rawJsonNativeCache(): any | null;

  /**
   * @return the one and only instance to be used when member functions are called on this type.
   */
  static inst(): GenAiUiConfig;

  /**
   * Returns the config instance with the dynamic fields populated.
   * Returns false if multi-hop is enabled, otherwise returns true.
   */
  static getUiConfig(): GenAiUiConfig;

  /**
   * Returns the value of the attribution visibility
   */
  getAttributionVisibility(): string;

  /**
   * Returns the value of the attribution visibility
   */
  static getAttributionVisibility(): string;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λConsumer<T> {
  (t: T): void
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}

interface λPredicate<T> {
  (t: T): boolean
}
