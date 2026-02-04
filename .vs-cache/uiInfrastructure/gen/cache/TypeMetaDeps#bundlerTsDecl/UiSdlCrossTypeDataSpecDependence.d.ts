export interface UiSdlCrossTypeDataSpecDependence {

  readonly configField?: string | null;
  withConfigField(configField: string | null): UiSdlCrossTypeDataSpecDependence;

  readonly argumentSpecField?: string | null;
  withArgumentSpecField(argumentSpecField: string | null): UiSdlCrossTypeDataSpecDependence;

  readonly transformFunction?: string | null;
  withTransformFunction(transformFunction: string | null): UiSdlCrossTypeDataSpecDependence;

  readonly configDependence?: boolean;
  withConfigDependence(configDependence: boolean): UiSdlCrossTypeDataSpecDependence;

  readonly overrideValue?: any;
  withOverrideValue(overrideValue: any): UiSdlCrossTypeDataSpecDependence;
}

