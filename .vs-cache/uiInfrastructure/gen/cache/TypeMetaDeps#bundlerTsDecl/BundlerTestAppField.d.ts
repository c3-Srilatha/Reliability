export interface BundlerTestAppField<I> {

  readonly inputElement?: I | null;
  withInputElement(inputElement: I | null): BundlerTestAppField;
}

