export interface TestApiTearDownFilter {

  readonly filter?: string | null;
  withFilter(filter: string | null): TestApiTearDownFilter;

  readonly typeRef?: Type | null;
  withTypeRef(typeRef: IType | null): TestApiTearDownFilter;

  readonly limit?: number | null;
  withLimit(limit: number | null): TestApiTearDownFilter;
}

