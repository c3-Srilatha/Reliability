export interface UiSdlWebWorkerMessage {

  readonly action?: string | null;
  withAction(action: string | null): UiSdlWebWorkerMessage;

  readonly payload?: C3.Map<string | null, any>;
  withPayload(payload: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlWebWorkerMessage;

  readonly messageId?: string | null;
  withMessageId(messageId: string | null): UiSdlWebWorkerMessage;

  readonly requestId?: string | null;
  withRequestId(requestId: string | null): UiSdlWebWorkerMessage;

  readonly failure?: C3.Map<string | null, any>;
  withFailure(failure: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlWebWorkerMessage;

  readonly content?: C3.Map<string | null, any>;
  withContent(content: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlWebWorkerMessage;
}

