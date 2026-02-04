// TypeScript definitions for the C3 type ReliabilityMlDatasetPreparationSpec

/**
 * Spec to be used in {@link ReliabilityAsset#prepareMlDatasets} to generate all the required datasets.
 * For a given {@link ReliabilityAsset}, the dataset preparation routine consists in the following steps:
 * - Prepare a {@link Feature.Set} for `features` and preprocess them to ensure high signal to noise ratio.
 * - Prepare several {@link Feature.Set}s for `masks`, i.e., variables that define which rows of data to ignore for {@link MlModel} training and inference.
 * - (Optional) Prepare a {@link Feature.Set} for `target` to enable supervised learning {@link MlModel}s.
 * - Split the above datasets into training and validation.
 *
 * The result of preparing all these datasets will be a self-sufficient {@link ReliabilityMlDatasetPreparationRun},
 * which will contain all the information needed for performing {@link MlModel} training, deployment, and inference.
 *
 * @remarks this represents a value passed to a method that expects an instance of ReliabilityMlDatasetPreparationSpec
 */
declare interface IReliabilityMlDatasetPreparationSpec {

  /**
   * A given {@link ReliabilityMl.Project} associated with this dataset.
   * Dataset is being prepared for a specific project usecase with custom properties.
   * Dataset prepared for one project cannot be used in the context of another project.
   */
  project?: IReliabilityMl.Project;

  /**
   * What is the timestamp FROM when the features, mask, and target should be evaluated?
   */
  materializeStart?: DateTime | Date | string;

  /**
   * What is the timestamp TILL when the features, mask, and target should be evaluated?
   */
  materializeEnd?: DateTime | Date | string;

  /**
   * Set this field to `true` if you wish to run
   * {@link ReliabilityAsset#runDataValidation} BEFORE running any
   * dataset preparation routines.
   * If the data validation run has errors, then the dataset preparation step will not
   * proceed.
   */
  doRunDataValidation?: boolean;

  /**
   * It is always better to have regular time series instead of irregular time series
   * for the purposes of stable machine learning model performance. Use this field to
   * specify the regular {@link Interval} of the data which will be evaluated.
   */
  interval?: string;

  /**
   * Specify all the information needed to both create an initial {@link Feature.Set}
   * for training {@link MlModel}s for {@link MlProject}, as well
   * as, downstream information needed to pre-process the initial {@link Feature.Set}
   * such that clean {@link Feature.Set}s are used in the training of {@link MlModel}s.
   */
  featurePreparationSpec?: IReliabilityMlFeaturePreparationSpec;

  /**
   * Having a set of {@link Feature}s is not good enough to train good {@link MlModel}s.
   * To train a good {@link MlModel}, several rows of data need to be eliminated from the
   * training dataset because they contain more noise than true signal. These are called
   * masks, i.e., they help remove unwanted rows of data from both training and inference
   * of {@link MlModel}s. Specify all this kind of information in this field.
   */
  maskPreparationSpec?: IReliabilityMlMaskPreparationSpec;

  /**
   * By default, {@link ReliabilityMlDatasetPreparationHelper#prepareAlertContext} will
   * create features to fetch the riskScore, riskScoreNormalized and alert predictions
   * corresponding to the deployed CHAMPION model, in order to generate the
   * {@link ReliabilityMlDatasetPreparationRunCommon#alertContextDatasets}.
   * Use this field to instead specify custom features to be used for alert context preparation.
   */
  alertContextPreparationSpec?: IReliabilityMlAlertContextPreparationSpec;

  /**
   * Set this field to `true` if a target variable must also be prepared. By default,
   * the target is not evaluated because supervised learning is not the default approach
   * to train any {@link MlProject}'s {@link MlModel}s. However, supervised learning is not
   * disallowed. To experiment with such models, evaluate the target variable according to
   * {@link targetPreparationSpec} by setting this field to `true`.
   */
  evaluateTarget?: boolean;

