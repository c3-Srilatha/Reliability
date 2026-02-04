export interface UiSdlDiagramShapeRenderData {

  readonly id?: string | null;
  withId(id: string | null): UiSdlDiagramShapeRenderData;

  readonly renderFunctionKey?: string | null;
  withRenderFunctionKey(renderFunctionKey: string | null): UiSdlDiagramShapeRenderData;

  readonly renderFunction?: any;
  withRenderFunction(renderFunction: any): UiSdlDiagramShapeRenderData;

  readonly renderProps?: UiSdlDiagramShape | null;
  withRenderProps(renderProps: IUiSdlDiagramShape | null): UiSdlDiagramShapeRenderData;
}

