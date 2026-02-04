export interface DataFusionCodeEditorContainerReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): DataFusionCodeEditorContainerReact;

  readonly id?: string | null;
  withId(id: string | null): DataFusionCodeEditorContainerReact;

  readonly name?: string | null;
  withName(name: string | null): DataFusionCodeEditorContainerReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): DataFusionCodeEditorContainerReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): DataFusionCodeEditorContainerReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): DataFusionCodeEditorContainerReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): DataFusionCodeEditorContainerReact;

  readonly isNewEntity?: boolean;
  withIsNewEntity(isNewEntity: boolean): DataFusionCodeEditorContainerReact;

  readonly isRemix?: boolean;
  withIsRemix(isRemix: boolean): DataFusionCodeEditorContainerReact;

  readonly activeTypeName?: string | null;
  withActiveTypeName(activeTypeName: string | null): DataFusionCodeEditorContainerReact;

  readonly codeEditorTemplates?: C3.Array<any | null>;
  withCodeEditorTemplates(codeEditorTemplates: C3.Array<any | null> | Array<any | null>): DataFusionCodeEditorContainerReact;

  readonly typeDeclarationCode?: string | null;
  withTypeDeclarationCode(typeDeclarationCode: string | null): DataFusionCodeEditorContainerReact;

  readonly initialTypeDeclarationCode?: string | null;
  withInitialTypeDeclarationCode(initialTypeDeclarationCode: string | null): DataFusionCodeEditorContainerReact;

  readonly typeImplementationJsCode?: string | null;
  withTypeImplementationJsCode(typeImplementationJsCode: string | null): DataFusionCodeEditorContainerReact;

  readonly remixImplementationJsCode?: string | null;
  withRemixImplementationJsCode(remixImplementationJsCode: string | null): DataFusionCodeEditorContainerReact;

  readonly initialTypeImplementationJsCode?: string | null;
  withInitialTypeImplementationJsCode(initialTypeImplementationJsCode: string | null): DataFusionCodeEditorContainerReact;

  readonly initialRemixImplementationJsCode?: string | null;
  withInitialRemixImplementationJsCode(initialRemixImplementationJsCode: string | null): DataFusionCodeEditorContainerReact;

  readonly functionNamesList?: C3.Array<string | null>;
  withFunctionNamesList(functionNamesList: C3.Array<string | null> | Array<string | null>): DataFusionCodeEditorContainerReact;

  readonly functionDeclarations?: C3.Map<string | null, string | null>;
  withFunctionDeclarations(functionDeclarations: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): DataFusionCodeEditorContainerReact;

  readonly functionImplementationStatus?: C3.Map<string | null, boolean>;
  withFunctionImplementationStatus(functionImplementationStatus: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): DataFusionCodeEditorContainerReact;

  readonly remixDeclarationCode?: string | null;
  withRemixDeclarationCode(remixDeclarationCode: string | null): DataFusionCodeEditorContainerReact;

  readonly resolvedDeclarationCode?: string | null;
  withResolvedDeclarationCode(resolvedDeclarationCode: string | null): DataFusionCodeEditorContainerReact;

  readonly visibleEditorPane?: string | null;
  withVisibleEditorPane(visibleEditorPane: string | null): DataFusionCodeEditorContainerReact;

  readonly editorPaneMode?: string | null;
  withEditorPaneMode(editorPaneMode: string | null): DataFusionCodeEditorContainerReact;

  readonly remixPaneMode?: string | null;
  withRemixPaneMode(remixPaneMode: string | null): DataFusionCodeEditorContainerReact;

  readonly remixEditMode?: string | null;
  withRemixEditMode(remixEditMode: string | null): DataFusionCodeEditorContainerReact;

  readonly codeEditorDataLoading?: boolean;
  withCodeEditorDataLoading(codeEditorDataLoading: boolean): DataFusionCodeEditorContainerReact;

  readonly didSetInitialRemixCode?: boolean;
  withDidSetInitialRemixCode(didSetInitialRemixCode: boolean): DataFusionCodeEditorContainerReact;

  readonly isEvaluatingSyntax?: boolean;
  withIsEvaluatingSyntax(isEvaluatingSyntax: boolean): DataFusionCodeEditorContainerReact;

  readonly isCreatingOrUpdatingEntity?: boolean;
  withIsCreatingOrUpdatingEntity(isCreatingOrUpdatingEntity: boolean): DataFusionCodeEditorContainerReact;

  readonly codeEditorConsoleIssues?: C3.Map<string | null, C3.Array<Pkg.Issue | null>>;
  withCodeEditorConsoleIssues(codeEditorConsoleIssues: C3.Map<string | null, C3.Array<Pkg.Issue | null>> | {[key: string | null]: C3.Array<Pkg.Issue | null> | Array<IPkg.Issue | null>}): DataFusionCodeEditorContainerReact;

  readonly shouldFetchCodeEditorConsoleIssues?: boolean;
  withShouldFetchCodeEditorConsoleIssues(shouldFetchCodeEditorConsoleIssues: boolean): DataFusionCodeEditorContainerReact;

  readonly codeEditorConsoleIssuesFetchCount?: number | null;
  withCodeEditorConsoleIssuesFetchCount(codeEditorConsoleIssuesFetchCount: number | null): DataFusionCodeEditorContainerReact;

  readonly codeEditorCreateUpdateModalTexts?: C3.Map<string | null, string | null>;
  withCodeEditorCreateUpdateModalTexts(codeEditorCreateUpdateModalTexts: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): DataFusionCodeEditorContainerReact;

  readonly codeEditorSuggestedFileContent?: C3.Map<string | null, string | null>;
  withCodeEditorSuggestedFileContent(codeEditorSuggestedFileContent: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): DataFusionCodeEditorContainerReact;

  readonly codeEditorOriginalFileContent?: C3.Map<string | null, string | null>;
  withCodeEditorOriginalFileContent(codeEditorOriginalFileContent: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): DataFusionCodeEditorContainerReact;

  readonly codeEditorDiffPatches?: C3.Map<string | null, C3.Array<any | null>>;
  withCodeEditorDiffPatches(codeEditorDiffPatches: C3.Map<string | null, C3.Array<any | null>> | {[key: string | null]: C3.Array<any | null> | Array<any | null>}): DataFusionCodeEditorContainerReact;

  readonly pendingResolutionMessageIds?: C3.Map<string | null, string | null>;
  withPendingResolutionMessageIds(pendingResolutionMessageIds: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): DataFusionCodeEditorContainerReact;
}

