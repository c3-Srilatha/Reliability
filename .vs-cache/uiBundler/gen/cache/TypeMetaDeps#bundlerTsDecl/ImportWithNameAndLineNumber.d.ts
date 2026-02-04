export interface ImportWithNameAndLineNumber {

  readonly typeName?: string | null;
  withTypeName(typeName: string | null): ImportWithNameAndLineNumber;

  readonly lineNumber?: number | null;
  withLineNumber(lineNumber: number | null): ImportWithNameAndLineNumber;
}

