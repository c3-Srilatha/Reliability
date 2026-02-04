export interface DataFusionCodeEditorContainer {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): DataFusionCodeEditorContainer;

  readonly id?: string | null;
  withId(id: string | null): DataFusionCodeEditorContainer;

  readonly name?: string | null;
  withName(name: string | null): DataFusionCodeEditorContainer;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): DataFusionCodeEditorContainer;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): DataFusionCodeEditorContainer;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): DataFusionCodeEditorContainer;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): DataFusionCodeEditorContainer;

  readonly isNewEntity?: boolean;
  withIsNewEntity(isNewEntity: boolean): DataFusionCodeEditorContainer;

  readonly isRemix?: boolean;
  withIsRemix(isRemix: boolean): DataFusionCodeEditorContainer;

  readonly activeTypeName?: string | null;
  withActiveTypeName(activeTypeName: string | null): DataFusionCodeEditorContainer;

  readonly codeEditorTemplates?: C3.Array<any | null>;
  withCodeEditorTemplates(codeEditorTemplates: C3.Array<any | null> | Array<any | null>): DataFusionCodeEditorContainer;

  readonly typeDeclarationCode?: string | null;
  withTypeDeclarationCode(typeDeclarationCode: string | null): DataFusionCodeEditorContainer;

  readonly initialTypeDeclarationCode?: string | null;
  withInitialTypeDeclarationCode(initialTypeDeclarationCode: string | null): DataFusionCodeEditorContainer;

  readonly typeImplementationJsCode?: string | null;
  withTypeImplementationJsCode(typeImplementationJsCode: string | null): DataFusionCodeEditorContainer;

  readonly remixImplementationJsCode?: string | null;
  withRemixImplementationJsCode(remixImplementationJsCode: string | null): DataFusionCodeEditorContainer;

  readonly initialTypeImplementationJsCode?: string | null;
  withInitialTypeImplementationJsCode(initialTypeImplementationJsCode: string | null): DataFusionCodeEditorContainer;

  readonly initialRemixImplementationJsCode?: string | null;
  withInitialRemixImplementationJsCode(initialRemixImplementationJsCode: string | null): DataFusionCodeEditorContainer;

  readonly functionNamesList?: C3.Array<string | null>;
  withFunctionNamesList(functionNamesList: C3.Array<string | null> | Array<string | null>): DataFusionCodeEditorContainer;

  readonly functionDeclarations?: C3.Map<string | null, string | null>;
  withFunctionDeclarations(functionDeclarations: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): DataFusionCodeEditorContainer;

  readonly functionImplementationStatus?: C3.Map<string | null, boolean>;
  withFunctionImplementationStatus(functionImplementationStatus: C3.Map<string | null, boolean> | {[key: string | null]: boolean}): DataFusionCodeEditorContainer;

  readonly remixDeclarationCode?: string | null;
  withRemixDeclarationCode(remixDeclarationCode: string | null): DataFusionCodeEditorContainer;

  readonly resolvedDeclarationCode?: string | null;
  withResolvedDeclarationCode(resolvedDeclarationCode: string | null): DataFusionCodeEditorContainer;

  readonly visibleEditorPane?: string | null;
  withVisibleEditorPane(visibleEditorPane: string | null): DataFusionCodeEditorContainer;

  readonly editorPaneMode?: string | null;
  withEditorPaneMode(editorPaneMode: string | null): DataFusionCodeEditorContainer;

  readonly remixPaneMode?: string | null;
  withRemixPaneMode(remixPaneMode: string | null): DataFusionCodeEditorContainer;

  readonly remixEditMode?: string | null;
  withRemixEditMode(remixEditMode: string | null): DataFusionCodeEditorContainer;

  readonly codeEditorDataLoading?: boolean;
  withCodeEditorDataLoading(codeEditorDataLoading: boolean): DataFusionCodeEditorContainer;

  readonly didSetInitialRemixCode?: boolean;
  withDidSetInitialRemixCode(didSetInitialRemixCode: boolean): DataFusionCodeEditorContainer;

  readonly isEvaluatingSyntax?: boolean;
  withIsEvaluatingSyntax(isEvaluatingSyntax: boolean): DataFusionCodeEditorContainer;

  readonly isCreatingOrUpdatingEntity?: boolean;
  withIsCreatingOrUpdatingEntity(isCreatingOrUpdatingEntity: boolean): DataFusionCodeEditorContainer;

  readonly codeEditorConsoleIssues?: C3.Map<string | null, C3.Array<Pkg.Issue | null>>;
  withCodeEditorConsoleIssues(codeEditorConsoleIssues: C3.Map<string | null, C3.Array<Pkg.Issue | null>> | {[key: string | null]: C3.Array<Pkg.Issue | null> | Array<IPkg.Issue | null>}): DataFusionCodeEditorContainer;

  readonly shouldFetchCodeEditorConsoleIssues?: boolean;
  withShouldFetchCodeEditorConsoleIssues(shouldFetchCodeEditorConsoleIssues: boolean): DataFusionCodeEditorContainer;

  readonly codeEditorConsoleIssuesFetchCount?: number | null;
  withCodeEditorConsoleIssuesFetchCount(codeEditorConsoleIssuesFetchCount: number | null): DataFusionCodeEditorContainer;

  readonly codeEditorCreateUpdateModalTexts?: C3.Map<string | null, string | null>;
  withCodeEditorCreateUpdateModalTexts(codeEditorCreateUpdateModalTexts: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): DataFusionCodeEditorContainer;

  readonly codeEditorSuggestedFileContent?: C3.Map<string | null, string | null>;
  withCodeEditorSuggestedFileContent(codeEditorSuggestedFileContent: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): DataFusionCodeEditorContainer;

  readonly codeEditorOriginalFileContent?: C3.Map<string | null, string | null>;
  withCodeEditorOriginalFileContent(codeEditorOriginalFileContent: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): DataFusionCodeEditorContainer;

  readonly codeEditorDiffPatches?: C3.Map<string | null, C3.Array<any | null>>;
  withCodeEditorDiffPatches(codeEditorDiffPatches: C3.Map<string | null, C3.Array<any | null>> | {[key: string | null]: C3.Array<any | null> | Array<any | null>}): DataFusionCodeEditorContainer;

  readonly pendingResolutionMessageIds?: C3.Map<string | null, string | null>;
  withPendingResolutionMessageIds(pendingResolutionMessageIds: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): DataFusionCodeEditorContainer;
}

