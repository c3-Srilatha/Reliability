export interface UiSdlTypeWorkerTestMetricEvaluatable {

  readonly referenceField?: UiSdlTypeWorkerTestMeasurementType | null;
  withReferenceField(referenceField: IUiSdlTypeWorkerTestMeasurementType | null): UiSdlTypeWorkerTestMetricEvaluatable;
}

