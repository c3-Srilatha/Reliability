export interface C3Documentation {

  readonly title?: string | null;
  withTitle(title: string | null): C3Documentation;

  readonly doc?: string | null;
  withDoc(doc: string | null): C3Documentation;
}

