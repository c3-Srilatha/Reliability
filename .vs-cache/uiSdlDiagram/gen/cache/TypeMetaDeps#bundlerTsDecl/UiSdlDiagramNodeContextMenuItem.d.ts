export interface UiSdlDiagramNodeContextMenuItem {

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramNodeContextMenuItem;

  readonly labelKey?: string | null;
  withLabelKey(labelKey: string | null): UiSdlDiagramNodeContextMenuItem;
}

