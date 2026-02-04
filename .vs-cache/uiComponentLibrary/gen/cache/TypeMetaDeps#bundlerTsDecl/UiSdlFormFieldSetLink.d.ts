export interface UiSdlFormFieldSetLink {

  readonly actionSuffix?: string | null;
  withActionSuffix(actionSuffix: string | null): UiSdlFormFieldSetLink;

  readonly name?: string | null;
  withName(name: string | null): UiSdlFormFieldSetLink;
}

