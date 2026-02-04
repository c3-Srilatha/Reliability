export interface StudioGenAiChatMessage {

  readonly id?: string | null;
  withId(id: string | null): StudioGenAiChatMessage;

  readonly user?: User | null;
  withUser(user: IUser | null): StudioGenAiChatMessage;

  readonly message?: string | null;
  withMessage(message: string | null): StudioGenAiChatMessage;

  readonly timestamp: DateTime;
  withTimestamp(timestamp: IDateTime): StudioGenAiChatMessage;

  readonly status?: string | null;
  withStatus(status: string | null): StudioGenAiChatMessage;

  readonly thumbsUp?: boolean;
  withThumbsUp(thumbsUp: boolean): StudioGenAiChatMessage;

  readonly thumbsDown?: boolean;
  withThumbsDown(thumbsDown: boolean): StudioGenAiChatMessage;

  readonly feedbackId?: string | null;
  withFeedbackId(feedbackId: string | null): StudioGenAiChatMessage;

  readonly loadingMessages?: C3.Array<string | null>;
  withLoadingMessages(loadingMessages: C3.Array<string | null> | Array<string | null>): StudioGenAiChatMessage;
}

