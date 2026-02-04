export interface StudioUIActionResponse {

  readonly isSuccess?: boolean;
  withIsSuccess(isSuccess: boolean): StudioUIActionResponse;

  readonly response?: any;
  withResponse(response: any): StudioUIActionResponse;

  readonly error?: string | null;
  withError(error: string | null): StudioUIActionResponse;
}

