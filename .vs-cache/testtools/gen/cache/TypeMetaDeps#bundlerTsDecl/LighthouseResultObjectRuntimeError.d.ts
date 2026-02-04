export interface LighthouseResultObjectRuntimeError {

  readonly code?: string | null;
  withCode(code: string | null): LighthouseResultObjectRuntimeError;

  readonly message?: string | null;
  withMessage(message: string | null): LighthouseResultObjectRuntimeError;

  readonly lhrRuntimeError?: boolean;
  withLhrRuntimeError(lhrRuntimeError: boolean): LighthouseResultObjectRuntimeError;
}