  /**
   * If set to `true`, {@link ReliabilityMlDatasetPreparationJob#map} will run computeMetrics() on each dataset and populate featureDataReports.
   */
  computeFeatureDataReports?: boolean;

  /**
   * The most common machine learning approach to assess `reliabilityRisk` {@link MlProject} is a
   * semi-supervised (unsupervised also, to a lesser extent) framework. However, there
   * are certain situations where supervised learning would work just as well or better.
   * In these cases, use this field to specify information about the target variable.
   */
  targetPreparationSpec?: IReliabilityMlTargetPreparationSpec;

  /**
   * Once the features, target, and mask have all been evaluated, the immediate next step
   * is to split the overall dataset into training and validation. Use this field to control
   * how this train/val split happens.
   */
  trainValSplitSpec?: IReliabilityMlTrainValSplitSpec;

  /**
   * Specify all the information needed to run {@link DataValidationRun}
   * It requires the root {@link DataValidationRuleset} to start the process
   */
  dataValidationSpec?: IReliabilityDataValidationSpec;

  /**
   * If a given asset id has a value (a run) in this map,
   * then this run will be used to store the results of data preparation.
   * If not, a new run will be created to store the results of data preparation.
   */
  datasetRunMap?: Map_Type<string, ReliabilityMlDatasetPreparationRun> | {[key: string]: IReliabilityMlDatasetPreparationRun};

  /**
   * Optionally, provide a filter for {@link ReliabilityAsset}s to be used as target assets.
   * If this field is provided, a #datasetRunMap entry is created for each target asset
   * if and only if the target asset is not already present in the #datasetRunMap.
   */
  targetAssetFilter?: string;

  /**
   * Field name containing the desired name for the {@link ReliabilityMlDatasetPreparationJob}.
   */
  jobName?: string;

  /**
   * Field name containing the desired id for the {@link ReliabilityMlDatasetPreparationJob}.
   */
  jobId?: string;

  /**
   * Specify whether the dataset preparations steps should be done in a sequential fashion,
   * or whether the order in which the features and masks are prepared does not matter.
   */
  approach?: string;

  /**
   * If the specified {@link #approach} is `sequential`, then the masks specified in this field
   * will be applied in the order specified here. The initial features {@link Feature.Set} and
   * the previously prepared mask {@link Feature.Set}s are available when preparing a given mask.
   *
   * These masks will be used to mask the features data before the features are cleaned.
   *
   * If the specified {@link #approach} is `unordered`, then this field is ignored.
   *
   * Note that every mask must be specified in either this field or in {@link #masksAfterCleaning}, and
   * must be specified only once.
   */
  masksBeforeCleaning?: Array_Type<string> | Array<string>;

  /**
   * If the specified {@link #approach} is `sequential`, then the masks specified in this field
   * will be applied in the order specified here. These masks will be prepared after cleaning the
   * features data, and the cleaned Feature.Set (as well as all previously prepared masks) are available
   * when preparing a given mask in this list.
   *
   * If the specified {@link #approach} is `unordered`, then this field is ignored.
   *
   * Note that every mask must be specified in either this field or in {@link #masksBeforeCleaning}, and
   * must be specified only once.
   */
  masksAfterCleaning?: Array_Type<string> | Array<string>;

  /**
   * If this map is non-empty, then {@link SensorDataReport}s will be generated
   * and the thresholds specified will be applied for non-overridden included or excluded sensors
   */
  sensorDataReportThresholds?: Map_Type<string, number> | {[key: string]: number};
}

/**
 * Spec to be used in {@link ReliabilityAsset#prepareMlDatasets} to generate all the required datasets.
 * For a given {@link ReliabilityAsset}, the dataset preparation routine consists in the following steps:
 * - Prepare a {@link Feature.Set} for `features` and preprocess them to ensure high signal to noise ratio.
 * - Prepare several {@link Feature.Set}s for `masks`, i.e., variables that define which rows of data to ignore for {@link MlModel} training and inference.
 * - (Optional) Prepare a {@link Feature.Set} for `target` to enable supervised learning {@link MlModel}s.
 * - Split the above datasets into training and validation.
 *
 * The result of preparing all these datasets will be a self-sufficient {@link ReliabilityMlDatasetPreparationRun},
 * which will contain all the information needed for performing {@link MlModel} training, deployment, and inference.
 *
 * @remarks this represents a made instance of ReliabilityMlDatasetPreparationSpec
 */
