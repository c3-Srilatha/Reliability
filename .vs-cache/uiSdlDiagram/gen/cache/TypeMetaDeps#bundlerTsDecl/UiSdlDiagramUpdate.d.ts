export interface UiSdlDiagramUpdate {

  readonly shape?: UiSdlDiagramShape | null;
  withShape(shape: IUiSdlDiagramShape | null): UiSdlDiagramUpdate;

  readonly updateType: string;
  withUpdateType(updateType: string): UiSdlDiagramUpdate;

  readonly shouldRerender?: boolean;
  withShouldRerender(shouldRerender: boolean): UiSdlDiagramUpdate;
}

