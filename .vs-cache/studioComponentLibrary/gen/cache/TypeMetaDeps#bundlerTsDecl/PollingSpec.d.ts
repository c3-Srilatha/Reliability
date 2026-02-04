export interface PollingSpec {

  readonly typeName: string;
  withTypeName(typeName: string): PollingSpec;

  readonly actionName: string;
  withActionName(actionName: string): PollingSpec;

  readonly args?: C3.Map<string | null, any>;
  withArgs(args: C3.Map<string | null, any> | {[key: string | null]: any}): PollingSpec;

  readonly pollingInterval?: number | null;
  withPollingInterval(pollingInterval: number | null): PollingSpec;

  readonly delayBeforePolling?: number | null;
  withDelayBeforePolling(delayBeforePolling: number | null): PollingSpec;

  readonly timeout?: number | null;
  withTimeout(timeout: number | null): PollingSpec;

  readonly sucessSpec?: PollingSuccessSpec | null;
  withSucessSpec(sucessSpec: IPollingSuccessSpec | null): PollingSpec;

  readonly dispatchTick?: boolean;
  withDispatchTick(dispatchTick: boolean): PollingSpec;
}