declare class ReliabilityMlDatasetPreparationSpec extends Obj  {

  /**
   * A given {@link ReliabilityMl.Project} associated with this dataset.
   * Dataset is being prepared for a specific project usecase with custom properties.
   * Dataset prepared for one project cannot be used in the context of another project.
   */
  readonly project?: ReliabilityMl.Project;
  withProject(project: IReliabilityMl.Project | null): ReliabilityMlDatasetPreparationSpec;

  /**
   * What is the timestamp FROM when the features, mask, and target should be evaluated?
   */
  readonly materializeStart?: DateTime;
  withMaterializeStart(materializeStart: DateTime | Date | string | null): ReliabilityMlDatasetPreparationSpec;

  /**
   * What is the timestamp TILL when the features, mask, and target should be evaluated?
   */
  readonly materializeEnd?: DateTime;
  withMaterializeEnd(materializeEnd: DateTime | Date | string | null): ReliabilityMlDatasetPreparationSpec;

  /**
   * Set this field to `true` if you wish to run
   * {@link ReliabilityAsset#runDataValidation} BEFORE running any
   * dataset preparation routines.
   * If the data validation run has errors, then the dataset preparation step will not
   * proceed.
   */
  readonly doRunDataValidation?: boolean;
  withDoRunDataValidation(doRunDataValidation: boolean): ReliabilityMlDatasetPreparationSpec;

  /**
   * It is always better to have regular time series instead of irregular time series
   * for the purposes of stable machine learning model performance. Use this field to
   * specify the regular {@link Interval} of the data which will be evaluated.
   */
  readonly interval?: string;
  withInterval(interval: string | null): ReliabilityMlDatasetPreparationSpec;

  /**
   * Specify all the information needed to both create an initial {@link Feature.Set}
   * for training {@link MlModel}s for {@link MlProject}, as well
   * as, downstream information needed to pre-process the initial {@link Feature.Set}
   * such that clean {@link Feature.Set}s are used in the training of {@link MlModel}s.
   */
  readonly featurePreparationSpec?: ReliabilityMlFeaturePreparationSpec;
  withFeaturePreparationSpec(featurePreparationSpec: IReliabilityMlFeaturePreparationSpec | null): ReliabilityMlDatasetPreparationSpec;

  /**
   * Having a set of {@link Feature}s is not good enough to train good {@link MlModel}s.
   * To train a good {@link MlModel}, several rows of data need to be eliminated from the
   * training dataset because they contain more noise than true signal. These are called
   * masks, i.e., they help remove unwanted rows of data from both training and inference
   * of {@link MlModel}s. Specify all this kind of information in this field.
   */
  readonly maskPreparationSpec?: ReliabilityMlMaskPreparationSpec;
  withMaskPreparationSpec(maskPreparationSpec: IReliabilityMlMaskPreparationSpec | null): ReliabilityMlDatasetPreparationSpec;

  /**
   * By default, {@link ReliabilityMlDatasetPreparationHelper#prepareAlertContext} will
   * create features to fetch the riskScore, riskScoreNormalized and alert predictions
   * corresponding to the deployed CHAMPION model, in order to generate the
   * {@link ReliabilityMlDatasetPreparationRunCommon#alertContextDatasets}.
   * Use this field to instead specify custom features to be used for alert context preparation.
   */
  readonly alertContextPreparationSpec?: ReliabilityMlAlertContextPreparationSpec;
  withAlertContextPreparationSpec(alertContextPreparationSpec: IReliabilityMlAlertContextPreparationSpec | null): ReliabilityMlDatasetPreparationSpec;

