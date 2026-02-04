declare namespace ChatAgentUi {
  export interface FeedbackSpec {

    readonly question: string;
    withQuestion(question: string): ChatAgentUi.FeedbackSpec;

    readonly answer: string;
    withAnswer(answer: string): ChatAgentUi.FeedbackSpec;

    readonly client: string;
    withClient(client: string): ChatAgentUi.FeedbackSpec;

    readonly serverVersion: string;
    withServerVersion(serverVersion: string): ChatAgentUi.FeedbackSpec;

    readonly chatHistory?: C3.Array<any | null>;
    withChatHistory(chatHistory: C3.Array<any | null> | Array<any | null>): ChatAgentUi.FeedbackSpec;

    readonly feedback?: ChatAgentUi.AnswerFeedback | null;
    withFeedback(feedback: IChatAgentUi.AnswerFeedback | null): ChatAgentUi.FeedbackSpec;
  }
}

