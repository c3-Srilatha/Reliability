declare namespace UiSdlDataTransform {
  export interface Context {

    readonly content?: any | null;
    withContent(content: any | null): UiSdlDataTransform.Context;

    readonly dataSourceId?: string | null;
    withDataSourceId(dataSourceId: string | null): UiSdlDataTransform.Context;

    readonly componentId?: string | null;
    withComponentId(componentId: string | null): UiSdlDataTransform.Context;

    readonly state?: UiSdlReduxState | null;
    withState(state: IUiSdlReduxState | null): UiSdlDataTransform.Context;
  }
}

