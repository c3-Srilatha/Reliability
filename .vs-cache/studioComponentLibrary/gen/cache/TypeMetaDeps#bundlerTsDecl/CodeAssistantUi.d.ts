export interface CodeAssistantUi {

  readonly name: string;
  withName(name: string): CodeAssistantUi;

  readonly icon?: string | null;
  withIcon(icon: string | null): CodeAssistantUi;

  readonly tooltip?: string | null;
  withTooltip(tooltip: string | null): CodeAssistantUi;

  readonly loadingMessages?: string | null;
  withLoadingMessages(loadingMessages: string | null): CodeAssistantUi;
}

