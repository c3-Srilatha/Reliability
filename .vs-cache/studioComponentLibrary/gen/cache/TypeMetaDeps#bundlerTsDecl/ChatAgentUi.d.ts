export interface ChatAgentUi {

  readonly name: string;
  withName(name: string): ChatAgentUi;

  readonly icon?: string | null;
  withIcon(icon: string | null): ChatAgentUi;

  readonly tooltip?: string | null;
  withTooltip(tooltip: string | null): ChatAgentUi;

  readonly loadingMessages?: string | null;
  withLoadingMessages(loadingMessages: string | null): ChatAgentUi;
}

