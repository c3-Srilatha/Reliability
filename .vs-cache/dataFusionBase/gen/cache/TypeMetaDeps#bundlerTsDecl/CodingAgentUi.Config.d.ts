declare namespace CodingAgentUi {
  export interface Config {

    readonly configOverride?: string | null;
    withConfigOverride(configOverride: string | null): CodingAgentUi.Config;

    static readonly configOverride?: string | null;

    readonly secretOverride?: string | null;
    withSecretOverride(secretOverride: string | null): CodingAgentUi.Config;

    static readonly secretOverride?: string | null;

    readonly issues?: C3.Array<string | null>;
    withIssues(issues: C3.Array<string | null> | Array<string | null>): CodingAgentUi.Config;

    static readonly issues?: C3.Array<string | null>;

    readonly llmName?: string | null;
    withLlmName(llmName: string | null): CodingAgentUi.Config;

    static readonly llmName?: string | null;

    readonly systemPrompt?: string | null;
    withSystemPrompt(systemPrompt: string | null): CodingAgentUi.Config;

    static readonly systemPrompt?: string | null;
  }
}

