export interface ModelUserFeedback {

  readonly createdByUser?: User | null;
  withCreatedByUser(createdByUser: IUser | null): ModelUserFeedback;

  readonly timestamp?: DateTime | null;
  withTimestamp(timestamp: DateTime | Date | string | null): ModelUserFeedback;

  readonly id: string;
  withId(id: string): ModelUserFeedback;

  readonly versionEdits?: C3.Array<VersionEdit | null>;
  withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): ModelUserFeedback;

  readonly name?: string | null;
  withName(name: string | null): ModelUserFeedback;

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ModelUserFeedback;

  readonly version?: number | null;
  withVersion(version: number | null): ModelUserFeedback;

  readonly typeWithBindings?: Type | null;
  withTypeWithBindings(typeWithBindings: IType | null): ModelUserFeedback;

  readonly facilityFilterPaths?: C3.Array<string | null>;
  withFacilityFilterPaths(facilityFilterPaths: C3.Array<string | null> | Array<string | null>): ModelUserFeedback;

  readonly typeIdent?: string | null;
  withTypeIdent(typeIdent: string | null): ModelUserFeedback;

  readonly model: ReliabilityMlModel;
  withModel(model: IReliabilityMlModel): ModelUserFeedback;

  readonly category?: string | null;
  withCategory(category: string | null): ModelUserFeedback;

  readonly suggestion?: string | null;
  withSuggestion(suggestion: string | null): ModelUserFeedback;

  readonly validationStatus?: string | null;
  withValidationStatus(validationStatus: string | null): ModelUserFeedback;

  readonly comment?: string | null;
  withComment(comment: string | null): ModelUserFeedback;

  readonly isTrainingFeedback?: boolean;
  withIsTrainingFeedback(isTrainingFeedback: boolean): ModelUserFeedback;

  readonly translatedSuggestion?: string | null;
  withTranslatedSuggestion(translatedSuggestion: string | null): ModelUserFeedback;

  readonly translatedValidationStatus?: string | null;
  withTranslatedValidationStatus(translatedValidationStatus: string | null): ModelUserFeedback;

  readonly translatedCategory?: string | null;
  withTranslatedCategory(translatedCategory: string | null): ModelUserFeedback;
}

