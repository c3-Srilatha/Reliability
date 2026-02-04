export interface C3ActionResponse {

  readonly error?: string | null;
  withError(error: string | null): C3ActionResponse;

  readonly data?: any;
  withData(data: any): C3ActionResponse;

  readonly status?: string | null;
  withStatus(status: string | null): C3ActionResponse;
}

