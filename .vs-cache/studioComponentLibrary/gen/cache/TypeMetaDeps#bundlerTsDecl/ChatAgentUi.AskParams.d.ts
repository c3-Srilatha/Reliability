declare namespace ChatAgentUi {
  export interface AskParams {

    readonly question: string;
    withQuestion(question: string): ChatAgentUi.AskParams;

    readonly chatId: string;
    withChatId(chatId: string): ChatAgentUi.AskParams;

    readonly serverVersion?: string | null;
    withServerVersion(serverVersion: string | null): ChatAgentUi.AskParams;

    readonly chatHistory?: C3.Array<any | null>;
    withChatHistory(chatHistory: C3.Array<any | null> | Array<any | null>): ChatAgentUi.AskParams;

    readonly context?: C3.Array<StudioGenAiState.Context | null>;
    withContext(context: C3.Array<StudioGenAiState.Context | null> | Array<IStudioGenAiState.Context | null>): ChatAgentUi.AskParams;
  }
}

