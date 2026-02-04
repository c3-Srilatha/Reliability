export interface PollingSucessResult {

  readonly value?: any;
  withValue(value: any): PollingSucessResult;

  readonly response?: any;
  withResponse(response: any): PollingSucessResult;
}

