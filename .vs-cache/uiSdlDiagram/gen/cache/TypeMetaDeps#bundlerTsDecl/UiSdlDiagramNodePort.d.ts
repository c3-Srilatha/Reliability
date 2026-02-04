export interface UiSdlDiagramNodePort {

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramNodePort;

  readonly portType?: string | null;
  withPortType(portType: string | null): UiSdlDiagramNodePort;

  readonly name?: string | null | UiSdlDynamicValueSpec | null | null;
  withName(name: string | null | IUiSdlDynamicValueSpec | null | null): UiSdlDiagramNodePort;
}