  /**
   * Set this field to `true` if a target variable must also be prepared. By default,
   * the target is not evaluated because supervised learning is not the default approach
   * to train any {@link MlProject}'s {@link MlModel}s. However, supervised learning is not
   * disallowed. To experiment with such models, evaluate the target variable according to
   * {@link targetPreparationSpec} by setting this field to `true`.
   */
  readonly evaluateTarget?: boolean;
  withEvaluateTarget(evaluateTarget: boolean): ReliabilityMlDatasetPreparationSpec;

  /**
   * If set to `true`, {@link ReliabilityMlDatasetPreparationJob#map} will run computeMetrics() on each dataset and populate featureDataReports.
   */
  readonly computeFeatureDataReports?: boolean;
  withComputeFeatureDataReports(computeFeatureDataReports: boolean): ReliabilityMlDatasetPreparationSpec;

  /**
   * The most common machine learning approach to assess `reliabilityRisk` {@link MlProject} is a
   * semi-supervised (unsupervised also, to a lesser extent) framework. However, there
   * are certain situations where supervised learning would work just as well or better.
   * In these cases, use this field to specify information about the target variable.
   */
  readonly targetPreparationSpec?: ReliabilityMlTargetPreparationSpec;
  withTargetPreparationSpec(targetPreparationSpec: IReliabilityMlTargetPreparationSpec | null): ReliabilityMlDatasetPreparationSpec;

  /**
   * Once the features, target, and mask have all been evaluated, the immediate next step
   * is to split the overall dataset into training and validation. Use this field to control
   * how this train/val split happens.
   */
  readonly trainValSplitSpec?: ReliabilityMlTrainValSplitSpec;
  withTrainValSplitSpec(trainValSplitSpec: IReliabilityMlTrainValSplitSpec | null): ReliabilityMlDatasetPreparationSpec;

  /**
   * Specify all the information needed to run {@link DataValidationRun}
   * It requires the root {@link DataValidationRuleset} to start the process
   */
  readonly dataValidationSpec?: ReliabilityDataValidationSpec;
  withDataValidationSpec(dataValidationSpec: IReliabilityDataValidationSpec | null): ReliabilityMlDatasetPreparationSpec;

  /**
   * If a given asset id has a value (a run) in this map,
   * then this run will be used to store the results of data preparation.
   * If not, a new run will be created to store the results of data preparation.
   */
  readonly datasetRunMap?: Map_Type<string, ReliabilityMlDatasetPreparationRun>;
  withDatasetRunMap(datasetRunMap: Map_Type<string, ReliabilityMlDatasetPreparationRun> | {[key: string]: IReliabilityMlDatasetPreparationRun} | null): ReliabilityMlDatasetPreparationSpec;

  /**
   * Optionally, provide a filter for {@link ReliabilityAsset}s to be used as target assets.
   * If this field is provided, a #datasetRunMap entry is created for each target asset
   * if and only if the target asset is not already present in the #datasetRunMap.
   */
  readonly targetAssetFilter?: string;
  withTargetAssetFilter(targetAssetFilter: string | null): ReliabilityMlDatasetPreparationSpec;

  /**
   * Field name containing the desired name for the {@link ReliabilityMlDatasetPreparationJob}.
   */
  readonly jobName?: string;
  withJobName(jobName: string | null): ReliabilityMlDatasetPreparationSpec;

  /**
   * Field name containing the desired id for the {@link ReliabilityMlDatasetPreparationJob}.
   */
  readonly jobId?: string;
  withJobId(jobId: string | null): ReliabilityMlDatasetPreparationSpec;

  /**
   * Specify whether the dataset preparations steps should be done in a sequential fashion,
   * or whether the order in which the features and masks are prepared does not matter.
   */
  readonly approach?: string;
  withApproach(approach: string | null): ReliabilityMlDatasetPreparationSpec;

