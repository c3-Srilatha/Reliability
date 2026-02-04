export interface UiSdlVariableWidthComponentRef {

  readonly id: string;
  withId(id: string): UiSdlVariableWidthComponentRef;

  readonly width?: number | null | number | null | null;
  withWidth(width: number | null | number | null | null): UiSdlVariableWidthComponentRef;
}

