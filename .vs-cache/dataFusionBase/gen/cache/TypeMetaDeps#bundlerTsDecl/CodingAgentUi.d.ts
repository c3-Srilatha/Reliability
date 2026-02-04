export interface CodingAgentUi {

  readonly name: string;
  withName(name: string): CodingAgentUi;

  readonly icon?: string | null;
  withIcon(icon: string | null): CodingAgentUi;

  readonly tooltip?: string | null;
  withTooltip(tooltip: string | null): CodingAgentUi;

  readonly loadingMessages?: string | null;
  withLoadingMessages(loadingMessages: string | null): CodingAgentUi;
}

