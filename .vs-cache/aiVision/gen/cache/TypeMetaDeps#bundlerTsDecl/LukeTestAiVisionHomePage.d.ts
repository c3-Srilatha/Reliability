export interface LukeTestAiVisionHomePage {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestAiVisionHomePage;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestAiVisionHomePage;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestAiVisionHomePage;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestAiVisionHomePage;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestAiVisionHomePage;

  readonly pageComponentId?: string | null;
  withPageComponentId(pageComponentId: string | null): LukeTestAiVisionHomePage;

  readonly username?: string | null;
  withUsername(username: string | null): LukeTestAiVisionHomePage;

  readonly password?: string | null;
  withPassword(password: string | null): LukeTestAiVisionHomePage;

  readonly path?: string | null;
  withPath(path: string | null): LukeTestAiVisionHomePage;

  readonly domain?: string | null;
  withDomain(domain: string | null): LukeTestAiVisionHomePage;

  readonly baseUrl?: string | null;
  withBaseUrl(baseUrl: string | null): LukeTestAiVisionHomePage;

  readonly pathParams?: C3.Map<string | null, string | null>;
  withPathParams(pathParams: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): LukeTestAiVisionHomePage;

  readonly paramsId?: string | null;
  withParamsId(paramsId: string | null): LukeTestAiVisionHomePage;

  readonly additionalParams?: any | null;
  withAdditionalParams(additionalParams: any | null): LukeTestAiVisionHomePage;

  readonly fragment?: string | null;
  withFragment(fragment: string | null): LukeTestAiVisionHomePage;

  readonly title?: string | null;
  withTitle(title: string | null): LukeTestAiVisionHomePage;

  readonly modalElement?: string | null;
  withModalElement(modalElement: string | null): LukeTestAiVisionHomePage;

  readonly modalTitleElement?: string | null;
  withModalTitleElement(modalTitleElement: string | null): LukeTestAiVisionHomePage;

  readonly modalBodyElement?: string | null;
  withModalBodyElement(modalBodyElement: string | null): LukeTestAiVisionHomePage;

  readonly breadcrumbsEl?: string | null;
  withBreadcrumbsEl(breadcrumbsEl: string | null): LukeTestAiVisionHomePage;

  readonly sideSubMenuMinimizeButtonEl?: string | null;
  withSideSubMenuMinimizeButtonEl(sideSubMenuMinimizeButtonEl: string | null): LukeTestAiVisionHomePage;

  readonly sideSubMenuContainerEl?: string | null;
  withSideSubMenuContainerEl(sideSubMenuContainerEl: string | null): LukeTestAiVisionHomePage;

  readonly sideSubMenuNavContainerEl?: string | null;
  withSideSubMenuNavContainerEl(sideSubMenuNavContainerEl: string | null): LukeTestAiVisionHomePage;

  readonly dependencyCrumbsEl?: string | null;
  withDependencyCrumbsEl(dependencyCrumbsEl: string | null): LukeTestAiVisionHomePage;

  readonly sideSubMenuItemEl?: string | null;
  withSideSubMenuItemEl(sideSubMenuItemEl: string | null): LukeTestAiVisionHomePage;

  readonly sideMenuCollapseButton?: string | null;
  withSideMenuCollapseButton(sideMenuCollapseButton: string | null): LukeTestAiVisionHomePage;

  readonly pageGroup?: string | null;
  withPageGroup(pageGroup: string | null): LukeTestAiVisionHomePage;

  readonly contentFrameSelector?: string | null;
  withContentFrameSelector(contentFrameSelector: string | null): LukeTestAiVisionHomePage;

  readonly contentFrameTitleSelector?: string | null;
  withContentFrameTitleSelector(contentFrameTitleSelector: string | null): LukeTestAiVisionHomePage;

  readonly contentFrameSegmentsSelector?: string | null;
  withContentFrameSegmentsSelector(contentFrameSegmentsSelector: string | null): LukeTestAiVisionHomePage;

  readonly contentFrameFirstSegmentTitleSelector?: string | null;
  withContentFrameFirstSegmentTitleSelector(contentFrameFirstSegmentTitleSelector: string | null): LukeTestAiVisionHomePage;

  readonly contentFrameFirstSegmentButtonsSelector?: string | null;
  withContentFrameFirstSegmentButtonsSelector(contentFrameFirstSegmentButtonsSelector: string | null): LukeTestAiVisionHomePage;

  readonly contentFrameSecSegmentTitleSelector?: string | null;
  withContentFrameSecSegmentTitleSelector(contentFrameSecSegmentTitleSelector: string | null): LukeTestAiVisionHomePage;

  readonly contentFrameSecSegmentContentSelector?: string | null;
  withContentFrameSecSegmentContentSelector(contentFrameSecSegmentContentSelector: string | null): LukeTestAiVisionHomePage;

  readonly cesiumViewerSelector?: string | null;
  withCesiumViewerSelector(cesiumViewerSelector: string | null): LukeTestAiVisionHomePage;

  readonly legendWrapperSelector?: string | null;
  withLegendWrapperSelector(legendWrapperSelector: string | null): LukeTestAiVisionHomePage;

  readonly legendTitleSelector?: string | null;
  withLegendTitleSelector(legendTitleSelector: string | null): LukeTestAiVisionHomePage;

  readonly legendGroupsSelector?: string | null;
  withLegendGroupsSelector(legendGroupsSelector: string | null): LukeTestAiVisionHomePage;

  readonly mapControlsSelector?: string | null;
  withMapControlsSelector(mapControlsSelector: string | null): LukeTestAiVisionHomePage;

  readonly locationWrapperSelector?: string | null;
  withLocationWrapperSelector(locationWrapperSelector: string | null): LukeTestAiVisionHomePage;

  readonly locationButtonSelector?: string | null;
  withLocationButtonSelector(locationButtonSelector: string | null): LukeTestAiVisionHomePage;

  readonly locationInputSelector?: string | null;
  withLocationInputSelector(locationInputSelector: string | null): LukeTestAiVisionHomePage;

  readonly mapAngleSelector?: string | null;
  withMapAngleSelector(mapAngleSelector: string | null): LukeTestAiVisionHomePage;

  readonly dropdownMapAngleSelector?: string | null;
  withDropdownMapAngleSelector(dropdownMapAngleSelector: string | null): LukeTestAiVisionHomePage;

  readonly navigationControlSelector?: string | null;
  withNavigationControlSelector(navigationControlSelector: string | null): LukeTestAiVisionHomePage;

  readonly navigationZoomSelector?: string | null;
  withNavigationZoomSelector(navigationZoomSelector: string | null): LukeTestAiVisionHomePage;

  readonly timelineSelector?: string | null;
  withTimelineSelector(timelineSelector: string | null): LukeTestAiVisionHomePage;

  readonly speedControlSelector?: string | null;
  withSpeedControlSelector(speedControlSelector: string | null): LukeTestAiVisionHomePage;

  readonly playButtonSelector?: string | null;
  withPlayButtonSelector(playButtonSelector: string | null): LukeTestAiVisionHomePage;

  readonly pauseButtonSelector?: string | null;
  withPauseButtonSelector(pauseButtonSelector: string | null): LukeTestAiVisionHomePage;

  readonly tooltipSelector?: string | null;
  withTooltipSelector(tooltipSelector: string | null): LukeTestAiVisionHomePage;
}

