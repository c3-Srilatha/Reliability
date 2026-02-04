export interface UiSdlFieldSetInputField {

  readonly label: string;
  withLabel(label: string): UiSdlFieldSetInputField;

  readonly hintText?: string | null;
  withHintText(hintText: string | null): UiSdlFieldSetInputField;
}

