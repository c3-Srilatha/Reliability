// TypeScript definitions for the C3 type Feature.Set

/**
 * Collection of related features organized for machine learning model training and inference.
 *
 * In the C3 AI Agentic Platform, Feature.Set serves as the primary container for grouping
 * related features that work together in machine learning workflows. It provides unified
 * data access, materialization, and snapshot capabilities for collections of features
 * derived from either legacy metrics or lambda-based transformations.
 *
 * Key Use Cases:
 * 1. Model Training: Organize input features for training machine learning models
 * 2. Inference Pipelines: Provide consistent feature sets for model predictions
 * 3. Data Snapshots: Create immutable snapshots for model reproducibility and auditing
 * 4. Feature Materialization: Pre-compute and store feature values for performance
 * 5. Multi-Feature Evaluation: Efficiently evaluate multiple related features together
 *
 * Feature Set Types:
 * - Metric Feature Sets: Built from {@link Feature Features} backed by legacy metrics
 * - Lambda Feature Sets: Defined using custom Python code via {@link FeatureBase#src} and {@link FeatureBase#srcBatch}
 *
 * Integration Patterns:
 * - Connected to {@link MlModel MlModels} for training and inference workflows
 * - Uses {@link FeatureEvaluatable} subject types for data organization
 * - Supports time-series and snapshot-based feature evaluation
 * - Integrates with {@link Feature.Store} for materialization and caching
 *
 * Performance Characteristics:
 * - Optimized for batch feature evaluation across multiple subjects
 * - Supports materialization for high-performance repeated access
 * - Enables snapshot-based reproducible model training
 * - Scales efficiently with large numbers of features and subjects
 *
 * Annotations:
 * - Entity Type for persistent storage and lifecycle management
 * - Mixes {@link FeatureBase} for core feature functionality and metadata
 * - Mixes {@link Feature.MergeDataSpec} for data merging and aggregation strategies
 * - Mixes {@link LegacyMetricAdvancedSpec} for advanced metric evaluation options
 * - Mixes {@link PySerializable} for Python serialization support
 *
 * @see Feature
 * @see MlModel
 * @see Feature.Store
 * @see FeatureEvaluatable
 * @see CreateSnapshotSpec
 *
 * @remarks this represents a value passed to a method that expects an instance of Feature.Set
 */
declare namespace Feature {
  export interface ISet {

    /**
     * A unique identifier that can be manually assigned or generated automatically during object creation. This
     * identifier cannot be altered after the object has been persisted.
     */
    id: string;

    /**
     * Tracks the version history of an object, which is only active if version history tracking is enabled. This field is
     * crucial for accessing previous versions of an object and is entirely managed by the system.
     *
     * @see Ann.Db#versionHistory
     */
    versionEdits?: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>;

    /**
     * Name of the Obj instance
     */
    name: string;

    /**
     * Various system fields.
     */
    meta?: IMeta | null;

    /**
     * Version number used for optimistic concurrency.  Automatically managed by the system.
     *
     * Updating an Obj with a null or 0 value for version will cause the concurrency check to be skipped and should only
     * be done with great caution.
     */
    version?: number | null;

    /**
     * Persists concrete type with bindings for generic types where instance has parameter bindings
     */
    typeWithBindings?: IType | null;

    /**
     * System managed field that keeps track of which fields in the seed data obj were updated by a user (as opposed to
     * the provisioner/authorizer).  Fields in seed data objs that are updated by users will not have those changes
     * overridden by provisioning.
     */
    userUpdatedFields?: C3.Array<string | null> | Array<string | null>;

    /**
     * Field that marks a seed data obj as hidden.  When a seed data obj that was created via provisioning (e.g owned by
     * c3), user removals of that obj are handled by marking the obj as hidden to prevent future provisioning from causing
     * them to reappear.
     */
    hidden?: boolean;

    /**
     * A seed data entry is considered to be user owned if either this flag is true or the {@link Meta#created created}
     * field of {@link Persistable#meta} is not the authorizer or provisioner.  This field is completely managed by the
     * system.  It will be set while creating an entry if it is being created by the authorizer and the
     * {@link UpsertSpec#forceUserUpdate} is set to true.
     */
    userOwned?: boolean;

    /**
     * Subject type of this feature
     */
    subjectType: IType;

    /**
     * User specified tags for ease of discovery and maintenance
     */
    tags?: C3.Array<string | null> | Array<string | null>;

    /**
     * A short description of the {@link Feature} or {@link Feature.Set}
     */
    summary?: string | null;

    /**
     * A long and in-depth description of the {@link Feature} or {@link Feature.Set}
     */
    description?: string | null;

    /**
     * If a Feature or Feature.Set already exists it can either be overwritten to create a new one or failed based on this property.
     * Default value of false overwrites the creation
     */
    failIfExists?: boolean;

    /**
     * Whether the Feature or Feature Set can be materialized. evalFeature/evalFeatureSet on non-materializable feature and feature set
     * provides the result directly from evaluation rather than from Feature Store.
     *
     * **doNotMaterialize** at the **Feature.Set** will supersede **doNotMaterialize** from the underlying features
     * i.e A **Feature.Set** with **doNotMaterialize=false** will **materialize** ALL of the underlying features,
     * and a  **Feature.Set** with **doNotMaterialize=true** will **not materialize any** of the underlying features.
     *
     * @see Feature#isLegacyMetricBacked
     */
    doNotMaterialize?: boolean;

    /**
     * The lambda to produce the Feature or Feature.Set data based on the subject, {@link EvalFeatureSpec} instance and the
     * Feature or Feature.Set. It will be applied one subject at a time
     * during materialization or evaluation based on
     * {@link doNotMaterialize}, {@link EvalFeatureSpec#skipMaterialized} flag value.
     *
     * Let's understand this with help of examples:
     *
     * Assuming that there are two metrics named **GeneratorRotationSpeedAvg** and **GearOilTemperatureAvg** on
     * a FeatureEvaluatable subtype **WindTurbine** and **TURBINE-1**, **TURBINE-2** are two of the windturbines, then:
     *
     * e.g of a Feature.Set:
     *
     * ```python
     *  def _customFeatureSetDataFunc(subject, spec, fs):
     *         eval_result = c3.WindTurbine.eval(projection='GeneratorRotationSpeedAvg, GearOilTemperatureAvg', id=subject.id)
     *         return c3.Feature.CustomMaterializationResult(data=eval_result)
     *  columns = {"subject" : "string", "timestamp" : "datetime", "GeneratorRotationSpeedAvg" : "double", "GearOilTemperatureAvg" : "double"}
     *  feature_set = c3.Feature.Set(name="windTurbineFs",
     *                               subjectType=c3.WindTurbine,
     *                               columns=columns,
     *                               src=c3.Lambda.fromPyFunc(_customFeatureSetDataFunc)).upsert()
     * ```
     *
     * e.g of a Feature:
     *
     * ```python
     * def _customFeatureDataFunc(subject, spec, feature):
     *     eval_result = c3.WindTurbine.eval(projection='GeneratorRotationSpeedAvg', id=subject.id).rename(columns={'GeneratorRotationSpeedAvg' : feature.name})
     *     return c3.Feature.CustomMaterializationResult(data=eval_result)
     * feature = c3.Feature(name="generatorRotationSpeedAvgFeature",
     *                      subjectType=c3.WindTurbine,
     *                      valueType="double",
     *                      hasTimestamp=True,
     *                      src=c3.Lambda.fromPyFunc(_customFeatureDataFunc)).upsert()
     * ```
     * The following validations are performed on the output dataframe:
     * - Data has a "subject" column.
     * - Data has a "timestamp" column if such is expected in {@link FeatureBase#_columns} and does not have one if it's unexpected.
     * - Data's columns follow the order of the keys in {@link FeatureBase#_columns}.
     * - Data is being produced only for the subject we want. Strictly speaking, the actual subject from lambda should be the expected subject.
     * - Data's timestamps are: a. non-null, b. row-wise sorted from earliest to latest for each subject, and c. within the timerange of provided {@link EvalFeatureSpec}.
     *
     * We will fail with a **runtime error** (i.e. during materialization or runtime evaluation) if any of the above validations fails.
     *
     * If the data being produced is ignoring the time range, then **timeRangeIgnored** should be set. This will help the
     * platform to remove the data for a subject if no/empty data is returned for that.
     * As mentioned above, if the data contains subjects outside of the input subjects, then an error will the thrown during materialization.
     * Let's modify the above lambda to understand the same:
     * ```python
     * def _customFeatureDataFunc(subject, spec, feature):
     *     import pandas as pd
     *     eval_result = c3.WindTurbine.eval(projection='GeneratorRotationSpeedAvg', id=subject.id).rename(columns={'GeneratorRotationSpeedAvg' : feature.name}).to_pandas()
     *     eval_result.loc[0] = ["abc", pd.Timestamp("2022-05-01"), 50]
     *     return c3.Feature.CustomMaterializationResult(data=eval_result)
     * ```
     * As we can see, the data now contains an arbitrary subject "abc" and upon materialization we will see a validation error comparing actual subjects and expected subjects:
     *
     * Error invoking Java method Feature#materialize: ValueError: Subject column in the Feature/Feature.Set has additional values: [abc] that are not included in the expected values: [TURBINE-1,TURBINE-2]
     *
     * Overall, use of this lambda is useful for situations where platform's native **Data** based Feature authoring experience
     * is missing any needed capabilities.
     * @see #srcBatch
     */
    src?: λTriFunction<FeatureEvaluatable, EvalFeatureSpec | null, Feature.Set | null, IFeature.CustomMaterializationResult | null> | null;

    /**
     * The lambda to produce the Feature or Feature.Set data based on the subject, {@link EvalFeatureSpec} instance and the
     * Feature or Feature.Set. It will be applied on the batch of subjects all at once
     * during materialization or evaluation based on
     * {@link doNotMaterialize}, {@link EvalFeatureSpec#skipMaterialized} flag value
     *
     * Let's understand this with help of examples:
     *
     * Assuming that there are two metrics named **GeneratorRotationSpeedAvg** and **GearOilTemperatureAvg** on
     * a FeatureEvaluatable subtype **WindTurbine** and **TURBINE-1**, **TURBINE-2** are two of the windturbines, then:
     *
     * e.g of a Feature.Set:
     *
     * ```python
     *  def _customFeatureSetDataFunc(subjects, spec, fs):
     *         subjectIds = [subject.id for subject in subjects]
     *         eval_result = c3.WindTurbine.eval(projection='GeneratorRotationSpeedAvg, GearOilTemperatureAvg', ids=subjectIds)
     *         return c3.Feature.CustomMaterializationResult(data=eval_result)
     *  columns = {"subject" : "string", "timestamp" : "datetime", "GeneratorRotationSpeedAvg" : "double", "GearOilTemperatureAvg" : "double"}
     *  feature_set = c3.Feature.Set(name="windTurbineFs",
     *                               subjectType=c3.WindTurbine,
     *                               columns=columns,
     *                               srcBatch=c3.Lambda.fromPyFunc(_customFeatureSetDataFunc)).upsert()
     * ```
     *
     * e.g of a Feature:
     *
     * ```python
     * def _customFeatureDataFunc(subjects, spec, feature):
     *     subjectIds = [subject.id for subject in subjects]
     *     eval_result = c3.WindTurbine.eval(projection='GeneratorRotationSpeedAvg', ids=subjectIds).rename(columns={'GeneratorRotationSpeedAvg' : feature.name})
     *     return c3.Feature.CustomMaterializationResult(data=eval_result)
     * feature = c3.Feature(name="generatorRotationSpeedAvgFeature",
     *                      subjectType=c3.WindTurbine,
     *                      valueType="double",
     *                      hasTimestamp=True,
     *                      srcBatch=c3.Lambda.fromPyFunc(_customFeatureDataFunc)).upsert()
     * ```
     * The same validations performed on the output dataframe of a {@link FeatureBase#src} are performed here with the only difference that:
     * - Data is being produced only for the subjects we want. Strictly speaking, actual subjects from lambda should be a subset of the expected subjects.
     *
     * and additionally we validate that:
     * - Data is row-wise grouped by the "subject" column.
     *
     * We will fail with a **runtime error** (i.e. during materialization or runtime evaluation) if any of these validations fails.
     *
     * If the data being produced is ignoring the time range, then **timeRangeIgnored** should be set. This will help the
     * platform to remove the data for a subject if no/empty data is returned for that.
     * Additionally, if the data contains subjects outside of the input subjects, then an error will the thrown during materialization.
     * Let's modify the above lambda to understand the same:
     * ```python
     * def _customFeatureDataFunc(subjects, spec, feature):
     *     import pandas as pd
     *     subjectIds = [subject.id for subject in subjects]
     *     eval_result = c3.WindTurbine.eval(projection='GeneratorRotationSpeedAvg', id=subjectIds).rename(columns={'GeneratorRotationSpeedAvg' : feature.name}).to_pandas()
     *     eval_result.loc[0] = ["abc", pd.Timestamp("2022-05-01"), 50]
     *     return c3.Feature.CustomMaterializationResult(data=eval_result)
     * ```
     * As we can see, the data now contains an arbitrary subject "abc" and upon materialization we will see a validation error comparing actual subjects and expected subjects:
     *
     * Error invoking Java method Feature#materialize: ValueError: Subject column in the Feature/Feature.Set has additional values: [abc] that are not included in the expected values: [TURBINE-1,TURBINE-2]
     *
     * Overall, use of this lambda is useful for situations where platform's native **Data** based Feature authoring experience
     * is missing any needed capabilities.
     * @see #src
     */
    srcBatch?: λTriFunction<C3.Array<FeatureEvaluatable>, EvalFeatureSpec | null, Feature.Set | null, IFeature.CustomMaterializationResult | null> | null;

    /**
     * Allows platform to pre-fetch data for the subject in case it needs something other than **id** in the {@link FeatureEvaluatable} instance being used as
     * an argument to the {@link #src} and {@link #srcBatch} lambdas. For example, if user lambda uses the `timeseries` field in the WindTurbine type,
     * they can make the feature set as follows
     * ```python
     *    def srcFunc(subject, spec, fs):
     *        # return data that uses the timeseries field in WindTurbine subjects
     *        pass
     *    featureSet = c3.Feature.Set(id='WindTurbine#fs1', name='fs1', src=c3.Lambda.fromPyFunc(srcFunc), columns=columns
     *                                srcSubjectProjection='timeseries').create()
     * ```
     * Note that if this field is not set or null, then we fetch **this** in the subjects to make sure the user lambda has access to the necessary fields.
     */
    srcSubjectProjection?: string | null;

    /**
     * Singleton timestamp, series of timestamp, singleton {@link TimeRange} or series of  {@link TimeRange} feature from
     * this set that is used to pick the data point(s) from other timeseries features in this set.
     *
     * Note: only one of #asOfFeature, #agg, #merger or #maskFeature can be set
     */
    asOfFeature?: string | null;

    /**
     * Feature whose values are integers or booleans to mask and filter other features during materialization,
     * i.e. to only keep rows with a mask value of 0 or false
     *
     * Note: only one of #asOfFeature, #agg, #merger or #maskFeature can be set
     */
    maskFeature?: string | null;

    /**
     * time interval of resulting data for this set.
     *
     * @see #agg
     */
    interval?: string | null;

    /**
     * Aggregation function per feature if we are merging features in this set by aggregating or dissaggregating on time
     * interval.
     *
     * Note: only one of #asOfFeature, #agg, #merger or #maskFeature can be set
     */
    agg?: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null;

    /**
     * Indicates expression compiler options to be used during evaluation of metrics. Typically used for debugging
     * When using {@link EvalMetricsSpec#explain}, be sure to provide this field and set {@link ExprCompileOptions#evalPlanInclude}
     * to indicate what debugging information is required. Here are the options:
     * expr - Expression provided by the end user (not so interesting)
     * rewrittenExpr - How the metric engine rewrote the expression to optimize it and remove common sub expressions
     * srcTypeFetchSpec - Fetch spec generated to evaluate objects at the end of the path (in simple metrics). If you feel data is present, but metric engine returns missing values, be sure to generate the fetch spec using this approach
     * hierarchies - Objects obtained at the end of the {@link SimpleMetric#path} on the source objects
     * simpleMetrics - Results of simple metrics in the given expressions (If you are evaluating a simple metric, the result will be the same)
     * evalInstrumentation, tsEvalInstrumentation - Profiled view of within the metric expression where exactly the time was spent. This is crucial in understanding which sub metric / expression took the most amount of time during evaluation
     */
    options?: IEvalMetricsOptions | null;

    _SRC: string;

    DATA: string;

    /**
     * Names of the features included in this feature set.
     *
     * For metric-backed feature sets, this contains the names of {@link Feature Features}
     * that have been created and registered in the feature store. For lambda feature sets,
     * this field may be empty as the features are defined directly through {@link #columns}.
     *
     * Lambda Feature Limitations:
     * Lambda-backed features cannot be included in this set. If lambda-backed features
     * are specified here, materialization or evaluation will fail. Use {@link FeatureBase#src} and {@link FeatureBase#srcBatch}
     * for lambda-based feature definitions instead.
     *
     * Storage Configuration:
     * - Indexed and searchable for efficient feature discovery
     * - Serialized as {@link Feature} names for type safety
     * - Set collection ensures no duplicate feature names
     *
     * @see FeatureBase#isLambda
     * @see #columns
     */
    features?: C3.Set<string> | Array<string>;

