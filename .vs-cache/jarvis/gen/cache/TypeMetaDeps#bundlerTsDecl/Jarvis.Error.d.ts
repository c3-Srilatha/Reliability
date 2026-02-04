declare namespace Jarvis {
  export interface Error {

    readonly message?: string | null;
    withMessage(message: string | null): Jarvis.Error;

    readonly template?: string | null;
    withTemplate(template: string | null): Jarvis.Error;

    readonly parameters?: C3.Array<string | null>;
    withParameters(parameters: C3.Array<string | null> | Array<string | null>): Jarvis.Error;

    readonly id?: string | null;
    withId(id: string | null): Jarvis.Error;

    readonly key?: string | null;
    withKey(key: string | null): Jarvis.Error;

    readonly cause?: C3.Error | null;
    withCause(cause: IC3.Error | null): Jarvis.Error;

    readonly httpStatusCode: number;
    withHttpStatusCode(httpStatusCode: number): Jarvis.Error;

    readonly filenameOfRootError?: string | null;
    withFilenameOfRootError(filenameOfRootError: string | null): Jarvis.Error;

    readonly debugInfo?: C3.Array<string | null>;
    withDebugInfo(debugInfo: C3.Array<string | null> | Array<string | null>): Jarvis.Error;

    readonly stackTrace?: C3.Array<StackFrame | null>;
    withStackTrace(stackTrace: C3.Array<StackFrame | null> | Array<IStackFrame | null>): Jarvis.Error;

    readonly action?: string | null;
    withAction(action: string | null): Jarvis.Error;

    readonly engine?: string | null;
    withEngine(engine: string | null): Jarvis.Error;

    readonly timestamp?: DateTime | null;
    withTimestamp(timestamp: DateTime | Date | string | null): Jarvis.Error;

    readonly _system?: any;
    with_system(_system: any): Jarvis.Error;

    readonly notRetryable?: boolean;
    withNotRetryable(notRetryable: boolean): Jarvis.Error;
  }
}