  /**
   * If the specified {@link #approach} is `sequential`, then the masks specified in this field
   * will be applied in the order specified here. The initial features {@link Feature.Set} and
   * the previously prepared mask {@link Feature.Set}s are available when preparing a given mask.
   *
   * These masks will be used to mask the features data before the features are cleaned.
   *
   * If the specified {@link #approach} is `unordered`, then this field is ignored.
   *
   * Note that every mask must be specified in either this field or in {@link #masksAfterCleaning}, and
   * must be specified only once.
   */
  readonly masksBeforeCleaning?: Array_Type<string>;
  withMasksBeforeCleaning(masksBeforeCleaning: Array_Type<string> | Array<string> | null): ReliabilityMlDatasetPreparationSpec;

  /**
   * If the specified {@link #approach} is `sequential`, then the masks specified in this field
   * will be applied in the order specified here. These masks will be prepared after cleaning the
   * features data, and the cleaned Feature.Set (as well as all previously prepared masks) are available
   * when preparing a given mask in this list.
   *
   * If the specified {@link #approach} is `unordered`, then this field is ignored.
   *
   * Note that every mask must be specified in either this field or in {@link #masksBeforeCleaning}, and
   * must be specified only once.
   */
  readonly masksAfterCleaning?: Array_Type<string>;
  withMasksAfterCleaning(masksAfterCleaning: Array_Type<string> | Array<string> | null): ReliabilityMlDatasetPreparationSpec;

  /**
   * If this map is non-empty, then {@link SensorDataReport}s will be generated
   * and the thresholds specified will be applied for non-overridden included or excluded sensors
   */
  readonly sensorDataReportThresholds?: Map_Type<string, number>;
  withSensorDataReportThresholds(sensorDataReportThresholds: Map_Type<string, number> | {[key: string]: number} | null): ReliabilityMlDatasetPreparationSpec;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJson
   */
  static fromJson(json: any): ReliabilityMlDatasetPreparationSpec | null;

  /**
   * Load the JSON-based representation and reconstruct the corresponding object.
   *
   * fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
   * a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
   * called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
   * an instance of the correct type.
   *
   * @see #toJsonString
   */
  static fromJsonString(json: string): ReliabilityMlDatasetPreparationSpec | null;

  /**
   * Load the XML-based representation and reconstruct the corresponding object.
   *
   * fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
   * may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
   * isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
   * will return an instance of the correct type.
   *
   * @see #toXmlString
   */
  static fromXmlString(xml: string): ReliabilityMlDatasetPreparationSpec | null;

  /**
   * Load from contentType representation and reconstruct the corresponding object.
   *
   * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
   * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
   * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
   * type and will return an instance of the correct type.
   */
  static deserialize(contentStr: string, contentType: string): ReliabilityMlDatasetPreparationSpec | null;