    /**
     * Column definitions for lambda-based feature sets.
     *
     * Defines the schema for feature sets that use custom Python code
     * (via {@link FeatureBase#src} and {@link FeatureBase#srcBatch}) rather than pre-defined metric features.
     * Maps column names to their corresponding C3 AI value types.
     *
     * Required Columns:
     * - **subject**: Mandatory column identifying the entity being evaluated
     * - **timestamp**: Required for timeseries features with datetime valueType
     *
     * Column Validation:
     * The data returned by executing the lambda code must match the column definitions
     * specified here. Mismatches will cause errors during materialization or evaluation,
     * depending on {@link FeatureBase#doNotMaterialize} and {@link EvalFeatureSpec#skipMaterialized}
     * settings.
     *
     * Value Type Reference:
     * Use this table for mapping common data library types to C3 AI ValueTypes:
     *
     * | Pandas           | Polars        | Arrow       | C3 ValueType |
     * |------------------|---------------|-------------|--------------|
     * | -                | binary        | binary      | binary       |
     * | bool             | boolean       | bool        | boolean      |
     * | boolean          | boolean       | bool        | ?boolean     |
     * | int8             | int8          | int8        | byte         |
     * | datetime64[ns]   | datetime      | timestamp   | datetime     |
     * | decimal          | decimal       | decimal128  | decimal      |
     * | float64          | float64       | float64     | double       |
     * | float32          | float32       | float32     | float        |
     * | int64            | int64         | int64       | int          |
     * | int16            | int16         | int16       | int16        |
     * | int32            | int32         | int32       | int32        |
     * | -                | -             | json        | json         |
     * | object, string   | utf8          | string      | string       |
     *
     * Storage Configuration:
     * - Indexed for efficient schema queries
     * - Maps column names to serialized ValueType specifications
     *
     * @see FeatureBase#src
     * @see FeatureBase#srcBatch
     * @see ValueType
     */
    columns?: C3.Map<string | null, string | null> | {[key: string | null]: string | null};

    /**
     * Custom time range specification for feature materialization.
     *
     * Defines a specific time range for materializing feature data when the
     * default range from {@link Feature.Store.Config#defaultMaterializeTimeRange}
     * is insufficient. Particularly useful for features with complex time
     * dependencies or when materialization should be limited to specific periods.
     *
     * Use Cases:
     * - Features based on field traversals through {@link TimedValue} collections
     *   that require evaluation across multiple {@link TimedInterval TimedIntervals}
     * - Restricting materialization to specific time periods for performance
     * - Historical analysis requiring precise time boundaries
     *
     * Time Range Format:
     * Both start and end expressions must be valid C3 datetime expressions.
     * Common patterns include:
     * - Absolute dates: `"datetime('2020-01-01')"` to `"datetime('2020-12-31')"`
     * - Relative dates: `"now() - period(1, YEAR)"` to `"now()"`
     *
     * Validation Rules:
     * The following configurations will cause errors:
     * - Null start or end expressions
     * - Invalid datetime expressions or syntax
     * - End time before or equal to start time
     * - Malformed expression syntax (case-sensitive function names)
     *
     * Error Examples:
     * ```
     * <null, "datetime('2020')">                           // Null start
     * <"datetime('2020-01-01')", null>                     // Null end
     * <"dateTime('2020-01-01')", "dateTime('2019-01-01')"> // End before start
     * <"DaTeTiMe('2020-01-01')", "2020-12-01">             // Invalid case
     * <"dateTime('2020-01-01')", "'2020-12-01'">           // Invalid format
     * <"dateTime('2020-13-01')", "dateTime('2020-12-01')"> // Invalid date
     * ```
     *
     * @see Feature.Store.Config#defaultMaterializeTimeRange
     * @see TimedValue
     * @see TimedInterval
     * @see #timeHorizon
     */
    materializeTimeRange?: IPair<string | null, string | null> | null;

    /**
     * Maximum time range (time horizon) for which this feature set provides data.
     *
     * Defines the temporal boundaries within which the feature set can provide
     * valid data. Any evaluation or materialization requests outside this
     * time horizon will result in errors. This ensures data consistency and
     * prevents access to potentially invalid or incomplete feature data.
     *
     * Default Behavior:
     * If not specified, the time horizon defaults to `now() - 5y` (five years
     * from current time), aligned to the feature set's interval. The actual
     * default is determined by {@link Feature.Store.Config#defaultTimeHorizon}.
     *
     * Time Horizon Alignment:
     * The time horizon is automatically aligned to the feature set's interval
     * to ensure consistent data boundaries across different temporal resolutions.
     * For example, daily features align to day boundaries, hourly features to
     * hour boundaries.
     *
     * Use Cases:
     * - Preventing access to stale or unreliable historical data
     * - Managing data retention policies and storage costs
     * - Ensuring consistent training data boundaries for models
     * - Controlling computational resources for large-scale evaluations
     *
     * @see Feature.Store.Config#defaultTimeHorizon
     * @see #evaluatedTimeHorizon
     * @see #inferredInterval
     */
    timeHorizon?: IPair<string | null, string | null> | null;
  }
}


interface λTriFunction<T, U, V, R> {
  (t: T, u: U, v: V): R
}
/**
 * Collection of related features organized for machine learning model training and inference.
 *
 * In the C3 AI Agentic Platform, Feature.Set serves as the primary container for grouping
 * related features that work together in machine learning workflows. It provides unified
 * data access, materialization, and snapshot capabilities for collections of features
 * derived from either legacy metrics or lambda-based transformations.
 *
 * Key Use Cases:
 * 1. Model Training: Organize input features for training machine learning models
 * 2. Inference Pipelines: Provide consistent feature sets for model predictions
 * 3. Data Snapshots: Create immutable snapshots for model reproducibility and auditing
 * 4. Feature Materialization: Pre-compute and store feature values for performance
 * 5. Multi-Feature Evaluation: Efficiently evaluate multiple related features together
 *
 * Feature Set Types:
 * - Metric Feature Sets: Built from {@link Feature Features} backed by legacy metrics
 * - Lambda Feature Sets: Defined using custom Python code via {@link FeatureBase#src} and {@link FeatureBase#srcBatch}
 *
 * Integration Patterns:
 * - Connected to {@link MlModel MlModels} for training and inference workflows
 * - Uses {@link FeatureEvaluatable} subject types for data organization
 * - Supports time-series and snapshot-based feature evaluation
 * - Integrates with {@link Feature.Store} for materialization and caching
 *
 * Performance Characteristics:
 * - Optimized for batch feature evaluation across multiple subjects
 * - Supports materialization for high-performance repeated access
 * - Enables snapshot-based reproducible model training
 * - Scales efficiently with large numbers of features and subjects
 *
 * Annotations:
 * - Entity Type for persistent storage and lifecycle management
 * - Mixes {@link FeatureBase} for core feature functionality and metadata
 * - Mixes {@link Feature.MergeDataSpec} for data merging and aggregation strategies
 * - Mixes {@link LegacyMetricAdvancedSpec} for advanced metric evaluation options
 * - Mixes {@link PySerializable} for Python serialization support
 *
 * @see Feature
 * @see MlModel
 * @see Feature.Store
 * @see FeatureEvaluatable
 * @see CreateSnapshotSpec
 *
 * @remarks this represents a made instance of Feature.Set
 */
declare namespace Feature {
  export class Set extends Obj {

    /**
     * A unique identifier that can be manually assigned or generated automatically during object creation. This
     * identifier cannot be altered after the object has been persisted.
     */
    readonly id: string;
    withId(id: string): Feature.Set;

    /**
     * Tracks the version history of an object, which is only active if version history tracking is enabled. This field is
     * crucial for accessing previous versions of an object and is entirely managed by the system.
     *
     * @see Ann.Db#versionHistory
     */
    readonly versionEdits?: C3.Array<VersionEdit | null>;
    withVersionEdits(versionEdits: C3.Array<VersionEdit | null> | Array<IVersionEdit | null>): Feature.Set;

    /**
     * Name of the Obj instance
     */
    readonly name: string;
    withName(name: string): Feature.Set;

    /**
     * Various system fields.
     */
    readonly meta?: Meta | null;
    withMeta(meta: IMeta | null): Feature.Set;

    /**
     * Version number used for optimistic concurrency.  Automatically managed by the system.
     *
     * Updating an Obj with a null or 0 value for version will cause the concurrency check to be skipped and should only
     * be done with great caution.
     */
    readonly version?: number | null;
    withVersion(version: number | null): Feature.Set;

    /**
     * Persists concrete type with bindings for generic types where instance has parameter bindings
     */
    readonly typeWithBindings?: Type | null;
    withTypeWithBindings(typeWithBindings: IType | null): Feature.Set;

    /**
     * System managed field that keeps track of which fields in the seed data obj were updated by a user (as opposed to
     * the provisioner/authorizer).  Fields in seed data objs that are updated by users will not have those changes
     * overridden by provisioning.
     */
    readonly userUpdatedFields?: C3.Array<string | null>;
    withUserUpdatedFields(userUpdatedFields: C3.Array<string | null> | Array<string | null>): Feature.Set;

    /**
     * Field that marks a seed data obj as hidden.  When a seed data obj that was created via provisioning (e.g owned by
     * c3), user removals of that obj are handled by marking the obj as hidden to prevent future provisioning from causing
     * them to reappear.
     */
    readonly hidden?: boolean;
    withHidden(hidden: boolean): Feature.Set;

    /**
     * A seed data entry is considered to be user owned if either this flag is true or the {@link Meta#created created}
     * field of {@link Persistable#meta} is not the authorizer or provisioner.  This field is completely managed by the
     * system.  It will be set while creating an entry if it is being created by the authorizer and the
     * {@link UpsertSpec#forceUserUpdate} is set to true.
     */
    readonly userOwned?: boolean;
    withUserOwned(userOwned: boolean): Feature.Set;

    /**
     * Subject type of this feature
     */
    readonly subjectType: Type;
    withSubjectType(subjectType: IType): Feature.Set;

    /**
     * User specified tags for ease of discovery and maintenance
     */
    readonly tags?: C3.Array<string | null>;
    withTags(tags: C3.Array<string | null> | Array<string | null>): Feature.Set;

    /**
     * A short description of the {@link Feature} or {@link Feature.Set}
     */
    readonly summary?: string | null;
    withSummary(summary: string | null): Feature.Set;

    /**
     * A long and in-depth description of the {@link Feature} or {@link Feature.Set}
     */
    readonly description?: string | null;
    withDescription(description: string | null): Feature.Set;

    /**
     * If a Feature or Feature.Set already exists it can either be overwritten to create a new one or failed based on this property.
     * Default value of false overwrites the creation
     */
    readonly failIfExists?: boolean;
    withFailIfExists(failIfExists: boolean): Feature.Set;

    /**
     * Whether the Feature or Feature Set can be materialized. evalFeature/evalFeatureSet on non-materializable feature and feature set
     * provides the result directly from evaluation rather than from Feature Store.
     *
     * **doNotMaterialize** at the **Feature.Set** will supersede **doNotMaterialize** from the underlying features
     * i.e A **Feature.Set** with **doNotMaterialize=false** will **materialize** ALL of the underlying features,
     * and a  **Feature.Set** with **doNotMaterialize=true** will **not materialize any** of the underlying features.
     *
     * @see Feature#isLegacyMetricBacked
     */
    readonly doNotMaterialize?: boolean;
    withDoNotMaterialize(doNotMaterialize: boolean): Feature.Set;

    /**
     * The lambda to produce the Feature or Feature.Set data based on the subject, {@link EvalFeatureSpec} instance and the
     * Feature or Feature.Set. It will be applied one subject at a time
     * during materialization or evaluation based on
     * {@link doNotMaterialize}, {@link EvalFeatureSpec#skipMaterialized} flag value.
     *
     * Let's understand this with help of examples:
     *
     * Assuming that there are two metrics named **GeneratorRotationSpeedAvg** and **GearOilTemperatureAvg** on
     * a FeatureEvaluatable subtype **WindTurbine** and **TURBINE-1**, **TURBINE-2** are two of the windturbines, then:
     *
     * e.g of a Feature.Set:
     *
     * ```python
     *  def _customFeatureSetDataFunc(subject, spec, fs):
     *         eval_result = c3.WindTurbine.eval(projection='GeneratorRotationSpeedAvg, GearOilTemperatureAvg', id=subject.id)
     *         return c3.Feature.CustomMaterializationResult(data=eval_result)
     *  columns = {"subject" : "string", "timestamp" : "datetime", "GeneratorRotationSpeedAvg" : "double", "GearOilTemperatureAvg" : "double"}
     *  feature_set = c3.Feature.Set(name="windTurbineFs",
     *                               subjectType=c3.WindTurbine,
     *                               columns=columns,
     *                               src=c3.Lambda.fromPyFunc(_customFeatureSetDataFunc)).upsert()
     * ```
     *
     * e.g of a Feature:
     *
     * ```python
     * def _customFeatureDataFunc(subject, spec, feature):
     *     eval_result = c3.WindTurbine.eval(projection='GeneratorRotationSpeedAvg', id=subject.id).rename(columns={'GeneratorRotationSpeedAvg' : feature.name})
     *     return c3.Feature.CustomMaterializationResult(data=eval_result)
     * feature = c3.Feature(name="generatorRotationSpeedAvgFeature",
     *                      subjectType=c3.WindTurbine,
     *                      valueType="double",
     *                      hasTimestamp=True,
     *                      src=c3.Lambda.fromPyFunc(_customFeatureDataFunc)).upsert()
     * ```
     * The following validations are performed on the output dataframe:
     * - Data has a "subject" column.
     * - Data has a "timestamp" column if such is expected in {@link FeatureBase#_columns} and does not have one if it's unexpected.
     * - Data's columns follow the order of the keys in {@link FeatureBase#_columns}.
     * - Data is being produced only for the subject we want. Strictly speaking, the actual subject from lambda should be the expected subject.
     * - Data's timestamps are: a. non-null, b. row-wise sorted from earliest to latest for each subject, and c. within the timerange of provided {@link EvalFeatureSpec}.
     *
     * We will fail with a **runtime error** (i.e. during materialization or runtime evaluation) if any of the above validations fails.
     *
     * If the data being produced is ignoring the time range, then **timeRangeIgnored** should be set. This will help the
     * platform to remove the data for a subject if no/empty data is returned for that.
     * As mentioned above, if the data contains subjects outside of the input subjects, then an error will the thrown during materialization.
     * Let's modify the above lambda to understand the same:
     * ```python
     * def _customFeatureDataFunc(subject, spec, feature):
     *     import pandas as pd
     *     eval_result = c3.WindTurbine.eval(projection='GeneratorRotationSpeedAvg', id=subject.id).rename(columns={'GeneratorRotationSpeedAvg' : feature.name}).to_pandas()
     *     eval_result.loc[0] = ["abc", pd.Timestamp("2022-05-01"), 50]
     *     return c3.Feature.CustomMaterializationResult(data=eval_result)
     * ```
     * As we can see, the data now contains an arbitrary subject "abc" and upon materialization we will see a validation error comparing actual subjects and expected subjects:
     *
     * Error invoking Java method Feature#materialize: ValueError: Subject column in the Feature/Feature.Set has additional values: [abc] that are not included in the expected values: [TURBINE-1,TURBINE-2]
     *
     * Overall, use of this lambda is useful for situations where platform's native **Data** based Feature authoring experience
     * is missing any needed capabilities.
     * @see #srcBatch
     */
    readonly src?: λTriFunction<FeatureEvaluatable, EvalFeatureSpec | null, Feature.Set | null, Feature.CustomMaterializationResult | null> | null;
    withSrc(src: λTriFunction<FeatureEvaluatable, EvalFeatureSpec | null, Feature.Set | null, IFeature.CustomMaterializationResult | null> | null): Feature.Set;

