export interface DummyUiSdlInfrastructureConfig {

  readonly parent?: DummyUiSdlConfig | null;
  withParent(parent: IDummyUiSdlConfig | null): DummyUiSdlInfrastructureConfig;

  readonly bundlerMaxMem?: number | null;
  withBundlerMaxMem(bundlerMaxMem: number | null): DummyUiSdlInfrastructureConfig;
}

