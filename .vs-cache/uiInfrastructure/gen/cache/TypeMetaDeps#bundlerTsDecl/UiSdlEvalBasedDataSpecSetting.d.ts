export interface UiSdlEvalBasedDataSpecSetting {

  readonly dataRecordMapping?: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null>;
  withDataRecordMapping(dataRecordMapping: C3.Map<string | null, string | null | UiSdlDataRecordMappingDependingField | null | null> | {[key: string | null]: string | null | IUiSdlDataRecordMappingDependingField | null | null}): UiSdlEvalBasedDataSpecSetting;

  readonly period?: Period | null | string | null | null;
  withPeriod(period: IPeriod | null | string | null | null): UiSdlEvalBasedDataSpecSetting;

  readonly periodAggregationStrategy?: C3.Map<string | null, string | null> | string | null | null;
  withPeriodAggregationStrategy(periodAggregationStrategy: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null): UiSdlEvalBasedDataSpecSetting;

  readonly evalSpec?: EvalSpec | null;
  withEvalSpec(evalSpec: IEvalSpec | null): UiSdlEvalBasedDataSpecSetting;

  readonly dataType?: string | null;
  withDataType(dataType: string | null): UiSdlEvalBasedDataSpecSetting;

  readonly subject?: string | null;
  withSubject(subject: string | null): UiSdlEvalBasedDataSpecSetting;
}

