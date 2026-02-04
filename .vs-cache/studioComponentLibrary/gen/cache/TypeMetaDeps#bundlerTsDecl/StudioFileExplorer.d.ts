export interface StudioFileExplorer {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioFileExplorer;

  readonly id?: string | null;
  withId(id: string | null): StudioFileExplorer;

  readonly name?: string | null;
  withName(name: string | null): StudioFileExplorer;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioFileExplorer;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioFileExplorer;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioFileExplorer;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioFileExplorer;

  readonly currentRoot?: string | UiSdlDynamicValueSpec | null | null;
  withCurrentRoot(currentRoot: string | IUiSdlDynamicValueSpec | null | null): StudioFileExplorer;

  readonly fileSysType: string;
  withFileSysType(fileSysType: string): StudioFileExplorer;

  readonly customMenuActions?: C3.Array<UiSdlAction | null>;
  withCustomMenuActions(customMenuActions: C3.Array<UiSdlAction | null> | Array<IUiSdlAction | null>): StudioFileExplorer;

  readonly actionFilterer?: StudioFileExplorerBaseActionFilterer | null;
  withActionFilterer(actionFilterer: IStudioFileExplorerBaseActionFilterer | null): StudioFileExplorer;

  readonly selectionMode?: string | null;
  withSelectionMode(selectionMode: string | null): StudioFileExplorer;

  readonly selectionKinds?: C3.Array<string | null>;
  withSelectionKinds(selectionKinds: C3.Array<string | null> | Array<string | null>): StudioFileExplorer;

  readonly height?: number | null;
  withHeight(height: number | null): StudioFileExplorer;

  readonly width?: number | null;
  withWidth(width: number | null): StudioFileExplorer;

  readonly nodeSize?: number | null;
  withNodeSize(nodeSize: number | null): StudioFileExplorer;

  readonly loading?: boolean;
  withLoading(loading: boolean): StudioFileExplorer;

  readonly selectedPaths?: C3.Map<string | null, boolean>;
  withSelectedPaths(selectedPaths: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): StudioFileExplorer;

  readonly allFiles?: C3.Map<string | null, FileExplorerFileInfo | null>;
  withAllFiles(allFiles: C3.Map<string | null, FileExplorerFileInfo | null> | {[key: string | null]: IFileExplorerFileInfo | null}): StudioFileExplorer;

  readonly expandedFolders?: C3.Map<string | null, boolean>;
  withExpandedFolders(expandedFolders: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): StudioFileExplorer;

  readonly expandingFolders?: C3.Map<string | null, boolean>;
  withExpandingFolders(expandingFolders: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): StudioFileExplorer;

  readonly emptyState?: UiSdlComponentRef<UiSdlComponent | null> | null;
  withEmptyState(emptyState: IUiSdlComponentRef<UiSdlComponent | null> | null): StudioFileExplorer;

  readonly rootMountUrl?: string | null;
  withRootMountUrl(rootMountUrl: string | null): StudioFileExplorer;

  readonly alternativeRootMountUrl?: string | null;
  withAlternativeRootMountUrl(alternativeRootMountUrl: string | null): StudioFileExplorer;

  readonly displayedFileContent?: string | null;
  withDisplayedFileContent(displayedFileContent: string | null): StudioFileExplorer;

  readonly errorMessages?: C3.Array<string | null>;
  withErrorMessages(errorMessages: C3.Array<string | null> | Array<string | null>): StudioFileExplorer;

  readonly readOnlyMode?: boolean;
  withReadOnlyMode(readOnlyMode: boolean): StudioFileExplorer;

  readonly expandable?: boolean;
  withExpandable(expandable: boolean): StudioFileExplorer;

  readonly explorable?: boolean;
  withExplorable(explorable: boolean): StudioFileExplorer;

  readonly useFullPathForName?: boolean;
  withUseFullPathForName(useFullPathForName: boolean): StudioFileExplorer;

  readonly fileChildrenInfos?: C3.Array<FileExplorerFileInfo | null>;
  withFileChildrenInfos(fileChildrenInfos: C3.Array<FileExplorerFileInfo | null> | Array<IFileExplorerFileInfo | null>): StudioFileExplorer;

  readonly fileTypeFilters?: C3.Array<string | null>;
  withFileTypeFilters(fileTypeFilters: C3.Array<string | null> | Array<string | null>): StudioFileExplorer;

  readonly autonomous?: boolean;
  withAutonomous(autonomous: boolean): StudioFileExplorer;
}