    /**
     * The lambda to produce the Feature or Feature.Set data based on the subject, {@link EvalFeatureSpec} instance and the
     * Feature or Feature.Set. It will be applied on the batch of subjects all at once
     * during materialization or evaluation based on
     * {@link doNotMaterialize}, {@link EvalFeatureSpec#skipMaterialized} flag value
     *
     * Let's understand this with help of examples:
     *
     * Assuming that there are two metrics named **GeneratorRotationSpeedAvg** and **GearOilTemperatureAvg** on
     * a FeatureEvaluatable subtype **WindTurbine** and **TURBINE-1**, **TURBINE-2** are two of the windturbines, then:
     *
     * e.g of a Feature.Set:
     *
     * ```python
     *  def _customFeatureSetDataFunc(subjects, spec, fs):
     *         subjectIds = [subject.id for subject in subjects]
     *         eval_result = c3.WindTurbine.eval(projection='GeneratorRotationSpeedAvg, GearOilTemperatureAvg', ids=subjectIds)
     *         return c3.Feature.CustomMaterializationResult(data=eval_result)
     *  columns = {"subject" : "string", "timestamp" : "datetime", "GeneratorRotationSpeedAvg" : "double", "GearOilTemperatureAvg" : "double"}
     *  feature_set = c3.Feature.Set(name="windTurbineFs",
     *                               subjectType=c3.WindTurbine,
     *                               columns=columns,
     *                               srcBatch=c3.Lambda.fromPyFunc(_customFeatureSetDataFunc)).upsert()
     * ```
     *
     * e.g of a Feature:
     *
     * ```python
     * def _customFeatureDataFunc(subjects, spec, feature):
     *     subjectIds = [subject.id for subject in subjects]
     *     eval_result = c3.WindTurbine.eval(projection='GeneratorRotationSpeedAvg', ids=subjectIds).rename(columns={'GeneratorRotationSpeedAvg' : feature.name})
     *     return c3.Feature.CustomMaterializationResult(data=eval_result)
     * feature = c3.Feature(name="generatorRotationSpeedAvgFeature",
     *                      subjectType=c3.WindTurbine,
     *                      valueType="double",
     *                      hasTimestamp=True,
     *                      srcBatch=c3.Lambda.fromPyFunc(_customFeatureDataFunc)).upsert()
     * ```
     * The same validations performed on the output dataframe of a {@link FeatureBase#src} are performed here with the only difference that:
     * - Data is being produced only for the subjects we want. Strictly speaking, actual subjects from lambda should be a subset of the expected subjects.
     *
     * and additionally we validate that:
     * - Data is row-wise grouped by the "subject" column.
     *
     * We will fail with a **runtime error** (i.e. during materialization or runtime evaluation) if any of these validations fails.
     *
     * If the data being produced is ignoring the time range, then **timeRangeIgnored** should be set. This will help the
     * platform to remove the data for a subject if no/empty data is returned for that.
     * Additionally, if the data contains subjects outside of the input subjects, then an error will the thrown during materialization.
     * Let's modify the above lambda to understand the same:
     * ```python
     * def _customFeatureDataFunc(subjects, spec, feature):
     *     import pandas as pd
     *     subjectIds = [subject.id for subject in subjects]
     *     eval_result = c3.WindTurbine.eval(projection='GeneratorRotationSpeedAvg', id=subjectIds).rename(columns={'GeneratorRotationSpeedAvg' : feature.name}).to_pandas()
     *     eval_result.loc[0] = ["abc", pd.Timestamp("2022-05-01"), 50]
     *     return c3.Feature.CustomMaterializationResult(data=eval_result)
     * ```
     * As we can see, the data now contains an arbitrary subject "abc" and upon materialization we will see a validation error comparing actual subjects and expected subjects:
     *
     * Error invoking Java method Feature#materialize: ValueError: Subject column in the Feature/Feature.Set has additional values: [abc] that are not included in the expected values: [TURBINE-1,TURBINE-2]
     *
     * Overall, use of this lambda is useful for situations where platform's native **Data** based Feature authoring experience
     * is missing any needed capabilities.
     * @see #src
     */
    readonly srcBatch?: λTriFunction<C3.Array<FeatureEvaluatable>, EvalFeatureSpec | null, Feature.Set | null, Feature.CustomMaterializationResult | null> | null;
    withSrcBatch(srcBatch: λTriFunction<C3.Array<FeatureEvaluatable>, EvalFeatureSpec | null, Feature.Set | null, IFeature.CustomMaterializationResult | null> | null): Feature.Set;

    /**
     * Allows platform to pre-fetch data for the subject in case it needs something other than **id** in the {@link FeatureEvaluatable} instance being used as
     * an argument to the {@link #src} and {@link #srcBatch} lambdas. For example, if user lambda uses the `timeseries` field in the WindTurbine type,
     * they can make the feature set as follows
     * ```python
     *    def srcFunc(subject, spec, fs):
     *        # return data that uses the timeseries field in WindTurbine subjects
     *        pass
     *    featureSet = c3.Feature.Set(id='WindTurbine#fs1', name='fs1', src=c3.Lambda.fromPyFunc(srcFunc), columns=columns
     *                                srcSubjectProjection='timeseries').create()
     * ```
     * Note that if this field is not set or null, then we fetch **this** in the subjects to make sure the user lambda has access to the necessary fields.
     */
    readonly srcSubjectProjection?: string | null;
    withSrcSubjectProjection(srcSubjectProjection: string | null): Feature.Set;

    /**
     * Singleton timestamp, series of timestamp, singleton {@link TimeRange} or series of  {@link TimeRange} feature from
     * this set that is used to pick the data point(s) from other timeseries features in this set.
     *
     * Note: only one of #asOfFeature, #agg, #merger or #maskFeature can be set
     */
    readonly asOfFeature?: string | null;
    withAsOfFeature(asOfFeature: string | null): Feature.Set;

    /**
     * Feature whose values are integers or booleans to mask and filter other features during materialization,
     * i.e. to only keep rows with a mask value of 0 or false
     *
     * Note: only one of #asOfFeature, #agg, #merger or #maskFeature can be set
     */
    readonly maskFeature?: string | null;
    withMaskFeature(maskFeature: string | null): Feature.Set;

    /**
     * time interval of resulting data for this set.
     *
     * @see #agg
     */
    readonly interval?: string | null;
    withInterval(interval: string | null): Feature.Set;

    /**
     * Aggregation function per feature if we are merging features in this set by aggregating or dissaggregating on time
     * interval.
     *
     * Note: only one of #asOfFeature, #agg, #merger or #maskFeature can be set
     */
    readonly agg?: C3.Map<string | null, string | null> | string | null | null;
    withAgg(agg: C3.Map<string | null, string | null> | {[key: string | null]: string | null} | string | null | null): Feature.Set;

    /**
     * Indicates expression compiler options to be used during evaluation of metrics. Typically used for debugging
     * When using {@link EvalMetricsSpec#explain}, be sure to provide this field and set {@link ExprCompileOptions#evalPlanInclude}
     * to indicate what debugging information is required. Here are the options:
     * expr - Expression provided by the end user (not so interesting)
     * rewrittenExpr - How the metric engine rewrote the expression to optimize it and remove common sub expressions
     * srcTypeFetchSpec - Fetch spec generated to evaluate objects at the end of the path (in simple metrics). If you feel data is present, but metric engine returns missing values, be sure to generate the fetch spec using this approach
     * hierarchies - Objects obtained at the end of the {@link SimpleMetric#path} on the source objects
     * simpleMetrics - Results of simple metrics in the given expressions (If you are evaluating a simple metric, the result will be the same)
     * evalInstrumentation, tsEvalInstrumentation - Profiled view of within the metric expression where exactly the time was spent. This is crucial in understanding which sub metric / expression took the most amount of time during evaluation
     */
    readonly options?: EvalMetricsOptions | null;
    withOptions(options: IEvalMetricsOptions | null): Feature.Set;

    readonly _SRC: string;
    with_SRC(_SRC: string): Feature.Set;

    readonly DATA: string;
    withDATA(DATA: string): Feature.Set;

    /**
     * Names of the features included in this feature set.
     *
     * For metric-backed feature sets, this contains the names of {@link Feature Features}
     * that have been created and registered in the feature store. For lambda feature sets,
     * this field may be empty as the features are defined directly through {@link #columns}.
     *
     * Lambda Feature Limitations:
     * Lambda-backed features cannot be included in this set. If lambda-backed features
     * are specified here, materialization or evaluation will fail. Use {@link FeatureBase#src} and {@link FeatureBase#srcBatch}
     * for lambda-based feature definitions instead.
     *
     * Storage Configuration:
     * - Indexed and searchable for efficient feature discovery
     * - Serialized as {@link Feature} names for type safety
     * - Set collection ensures no duplicate feature names
     *
     * @see FeatureBase#isLambda
     * @see #columns
     */
    readonly features?: C3.Set<string>;
    withFeatures(features: C3.Set<string> | Array<string>): Feature.Set;

    /**
     * Column definitions for lambda-based feature sets.
     *
     * Defines the schema for feature sets that use custom Python code
     * (via {@link FeatureBase#src} and {@link FeatureBase#srcBatch}) rather than pre-defined metric features.
     * Maps column names to their corresponding C3 AI value types.
     *
     * Required Columns:
     * - **subject**: Mandatory column identifying the entity being evaluated
     * - **timestamp**: Required for timeseries features with datetime valueType
     *
     * Column Validation:
     * The data returned by executing the lambda code must match the column definitions
     * specified here. Mismatches will cause errors during materialization or evaluation,
     * depending on {@link FeatureBase#doNotMaterialize} and {@link EvalFeatureSpec#skipMaterialized}
     * settings.
     *
     * Value Type Reference:
     * Use this table for mapping common data library types to C3 AI ValueTypes:
     *
     * | Pandas           | Polars        | Arrow       | C3 ValueType |
     * |------------------|---------------|-------------|--------------|
     * | -                | binary        | binary      | binary       |
     * | bool             | boolean       | bool        | boolean      |
     * | boolean          | boolean       | bool        | ?boolean     |
     * | int8             | int8          | int8        | byte         |
     * | datetime64[ns]   | datetime      | timestamp   | datetime     |
     * | decimal          | decimal       | decimal128  | decimal      |
     * | float64          | float64       | float64     | double       |
     * | float32          | float32       | float32     | float        |
     * | int64            | int64         | int64       | int          |
     * | int16            | int16         | int16       | int16        |
     * | int32            | int32         | int32       | int32        |
     * | -                | -             | json        | json         |
     * | object, string   | utf8          | string      | string       |
     *
     * Storage Configuration:
     * - Indexed for efficient schema queries
     * - Maps column names to serialized ValueType specifications
     *
     * @see FeatureBase#src
     * @see FeatureBase#srcBatch
     * @see ValueType
     */
    readonly columns?: C3.Map<string | null, string | null>;
    withColumns(columns: C3.Map<string | null, string | null> | {[key: string | null]: string | null}): Feature.Set;

    /**
     * Custom time range specification for feature materialization.
     *
     * Defines a specific time range for materializing feature data when the
     * default range from {@link Feature.Store.Config#defaultMaterializeTimeRange}
     * is insufficient. Particularly useful for features with complex time
     * dependencies or when materialization should be limited to specific periods.
     *
     * Use Cases:
     * - Features based on field traversals through {@link TimedValue} collections
     *   that require evaluation across multiple {@link TimedInterval TimedIntervals}
     * - Restricting materialization to specific time periods for performance
     * - Historical analysis requiring precise time boundaries
     *
     * Time Range Format:
     * Both start and end expressions must be valid C3 datetime expressions.
     * Common patterns include:
     * - Absolute dates: `"datetime('2020-01-01')"` to `"datetime('2020-12-31')"`
     * - Relative dates: `"now() - period(1, YEAR)"` to `"now()"`
     *
     * Validation Rules:
     * The following configurations will cause errors:
     * - Null start or end expressions
     * - Invalid datetime expressions or syntax
     * - End time before or equal to start time
     * - Malformed expression syntax (case-sensitive function names)
     *
     * Error Examples:
     * ```
     * <null, "datetime('2020')">                           // Null start
     * <"datetime('2020-01-01')", null>                     // Null end
     * <"dateTime('2020-01-01')", "dateTime('2019-01-01')"> // End before start
     * <"DaTeTiMe('2020-01-01')", "2020-12-01">             // Invalid case
     * <"dateTime('2020-01-01')", "'2020-12-01'">           // Invalid format
     * <"dateTime('2020-13-01')", "dateTime('2020-12-01')"> // Invalid date
     * ```
     *
     * @see Feature.Store.Config#defaultMaterializeTimeRange
     * @see TimedValue
     * @see TimedInterval
     * @see #timeHorizon
     */
    readonly materializeTimeRange?: Pair<string | null, string | null> | null;
    withMaterializeTimeRange(materializeTimeRange: IPair<string | null, string | null> | null): Feature.Set;

    /**
     * Maximum time range (time horizon) for which this feature set provides data.
     *
     * Defines the temporal boundaries within which the feature set can provide
     * valid data. Any evaluation or materialization requests outside this
     * time horizon will result in errors. This ensures data consistency and
     * prevents access to potentially invalid or incomplete feature data.
     *
     * Default Behavior:
     * If not specified, the time horizon defaults to `now() - 5y` (five years
     * from current time), aligned to the feature set's interval. The actual
     * default is determined by {@link Feature.Store.Config#defaultTimeHorizon}.
     *
     * Time Horizon Alignment:
     * The time horizon is automatically aligned to the feature set's interval
     * to ensure consistent data boundaries across different temporal resolutions.
     * For example, daily features align to day boundaries, hourly features to
     * hour boundaries.
     *
     * Use Cases:
     * - Preventing access to stale or unreliable historical data
     * - Managing data retention policies and storage costs
     * - Ensuring consistent training data boundaries for models
     * - Controlling computational resources for large-scale evaluations
     *
     * @see Feature.Store.Config#defaultTimeHorizon
     * @see #evaluatedTimeHorizon
     * @see #inferredInterval
     */
    readonly timeHorizon?: Pair<string | null, string | null> | null;
    withTimeHorizon(timeHorizon: IPair<string | null, string | null> | null): Feature.Set;

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
    static fromJson(json: any | null): Feature.Set | null;

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
    static fromJsonString(json: string | null): Feature.Set | null;

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
    static fromXmlString(xml: string | null): Feature.Set | null;

    /**
     * Load from contentType representation and reconstruct the corresponding object.
     *
     * fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
     * (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
     * will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
     * type and will return an instance of the correct type.
     */
    static deserialize(contentStr: string | null, contentType: string): Feature.Set | null;