  /**
   * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
   * type does not contain fields from old or field value types are not convertable then drops the field.
   *
   * This method is used during live metadata update
   */
  replaceType(old: Type, new_: Type): ReliabilityMlDatasetPreparationSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityMlDatasetPreparationSpec;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any | null>, convertValue?: boolean): ReliabilityMlDatasetPreparationSpec;

  /**
   * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
   * the asynchronous `mapper` invocation.
   *
   * @param action
   *           lambda to apply for every field value to produce a new value for that fields
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityMlDatasetPreparationSpec>;

  /**
   * Result of this function call is a copy of current instance with all fields replaced based on results of the
   * asynchronous `mapper` invocation.
   *
   * @param spec
   *           which fields to include
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, Promise<any> | null>, convertValue?: boolean): Promise<ReliabilityMlDatasetPreparationSpec>;

  /**
   * Result of this function call is a copy of current instance with specified field value replaced based on result of
   * the `mapper` invocation.
   * @param field
   *           field being mapped
   * @param includeEmpty
   *           if set, invokes mapper for fields with empty value
   * @param mapper
   *           lambda to apply for every field value to produce a new value for that field
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapFieldValue(field?: FieldType, includeEmpty?: boolean, mapper: λFunction<any, any | null>, convertValue?: boolean): ReliabilityMlDatasetPreparationSpec;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param action
   *           function to be executed for each pair of field type and Obj instance
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityMlDatasetPreparationSpec;

  /**
   * Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
   * lambda application.
   *
   * Result of this function call is a copy of current instance with all references replaced based on results of the
   * `mapper` invocation.
   *
   * @param includeEmpty
   *           if `true` will also process references with `null` / "Empty" references
   * @param mapper
   *           function to be executed for each pair of field type and Obj instance for producing new reference value
   * @param convertValue
   *           if true, attempt to convert the value to match the field's type
   */
  mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): ReliabilityMlDatasetPreparationSpec;

  /**
   * Populates all missing default values and throws error if any constraint is violated.
   */
  validateObj(): ReliabilityMlDatasetPreparationSpec;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           name of the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: string, value: any, doNotConvert?: boolean): ReliabilityMlDatasetPreparationSpec;

  /**
   * Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
   * defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
   *
   * @param field
   *           the field
   * @param value
   *           of the field
   * @param doNotConvert
   *           if true, do not attempt to convert the value to match the field's type
   * @return new Obj
   *
   * @see #withoutField
   * @see #defaultField
   */
  withField(field: FieldType, value: any, doNotConvert?: boolean): ReliabilityMlDatasetPreparationSpec;

  /**
   * Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
   * defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
   *
   * @param fields
   *           map of field names/values
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @return new Obj
   */
  withFields(fields: Map_Type<string, any>, doNotConvert?: boolean): ReliabilityMlDatasetPreparationSpec;

  /**
   * Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
   * If you would like to #unsetField, you should call #withoutFieldAtPath instead.
   *
   * Immutable objects may return the same instance if the field being set does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path to set value at
   * @param value
   *           value to set
   * @param doNotConvert
   *           if true, attempt to convert the values to match the fields' type
   * @param doNotCreateIfMissing
   *           true indicates that any empty reference along the path will not set the value
   * @return new Obj
   */
  withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): ReliabilityMlDatasetPreparationSpec;

  /**
   * Builds a new Obj without the specified path field.
   *
   * Immutable objects may return the same instance if the field being removed does not actually represent a
   * change to the existing object.
   *
   * @param path
   *           path for field to remove
   * @return new Obj
   *
   * @see #withFieldAtPath
   * @see #withoutField
   */
  withoutFieldAtPath(path: string): ReliabilityMlDatasetPreparationSpec;

  /**
   * Builds a new Obj, removing the field with the provided name.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: string): ReliabilityMlDatasetPreparationSpec;

  /**
   * Builds a new Obj, removing the field with the provided field type.
   *
   * Immutable objects may return the same instance if the field being removed is not present in the existing object.
   *
   * @param field
   *           name of the field to remove
   * @return new Obj with removed field
   *
   * @see #unsetField
   * @see #removeField
   */
  withoutField(field: FieldType): ReliabilityMlDatasetPreparationSpec;

  /**
   * Builds a new Obj, removing the fields with the provided names.
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           names of the fields to remove
   * @return new Obj with removed fields
   */
  withoutFields(fields: Array_Type<string>): ReliabilityMlDatasetPreparationSpec;

  /**
   * Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
   * exact same type as the type of the obj to respect the "ordinal" of the field type
   *
   * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
   *
   * @param fields
   *           field types to remove
   * @return new Obj with removed fields
   */
  withoutFieldsByType(fields: Array_Type<FieldType>): ReliabilityMlDatasetPreparationSpec;

  /**
   * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
   */
  withoutSecretFields(): ReliabilityMlDatasetPreparationSpec;

  /**
   * Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
   * calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
   * {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
   * fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
   * fields that have already been set.
   *
   * {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
   * As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
   *
   * @param includeEmptyRefsWithDefaults
   *           it `true` then missing / empty child references that have fields with defaults will also be instantiated
   * @param defaultFields
   *           If not empty, a list of default field paths to populate.  Any default fields not specified in the
   *           array will be ignored.
   * @return new Obj
   *
   * @see #defaultField
   * @see FieldType#defaultValueConst
   * @see FieldType#defaultValue
   */
  withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: Array_Type<string>): ReliabilityMlDatasetPreparationSpec;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         name of the field to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: string): ReliabilityMlDatasetPreparationSpec;

  /**
   * Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
   * method will behave the same as {@link #unsetField}.
   *
   * @param field
   *         field type to default
   * @return new `Obj` with the specified field set to its default value
   *
   * @see #withField
   * @see #unsetField
   */
  defaultField(field: FieldType): ReliabilityMlDatasetPreparationSpec;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         name of the field to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: string): ReliabilityMlDatasetPreparationSpec;

  /**
   * Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
   * is different from {@link removeField}
   *
   * @param field
   *         field type to unset
   * @return new `Obj` with the specified field unset
   *
   * @see #withoutField
   * @see #removeField
   */
  unsetField(field: FieldType): ReliabilityMlDatasetPreparationSpec;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         name of the field to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: string): ReliabilityMlDatasetPreparationSpec;

  /**
   * Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
   * is different from {@link #unsetField}
   *
   * @param field
   *         field type to remove
   * @return new `Obj` with the specified field removed
   *
   * @see #withoutField
   * @see #unsetField
   */
  removeField(field: FieldType): ReliabilityMlDatasetPreparationSpec;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
   *
   * @param other
   *           object
   * @param fieldPathMergeSpec
   *           mapping of fields of the object to the respective merge annotations
   * @return the new merged Obj
   */
  mergeObj(other: Obj, fieldPathMergeSpec?: Map_Type<string, string>): ReliabilityMlDatasetPreparationSpec;

  /**
   * Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
   * In case of conflicts, fields of other instance take precedence.
   *
   * @param other
   *           object
   * @param otherFieldsFilter
   *           only fields of otherFieldsFilter type from other are merged into this obj.
   * @return the new merged Obj
   */
  mergeObj(other: Obj, otherFieldsFilter: Type): ReliabilityMlDatasetPreparationSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
   * @param deep
   *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
   *        the same key or index.
   */
  mergeObj(other: Obj, deep?: boolean, merger: λQuadFunction<FieldPath | null, any | null, FieldPath | null, any | null, any | null>): ReliabilityMlDatasetPreparationSpec;

  /**
   * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
   * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
   * traverse child reference and collection fields.
   */
  mergeObj(other: Obj, merger: λQuadFunction<FieldType | null, any | null, FieldType | null, any | null, any | null>): ReliabilityMlDatasetPreparationSpec;

  mergeJson(json: any): ReliabilityMlDatasetPreparationSpec;

  /**
   * Merge the obj references within the current obj
   * @param deep
   *        If set, traverses the reference fields within the obj as well for a deep merge
   * @param objKey
   *        lambda specifying how to obtain the key for the Obj while determining which Objs to merge
   * @param filter
   *        Field paths that need to be filtered from this merge
   * @return Obj with child references merged
   */
  mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any | null>, filter?: λPredicate<string>): ReliabilityMlDatasetPreparationSpec;

  /**
   * Adds the numeric Obj fields with the other Objs respective fields.
   * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
   * references with same name and collection elements at same index or key.
   */
  sumObj(other: Obj, deep?: boolean): ReliabilityMlDatasetPreparationSpec;

  /**
   * Build an array of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonArray(): Array_Type<ReliabilityMlDatasetPreparationSpec>;

  /**
   * Creates an array of instances of this type.
   */
  static array(...elements: Array_Type<any>[]): Array_Type<ReliabilityMlDatasetPreparationSpec> | null;

  /**
   * Creates an array of instances of this type.
   */
  static arrayBuilder(): ArrayBuilder<ReliabilityMlDatasetPreparationSpec> | null;

  /**
   * Build an set of the correct type with a single element which is this instance.
   *
   * @return new array instance with this as only element.
   */
  singletonSet(): Set_Type<ReliabilityMlDatasetPreparationSpec>;

  /**
   * Creates a set of instances of this type.
   */
  static setBuilder(): SetBuilder<ReliabilityMlDatasetPreparationSpec> | null;

  /**
   * Create a map of string to elements of this type.
   */
  static mapBuilder(): MapBuilder<string, ReliabilityMlDatasetPreparationSpec> | null;

  /**
   * Create a map with the given key type and elements of this type.
   */
  static mapBuilderOf(keyType: ValueType): MapBuilder<any, ReliabilityMlDatasetPreparationSpec> | null;

  /**
   * @return new ObjBuilder with initial state set to fields of this instance.
   */
  toBuilder(): ObjBuilder<ReliabilityMlDatasetPreparationSpec>;

  /**
   * @return new ObjBuilder of this instance.
   */
  static builder(): ObjBuilder<ReliabilityMlDatasetPreparationSpec>;

  /**
   * Construct instance of this type from provided field values and options
   */
  static fromFields(fields: Map_Type<FieldType, any>, spec: Obj.MakeSpec): ReliabilityMlDatasetPreparationSpec;

  /**
   * Construct an instance of this type from provided fields
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see withDefaults
   */
  static fromFields(fields: Map_Type<FieldType, any | any>, withDefaults?: boolean): ReliabilityMlDatasetPreparationSpec;

  /**
   * Construct instance of this type from provided field values and options
   */
  static make(fields: Map_Type<string, any>, spec: Obj.MakeSpec): ReliabilityMlDatasetPreparationSpec;

  /**
   * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
   *            populated
   *
   * @see withDefaults
   */
  static make(withDefaults?: boolean): ReliabilityMlDatasetPreparationSpec;

  /**
   * Construct an instance from provided fields
   * @param fields
   *            Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
   *            field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
   *            to Panda.make()
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
   *            -> 0) populated. Passing an empty value for a field will result in the initial value being set if
   *            the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
   *
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: Map_Type<string, any | any>, withDefaults?: boolean): ReliabilityMlDatasetPreparationSpec;

  /**
   * Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
   *
   * ```js
   * User.make({
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   *
   * Obj.make({
   *   type: 'User',
   *   email: 'joe@smith.com',
   *   realName: 'Joe Smith'
   * })
   * ```
   *
   * ```py
   * c3.User.make({
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.Obj.make({
   *   "type": 'User',
   *   "email": 'joe@smith.com',
   *   "realName": 'Joe Smith'
   * })
   *
   * c3.User(email='joe@smith.com', realName='Joe Smith')
   *
   * c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
   * ```
   *
   * Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
   * specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
   * such as {@link Ann.Ser} do not apply.
   * @param fields
   *            Fields to construct the instance of the obj with
   * @param withDefaults
   *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
   *
   * @see fromFields
   * @see beforeMake
   * @see afterMake
   * @see withDefaults
   */
  static make(fields: any, withDefaults?: boolean): ReliabilityMlDatasetPreparationSpec;

  /**
   * Construct an instance of this type from provided instance of a subtype or a "duck type".
   */
  static remake(other: Obj, failIfExtraOrInvalidFields?: boolean): ReliabilityMlDatasetPreparationSpec;

  /**
   * Optional override that will be called every time instance of this type is created.
   *
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  static beforeMake(fields: Map_Type<FieldType, any>): Map_Type<FieldType, any> | null;

  /**
   * Optional override that will be called after every instance creation.
   *
   * Note that it introduces additional overhead so should only be implemented for low volume data.
   */
  afterMake(): ReliabilityMlDatasetPreparationSpec;

  /**
   * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
   * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
   * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
   *
   * @see ValueType#defaultEmptyValue
   */
  static cachedEmptyInst(): ReliabilityMlDatasetPreparationSpec;

  /**
   * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
   * value is read.
   */
  static generateObjs(spec?: Obj.GenerateSpec): Stream<ReliabilityMlDatasetPreparationSpec> | null;

  /**
   * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
   * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
   * populates fields in a more realistic way.
   */
  static generateObj(spec?: Obj.GenerateSpec): ReliabilityMlDatasetPreparationSpec;
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λPredicate<T> {
  (t: T): boolean
}
