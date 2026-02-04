export interface StudioGenAiState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): StudioGenAiState;

  readonly id?: string | null;
  withId(id: string | null): StudioGenAiState;

  readonly name?: string | null;
  withName(name: string | null): StudioGenAiState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): StudioGenAiState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): StudioGenAiState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): StudioGenAiState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): StudioGenAiState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): StudioGenAiState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): StudioGenAiState;

  readonly chatAgents?: C3.Array<StudioGenAiState.ChatAgentUi | null>;
  withChatAgents(chatAgents: C3.Array<StudioGenAiState.ChatAgentUi | null> | Array<IStudioGenAiState.ChatAgentUi | null>): StudioGenAiState;

  readonly context?: C3.Array<StudioGenAiState.Context | null>;
  withContext(context: C3.Array<StudioGenAiState.Context | null> | Array<IStudioGenAiState.Context | null>): StudioGenAiState;

  readonly questionAnswerPairs?: C3.Array<StudioGenAiQuestionAnswerPair | null>;
  withQuestionAnswerPairs(questionAnswerPairs: C3.Array<StudioGenAiQuestionAnswerPair | null> | Array<IStudioGenAiQuestionAnswerPair | null>): StudioGenAiState;

  readonly chatSessionId?: string | null;
  withChatSessionId(chatSessionId: string | null): StudioGenAiState;

  readonly version?: string | null;
  withVersion(version: string | null): StudioGenAiState;

  readonly genAiSidePanelComponentId?: string | null;
  withGenAiSidePanelComponentId(genAiSidePanelComponentId: string | null): StudioGenAiState;
}

