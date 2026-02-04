export interface BundlerTestAppMultiDataSpecComponent {

  readonly id?: string | null;
  withId(id: string | null): BundlerTestAppMultiDataSpecComponent;

  readonly dataSpec?: BundlerTestAppMultiDataSpecComponentDataSpec | null;
  withDataSpec(dataSpec: IBundlerTestAppMultiDataSpecComponentDataSpec | null): BundlerTestAppMultiDataSpecComponent;

  readonly dataCollection?: C3.Array<BundlerTestAppMultiDataSpecComponentDataSpec | null>;
  withDataCollection(dataCollection: C3.Array<BundlerTestAppMultiDataSpecComponentDataSpec | null> | Array<IBundlerTestAppMultiDataSpecComponentDataSpec | null>): BundlerTestAppMultiDataSpecComponent;

  readonly optionSpec?: BundlerTestAppMultiDataSpecComponentDataSpec | null;
  withOptionSpec(optionSpec: IBundlerTestAppMultiDataSpecComponentDataSpec | null): BundlerTestAppMultiDataSpecComponent;

  readonly options?: C3.Array<BundlerTestAppMultiDataSpecComponentDataSpec | null>;
  withOptions(options: C3.Array<BundlerTestAppMultiDataSpecComponentDataSpec | null> | Array<IBundlerTestAppMultiDataSpecComponentDataSpec | null>): BundlerTestAppMultiDataSpecComponent;
}

