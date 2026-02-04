export interface StudioGenAiQuestionAnswerPair {

  readonly id?: string | null;
  withId(id: string | null): StudioGenAiQuestionAnswerPair;

  readonly question?: StudioGenAiChatMessage | null;
  withQuestion(question: IStudioGenAiChatMessage | null): StudioGenAiQuestionAnswerPair;

  readonly answer?: StudioGenAiChatMessage | null;
  withAnswer(answer: IStudioGenAiChatMessage | null): StudioGenAiQuestionAnswerPair;
}

