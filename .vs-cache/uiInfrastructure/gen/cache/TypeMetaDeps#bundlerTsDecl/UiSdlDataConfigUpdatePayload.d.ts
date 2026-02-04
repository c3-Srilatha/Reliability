export interface UiSdlDataConfigUpdatePayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlDataConfigUpdatePayload;

  readonly typeName?: string | null;
  withTypeName(typeName: string | null): UiSdlDataConfigUpdatePayload;

  readonly actionName?: string | null;
  withActionName(actionName: string | null): UiSdlDataConfigUpdatePayload;

  readonly args?: any | null;
  withArgs(args: any | null): UiSdlDataConfigUpdatePayload;

  readonly dataTransforms?: C3.Array<string | null>;
  withDataTransforms(dataTransforms: C3.Array<string | null> | Array<string | null>): UiSdlDataConfigUpdatePayload;

  readonly tunnelConfiguration?: UiSdlTunnelConfiguration | null;
  withTunnelConfiguration(tunnelConfiguration: IUiSdlTunnelConfiguration | null): UiSdlDataConfigUpdatePayload;

  readonly dataSpecDependence?: C3.Array<UiSdlCrossTypeDataSpecDependence | null>;
  withDataSpecDependence(dataSpecDependence: C3.Array<UiSdlCrossTypeDataSpecDependence | null> | Array<IUiSdlCrossTypeDataSpecDependence | null>): UiSdlDataConfigUpdatePayload;

  readonly newConfig: C3.Map<string | null, any>;
  withNewConfig(newConfig: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataConfigUpdatePayload;

  readonly contextVars?: C3.Map<string | null, any>;
  withContextVars(contextVars: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlDataConfigUpdatePayload;

  readonly metadataId?: string | null;
  withMetadataId(metadataId: string | null): UiSdlDataConfigUpdatePayload;
}

