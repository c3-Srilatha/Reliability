export interface StudioFileExplorerReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioFileExplorerReact;

  readonly id?: string | null;
  withId(id: string | null): StudioFileExplorerReact;

  readonly name?: string | null;
  withName(name: string | null): StudioFileExplorerReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioFileExplorerReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioFileExplorerReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioFileExplorerReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioFileExplorerReact;

  readonly currentRoot?: string | UiSdlDynamicValueSpec | null | null;
  withCurrentRoot(currentRoot: string | IUiSdlDynamicValueSpec | null | null): StudioFileExplorerReact;

  readonly fileSysType: string;
  withFileSysType(fileSysType: string): StudioFileExplorerReact;

  readonly customMenuActions?: C3.Array<UiSdlAction | null>;
  withCustomMenuActions(customMenuActions: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): StudioFileExplorerReact;

  readonly actionFilterer?: StudioFileExplorerBaseActionFilterer | null;
  withActionFilterer(actionFilterer: IStudioFileExplorerBaseActionFilterer | null): StudioFileExplorerReact;

  readonly selectionMode?: string | null;
  withSelectionMode(selectionMode: string | null): StudioFileExplorerReact;

  readonly selectionKinds?: C3.Array<string | null>;
  withSelectionKinds(selectionKinds: C3.Array<string | null> | Array<string | null>): StudioFileExplorerReact;

  readonly height?: number | null;
  withHeight(height: number | null): StudioFileExplorerReact;

  readonly width?: number | null;
  withWidth(width: number | null): StudioFileExplorerReact;

  readonly nodeSize?: number | null;
  withNodeSize(nodeSize: number | null): StudioFileExplorerReact;

  readonly loading?: boolean;
  withLoading(loading: boolean): StudioFileExplorerReact;

  readonly selectedPaths?: C3.Map<string | null, boolean>;
  withSelectedPaths(selectedPaths: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): StudioFileExplorerReact;

  readonly allFiles?: C3.Map<string | null, FileExplorerFileInfo | null>;
  withAllFiles(allFiles: C3.Map<string | null, FileExplorerFileInfo | null> | {[key: string | null]: IFileExplorerFileInfo | null}): StudioFileExplorerReact;

  readonly expandedFolders?: C3.Map<string | null, boolean>;
  withExpandedFolders(expandedFolders: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): StudioFileExplorerReact;

  readonly expandingFolders?: C3.Map<string | null, boolean>;
  withExpandingFolders(expandingFolders: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): StudioFileExplorerReact;

  readonly emptyState?: UiSdlComponentRef<UiSdlComponent | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlComponent | null> | null): StudioFileExplorerReact;

  readonly rootMountUrl?: string | null;
  withRootMountUrl(rootMountUrl: string | null): StudioFileExplorerReact;

  readonly alternativeRootMountUrl?: string | null;
  withAlternativeRootMountUrl(alternativeRootMountUrl: string | null): StudioFileExplorerReact;

  readonly displayedFileContent?: string | null;
  withDisplayedFileContent(displayedFileContent: string | null): StudioFileExplorerReact;

  readonly errorMessages?: C3.Array<string | null>;
  withErrorMessages(errorMessages: C3.Array<string | null> | Array<string | null>): StudioFileExplorerReact;

  readonly readOnlyMode?: boolean;
  withReadOnlyMode(readOnlyMode: boolean): StudioFileExplorerReact;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): StudioFileExplorerReact;

  readonly explorable?: boolean;
  withExplorable(explorable: boolean): StudioFileExplorerReact;

  readonly useFullPathForName?: boolean;
  withUseFullPathForName(useFullPathForName: boolean): StudioFileExplorerReact;

  readonly fileChildrenInfos?: C3.Array<FileExplorerFileInfo | null>;
  withFileChildrenInfos(fileChildrenInfos: C3.Array<FileExplorerFileInfo | null> | Array<IFileExplorerFileInfo | null>): StudioFileExplorerReact;

  readonly fileTypeFilters?: C3.Array<string | null>;
  withFileTypeFilters(fileTypeFilters: C3.Array<string | null> | Array<string | null>): StudioFileExplorerReact;

  readonly autonomous?: boolean;
  withAutonomous(autonomous: boolean): StudioFileExplorerReact;
}

