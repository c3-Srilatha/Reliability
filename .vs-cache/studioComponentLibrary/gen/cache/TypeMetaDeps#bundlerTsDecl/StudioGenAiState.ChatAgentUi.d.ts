declare namespace StudioGenAiState {
  export interface ChatAgentUi {

    readonly agentTypeName: string;
    withAgentTypeName(agentTypeName: string): StudioGenAiState.ChatAgentUi;

    readonly enabled: boolean;
    withEnabled(enabled: boolean): StudioGenAiState.ChatAgentUi;

    readonly icon?: string | null;
    withIcon(icon: string | null): StudioGenAiState.ChatAgentUi;

    readonly content?: string | null;
    withContent(content: string | null): StudioGenAiState.ChatAgentUi;

    readonly tooltip?: string | null;
    withTooltip(tooltip: string | null): StudioGenAiState.ChatAgentUi;

    readonly loadingMessages?: string | null;
    withLoadingMessages(loadingMessages: string | null): StudioGenAiState.ChatAgentUi;
  }
}

