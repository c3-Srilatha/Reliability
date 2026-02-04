declare namespace ChatAgentUi {
  export interface Answer {

    readonly answer: string;
    withAnswer(answer: string): ChatAgentUi.Answer;

    readonly chatId?: string | null;
    withChatId(chatId: string | null): ChatAgentUi.Answer;

    readonly sources?: C3.Array<AiAssistant.Answer.SourceChunk | null>;
    withSources(sources: C3.Array<AiAssistant.Answer.SourceChunk | null> | Array<IAiAssistant.Answer.SourceChunk | null>): ChatAgentUi.Answer;

    readonly answerMetadata?: any | null;
    withAnswerMetadata(answerMetadata: any | null): ChatAgentUi.Answer;
  }
}