    /**
     * Returns new instance with all references to old type, including result of #type, replaced with new type. If new
     * type does not contain fields from old or field value types are not convertable then drops the field.
     *
     * This method is used during live metadata update
     */
    replaceType(old: Type, new_: Type): Feature.Set;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that field
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValues(mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Feature.Set;

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
    mapFieldValues(spec: ValueSpec, mapper: λBiFunction<FieldType, any, any>, convertValue?: boolean): Feature.Set;

    /**
     * Result of this function call is a copy of current instance with all non empty fields replaced based on results of
     * the asynchronous `mapper` invocation.
     *
     * @param action
     *           lambda to apply for every field value to produce a new value for that fields
     * @param convertValue
     *           if true, attempt to convert the value to match the field's type
     */
    mapFieldValuesAsync(mapper: λBiFunction<FieldType, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Feature.Set | null>;

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
    mapFieldValuesAsync(spec: ValueSpec, mapper: λBiFunction<FieldType | null, any, C3.Promise<any> | null>, convertValue?: boolean): C3.Promise<Feature.Set | null>;

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
    mapFieldValue(field?: FieldType | null, includeEmpty?: boolean, mapper: λFunction<any, any>, convertValue?: boolean): Feature.Set;

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
    mapRefs(mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Feature.Set;

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
    mapRefs(includeEmpty: boolean, mapper: λBiFunction<FieldType, Obj, Obj | null>, convertValue?: boolean): Feature.Set;

    /**
     * Populates all missing default values and throws error if any constraint is violated.
     */
    validateObj(): Feature.Set;

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
    withField(field: string, value: any, doNotConvert?: boolean): Feature.Set;

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
    withField(field: FieldType, value: any, doNotConvert?: boolean): Feature.Set;

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
    withFields(fields: C3.Map<string | null, any> | null, doNotConvert?: boolean): Feature.Set;

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
    withFieldAtPath(path: string, value: any, doNotConvert?: boolean, doNotCreateIfMissing?: boolean): Feature.Set;

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
    withoutFieldAtPath(path: string): Feature.Set;

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
    withoutField(field: string | null): Feature.Set;

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
    withoutField(field: FieldType | null): Feature.Set;

    /**
     * Builds a new Obj, removing the fields with the provided names.
     *
     * Immutable objects may return the same instance if the fields being removed are not present in the existing object.
     *
     * @param fields
     *           names of the fields to remove
     * @return new Obj with removed fields
     */
    withoutFields(fields: C3.Array<string | null> | null): Feature.Set;

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
    withoutFieldsByType(fields: C3.Array<FieldType | null> | null): Feature.Set;

    /**
     * @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
     */
    withoutSecretFields(): Feature.Set;

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
    withDefaults(includeEmptyRefsWithDefaults?: boolean, defaultFields?: C3.Array<string | null>): Feature.Set;

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
    defaultField(field: string): Feature.Set;

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
    defaultField(field: FieldType): Feature.Set;

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
    unsetField(field: string): Feature.Set;

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
    unsetField(field: FieldType): Feature.Set;

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
    removeField(field: string): Feature.Set;

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
    removeField(field: FieldType): Feature.Set;

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
    mergeObj(other: Obj | null, fieldPathMergeSpec?: C3.Map<string | null, string | null>): Feature.Set;

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
    mergeObj(other: Obj | null, otherFieldsFilter: Type): Feature.Set;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
     * @param deep
     *        if set to true then traverse reference and collection fields and merge corresponding fields or elements with
     *        the same key or index.
     */
    mergeObj(other: Obj | null, deep?: boolean, merger: λQuadFunction<FieldPath | null, any, FieldPath | null, any, any>): Feature.Set;

    /**
     * Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
     * fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
     * traverse child reference and collection fields.
     */
    mergeObj(other: Obj | null, merger: λQuadFunction<FieldType | null, any, FieldType | null, any, any>): Feature.Set;

    mergeJson(json: any | null): Feature.Set;

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
    mergeChildren(deep?: boolean, objKey?: λFunction<Obj | null, any> | null, filter?: λPredicate<string> | null): Feature.Set;

    /**
     * Adds the numeric Obj fields with the other Objs respective fields.
     * If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
     * references with same name and collection elements at same index or key.
     */
    sumObj(other: Obj | null, deep?: boolean): Feature.Set;

    /**
     * Build an array of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonArray(): C3.Array<Feature.Set | null>;

    /**
     * Creates an array of instances of this type.
     */
    static array(...elements: any[]): C3.Array<Feature.Set | null>;

    /**
     * Creates an array of instances of this type.
     */
    static arrayBuilder(): ArrayBuilder<Feature.Set | null> | null;

    /**
     * Build an set of the correct type with a single element which is this instance.
     *
     * @return new array instance with this as only element.
     */
    singletonSet(): C3.Set<Feature.Set | null>;

    /**
     * Creates a set of instances of this type.
     */
    static setBuilder(): SetBuilder<Feature.Set | null> | null;

    /**
     * Create a map of string to elements of this type.
     */
    static mapBuilder(): MapBuilder<string | null, Feature.Set | null> | null;

    /**
     * Create a map with the given key type and elements of this type.
     */
    static mapBuilderOf(keyType: ValueType): MapBuilder<any, Feature.Set | null> | null;

    /**
     * @return new ObjBuilder with initial state set to fields of this instance.
     */
    toBuilder(): ObjBuilder<Feature.Set | null>;

    /**
     * @return new ObjBuilder of this instance.
     */
    static builder(): ObjBuilder<Feature.Set | null>;

    /**
     * Construct instance of this type from provided field values and options
     */
    static fromFields(fields: C3.Map<FieldType | null, any> | null, spec: Obj.MakeSpec | null): Feature.Set;

    /**
     * Construct an instance of this type from provided fields
     * @param fields
     *            Fields to construct the instance of the obj with
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
     *
     * @see withDefaults
     */
    static fromFields(fields: C3.Map<FieldType | null, any | any | null> | null, withDefaults?: boolean): Feature.Set;

    /**
     * Construct instance of this type from provided field values and options
     */
    static make(fields: C3.Map<string | null, any> | null, spec: Obj.MakeSpec | null): Feature.Set;

    /**
     * Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
     * @param withDefaults
     *            If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
     *            populated
     *
     * @see withDefaults
     */
    static make(withDefaults?: boolean): Feature.Set;

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
    static make(fields: C3.Map<string | null, any | any | null> | null, withDefaults?: boolean): Feature.Set;

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
    static make(fields: any, withDefaults?: boolean): Feature.Set;

    /**
     * Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
     * when the argument is a known string.
     *
     * @see #fromString
     */
    static make(s: string | null): Feature.Set | null;

    /**
     * Construct an instance of this type from provided instance of a subtype or a "duck type".
     */
    static remake(other: Obj | null, failIfExtraOrInvalidFields?: boolean): Feature.Set;

    /**
     * Optional override that will be called every time instance of this type is created.
     *
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    static beforeMake(fields: C3.Map<FieldType | null, any> | null): C3.Map<FieldType | null, any>;

    /**
     * Optional override that will be called after every instance creation.
     *
     * Note that it introduces additional overhead so should only be implemented for low volume data.
     */
    afterMake(): Feature.Set;

    /**
     * Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
     * every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
     * Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
     *
     * @see ValueType#defaultEmptyValue
     */
    static cachedEmptyInst(): Feature.Set;

    /**
     * Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
     * value is read.
     */
    static generateObjs(spec?: Obj.GenerateSpec | null): Stream<Feature.Set>;

    /**
     * Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
     * random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
     * populates fields in a more realistic way.
     */
    static generateObj(spec?: Obj.GenerateSpec | null): Feature.Set;

    /**
     * @return whether the cache already contains this instance
     */
    isCached(): boolean;

    /**
     * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
     *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
     * @return stream of all available Cached instances.
     */
    static allCached(doNotProduceAll?: boolean): Stream<Feature.Set | null>;

    /**
     * @param filter C3 expression based predicate to filter instances. e.g. `field1=='value1' && field2>17`
     * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
     *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
     * @return existing instances of this type that satisfy filter from data cache.
     */
    static find(filter?: string | null, doNotProduceAll?: boolean): Stream<Feature.Set | null>;

    /**
     * @param doNotProduceAll if true, will not populate cache and only return available cached instances. Will call
     *        `produceAll` if cache is empty or if Ann.cache.all is true & data has not previously been fetched.
     * @return existing instances of this type that satisfy filter from data cache.
     */
    static findBy(field: string, value: any, doNotProduceAll?: boolean): Stream<Feature.Set | null>;

    /**
     * @return cached instance by the cache key. Only returns already cached instances, will not populate cache.
     *
     * @see forCacheKey
     * @see getCached
     */
    static findByCacheKey(key: string): Feature.Set | null;

    /**
     * @return cached instance by the key.
     *
     * @see forCacheKey
     * @see findByCacheKey
     */
    static forCacheKey(key: string | null): Feature.Set | null;

    /**
     * @return cached instance.
     *
     * @see forCacheKey
     * @see findByCacheKey
     */
    getCached(): Feature.Set | null;

    /**
     * @return newly produced cached instance.
     */
    refreshCache(): Feature.Set | null;

    /**
     * @return cache key for this instance.
     */
    cacheKey(): string;

    /**
     * Should produce an entry for the cache key. This method should not be called directly.
     */
    static produce(key: string): Feature.Set | null;

    /**
     * Produces up to 10,000 entries for the cached data and populates the cache with the produced data. You can change the max entry count with {@link Ann.Cache#maxSize}.
     */
    static produceAll(): C3.Map<string | null, Feature.Set | null>;

    /**
     * Override for sub-types to produce all values.
     */
    static doProduceAll(): C3.Map<string | null, Feature.Set | null>;

    /**
     * Evicts this instance from cache on all nodes of this application.
     */
    evictFromCache(): void;

    /**
     * Evicts this instance from cache of the current node.
     */
    evictFromCacheLocalOnly(): void;

    /**
     * Evicts this instance from cache on all local apps (c3-c3, env-c3, env-app) that live in the current node.
     * Will not trigger any cache invalidation broadcast.
     * see {@link Server#evictFromLocalAppsCaches}
     */
    evictFromCacheLocalOnlyAllApps(): void;

    /**
     * Clears the data cache for this type on all nodes of this application.
     */
    static clearCache(): void;

    /**
     * Clears the data cache for this type on the current node. Will not trigger any cache invalidation broadcast.
     */
    static clearCacheLocalOnly(): void;

    /**
     * Clears the data cache for this type on the current node for all local apps (c3-c3, env-c3, env-app) that live in the current node.
     * Will not trigger any cache invalidation broadcast.
     * see {@link Server#clearLocalAppsCaches}
     */
    static clearCacheLocalOnlyAllApps(): void;

    /**
     * Returns count of cached instances.
     */
    static cacheSize(): number | null;

    /**
     * Returns instance of the cache for this type.
     */
    static nativeCache(): any;

    /**
     * Override to perform customized upsert logic.
     *
     * @param state
     *        Current upsert state.
     *
     * @return The appropriate result (e.g. ObjList, Persistable<?>, etc) depending on the upsert operation.
     */
    static doUpsert(state: any): any;

    /**
     * Override to perfrom the 'unremove' operation.
     *
     * @param obj
     *        Obj to unremove.
     *
     * @return The unremoved Obj, if any and null otherwise.
     */
    static doUnremove(obj: PersistableWritable): PersistableWritable | null;

    /**
     * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param spec
     *           Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
     *           of 2000 will be applied.
     * @return Requested objs.
     */
    static fetch(spec?: FetchSpec | null): FetchResult<Feature.Set | null>;

    /**
     * Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param filter
     *           Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
     * @return Requested objs.
     */
    static fetch(filter: Filter): FetchResult<Feature.Set | null>;

    /**
     * Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
     * returned.
     *
     * @param spec
     *           Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
     * @return Requested obj stream.
     */
    static fetchObjStream(spec?: FetchStreamSpec | null): Stream<Feature.Set | null>;

    /**
     * Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
     * specified maximum batch size.
     *
     * @param spec
     *           Specification of what data to fetch.
     * @return Stream of Arrow batches.
     */
    static fetchArrowStream(spec: FetchArrowStreamSpec): Stream<Arrow | null>;

    /**
     * Finds rows matching specification and returns them as iterator of Arrow batches.
     *
     * @param spec
     *           Specification of what rows to return.
     * @return Iterator of Arrow batches.
     */
    static scanArrow(spec: ScanArrowSpec): ArrowIterator | null;

    /**
     * Fetched multiple obj instances in multiple locales based on specification.
     *
     * @param spec
     *        Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
     *        type.
     * @return Requested objs where key of map is locale id
     */
    static fetchMultiLocale(spec?: MultiLocaleFetchSpec | null): C3.Map<string | null, FetchResult<Feature.Set | null> | null>;

    /**
     * @return The number of entries that match the specification.
     */
    static fetchCount(spec?: FetchFilterSpec | null): number;

    /**
     * Gets the estimated count of objs that a fetch on the type with the optional filter will return.
     * For non-kv types, The count is obtained from the query explain plan for the fetch.
     * For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
     * other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
     * upper bound for the partition. For more accurate results, perform fillBuckets first.
     *
     * @param spec
     *        Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
     *        explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
     *        fields.
     * @param updateStatistics
     *        If true, the database statistics for all tables involved in the query will be updated prior to obtaining
     *        the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
     *
     * @return The requested estimated count.
     */
    static fetchCountEstimated(spec?: FetchFilterSpec | null, updateStatistics?: boolean): number;

    /**
     * Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
     * a callback function for the given batch.
     *
     * @param spec
     *           Specification of the scan action.
     * @return Statistics of the scan action.
     */
    static scan(spec: ScanSpec): ScanStats | null;

    /**
     * Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
     *
     * @param spec
     *        Spec indicating how the operation should work.
     *
     * IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
     *             rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
     *             cause an issue if the results are blindly used to create filters for fetching batches as the last batch
     *             would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
     *             other would be specified, depending on whether you are interested in controlling the number of batches
     *             or batch size.
     *
     * @return A stream of batch ids based on the input parameters.
     */
    static batchIds(spec?: BatchIdsSpec | null): Stream<string | null>;

    /**
     * @return True if there are at least the number of entries matching the filter/count specified in the spec.
     */
    static exists(spec?: ExistsSpec | null): boolean;

    /**
     * @return True if there are at least the number of entries matching the filter/count specified in the spec.
     */
    static exists(filter: Filter): boolean;

    /**
     * Used internally to fetch as a stream (e.g. FetchResultOvi)
     */
    static fetchOvi(spec?: FetchSpec | null): any;

    /**
     * Gets an instance of a single obj.  If the caller is not authorized to fetch the obj, it will not be returned.
     *
     * @param include
     *           Optional include spec to retrieve.
     * @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
     *         those fields will be returned. Otherwise the entire obj will be returned.
     */
    get(include?: string | null): Feature.Set | null;

    /**
     * Gets an instance of a single obj in it's leaf type if the type is extendable.  If the caller is not authorized
     * to fetch the obj, it will not be returned.
     *
     * @param include
     *           Optional include spec to retrieve.  Note that the include spec should reference only fields that are
     *           valid in the returned obj's type.  Otherwise an error may be thrown.
     * @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
     *         those fields will be returned. Otherwise the entire obj will be returned.
     */
    getSpecific(include?: string | null): Feature.Set | null;

    /**
     * Function to check if an obj was already fetched with an include that contains at least the fields of a specified
     * include and fetches the missing data if it wasn't.  The returned instance, by default will be the original instance
     * if it included at least the data for the requested include spec.  Otherwise it will perform a fetch with the
     * specified include and return that instance.  See {@link GetMissingSpec} for various options available governing
     * the behavior.
     *
     * @param spec
     *           Spec that controls various aspects of the function's behavior.
     * @return instance of the obj with all requested fields.
     */
    getMissing(spec: GetMissingSpec): Feature.Set;

    /**
     * Gets an obj instance directly from Cassandra, bypassing the normal fetch framework.  It is only valid for C3 types
     * that are stored in Cassandra.
     *
     * IMPORTANT! Cassandra direct IO functions are short term performance enhancements. Long term goal is to make base
     * apis as fast as direct IO apis.
     * Use with caution!!!
     *
     * @param include
     *           Optional include spec to retrieve.
     * @return The requested obj if it exists and null otherwise.  If the 'include' string is specified, then only
     *         those fields will be returned. Otherwise the entire obj will be returned.
     */
    getDirect(include?: string | null): Feature.Set | null;

    /**
     * Applies a reverse edit (e.g. VersionEdit) to an instance.
     *
     * @param versionEdit
     *        Reverse edit to apply
     *
     * @return The instance after applying the reverse edit.
     */
    applyReverseEdit(versionEdit: VersionEdit): Feature.Set;

    /**
     * @return key field type.
     */
    static keyFieldType(): FieldType;

    /**
     * @return key field value.
     */
    keyFieldValue(): string | null;

    /**
     * Build a map of the correct type with a single element which is this instance and key field value as key.
     */
    singletonMap(): C3.Map<string | null, WithKey | null>;

    /**
     * Build the canonical string representation of this instance. This must be implemented to provide serialization.
     *
     * If the object has no content, and fromString would properly reproduce it from a null value, toString may return
     * null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
     *
     * @see #fromString
     */
    toString(): string | null;

    /**
     * Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
     * provide deserialization.
     *
     * fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
     * a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
     * of called-on type, but perhaps not the same type.
     *
     * E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
     *
     * @see #toString
     */
    static fromString(s: string | null): Feature.Set | null;

    /**
     * Creates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
     * instance already exist.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The created obj.  If an include spec is specified in the 'spec.include' field, then the returned obj
     *         will have only those fields populated. Otherwise only the id field will be populated.
     */
    create(spec?: UpsertSpec | null): Feature.Set | null;

    /**
     * Creates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
     * specified (the default), then a C3BatchException will be thrown.  Otherwise {@link errors will be reported in the
     * returned {@link ObjList}.  This will fail if any of the instances already exist.
     *
     * @param objs
     *           New objs to create.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return List of created objs and any errors encountered (if 'spec.dontThrowOnBatchError' is true.  If an
     *         include spec is specified in the 'spec.include' field, then the returned objs will have only those
     *         fields populated. Otherwise only the id field will be populated.
     */
    static createBatch(objs: C3.Array<Feature.Set | null> | null, spec?: UpsertSpec | null): ObjList<Feature.Set | null> | null;

    /**
     * Creates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
     * specified (the default), then a C3BatchException will be thrown.  Otherwise {@link errors will be reported in the
     * returned {@link ObjList}.  This will fail if any of the instances already exist.
     *
     * @param objs
     *           New objs to create.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return  ObjList containing statistics for the operation as well as optionally (depending on the value of
     *          `spec.includeObjsInResults`.
     */
    static createBatchObjStream(objs: Stream<Feature.Set | null> | null, spec?: CreateBatchObjStreamSpec | null): ObjList<Feature.Set | null> | null;

    /**
     * Updates an instance of a C3 type. If the operation fails an exception will be thrown.  This will fail if the
     * instance does not already exist.
     *
     * @param srcObj
     *        If specified, the initial state of obj before any updates.  The actual update to the obj will be only the
     *        diff between the obj and srcObj.  If not specified, the obj will completely replace the existing one.
     * @param spec
     *        Various parameters that control the operation of function.
     * @return The updated obj.  If an include spec is specified in the 'spec#returnInclude' field, then the returned
     *         obj will have only those fields populated. Otherwise only the id field will be populated.
     */
    update(srcObj?: Feature.Set | null, spec?: UpsertSpec | null): Feature.Set | null;

    /**
     * Creates an instance of a C3 type if it doesn't exist or updates it if it does. If the operation fails an
     * exception will be thrown.
     *
     * @param srcObj
     *        If specified, the initial state of obj before any updates.  The actual update to the obj will be only the
     *        diff between the obj and srcObj.  If not specified, the obj will completely replace the existing one if it
     *        doesn't already exist.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The created or updated obj.  If an include spec is specified in the 'spec#returnInclude' field, then the
     *         returned obj will have only those fields populated. Otherwise only the id field will be populated.
     */
    upsert(srcObj?: Feature.Set | null, spec?: UpsertSpec | null): Feature.Set | null;

    /**
     * Merges an instance of a C3 type if it exists and creates it if it doesn't. Merging an obj instance by default only
     * updates the non-null field values in the input obj.  Null field values are ignored.  Nullness of field values
     * is honored at every level for fields that have an included type (e.g. non-entity type) as their value type. To
     * explicitly control which field values are applied, specify a value for {@link Mergespec#mergeInclude} or
     * {link Mergespec#csvInclude} to explicitly merge only those fields (including merging null values).
     *
     * For collections, the merge operation is applied to every element in the source and updated collection rather than
     * merging the collections themselves.  This means that every element will be merged with the element with the same
     * key/index and the resulting element will be the result of that merge.  As a result, merge can not be used to
     * add/append elements to a collection.
     *
     * Example: SomeType.make({id: 'text', fieldA: null}).merge({mergeInclude: "fieldA"})
     *
     * If the operation fails an exception will be thrown.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The created or updated obj.
     *
     * @see Mergespec#csvInclude
     */
    merge(spec?: MergeSpec | null): Feature.Set | null;

    /**
     * Merges an instance of a C3 type if it exists and creates it if it doesn't.
     *
     * @param mergeInclude
     *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
     *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
     *           However, fields that wouldn't be persisted as part of the operation are ignored.
     *
     *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
     *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
     *           even if they are null in the input.  Any existing data for included null input fields will be removed.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The created or updated obj.
     */
    merge(mergeInclude: string, spec?: MergeSpec | null): Feature.Set | null;

    /**
     * Updates the 'meta.updated' field to the current time.  If the obj doesn't exist an error will be returned.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     *
     * @return The created or updated obj.
     */
    touch(spec?: TouchSpec | null): Feature.Set | null;

    /**
     * Updates multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
     * specified (the default), then a C3BatchException will be thrown.  Otherwise {@linkerrors will be reported in the
     * returned {@link ObjList}.  This will fail if any of the instances don't already exist.
     *
     * @param objs
     *        Updated objs.
     * @param srcObjs
     *        If specified, the initial state of objs before any updates.  The actual update to the objs will be only the
     *        diff between the obj and its corresponding srcObj.  If not specified for an obj, the obj will completely
     *        replace the existing one.
     * @param spec
     *        Various parameters that control the operation of function.
     * @return List of updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an include
     *         spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
     *         populated. Otherwise only the id field will be populated.
     */
    static updateBatch(objs: C3.Array<Feature.Set | null> | null, srcObjs?: C3.Array<Feature.Set | null>, spec?: UpsertSpec | null): ObjList<Feature.Set | null> | null;

    /**
     * Updates multiple instances of a C3 type. If the operation fails due to a version conflict error, the lambda will be
     * called again to provide updated instances to be updated. If the operation fails for other reasons and
     * {@link UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
     * Otherwise errors will be reported in the returned {@link ObjList}.
     *
     * @param objs
     *        Lambda providing objs to be upserted
     * @param spec
     *        Various parameters that control the operation of the operation
     * @return List of updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an include
     *         spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
     *         populated. Otherwise only the id field will be populated.
     */
    static updateObjs(objs: λSupplier<C3.Array<Feature.Set | null>>, spec?: UpsertSpec | null): ObjList<Feature.Set | null> | null;

    /**
     * Creates instances of a C3 type if they don't already exist and updates them if they do exist. If the operation
     * fails errors will be reported in the returned {@link ObjList}.
     *
     * @param objs
     *        Updated or new objs.
     * @param srcObjs
     *        If specified, the initial state of objs before any updates.  The actual update to the objs will be only the
     *        diff between the obj and its corresponding srcObj.  If not specified, the obj will completely replace the
     *        existing one if it doesn't already exist.
     * @param spec
     *        Various parameters that control the operation of function.
     * @return List of created or updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If
     *         an include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those
     *         fields populated. Otherwise only the id field will be populated.
     */
    static upsertBatch(objs: C3.Array<Feature.Set | null> | null, srcObjs?: C3.Array<Feature.Set | null>, spec?: UpsertSpec | null): ObjList<Feature.Set | null> | null;

    /**
     * Creates instances of a C3 type if they don't already exist and updates them if they do exist. If the operation
     * fails due to a version conflict error, the lambda will be called again to provide updated instances to be upserted.
     * If the operation fails for other reasons and {@link UpsertSpec#dontThrowOnBatchError} is not specified (the
     * default), then a C3BatchException will be thrown. Otherwise errors will be reported in the returned
     * {@link ObjList}.
     *
     * @param objs
     *        Lambda providing objs to be upserted
     * @param spec
     *        Various parameters that control the operation of the operation
     * @return List of created or updated objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If
     *         an include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those
     *         fields populated. Otherwise only the id field will be populated.
     */
    static upsertObjs(objs: λSupplier<C3.Array<Feature.Set | null>>, spec?: UpsertSpec | null): ObjList<Feature.Set | null> | null;

    /**
     * Updates the 'meta.updated' field to the current time for a batch of objs.  Attempts to touch non-existing
     * objs will be considered an error.
     *
     * @param objs
     *        Objs to touch.
     *
     * @return List of touched objs and any errors encountered (if 'spec#dontThrowOnBatchError' is true).  If an
     *         include spec is specified in 'spec#returnInclude' field, then the returned objs will have only those fields
     *         populated. Otherwise only the id field will be populated.
     */
    static touchBatch(objs: C3.Array<Feature.Set | null> | null, spec?: TouchSpec | null): ObjList<Feature.Set | null> | null;

    /**
     * Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails and {@link
     * UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
     * Otherwise errors will be reported in the returned {@link ObjList}.  The merge operation is described in the {@link
     * merge} function.
     *
     * If the operation fails errors will be reported in the returned {@link ObjList}.
     *
     * @param objs
     *           Objs to merge.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
     *         true.  Only the id field will be populated.
     *
     * @see Mergespec#mergeInclude
     * @see Mergespec#csvInclude
     */
    static mergeBatch(objs: C3.Array<Feature.Set | null> | null, spec?: MergeSpec | null): ObjList<Feature.Set | null> | null;

    /**
     * Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails and {@link
     * UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a C3BatchException will be thrown.
     * Otherwise errors will be reported in the returned {@link ObjList}.  The merge operation is described in the {@link
     * merge} function.
     *
     * If the operation fails errors will be reported in the returned {@link ObjList}.
     *
     * @param objs
     *           Objs to merge.
     * @param mergeInclude
     *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
     *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
     *           However, fields that wouldn't be persisted as part of the operation are ignored.
     *
     *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
     *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
     *           even if they are null in the input.  Any existing data for included null input fields will be removed.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
     *         true.  Only the id field will be populated.
     *
     * @see Mergespec#csvInclude
     */
    static mergeBatch(objs: C3.Array<Feature.Set | null> | null, mergeInclude: string, spec?: MergeSpec | null): ObjList<Feature.Set | null> | null;

    /**
     * Merges multiple instances of a C3 type or creates them if they don't exist. If the operation fails due to a version
     * conflict error, the lambda will be called again to provide updated instances to be upserted. If the operation
     * fails for other reasons and {@link UpsertSpec#dontThrowOnBatchError} is not specified (the default), then a
     * C3BatchException will be thrown. Otherwise errors will be reported in the returned {@link ObjList}. The merge
     * operation is described in the {@link merge} function.
     *
     * @param objs
     *        Lambda providing objs to be upserted
     *
     * @param objs
     *        Lambda providing objs to be merged
     * @param mergeInclude
     *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
     *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
     *           However, fields that wouldn't be persisted as part of the operation are ignored.
     *
     *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
     *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
     *           even if they are null in the input.  Any existing data for included null input fields will be removed.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return List of created or merged objs and any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is
     *         true.  Only the id field will be populated.
     *
     * @see Mergespec#csvInclude
     */
    static mergeObjs(objs: λSupplier<C3.Array<Feature.Set | null>>, mergeInclude: string, spec?: MergeSpec | null): ObjList<Feature.Set | null> | null;

    /**
     * Merges an obj into multiple instances of a C3 type (e.g. mass merge). Like the {@link merge} and {@link mergeBatch}
     * functions, the set of fields to be merged can be controlled by specifying an include spec in either
     * {@link Mergespec#mergeInclude} or {@link Mergespec#csvInclude}.  Additionally, the objs to perform the operation on
     * can be controlled by specifying the {@link MergeAllSpec#filter}.  Valid filter expressions follow the same rules as
     * in {@link FetchSpec#filter}.  If not specified, all instances will be merged.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The number of objs that were merged.
     */
    static mergeAll(mergeObj: Feature.Set | null, spec?: MergeAllSpec | null): number | null;

    /**
     * Merges an obj into multiple instances of a C3 type (e.g. mass merge). The objs to perform the operation on can be
     * controlled by specifying the {@link MergeAllSpec#filter}.  Valid filter expressions follow the same rules as in
     * {@link FetchSpec#filter}.  If not specified, all instances will be merged.
     *
     * @param mergeInclude
     *           Used to control which fields from the type are are to be merged.  Only the fields indicated in the
     *           mergeInclude will be merged.  Note that this has the same structure/rules as {@link FetchSpec#include}.
     *           However, fields that wouldn't be persisted as part of the operation are ignored.
     *
     *           IMPORTANT: The best practice for using this is to specify only those fields from the input that should be
     *           merged.  Fields indicated, either explicitly or implicitly (e.g. via specifying "this"), will be merged
     *           even if they are null in the input.  Any existing data for included null input fields will be removed.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return The number of objs that were merged.
     */
    static mergeAll(mergeObj: Feature.Set | null, mergeInclude: string, spec?: MergeAllSpec | null): number | null;

    /**
     * Removes an instance of a C3 type.  If the operation fails an exception will be thrown.
     *
     * If archiving is enabled, the instance will not be physically removed.  Instead it will be serialized to XML and
     * saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
     * function.
     *
     * @param spec
     *         Various parameters that control the operation of function.
     * @return True if the obj existed and was deleted and false if it didn't exist.  Otherwise an exception is thrown
     *
     * @see Ann.Db#archive
     */
    remove(spec?: UpsertSpec | null): boolean;

    /**
     * Removes multiple instances of a C3 type. If the operation fails and {@link UpsertSpec#dontThrowOnBatchError} is not
     * specified (the default), then a C3BatchException will be thrown.  Otherwise {@link ObjList#errors errors} will be
     * reported in the returned {@link ObjList}.
     *
     * If archiving is enabled, the instances will not be physically removed.  Instead they will be serialized to XML and
     * saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
     * function.
     *
     * @param objs
     *         Objs to remove.
     * @param spec
     *         Various parameters that control the operation of function.
     * @return List any errors encountered (if {@link UpsertSpec#dontThrowOnBatchError} is true.
     *
     * @see Ann.Db#archive
     */
    static removeBatch(objs: C3.Array<Feature.Set | null> | null, spec?: UpsertSpec | null): ObjList<Feature.Set | null> | null;

    /**
     * Removes multiple instances of a C3 type based.
     *
     * If archiving is enabled, the instances will not be physically removed.  Instead they will be serialized to JSON and
     * saved in the archive table for the type.  Archived entries can be recovered by calling the {@link #unremove}
     * function.
     *
     * For kv types, data that is currently being compacted will not be removed and thus will not guarantee
     * that all data will be removed. If you need a strong guarantee, use {@link clearCollection} instead.
     *
     * @param spec
     *         Spec controlling the operation
     * @param confirm
     *         Must be specified as true.  Otherwise request will be rejected.
     * @return The number of objs removed.  Note that under some circumstances the total number removed may not be
     *         known (e.g. when {@link RemoveAllSpec#allowMultiProcessing spec.allowMultiProcessing} is true and the
     *         connection can't return the value).  In those cases, this will return -1.
     */
    static removeAll(spec?: RemoveAllSpec | null, confirm: boolean): number;

    /**
     * Replaces all instances of a C3 type. If the operation fails errors will be reported in the returned {@link ObjList}.
     *
     * @param objs
     *         Updated or new objs.  Any existing objs that aren't included in objs will be removed.
     * @param spec
     *         Various parameters that control the operation of function.
     * @return List of created and updated objs, number of objs removed and any errors encountered.  If an include spec is
     *         specified in the {@link UpsertSpec#include} field, then the returned objs will have only those fields
     *         populated. Otherwise only the id field will be populated.
     */
    static replace(objs: C3.Array<Feature.Set | null> | null, spec?: UpsertSpec | null): ObjList<Feature.Set | null> | null;

    /**
     * Recovers archived instances of a C3 type (e.g. those removed via the {@link remove}, {@link removeAll} and
     * {@link removeBatch} functions). If the operation fails an exception will be thrown.
     *
     * @return The recovered obj instance with all of its fields populated.
     *
     * @see Ann.Db#archive
     */
    unremove(): Feature.Set | null;

    /**
     * Optional function to call during upsert/create/merge operations when an instance is being created and no value for
     * the `id` field is provided.  The default behavior without the function is to produce either a new unique GUID or
     * short id (e.g. {@link Ann.Db#shortId}). Override to either produce unique `id` values via a different algorithm, or
     * generate the id based on other field values present in the input.  Note that if an instance already exists with the
     * produced value then an error will occur due to the primary key conflict (e.g. this doesn't allow "inferring" ids of
     * existing instances for performing updates.
     */
    generateUniqueId(): string;

    /**
     * Callback that is called synchronously during an operation that creates objs before those objs are created.  The
     * implementer can perform validation or additional logic.
     *
     * @param objs
     *           List of objs that are about to be created.  The objs will be the entire input objs being created.
     * @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
     *         of objs must match the input.
     */
    static beforeCreate(objs: C3.Array<Feature.Set | null> | null): ObjList<Feature.Set | null>;

    /**
     * Callback that is called synchronously during an operation that updates objs before those objs are updated.  The
     * implementer can perform validation or additional logic.
     *
     * @param objs
     *           List of objs that are about to be updated.  By default the objs will be the complete original source
     *           obj retrieved from the db with the updates applied.  If fewer fields are desired (for better performance)
     *           a dependency annotation can be specified (e.g. @dependency(include = "field1, field2..."). Then the objs
     *           will have at least those requested fields.
     * @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
     *         of objs must match the input.
     */
    static beforeUpdate(objs: C3.Array<Feature.Set | null> | null): ObjList<Feature.Set | null>;

    /**
     * Callback that is called synchronously during an operation that removes objs before those objs are removed.  The
     * implementer can perform validation or additional logic.
     *
     * @param objs
     *           List of objs that are about to be removed.  By default the objs will be the complete original source
     *           obj read from the db.  If fewer fields are desired (for better performance) a dependency annotation can
     *           be specified (e.g. @dependency(include = "field1, field2..."). Then the objs will have at least those
     *           requested fields.
     * @return List of modified objs and any errors that were encountered.  If there were no errors the number and order
     *         of objs must match the input.
     */
    static beforeRemove(objs: C3.Array<Feature.Set | null> | null): ObjList<Feature.Set | null>;

    /**
     * Callback that is called synchronously during a request that creates objs after those objs are created.  The
     * implementer can perform additional logic.
     *
     * @param objs
     *           List of objs that were created.  The objs will already have been created.  By default, only the id
     *           is present in the objs. If more fields are desired a dependency annotation can  be specified (e.g.
     *           `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
     * @return List of any errors that were encountered.
     */
    static afterCreate(objs: C3.Array<Feature.Set | null> | null): C3.Array<ObjError | null>;

    /**
     * Callback that is called synchronously during a request that updates objs after those objs are updated.  The
     * implementer can perform additional logic.
     *
     * @param objs
     *           List of objs that were updated.  The objs will already have been updated.  By default, only the id
     *           is present in the objs.  If more fields are desired a dependency annotation can  be specified (e.g.
     *           `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
     * @return List of any errors that were encountered.
     */
    static afterUpdate(objs: C3.Array<Feature.Set | null> | null): C3.Array<ObjError | null>;

    /**
     * Callback that is called synchronously during a request that removes objs after those objs are removed.  The
     * implementer can perform additional logic.
     *
     * @param objs
     *           List of objs that were removed.  The objs will already have been removed.  By default, only the id
     *           is present in the objs.  If more fields are desired a dependency annotation can  be specified (e.g.
     *           `@dependency(include = "field1, field2...")`. Then the objs will have at least those requested fields.
     *           Since the objs will already have been removed, they will be in the state they were in prior to removal.
     * @return List of any errors that were encountered.
     */
    static afterRemove(objs: C3.Array<Feature.Set | null> | null): C3.Array<ObjError | null>;

    /**
     * Creates or updates an obj instance directly into Cassandra, bypassing the normal upsert framework.  It is only
     * valid for C3 types that are stored in Cassandra.
     *
     * IMPORTANT! Cassandra direct IO functions are short term performance enhancements. Long term goal is to make base
     * apis as fast as direct IO apis.
     * Use with caution!!!
     *
     * @param clearNullValues
     *           If true then map keys with null values will be cleared.
     * @return The created or updated obj with only the id populated if it exists and null otherwise.
     */
    upsertDirect(merge?: boolean, clearNullValues?: boolean): Obj | null;

    /**
     * Begin an upsert operation to the secondary data store.
     *
     * IMPORTANT:
     *
     * 1. This is only valid for types that specify a secondary datastore.
     * 2. Currently only types that are not extendable are supported.
     *
     * @param type
     *           Type that the upsert operation is for.
     *
     * @return A {@link SecondaryDsUpsert} that will be used to perform the upsert operation.
     */
    static beginUpsertToSecondaryDs(type: Type): SecondaryDsUpsert;

    /**
     * Removes all data from a type.  It is equivalent to calling {@link removeAll} without specifying a filter and
     * defaulting to using multi-row sql for the deletes.
     *
     * @param spec
     *        Spec controlling the operation
     * @param confirm
     *        Must be specified as true.  Otherwise request will be rejected.
     */
    static clearCollection(spec?: ClearCollectionSpec | null, confirm: boolean): void;

    /**
     * Callback that is called asynchronously in response to objs getting created from {@link create}, {@link upsert},
     * {@link merge} or their batch equivalents.
     *
     * The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
     * being removed or updated.
     *
     * @param txn
     *        Contains details about which objs were created.  This is basically the ids of those objects.  The
     *        implementation will most likely need to fetch the actual instances to do whatever they need.
     */
    static created(txn: Transaction): void;

    /**
     * Callback that is called asynchronously in response to objs getting updated from {@link update}, {@link upsert},
     * {@link merge} or their batch equivalents.
     *
     * The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
     * being removed or updated.
     *
     * @param txn
     *        Contains details about which objs were updated.  This is basically the ids of those objects.  The
     *        implementation will most likely need to fetch the actual instances to do whatever they need.
     */
    static updated(txn: Transaction): void;

    /**
     * Callback that is called asynchronously in response to objs getting removed from {@link remove}, {@link removeAll},
     * {@link removeBatch} or other remove related functions.  This is called regardless of whether the remove is an
     * archive operation or it is physically removed.
     *
     * The implementation must be idempotent and also resilient to abnormal or race conditions such as record already
     * being removed or updated.
     *
     * @param txn
     *        Contains details about which objs were removed.  This is basically the ids of those objects.  The
     *        implementation will most likely need to fetch the actual instances to do whatever they need.
     */
    static removed(txn: Transaction): void;

    /**
     * This api is a generic way to evaluate / extract data from C3 and supports fetch, evaluate, evalMetrics, evalFeatures, evalFeatureSet apis
     * Support column alias for evaluate & evalMetrics by passing an ObjNode
     * e.g. If the projection was "metric1,metric2" can be represented as { 'Metric1Alias': metric1, 'Metric2Alias': metric2 }
     * e.g. If the projection was "sum(a.b.c),count(a)" can be represented as { 'SumAlias': sum(a.b.c), 'CountAlias': count(a) }
     */
    static eval(spec?: EvalSpec | null): Data | null;

    /**
     * Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
     * the caller is authorized to fetch will be evaluated.
     *
     * @param spec
     *           Specification of projection expressions to evaluate and what objs to evaluate them on.
     * @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
     *         expressions) with the evaluated result.
     */
    static evaluate(spec: EvaluateSpec): EvaluateResult | null;

    /**
     * Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
     * the caller is authorized to fetch will be evaluated.
     *
     * @param spec
     *           Specification of projection expressions to evaluate and what objs to evaluate them on.
     * @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
     *         expressions) with the evaluated result.
     */
    static evaluateTupleStream(spec: EvaluateSpec): Stream<CellTuple | null>;

    /**
     * Evaluates one or more projection expressions for multiple obj instances based on a specification.  Only objs that
     * the caller is authorized to fetch will be evaluated. If type has fields marked with {@link Ann.PII} and type has
     * {@link Ann.PIIAggregation},  PIIAggregation conditions will be evaluated and results will be returned iff
     * conditions are met.
     *
     * @param spec
     *           Specification of projection expressions to evaluate and what objs to evaluate them on.
     * @return A list of tuples (one per obj evaluated) where each tuple contains cells (one for each projection
     *         expressions) with the evaluated result.
     */
    static evaluatePii(spec: EvaluateSpec): EvaluateResult | null;

    /**
     * Evaluates a single projection expression for timeseries data.
     *
     * Support for timeseries based evaluation is deprecated.  Moving forward {@link MetricEvaluatable.evalMetric}
     * or {@link MetricEvaluatable.evalMetrics} should be used instead.
     *
     * @param spec
     *           Specification of the projection expression and which timeseries to evaluate.
     * @return An instance of Timeseries (as an Obj due to module dependency issues) containing the evaluated result.
     *
     * @see MetricEvaluatable
     */
    static tsEval(spec: TSEvalSpec): Obj | null;

    /**
     * Used internally to evaluate as a stream
     */
    static evaluateOvi(spec?: EvaluateSpec | null): any;

    /**
     * Evaluates one or more projection expressions for multiple obj instances based on a specification and returns result
     * as stream of Arrow batches.
     *
     * @param spec
     *           Specification of what data to fetch.
     * @return Stream of Arrow batches.
     */
    static evaluateArrowStream(spec: EvaluateArrowStreamSpec): Stream<Arrow | null>;

    /**
     * Refreshes calc fields for objs for a type based on a spec.
     *
     * @param spec
     *        Spec that indicates which objs to refresh calc fields for and which calc fields to refresh, along with
     *        other options that control the operation.
     * @return If 'spec.sync' is false, returns the BatchJob that was created/used for processing the request, null
     *         otherwise.
     */
    static refreshCalcFields(spec?: RefreshCalcFieldsSpec | null): RefreshCalcFieldsBatchJob | null;

    /**
     * Refreshes default fields for objs for a type based on a spec.  Only entries that have null values for the
     * specified fields will be refreshed.
     *
     * @param spec
     *        Spec that indicates which objs to refresh default fields for and which default fields to refresh, along with
     *        other options that control the operation.
     * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
     *         otherwise.
     */
    static refreshDefaultFields(spec?: RefreshDefaultFieldsSpec | null): RefreshDefaultFieldsBatchJob | null;

    /**
     * Refreshes the unique index table entries for a type based on a spec.  For types that don't have unique indexes,
     * and no types that extend them have unique indexes, this does nothing.
     *
     * @param spec
     *        Spec that indicates which objs to refresh unique indexes for along with other options that control
     *        the operation.
     * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
     *         otherwise.
     */
    static refreshUniqueIndexes(spec?: RefreshUniqueIndexesSpec | null): RefreshUniqueIndexesBatchJob | null;

    /**
     * Refreshes analytics for objs based on a spec.  This causes {@link AnalyticsContainer.invalidateSources} to be
     * called for the objs as appropriate, based on the configured {@link SimpleMetric} entries.
     *
     * @param spec
     *        Indicates which objs to refresh analytics for and what time range to use, along with other options that
     *        control the operation.
     * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
     *         otherwise.
     *
     * @see AnalyticsContainer
     * @see SimpleMetric
     */
    static refreshAnalytics(spec?: RefreshAnalyticsSpec | null): RefreshAnalyticsBatchJob | null;

    /**
     * Refreshes the metrics cache for objs based on a spec.  This causes {@link SimpleMetric.invalidateCache} to be
     * called for the objs as appropriate, based on the configured {@link SimpleMetric} entries.  Only metrics with
     * {@link SimpleMetric.cacheInterval} are considered.
     *
     * @param spec
     *        Indicates which objs to refresh the metrics cache for and what time range to use, along with other options
     *        that control the operation.
     * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
     *         otherwise.
     *
     * @see SimpleMetric
     */
    static refreshMetrics(spec?: RefreshMetricsSpec | null): RefreshMetricsBatchJob | null;

    /**
     * Calls the created or updated function for objs based on a spec.  For types that have only one or the other that
     * function will be called.  For those that have both, only the updated will be called.  If only created should be
     * called in all cases, set the 'spec.createdOnly' field to true.
     *
     * @param spec
     *           Indicates which objs to call the functions for, along with other options that control the operation.
     * @return If 'spec.async' is true, returns the BatchJob that was created/used for processing the request, null
     *         otherwise.
     */
    static runCreatedOrUpdated(spec?: RunCreatedOrUpdatedSpec | null): RunCreatedOrUpdatedBatchJob | null;

    /**
     * Asynchronously refreshes downstream dependency for a type (e.g. stored calcs, analytics, etc.).
     *
     * @param spec
     *        Indicates which types of dependencies should be refreshed along with other parameters that control the
     *        operation of the function.
     */
    static refreshDeps(spec?: RefreshDepsSpec | null): void;

    /**
     * Performs the refresh operation.
     *
     * @param type
     *        Type being refreshed.
     * @param jobType
     *        Batch job type to for refresh.
     * @param spec
     *        Parameters for the refresh operation.
     *
     * @return The batch job that was started.
     */
    static processRefresh(type: Type, jobType: Type, spec: ObjBatch): RefreshBatchJob<any, any, any> | null;

    /**
     * @return a push stream to import instances of this type.
     */
    static startImportData(spec?: StartImportDataSpec | null): PushStream<Feature.Set | null>;

    /**
     * @return a push stream to import instances of this type.
     */
    static startImportDataWithStats(spec?: StartImportDataSpec | null): PushStreamWithStats<Feature.Set | null>;

    /**
     * Imports instances into a C3 type from a file stored in Cassandra.
     *
     * @param spec
     *        Various parameters that control the operation of function.
     * @param async
     *        Indicates whether the operation should be performed asynchronously or not.  Default is false (e.g.
     *        synchronous)
     * @return various statistics and errors for the import operation.
     */
    static importData(spec: ImportDataSpec, async?: boolean): ImportDataResult | null;

    /**
     * Exports instances of a C3 type to Cassandra.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return A reference to the Content obj created that contains the exported data and various statistics about the
     *         export.
     */
    static exportData(spec: ExportDataSpec): ExportDataResult | null;

    /**
     * Exports instances of a C3 type to S3 for importing into Redshift.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return Number of objs exported.
     */
    static exportDataForRedShift(spec: RedShiftExportDataSpec): number | null;

    /**
     * @return single instance of this Identified type by id.
     */
    static forId(id: string | null, failIfMissing?: boolean): Feature.Set | null;

    /**
     * Shortcut function to return the value of the {@link meta#referenceInvalid} field for a Persistable reference
     * returned in a reference field (or reference collection field) from a {@link fetch} operation.  Note that the
     * {@link meta#referenceInvalid} field is only set when the include spec for the reference field specifically includes
     * the {@link meta#referenceInvalid} field or otherwise requires the referenced type to be queried (either by join or
     * separate query) to return the requested data from the reference.
     *
     * Note that this api DOES NOT query the database at all.  As such, calling it on any instance obtained in any way
     * way other than what is described above will ALWAYS return false.
     *
     * @return the current value of the {@link meta#referenceInvalid} field for the instance.
     *
     * @see Meta#referenceInvalid
     */
    referenceInvalid(): boolean;

    /**
     * Generates new unique ids for C3 Obj instances
     *
     * @param count
     *           Number of ids to generate.  Default is 1.
     * @return The requested number of new unique ids.
     */
    static generateNewIds(count?: number | null): C3.Array<string | null>;

    /**
     * Generates synthetic data for a C3 type.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return Various statistics for the operation.
     */
    static generateData(spec?: GenerateDataSpec | null): ActionStats | null;

    /**
     * Analyzes all data in a C3 type to determine various aspects of its shape (e.g. number of various arry elements)
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return A {@link GenerateDataSpec} that can be used in {@link generateData} to produce more data of a similar shape.
     */
    static profileData(spec?: FetchSpec | null): GenerateDataSpec | null;

    /**
     * Removes the identifying fields {@link #id}, {@link #meta}, and {@link #version} of the instance it's called on,
     * such that a subsequent upsert will create a new instance.
     *
     * @return The requested obj without any of its identifying fields.
     */
    withoutIdentity(): Feature.Set | null;

    /**
     * Gets the specific C3 type hierarchy for an obj instance.  For a non-extendable type the hierarchy will be the C3
     * type of the input obj.  For extendable types it will contain the concrete extension type for the instance as well as
     * that type's base type chain.
     *
     * @return The type hierarchy for the requested obj.
     */
    typeOf(): EntityType | null;

    /**
     * Gets the specific C3 type hierarchy for multiple obj instances.  For a non-extendable type the hierarchy will be the
     * C3 type of the input obj.  For extendable types it will contain the concrete extension type for the instance as well
     * as that type's base type chain.
     *
     * @param objs
     *           Obj instances to get the type hierarchy for.
     * @return The type hierarchies for the requested objs.
     */
    static typeOfBatch(objs: C3.Array<Feature.Set | null> | null): C3.Array<EntityType | null>;

    /**
     * @return The root type for a type.  If the type extends an extendable type, the base extendable type is returned.
     *         The type itself is returned in all other cases.
     */
    static getRootType(): Type | null;

    /**
     * Performs the necessary DDL to create/alter the physical tables and columns for a type.  This is typically called
     * internally during provisioning and should not need to be called manually.
     *
     * @param throwOnNonUniqueIndexError
     *        true if, after retries are exhausted, throw any index creation error occurs for a non-unique index. If
     *        false, that will be considered benign as it means some other thread process is creating the necessary
     *        indexes.
     *
     * @return True if the operation caused any DLL changes and false if did not.
     */
    static upsertCollection(throwOnNonUniqueIndexError?: boolean): boolean;

    /**
     * Called by platform when a Persistable type is accessed to ensure that its schema is up to date.
     *
     * @type
     *         The Type to validate the schema of.
     * @return true if the schema was updated in this JVM/app
     */
    static validateSchema(type: Type): boolean;

    /**
     * Callback that is called synchronously in response to a call to {@link upsertCollection}.
     */
    static collectionUpserted(): void;

    /**
     * Callback that is called synchronously in response to a call to {@link clearCollection}.
     */
    static collectionCleared(): void;

    /**
     * Used only by DatabaseTestEngine
     */
    static dbEcho(template?: Feature.Set | null, count?: number | null, sendBack?: boolean): number | null;

    /**
     * Checks the validity of references (e.g. broken foreign keys) based on a spec.  For normal reference fields, an
     * invalid reference is when the obj being referenced doesn't exist.  For fkey fields/arrays, an invalid reference
     * condition is considered to be when there is no entry in the reference type for the obj being validated.
     *
     * @param spec
     *           Indicates which references in which types/fields to check.
     * @return List of references that were found to be invalid along with details of why they are invalid.
     */
    static checkReferences(spec?: CheckReferencesSpec | null): CheckReferencesResult | null;

    /**
     * Determines is a path is valid as a filter expression in a fetch call.
     *
     * @param path
     *           Path to validate.
     * @return True if the path is valid to be used in a fetch filter expression and false if it is not.  If the path
     *         itself is invalid, an exception is thrown
     */
    static validatePath(path: string): ValidatePathResult | null;

    /**
     * @return The db table name for relational types and the column family name for Cassandra types
     */
    static schema(): SchemaInfo | null;

    /**
     * Gets all of the dependencies that could invalidate a stored calc field.
     *
     * @param fieldName
     *         The name of the field to find all dependencies of.
     * @return A list of dependencies that can invalidate the stored calc field.
     */
    static calcFieldDeps(fieldName: string): C3.Array<string | null>;

    /**
     * Creates invalidation queue entries for invalidation of metrics/analytics for a logical timeseries header (e.g. a
     * IntervalDataHeader or any type determined to be an "AsTimeseriesHeader" based on the metrics/analytics.
     *
     * @param range
     *        Time range to invalidate for.  If null, invalidation will be across all time.
     * @param fields
     *        Timeseries fields that were modified and should be used to determine what to invalidate.  This is currently
     *        not used as we don't keep dependency info at the field level.
     * @param autoCommit
     *        If true, invalidation queue entries will be put in the queue in the "pending" state and are available for
     *        immediate processing.  If false, they are put in the queue in the "initial" state.  They will remain in
     *        that state until they are either committed or aborted.
     */
    invalidateTsHeader(range?: TimeRange | null, fields?: C3.Array<string | null>, autoCommit?: boolean): void;

    /**
     * Creates invalidation queue entries for invalidation of metrics/analytics for time series data points (e.g. a
     * {@link IntervalDataPoint} or {@link TimedDataPoint} on the metrics/analytics in batch mode.
     *
     * @param tsInvalidations
     *        Time range to invalidate for.  If null, invalidation will be across all time.
     * @param autoCommit
     *        If true, invalidation queue entries will be put in the queue in the "pending" state and are available for
     *        immediate processing.  If false, they are put in the queue in the "initial" state.  They will remain in
     *        that state until they are either committed or aborted.
     */
    static invalidateTsDataPoints(tsInvalidations: Stream<TsInvalidation | null>, autoCommit?: boolean): void;

    /**
     * API to execute the lambda function in a distributed batch mode. This api will fetch with provided spec and
     * call action for each batch of `spec.batchSize`.
     *
     * @param spec
     *         A spec for the job. Use {@link BatchFetchSpec#context} to supply any arguments necessary for `action`.
     * @param action
     *         The lambda to apply to each batch of objs.
     *
     * @return the ID of the started ObjBatchMapReduceJob
     */
    static eachObjBatch(spec: BatchFetchSpec, action: λBiConsumer<C3.Array<Obj | null>, any>): string;

    /**
     * Implements a simple logic for Persistable call-backs like before create by looping each input obj and
     * calling a transform for it.
     *
     *
     * callbackLogic: function<O: Persistable>(objs: ![O], Function<O, O> callback): !ObjList
     */
    static callbackLogic(objs: C3.Array<Feature.Set | null> | null, callback?: λFunction<Feature.Set | null, Feature.Set | null> | null): ObjList<Feature.Set | null>;

    /**
     * Implements a simple logic for Persistable "after" call-backs like after create by looping each input obj and
     * calling a transform for it.
     */
    static afterCallbackLogic(objs: C3.Array<Feature.Set | null> | null, callback?: λFunction<Feature.Set | null, Feature.Set | null> | null): C3.Array<ObjError | null>;

    /**
     * @return the column names for the id field.  If the type doesn't mixin a {@link CompositeKey} type, then there will
     *         be only 1.  If it does, then there will be multiple.
     */
    static idColNames(): C3.Array<string | null>;

    /**
     * True if this field is unique
     */
    static isUnique(fieldPath: string): boolean;

    /**
     * True if uniqueness will be enforced for the specified fields. This will be true if any of the fields are unique
     * themselves, or there is a unique index that is a subset of the specified fields.
     */
    static isUnique(fieldPaths: C3.Array<string | null>): boolean;

    /**
     * Return whether or not the specified field name is one of the ones declared by the DB engine base types other than
     * #name or #id. I.e., meta-information about the persisted state rather than content of the instance itself.
     * @param name
     *          The name of field to check
     * @returns Whether or not the specific field name is one of the ones declared by the DB engine.
     */
    static isSystemField(name: string): boolean;

    /**
     * Publishes an instance of SeedData to a C3 application package under `/seed/`
     */
    publish(subPath?: string | null, contentType?: string | null): Feature.Set;

    /**
     * Admin function to remove a seed data entry as the provisioner/authorizer, rather than as the user.  Seed data entries removed via this function
     * are fully removed rather than hidden as they would be if removed by the user.
     *
     * @return true if the obj was removed and false if it was not for a non-error condition (e.g. obj didn't exist).
     */
    removeSeedData(): boolean;

    /**
     * Admin function to remove seed data entries as the provisioner/authorizer, rather than as the user.  Seed data
     * entries removed via this function are fully removed rather than hidden as they would be if removed by the user.
     *
     * @param objs
     *           Obj instances to remove.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return list of obj instances that were removed and any errors that were encountered, same as
     *         {@link Persistable#removeBatch} return value.
     */
    static removeSeedDataBatch(objs?: C3.Array<SeedData | null>, spec?: UpsertSpec | null): ObjList<Feature.Set | null> | null;

    /**
     * Admin function to add a seed data entry as the provisioner/authorizer, rather than as the user.  Seed data entries
     * added this way are treated as though they were provisioned, rather than added by a user.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return created obj instance, same as {@link Persistable#create} return value.
     */
    createSeedData(spec?: UpsertSpec | null): Feature.Set | null;

    /**
     * Admin function to add seed data entries as the provisioner/authorizer, rather than as the user.  Seed data entries
     * added this way are treated as though they were provisioned, rather than added by a user.
     *
     * @param objs
     *           Obj instances to add.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return list of obj instances that were created and any errors that were encountered, same as
     *         {@link Persistable#createBatch}.
     */
    static createSeedDataBatch(objs?: C3.Array<SeedData | null>, spec?: UpsertSpec | null): ObjList<Feature.Set | null> | null;

    /**
     * Admin function to update a seed data entry as the provisioner/authorizer, rather than as the user.  Seed data
     * entries updated this way are treated as though they were provisioned, rather than updated by a user.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return updated obj instance, same as {@link Persistable#update} return value.
     */
    updateSeedData(srcObj?: SeedData | null, spec?: UpsertSpec | null): Feature.Set | null;

    /**
     * Admin function to update seed data entries as the provisioner/authorizer, rather than as the user.  Seed data
     * entries updated this way are treated as though they were provisioned, rather than updated by a user.
     *
     * @param objs
     *           Obj instances to update.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return list of obj instances that were updated and any errors that were encountered, same as
     *         {@link Persistable#updateBatch}.
     */
    static updateSeedDataBatch(objs?: C3.Array<SeedData | null>, srcObjs?: C3.Array<SeedData | null>, spec?: UpsertSpec | null): ObjList<Feature.Set | null> | null;

    /**
     * Admin function to clear the {@link userUpdatedFields} field for a seed data obj instance.
     *
     * @param spec
     *           Various parameters that control the operation of function.
     * @return updated obj instance, same as {@link Persistable#update} return value.
     */
    clearUserUpdates(spec?: MergeSpec | null): Feature.Set | null;

    /**
     * Admin function to clear the {@link userUpdatedFields} field for seed data obj instances.
     *
     * @param objs
     *           Obj instances to update.
     * @param spec
     *           Various parameters that control the operation of function.
     * @return list of obj instances that were updated and any errors that were encountered, same as
     *         {@link Persistable#updateBatch}.
     */
    static clearUserUpdatesBatch(objs?: C3.Array<SeedData | null>, spec?: MergeSpec | null): ObjList<Feature.Set | null> | null;

    /**
     * Returns the full metadata path to the seed file associated with this instance by `id`.
     * Throws an error if this instance is not seeded (no match with instance `id`).
     */
    seedPath(): string | null;

    dependencies(): SeedDataDeps<Feature.Set | null> | null;

    /**
     * Optional member function to enable custom validation logic.
     */
    validateSeedData(): ValidateObjResult;

    /**
     * @return FeatureBase for a subject type and the name of the FeatureBase.
     */
    static forName(subjectType: Type, name: string, failIfMissing?: boolean): Feature.Set;

    /**
     * Retrieves a feature set by subject type and name with specified field inclusion.
     *
     * Provides a flexible way to fetch feature sets while controlling which fields
     * are included in the returned object. This optimization can improve performance
     * by only loading necessary data.
     *
     * @param subjectType
     *    The entity type that this feature set operates on. Must implement
     *    {@link FeatureEvaluatable} interface. Required.
     * @param name
     *    The unique name identifying the feature set within the subject type scope. Required.
     * @param include
     *    Comma-separated list of field names to include in the fetched feature set.
     *    Controls which properties are populated in the returned object. Required.
     * @param failIfMissing
     *    Whether to throw an error if the feature set is not found. If false,
     *    returns null for missing feature sets.
     * @return
     *    The requested feature set with specified fields populated, or null if
     *    not found and failIfMissing is false.
     *
     * @see FeatureEvaluatable
     */
    static forName(subjectType: Type, name: string, include: string, failIfMissing?: boolean): Feature.Set;

    /**
     * Determines whether the Feature or Feature Set is time series.
     * This property is not supported for Feature.Kind.DATA and will return null.
     */
    get isTimeseries(): Boxed<boolean> | null;

    /**
     * Classification of the feature set type and implementation approach.
     *
     * Categorizes how the feature set is implemented and what data sources
     * it uses. This classification affects evaluation strategies, optimization
     * paths, and API behavior.
     *
     * @see Feature.Set.Kind
     */
    get kind(): string | null;

    /**
     * Internal cached column definitions derived from feature set configuration.
     *
     * Stores the processed column schema that combines information from
     * {@link #columns} (for lambda feature sets) and feature declarations
     * (for metric feature sets). Used internally for performance optimization
     * and consistent column access patterns.
     *
     * @see #columns
     */
    get _columns(): C3.Map<string | null, ValueType | null>;

    /**
     * Execute the set custom lambda ({@link #src} or {@link #srcBatch}) on the provided subjects and EvalFeatureSpec and
     * return the result after extracting the data column from the result.
     * An error will be thrown if:
     * 1. The columns in the result are not the same as the columns in the Feature or Feature.Set. {@link Feature.valueType}
     * and {@link Feature.Set.columns} are used to determine the expected columns.
     * 2. The data is not sorted by **subject** or **timestamp** column.
     * 3. Lambda execution fails.
     * 4. Lambda returns a result which is neither a {@link Data} nor a native value.
     *
     * @see #src
     * @see #srcBatch
     * @see #subjectProjection
     * @see Feature#valueType
     * @see Feature.Set#columns
     */
    execCustomLambda(subjects: C3.Array<FeatureEvaluatable | null>, spec?: EvalFeatureSpec | null): C3.Map<string | null, C3.Array<Data.Column>>;

    /**
     * Execute the set custom lambda ({@link #src} or {@link #srcBatch}) on the provided subjects and EvalFeatureSpec and
     * return the result as EvalMetricsResult.
     * @see execCustomLambda
     */
    execCustomLambdaAsEmr(subjects: C3.Array<FeatureEvaluatable | null>, spec?: EvalFeatureSpec | null): EvalMetricsResult;

    /**
     * @return the Tuple with location with the arrow buffer obtained after  executing the {@link #src} lambda with
     * the provided arguments.
     * Please note that:
     * 1. The input subjects to this function are assumed to be already have the {@link #srcSubjectProjection} applied.
     * 2. Its the **caller's responsibility** to ensure that the file created after executing the lambda (at **path**)
     * is deleted after use.
     */
    static execSrcLambda(src?: λTriFunction<FeatureEvaluatable, EvalFeatureSpec | null, Feature.Set | null, Feature.CustomMaterializationResult> | null, subjects: C3.Array<FeatureEvaluatable>, spec?: EvalFeatureSpec | null, feature?: Feature.Set | null): [path: string | null, kind: string | null] | null;

    /**
     * @return the Tuple with location with the arrow buffer obtained after executing the {@link #srcBatch} lambda with
     * the provided arguments.
     * Please note that:
     * 1. The input subjects to this function are assumed to be already have the {@link #srcSubjectProjection} applied.
     * 2. Its the **caller's responsibility** to ensure that the file created after executing the lambda (at **path**)
     * is deleted after use.
     */
    static execSrcBatchLambda(srcBatch?: λTriFunction<C3.Array<FeatureEvaluatable>, EvalFeatureSpec | null, Feature.Set | null, Feature.CustomMaterializationResult> | null, subjects: C3.Array<FeatureEvaluatable>, spec?: EvalFeatureSpec | null, feature?: Feature.Set | null): [path: string | null, kind: string | null] | null;

    /**
     * Start a ObjBatchMapReduceJob to delete all the materialized data in the kvStore from this FeatureBase.
     * @param spec:
     *        this {@link BatchFetchSpec} is used to pass in the custom job options, such as batchSize. If user passes a null spec or a spec with no batchSize,
     *        the default batchSize is 100.
     * @param confirm
     *        confirm must be set to complete the deletion.
     * @return the started mapReduce job instance.
     */
    deleteMaterializedData(spec?: BatchFetchSpec | null, confirm?: boolean): ObjBatchMapReduceJob;

    /**
     * Internal computation for deriving field names from feature set configuration.
     *
     * Calculates the set of field names that will be available in the resulting
     * data when this feature set is evaluated. Used internally for data structure
     * validation and schema enforcement.
     */
    static computeFieldNames(): C3.Array<string>;

    /**
     * The definition of this feature
     */
    get definition(): string | null;

    /**
     * Generates a unique fingerprint representing the feature set's current configuration.
     *
     * Creates a hash or signature that changes when the feature set definition,
     * features, or other significant configuration elements are modified. Used
     * for cache invalidation, change detection, and ensuring data consistency
     * across feature set updates.
     */
    featureFingerprint(): string;

    /**
     * Fingerprint of all the data in this feature
     */
    dataFingerprint(subject: FeatureEvaluatable): number;

    /**
     * ML Models that are using this feature
     */
    models(): Stream<MlModel | null>;

    /**
     * This is a convenience python API to return a DataFrame with information
     *  about the models that use this feature / feature set as an input.
     *
     * @param filterByName
     *    Filtering based on name of model
     * @param order
     *    listing order `ASC` or `DSC`
     * @param offset
     *    offset for display of results
     * @param limit
     *    limit for display of results
     * @return the results as {@link Data}
     */
    modelSummary(filterByName?: string | null, order?: string | null, offset?: number | null, limit?: number | null): Data;

    /**
     * @return all features for a given subject type
     */
    static allForSubjectType(subjectType?: Type | null): Stream<Feature.Set | null>;

    /**
     * Materializes this feature for subjects in the filter.
     * @param filter:
     *        filter of the subjects to be used for materialization. If filter is missing, the job will materialize for all the subjects.
     *        Note that, if the filtered subjects do not exist in the Db, the materialization job will not fail but no entries will be picked up.
     * @param sync:
     *        If `sync` is set to **true**, materialization will wait for the job to complete and all subjects will be materialized in one batch, i.e {@link Feature.Store.MaterializationJob#numBatches} = 1
     *        If `sync` is set to **false**, materialization will create the job and start asynchronously. By default, a batchSize of 1 is used.
     * @return the {@link Feature.Store.MaterializationJob} instance.
     *
     * If you require additional customization of the job (e.g `batchSize`), then please make a {@link Feature.Store.MaterializationJob}
     * with {@link #makeMaterializationJob} and modify as needed.
     * Here is an example to customize a job on a Feature.Set:
     * ```python
     * feature_set = c3.Feature.Set(name='windTurbineModelFeatures', subjectType=c3.WindTurbine, features=['activePowerAvgFeature', 'generatorRotationSpeedAvgFeature'], interval='HOUR').create()
     * job = feature_set.makeMaterializationJob(filter='true', sync=False)
     * job = job.withBatchSize(100)
     * job = job.create()
     * job.start()
     * ```
     */
    materialize(filter?: string | null, sync?: boolean): Feature.Store.MaterializationJob<FeatureEvaluatable | null> | null;

    /**
     * Materializes this feature for subjects in the filter.
     * @return the {@link Feature.Store.MaterializationJob} instance.
     *
     * If you require additional customization of the job (e.g `batchSize`), then please make a {@link Feature.Store.MaterializationJob}
     * with {@link #makeMaterializationJob} and modify as needed.
     * Here is an example to customize a job on a Feature.Set:
     * ```python
     * feature_set = c3.Feature.Set(name='windTurbineModelFeatures', subjectType=c3.WindTurbine, features=['activePowerAvgFeature', 'generatorRotationSpeedAvgFeature'], interval='HOUR').create()
     * job = feature_set.makeMaterializationJob(filter='true', sync=False)
     * job = job.withBatchSize(100)
     * job = job.create()
     * job.start()
     * ```
     */
    materialize(spec?: Feature.MaterializationSpec | null): Feature.Store.MaterializationJob<FeatureEvaluatable | null> | null;

    /**
     * Make a materialization job for the {@link Feature} or {@link Feature.Set}.
     * @return the {@link Feature.Store.MaterializationJob} instance.
     */
    makeMaterializationJob(spec?: Feature.MaterializationSpec | null): Feature.Store.MaterializationJob<FeatureEvaluatable | null> | null;

    /**
     * Validates that Data contains `subject` and optional `timestamp` column. If `singleFeature` is set also
     * validates that there is only one feature value column.
     *
     * @return inferred subject type if #subjectType parameter was not provided
     */
    static validateSubjectAndTimestamp(data: Data | null, subjectType?: Type | null, singleFeature?: boolean): Type;

    /**
     * Validates that EvalSpec contains `subject` and optional `timestamp` column. If `singleFeature` is set also
     * validates that there is only one feature value column
     *
     * @returns updated EvalSpec if any extra fields need to be removed post validation
     *
     * @see EvalSpec#withoutAnyFilter
     */
    static validateSubjectAndTimestamp(subjectType?: Type | null, spec: EvalSpec, singleFeature?: boolean): EvalSpec;

    /**
     * Search and retrieves the {@link Feature} or {@link Feature.Set} using Full Text Search on searchable fields (as annotated by
     * {@link Ann.Search search}).
     */
    static search(spec: SearchFetchQuerySpec): Stream<Feature.Set | null>;

    /**
     * Checks if a given feature name of a {@link Feature} or of a {@link Feature.Set} is valid per the following conventions:
     * 1. The name of the feature does not match any existing field name of the underlying subject {@link Type}.
     * 2. The feature name is a valid JavaScript identifier and is not reserved.
     *
     * @param name
     *        name of the {@link Feature} to be created
     * @param subjectType
     *        underlying subject {@link Type} of the {@link Feature} to be created
     * @return a {@link Pair} of two elements:
     *         1. boolean: true if the feature name is valid, false otherwise.
     *         2. string: error message explaining the violation of the naming convention.
     */
    static isValid(name: string, subjectType: Type): Pair<boolean, string | null>;

    /**
     * Validates feature/feature set id
     * If id is UUID (generated from Feature.Set.make create, etc methods), it is set as subjectTypeName#name
     * If not, then it has to already follow subjectTypeName#name convention, else error will be rendered
     * @return a {@link Pair} of two elements:
     *         1. boolean: true if the feature Id is valid, false otherwise.
     *         2. string: error message explaining the violation of the naming convention.
     *                    It can also return a message on true, "id is UUID",
     *                    and that would indicate that we need to set id upon return to follow SUBJECT_TYPE#FEATURE_NAME
     */
    static validateId(id: string, subjectTypeName: string, name: string): Pair<boolean, string | null>;

    isLambda(): boolean;

    /**
     * @return strategies associated with the current feature, which will be used in evaluation. Please note that simply {@link FeatureEvaluatable.Bin.Strategy#init initialization} of strategy is not enough. They should be "operationally ready" to be used.
     */
    strategies(includeNonReady?: boolean): C3.Array<FeatureEvaluatable.Bin.Strategy | null>;

    /**
     * @return provide the most recent created strategy, which will be used in both materialization and evaluation.
     */
    latestStrategy(includeNonReady?: boolean): FeatureEvaluatable.Bin.Strategy | null;

    /**
     * @return default number of subjects per bin, depending on the total number of subjects present in the related {@link #subjectType} of the given {@link Feature} or of a {@link Feature.Set}:
     *             1. 1, if subject count < 50
     *             2. 10, if subject count < 1000
     *             3. 50, if subject count >= 1000
     */
    dfltSubjectsPerBin(): number;

    /**
     * Initialize the default strategy for this Feature / Feature.Set if none exists before.
     * Please note that default number of subjects per bin is decided by {@link dfltSubjectsPerBin}.
     */
    initDfltStrategy(): void;

    /**
     * Initialize a {@link FeatureEvaluatable.Bin.Strategy} strategy for this Feature / Feature.Set such that all ids as retrieved from Db are assigned to different bins based on the "recommended subjects per bin" (**recSubjectsPerBin**).
     */
    initStrategy(recSubjectsPerBin: number): void;

    /**
     * if one of #agg, #asOFeature, #merger is set, return true; otherwise false
     */
    hasAnyMergeLogic(): boolean;

    /**
     * check if merging is valid: only one of #agg, #merger, #asOfFeature should be set
     */
    isMergeValid(): boolean;

    /**
     * Checks whether the aggregation operation contains valid pandas operation(s)
     */
    isValidAgg(): boolean;

    /**
     * Checks whether the interval rule is a valid pandas rule
     */
    isValidInterval(): boolean;

    /**
     * Build the canonical Python source code representation of this instance.  After running the produced Python source
     * code, the `data` identifier in Python should point to the instance.
     *
     * Simple example of the returned Python source code that does not use `_src` variable (See {@link #toPySource}):
     * ```py
     * data = c3.User(firstName="John", lastName="Doe")
     * ```
     *
     * One use of this method is for saving a serialized instance to an application package.
     * To support overriding configs and remixing metadata / seed data, one may want to create more than one metadata
     * / seed / config file for the same id or name.  The caller may supply a `src` instance so that the output captures
     * the differences between this instance and the `src` instance.
     *
     * If we call this API like:
     * ```py
     * src = c3.User(firstName="John", lastName="Doe")
     * src.withEmail('john@doe.com').toPySource(src)
     * ```
     * the output Python source code could be something like:
     * ```py
     * data = { **_src.toJson(), "email": 'john@doe.com' }
     * ```
     *
     * @param src
     *     If provided, the Python source code will only contain field changes as compared to `src`.  The `src`
     *     instance is typically the config / metadata / seed instance that we are overriding or remixing, so that
     *     the output only captures the diff between the current instance and the `src` instance.
     * @return a Python source code representation of this instance.  One use of this source code is to put in `*.py`
     *     file as seed data (see {@link SeedData}).
     *
     * @see #fromPySource
     */
    toPySource(src?: Feature.Set | null): string;

    /**
     * Parse and evaluate the Python source code representation and reconstruct the corresponding instance.
     *
     * If a field `runtime: string serialized ImplLanguage.Runtime` exists on the Type, then upon deserialization and
     * making the instance (in {@link Obj#afterMake}), all fields of Type {@link Lambda} will have {@link Lambda#runtime}
     * auto-populated with the value of the `runtime` field.  This special treatment allows for more natural authoring of
     * {@link Lambda} fields as just Python functions in the Python source code representation.
     *
     * @param py
     *     Python source code used to reconstruct this instance.
     * @param src
     *     If provided, the Python source code will have the `_src` variable in scope set to this parameter during its
     *     execution.  The Python source code should merge or override fields on the instance referenced by the
     *     `_src` variable to return the new instance.
     * @return an instance created from the source code representation.
     *
     * @see #toPySource
     */
    static fromPySource(py: string | null, src?: Feature.Set | null): Feature.Set | null;

    /**
     * Computes the inferred time interval for this feature set.
     *
     * Determines the appropriate time interval based on the feature set's configuration
     * and constituent features. The interval affects data alignment, aggregation, and
     * materialization strategies.
     *
     * Interval Resolution Logic:
     * 1. If {@link #interval} is explicitly set, uses that value directly
     * 2. For metric-backed feature sets with non-empty {@link #features}, computes
     *    the lowest common interval from all constituent features
     * 3. Returns null if no interval can be determined
     *
     * @return
     *    Inferred time interval as an Interval enum value, or null if undetermined.
     *
     * @see Interval
     * @see #interval
     * @see #features
     */
    inferredInterval(): string;

    /**
     * Calculates the total number of features in this feature set.
     *
     * The count method varies based on the feature set type:
     * - Lambda feature sets: Count determined by {@link #columns} size
     * - Metric feature sets: Count determined by {@link #features} size
     *
     * This method provides a consistent interface for determining feature set
     * dimensionality regardless of the underlying implementation approach.
     *
     * @return
     *    Total number of features in the current feature set.
     *
     * @see #columns
     * @see #features
     */
    numberOfFeatures(): number | null;

    /**
     * Retrieves the complete feature declarations for all features in this set.
     *
     * Returns the full {@link Feature} objects corresponding to the feature names
     * listed in {@link #features}. This provides access to the complete feature
     * metadata, configuration, and evaluation logic.
     *
     * @return
     *    Array of Feature declarations included in this feature set.
     *
     * @see Feature
     * @see #features
     */
    get featureDecls(): C3.Array<Feature | null>;

    /**
     * Generates filter specifications for the features in this set.
     *
     * Creates an array of Filter objects that can be used to query or restrict
     * operations to only the features included in this feature set. Useful for
     * bulk operations on feature collections.
     *
     * @return
     *    Array of Filter specifications targeting the features in this set.
     *
     * @see Filter
     * @see #features
     */
    featureIds(): C3.Array<string>;

    /**
     * Creates a mapping from feature names to their corresponding declarations.
     *
     * Builds a map where keys are feature names (strings) and values are the
     * complete {@link Feature} objects. This provides efficient name-based
     * lookup access to feature declarations within the set.
     *
     * @return
     *    Map with feature names as keys and Feature declarations as values.
     *
     * @see Feature
     * @see #featureDecls
     */
    featureDeclsByName(): C3.Map<string | null, Feature | null>;

    /**
     * Creates a feature set from an evaluation specification.
     *
     * Legacy method for creating feature sets from {@link EvalSpec} definitions.
     * This approach has been superseded by more flexible creation methods.
     *
     * @param subjectType
     *    The entity type that this feature set will operate on. Required.
     * @param name
     *    The name for the created feature set. Required.
     * @param spec
     *    The evaluation specification defining the feature set behavior.
     * @return
     *    The created and persisted feature set.
     *
     * @see #create
     * @see EvalSpec
     */
    static upsertFromEvalSpec(subjectType: Type, name: string, spec: EvalSpec | null): Feature.Set;

    /**
     * Determines if all features in this set are backed by legacy metrics.
     *
     * Analyzes the feature set composition to verify that all constituent features
     * are based on legacy metric definitions rather than custom evaluation logic
     * or lambda functions. This information affects optimization strategies and
     * evaluation paths.
     *
     * @return
     *    True if all features use legacy metric backing, false otherwise.
     *
     * @see LegacyMetric
     * @see Feature#isLegacyMetricBacked
     */
    isFullyLegacyMetricBacked(): boolean;

    /**
     * Retrieves all snapshots that have captured data from this feature set.
     *
     * Returns a stream of {@link Feature.Set.Snapshot} instances that contain
     * immutable captures of this feature set's data. Snapshots are used for
     * model training reproducibility, audit trails, and historical analysis.
     *
     * @return
     *    Stream of snapshots associated with this feature set.
     *
     * @see Feature.Set.Snapshot
     * @see #createSnapshot
     * @see #deleteSnapshot
     */
    snapshots(): Stream<Feature.Set.Snapshot | null>;

    /**
     * Creates a snapshot header for this feature set.
     *
     * Validates the snapshot specification and creates a {@link Feature.Set.Snapshot}
     * instance to track the snapshot metadata. This header is created before the
     * actual data snapshot is generated.
     *
     * @param spec
     *    Specification defining the snapshot parameters including time range,
     *    subject filters, and other configuration options. Required.
     * @return
     *    Created snapshot header instance for tracking the snapshot.
     *
     * @see Feature.Set.CreateSnapshotJob#fromFsAndSpec
     * @see #deleteSnapshot
     * @see CreateSnapshotSpec
     */
    createSnapshotHeader(spec: CreateSnapshotSpec): Feature.Set.Snapshot;

    /**
     * Determines the optimal snapshot creation strategy.
     *
     * Analyzes the current state of materialized data and snapshot requirements
     * to decide whether to create the snapshot by copying existing materialized
     * data or by directly evaluating the feature set and writing results to
     * the key-value store.
     *
     * Decision Factors:
     * - Availability of pre-computed materialized data
     * - Time range coverage of existing materializations
     * - Performance implications of copying vs. re-evaluation
     *
     * Data Sources:
     * Materialized data can come from materialization tables or existing
     * snapshot tables in the key-value store.
     *
     * @param spec
     *    Snapshot creation specification with time range and subject filters.
     * @return
     *    True if copying materialized data is optimal, false if re-evaluation
     *    is preferred.
     *
     * @see CreateSnapshotSpec
     * @see #createSnapshot
     */
    shouldCopyMaterializeData(spec: CreateSnapshotSpec): boolean;

    /**
     * Creates an immutable snapshot of this feature set's data.
     *
     * Initiates a {@link Feature.Set.CreateSnapshotJob} to capture feature set data
     * within a specified time range and subject scope. The snapshot provides
     * reproducible training data for machine learning models and audit trails
     * for feature evolution.
     *
     * Snapshot Creation Strategies:
     * The system automatically chooses between two approaches:
     * 1. **Copy from Materialized Store**: When pre-computed data exists and covers
     *    the requested range, data is copied for optimal performance. Snapshots are
     *    saved in the same filesystem as materialized data with an additional
     *    directory level for better organization and user flexibility.
     * 2. **Direct Evaluation**: When materialized data is insufficient or when
     *    explicitly requested via skipMaterialized=true
     *
     * Data Immutability:
     * Once created, snapshots cannot be modified. To update snapshot data,
     * delete the existing snapshot using {@link #deleteSnapshot} and create
     * a new one with the desired parameters.
     *
     * Subject Filtering:
     * If {@link CreateSnapshotSpec#subjectFilter} matches no subjects in the
     * database, an empty snapshot is created with header metadata but no
     * data rows. The {@link Feature.Set.Snapshot} header is still created,
     * but no {@link Feature.Set.Snapshot.Subject} instances are generated.
     *
     * Usage Examples:
     * ```python
     * # Basic snapshot creation
     * job = featureSet.createSnapshot(snapshotId='supplyChainFs')
     *
     * # Snapshot with specific time range
     * job = featureSet.createSnapshot(
     *     snapshotId='audit_2020_2022',
     *     start='2020-01-01',
     *     end='2022-01-01'
     * )
     *
     * # Subset snapshot from larger one
     * job = featureSet.createSnapshot(
     *     snapshotId='audit_2020_2021',
     *     start='2020-01-01',
     *     end='2021-01-01',
     *     sourceSnapshotId='audit_2020_2022'
     * )
     *
     * # Force computation from raw data
     * job = featureSet.createSnapshot(
     *     snapshotId='prediction_2023_01_01',
     *     start='2023-01-01',
     *     end='2023-01-02',
     *     skipMaterialized=True
     * )
     * ```
     *
     * @param spec
     *    Snapshot creation specification containing snapshot ID, time range,
     *    subject filters, and other configuration options. Required.
     * @return
     *    Job instance for creating the snapshot. Use {@link Feature.Set.CreateSnapshotJob#waitForCompletion}
     *    to wait for completion before accessing snapshot data.
     *
     * @see Feature.Set.CreateSnapshotJob
     * @see Feature.Set.Snapshot
     * @see CreateSnapshotSpec
     * @see #deleteSnapshot
     */
    createSnapshot(spec: CreateSnapshotSpec): Feature.Set.CreateSnapshotJob | null;

    /**
     * Deletes an existing snapshot of this feature set.
     *
     * Removes a snapshot and its associated data from the feature store. This
     * operation is idempotent - no error is thrown if the snapshot does not exist.
     * The feature set must have a valid ID for deletion to function correctly.
     *
     * Prerequisites:
     * The feature set instance must exist in the database for deleteSnapshot to
     * work. If the feature set has been removed, use alternative deletion methods
     * to clean up orphaned snapshots.
     *
     * Alternative Deletion Methods:
     * When the feature set no longer exists, snapshots can be deleted directly:
     * - Single snapshot: Call `snapshot.remove()` on the specific snapshot instance
     * - Multiple snapshots: Use `Feature.Set.Snapshot.removeAll()`,
     *   `Feature.Set.Snapshot.removeBatch()`, or `Feature.Set.Snapshot.clearCollection()`
     *
     * Usage Examples:
     * ```python
     * # Standard snapshot deletion
     * featureSet.deleteSnapshot(snapshotId='supplyChainFs', confirm=True)
     *
     * # Alternative method when feature set is deleted
     * # Assuming c3.WindTurbine was the subjectType of the removed feature set
     * subjectType = c3.WindTurbine
     * featureSet.remove()  # Feature set is now deleted
     *
     * # Delete snapshot by constructing ID from subjectType and snapshotId
     * snapshot = c3.Feature.Set.Snapshot.make({
     *     'id': "WindTurbine#" + snapshotId
     * })
     * snapshot.remove()
     * ```
     *
     * @param snapshotId
     *    Unique identifier of the snapshot to delete. Required.
     * @param confirm
     *    Confirmation flag to prevent accidental deletions. Required for safety.
     *
     * @see #createSnapshot
     * @see Feature.Set.Snapshot
     */
    deleteSnapshot(snapshotId: string, confirm?: boolean): void;

    /**
     * Computes the effective time horizon for this feature set.
     *
     * Evaluates the {@link #timeHorizon} expressions or falls back to the
     * default time horizon from {@link Feature.Store.Config#defaultTimeHorizon}.
     * Returns a concrete {@link TimeRange} with resolved start and end times.
     *
     * Resolution Logic:
     * 1. If {@link #timeHorizon} is specified, evaluates those expressions
     * 2. Otherwise, uses {@link Feature.Store.Config#defaultTimeHorizon}
     * 3. Aligns the result to the feature set's interval boundaries
     *
     * @return
     *    Evaluated time range with concrete start and end times.
     *
     * @see #timeHorizon
     * @see Feature.Store.Config#defaultTimeHorizon
     * @see TimeRange
     */
    evaluatedTimeHorizon(): TimeRange;

    /**
     * Computes the effective materialization time range for this feature set.
     *
     * Evaluates the {@link #materializeTimeRange} expressions or falls back to
     * the default materialization range from {@link Feature.Store.Config#defaultMaterializeTimeRange}.
     * Returns a concrete {@link TimeRange} aligned to the feature set's interval.
     *
     * @return
     *    Evaluated time range for materialization operations.
     *
     * @see #materializeTimeRange
     * @see Feature.Store.Config#defaultMaterializeTimeRange
     * @see #evaluatedTimeHorizon
     */
    evaluatedMaterializeTimeRange(): TimeRange;

    /**
     * Validates and filters input column names against the feature set schema.
     *
     * Checks the provided column names against the feature set's defined columns,
     * identifying valid columns, missing columns, and duplicates. Returns the
     * complete set of feature set columns if no input columns are specified.
     *
     * Validation Process:
     * 1. Validates each input column exists in the feature set definition
     * 2. Identifies duplicate column names in the input
     * 3. Returns validated columns, invalid columns, and duplicates separately
     *
     * Usage Example:
     * ```python
     * # Using a metric feature set with features ['f1', 'f2', 'f3', 'f4']
     * fs = c3.Feature.Set(
     *     name='predict',
     *     id='WindTurbine#predict',
     *     features=['f1', 'f2', 'f3', 'f4'],
     *     subjectType=c3.WindTurbine
     * ).create()
     *
     * # Validate columns with duplicates and invalid entries
     * result = fs.validateColumns(['f1', 'f2', 'f2', 'f4', 'invalid'])
     * # Returns: <['f1', 'f4'], ['invalid'], ['f2']>
     * # Valid: ['f1', 'f4'], Invalid: ['invalid'], Duplicates: ['f2']
     * ```
     *
     * @param columns
     *    Array of column names to validate against the feature set schema.
     *    If null or empty, returns all feature set columns as valid.
     * @return
     *    Triple containing: (valid columns, non-existing columns, duplicate columns).
     *    - First element: Array of validated column names
     *    - Second element: Array of columns not found in the feature set
     *    - Third element: Array of duplicate column names from input
     *
     * @see #columns
     * @see #features
     */
    validateColumns(columns: C3.Array<string | null> | null): Triple<C3.Array<string | null>, C3.Array<string | null>, C3.Array<string | null>> | null;

    /**
     * Analyzes the distribution of materialized data for this feature set.
     *
     * Examines the availability and coverage of pre-computed feature data
     * within a specified time range and subject scope. Provides insights
     * into data completeness for optimization and planning purposes.
     *
     * Analysis Scope:
     * The analysis covers materialized data distribution across:
     * - Specified time ranges from the query specification
     * - Batch of subjects defined in the query specification
     * - Different materialization storage layers
     *
     * @param spec
     *    Query specification defining the time range and subjects to analyze.
     * @return
     *    Data object containing distribution metrics and availability information.
     *
     * @see Feature.Store.QuerySpec
     * @see #missingMaterializedData
     */
    static availableMaterializedData(spec?: Feature.Store.QuerySpec | null): Data;

    /**
     * Identifies gaps in materialized data for this feature set.
     *
     * Analyzes the specified time range and subject scope to determine
     * which portions of the requested data are not available in the
     * materialized store. This information is crucial for planning
     * re-computation strategies and understanding data completeness.
     *
     * Gap Analysis:
     * Identifies missing data across:
     * - Time periods within the specified range
     * - Subjects that lack materialized features
     * - Feature combinations that need re-computation
     *
     * @param spec
     *    Query specification defining the time range and subjects to analyze.
     * @return
     *    Data object detailing missing materialized data segments.
     *
     * @see Feature.Store.QuerySpec
     * @see #availableMaterializedData
     */
    static missingMaterializedData(spec?: Feature.Store.QuerySpec | null): Data;
  }
}


interface λFunction<T, R> {
  (t: T): R
}

interface λBiFunction<T, U, R> {
  (t: T, u: U): R
}

interface λTriFunction<T, U, V, R> {
  (t: T, u: U, v: V): R
}

interface λSupplier<R> {
  (): R
}

interface λQuadFunction<T, U, V, W, R> {
  (t: T, u: U, v: V, w: W): R
}

interface λBiConsumer<T, U> {
  (t: T, u: U): void
}

interface λPredicate<T> {
  (t: T): boolean
}
