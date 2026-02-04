export interface ModelCloningChartHelperSpec {

  readonly entities?: C3.Array<string | null>;
  withEntities(entities: C3.Array<string | null> | Array<string | null>): ModelCloningChartHelperSpec;

  readonly parent?: ReliabilityAsset | null;
  withParent(parent: IReliabilityAsset | null): ModelCloningChartHelperSpec;

  readonly baseModel?: ReliabilityMlModel | null;
  withBaseModel(baseModel: IReliabilityMlModel | null): ModelCloningChartHelperSpec;

  readonly trainingDatasetTimeRanges?: C3.Array<TimeRange | null>;
  withTrainingDatasetTimeRanges(trainingDatasetTimeRanges: C3.Array<TimeRange | null> | Array<ITimeRange | null>): ModelCloningChartHelperSpec;

  readonly validateDatasetTimeRanges?: C3.Array<TimeRange | null>;
  withValidateDatasetTimeRanges(validateDatasetTimeRanges: C3.Array<TimeRange | null> | Array<ITimeRange | null>): ModelCloningChartHelperSpec;

  readonly nonOperationalMaskRules?: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null>;
  withNonOperationalMaskRules(nonOperationalMaskRules: C3.Array<ReliabilityDataPreparationRuleMaskSpec | null> | Array<IReliabilityDataPreparationRuleMaskSpec | null>): ModelCloningChartHelperSpec;

  readonly exclusionDates?: C3.Array<TimeRange | null>;
  withExclusionDates(exclusionDates: C3.Array<TimeRange | null> | Array<ITimeRange | null>): ModelCloningChartHelperSpec;

  readonly plotStart?: DateTime | null;
  withPlotStart(plotStart: IDateTime | null): ModelCloningChartHelperSpec;

  readonly plotEnd?: DateTime | null;
  withPlotEnd(plotEnd: IDateTime | null): ModelCloningChartHelperSpec;

  readonly interval?: string | null;
  withInterval(interval: string | null): ModelCloningChartHelperSpec;

  readonly keepPreviousMasks?: boolean;
  withKeepPreviousMasks(keepPreviousMasks: boolean): ModelCloningChartHelperSpec;

  readonly cvExclusionsSettings?: any | null;
  withCvExclusionsSettings(cvExclusionsSettings: any | null): ModelCloningChartHelperSpec;
}

