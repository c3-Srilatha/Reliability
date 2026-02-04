declare namespace ChatAgentUi {
  export interface AnswerFeedback {

    readonly reaction?: string | null;
    withReaction(reaction: string | null): ChatAgentUi.AnswerFeedback;

    readonly userFeedback?: string | null;
    withUserFeedback(userFeedback: string | null): ChatAgentUi.AnswerFeedback;

    readonly desiredAnswer?: string | null;
    withDesiredAnswer(desiredAnswer: string | null): ChatAgentUi.AnswerFeedback;

    readonly feedbackCategories?: C3.Array<string | null>;
    withFeedbackCategories(feedbackCategories: C3.Array<string | null> | Array<string | null>): ChatAgentUi.AnswerFeedback;
  }
}

