export interface LukeTestStudioGenAiSidePanel {

  readonly luke: LukeBrowser;
  withLuke(luke: ILukeBrowser): LukeTestStudioGenAiSidePanel;

  readonly parentSelector?: string | null;
  withParentSelector(parentSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly spinner?: string | null;
  withSpinner(spinner: string | null): LukeTestStudioGenAiSidePanel;

  readonly renderingSelectors?: C3.Array<string | null>;
  withRenderingSelectors(renderingSelectors: C3.Array<string | null> | Array<string | null>): LukeTestStudioGenAiSidePanel;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): LukeTestStudioGenAiSidePanel;

  readonly actionGroupButtonSelector?: string | null;
  withActionGroupButtonSelector(actionGroupButtonSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly sidePanelHeaderSelector?: string | null;
  withSidePanelHeaderSelector(sidePanelHeaderSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly itemSelector?: string | null;
  withItemSelector(itemSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly closeIconSelector?: string | null;
  withCloseIconSelector(closeIconSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly openIconSelector?: string | null;
  withOpenIconSelector(openIconSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly sidePanelOpenSelector?: string | null;
  withSidePanelOpenSelector(sidePanelOpenSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly titleSelector?: string | null;
  withTitleSelector(titleSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly c3GenAiButtonSelector?: string | null;
  withC3GenAiButtonSelector(c3GenAiButtonSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly clientMessageSelector?: string | null;
  withClientMessageSelector(clientMessageSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly serverMessageSelector?: string | null;
  withServerMessageSelector(serverMessageSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly serverMessageContentSelector?: string | null;
  withServerMessageContentSelector(serverMessageContentSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly messageUsernameSelector?: string | null;
  withMessageUsernameSelector(messageUsernameSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly messageTimestampSelector?: string | null;
  withMessageTimestampSelector(messageTimestampSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly messageContentSelector?: string | null;
  withMessageContentSelector(messageContentSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly messageCodeBlockSelector?: string | null;
  withMessageCodeBlockSelector(messageCodeBlockSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly messageCodeBlockLanguageSelector?: string | null;
  withMessageCodeBlockLanguageSelector(messageCodeBlockLanguageSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly messageCodeBlockCopyButtonSelector?: string | null;
  withMessageCodeBlockCopyButtonSelector(messageCodeBlockCopyButtonSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly allMessagesSelector?: string | null;
  withAllMessagesSelector(allMessagesSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly errorMessageSelector?: string | null;
  withErrorMessageSelector(errorMessageSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly thumbsUpSelector?: string | null;
  withThumbsUpSelector(thumbsUpSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly thumbsUpFilledSelector?: string | null;
  withThumbsUpFilledSelector(thumbsUpFilledSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly thumbsDownSelector?: string | null;
  withThumbsDownSelector(thumbsDownSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly thumbsDownFilledSelector?: string | null;
  withThumbsDownFilledSelector(thumbsDownFilledSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly serverMessagePendingStateSelector?: string | null;
  withServerMessagePendingStateSelector(serverMessagePendingStateSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly textInputSelector?: string | null;
  withTextInputSelector(textInputSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly disabledTextInputSelector?: string | null;
  withDisabledTextInputSelector(disabledTextInputSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly cancelServerResponseButtonSelector?: string | null;
  withCancelServerResponseButtonSelector(cancelServerResponseButtonSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly startNewChatButtonSelector?: string | null;
  withStartNewChatButtonSelector(startNewChatButtonSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly arrowButtonSelector?: string | null;
  withArrowButtonSelector(arrowButtonSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly wideButtonSelector?: string | null;
  withWideButtonSelector(wideButtonSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly suggestionTitleSelector?: string | null;
  withSuggestionTitleSelector(suggestionTitleSelector: string | null): LukeTestStudioGenAiSidePanel;

  readonly suggestionItemSelector?: string | null;
  withSuggestionItemSelector(suggestionItemSelector: string | null): LukeTestStudioGenAiSidePanel;
}

