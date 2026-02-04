export interface UiSdlSelectedInputItem {

  readonly text?: string | null;
  withText(text: string | null): UiSdlSelectedInputItem;

  readonly value?: string | null | boolean | number | null | C3.Array<string | null | boolean | number | null | null> | null;
  withValue(value: string | null | boolean | number | null | C3.Array<string | null | boolean | number | null | null> | Array<string | null | boolean | number | null | null> | null): UiSdlSelectedInputItem;
}

