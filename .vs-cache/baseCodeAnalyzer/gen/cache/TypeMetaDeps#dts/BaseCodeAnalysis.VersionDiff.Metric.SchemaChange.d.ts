// TypeScript definitions for the C3 type BaseCodeAnalysis.VersionDiff.Metric.SchemaChange

/**
 * This version diff metric searches for and highlights any changes in database (DB)
 * table/column naming. If any of the following change, it's highlighted:
 *
 *   - {@link TypeMeta#declaredSchemaName}
 *   - {@link TypeMeta#declaredTypeKey}
 *   - {@link DeclaredFieldType#schemaName}
 *   - {@link DeclaredFieldType#schemaSuffix}
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalysis.VersionDiff.Metric.SchemaChange
 */
declare namespace BaseCodeAnalysis.VersionDiff.Metric {
  export interface ISchemaChange {

    /**
     * The code for this version diff metric
     */
    METRIC_CODE?: string;

    /**
     * The sub-category code for when a Type's schema was explicitly changed.
     *
     * @see searchForDeclaredTypeSchemaChanges
     */
    EXPLICIT_TABLE_RENAME_CODE?: string;

    /**
     * The sub-category code for when a Type's schema was implicitly changed.
     *
     * @see searchForImplicitTypeSchemaChanges
     */
    IMPLICIT_TABLE_RENAME_CODE?: string;

    /**
     * The sub-category code for when a Type was removed.
     *
     * @see searchForImplicitTypeSchemaChanges
     */
    TABLE_REMOVAL_CODE?: string;

    /**
     * The sub-category code for when a [field](DeclaredFieldType)'s schema was explicitly changed.
     *
     * @see searchForDeclaredFieldSchemaChanges
     */
    EXPLICIT_COLUMN_RENAME_CODE?: string;

    /**
     * The sub-category code for when a [field](DeclaredFieldType)'s schema was implicitly changed.
     *
     * @see searchForImplicitFieldSchemaChanges
     */
    IMPLICIT_COLUMN_RENAME_CODE?: string;

    /**
     * The sub-category code for when a [field](DeclaredFieldType) was removed.
     *
     * @see searchForImplicitFieldSchemaChanges
     */
    COLUMN_REMOVAL_CODE?: string;
  }
}

/**
 * This version diff metric searches for and highlights any changes in database (DB)
 * table/column naming. If any of the following change, it's highlighted:
 *
 *   - {@link TypeMeta#declaredSchemaName}
 *   - {@link TypeMeta#declaredTypeKey}
 *   - {@link DeclaredFieldType#schemaName}
 *   - {@link DeclaredFieldType#schemaSuffix}
 *
 * @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff.Metric.SchemaChange
 */
declare namespace BaseCodeAnalysis.VersionDiff.Metric {
  export class SchemaChange {

    /**
     * The code for this version diff metric
     */
    readonly METRIC_CODE?: string;
    withMETRIC_CODE(METRIC_CODE: string | null): BaseCodeAnalysis.VersionDiff.Metric.SchemaChange;

    /**
     * The sub-category code for when a Type's schema was explicitly changed.
     *
     * @see searchForDeclaredTypeSchemaChanges
     */
    readonly EXPLICIT_TABLE_RENAME_CODE?: string;
    withEXPLICIT_TABLE_RENAME_CODE(EXPLICIT_TABLE_RENAME_CODE: string | null): BaseCodeAnalysis.VersionDiff.Metric.SchemaChange;

    /**
     * The sub-category code for when a Type's schema was implicitly changed.
     *
     * @see searchForImplicitTypeSchemaChanges
     */
    readonly IMPLICIT_TABLE_RENAME_CODE?: string;
    withIMPLICIT_TABLE_RENAME_CODE(IMPLICIT_TABLE_RENAME_CODE: string | null): BaseCodeAnalysis.VersionDiff.Metric.SchemaChange;

    /**
     * The sub-category code for when a Type was removed.
     *
     * @see searchForImplicitTypeSchemaChanges
     */
    readonly TABLE_REMOVAL_CODE?: string;
    withTABLE_REMOVAL_CODE(TABLE_REMOVAL_CODE: string | null): BaseCodeAnalysis.VersionDiff.Metric.SchemaChange;

    /**
     * The sub-category code for when a [field](DeclaredFieldType)'s schema was explicitly changed.
     *
     * @see searchForDeclaredFieldSchemaChanges
     */
    readonly EXPLICIT_COLUMN_RENAME_CODE?: string;
    withEXPLICIT_COLUMN_RENAME_CODE(EXPLICIT_COLUMN_RENAME_CODE: string | null): BaseCodeAnalysis.VersionDiff.Metric.SchemaChange;

    /**
     * The sub-category code for when a [field](DeclaredFieldType)'s schema was implicitly changed.
     *
     * @see searchForImplicitFieldSchemaChanges
     */
    readonly IMPLICIT_COLUMN_RENAME_CODE?: string;
    withIMPLICIT_COLUMN_RENAME_CODE(IMPLICIT_COLUMN_RENAME_CODE: string | null): BaseCodeAnalysis.VersionDiff.Metric.SchemaChange;

    /**
     * The sub-category code for when a [field](DeclaredFieldType) was removed.
     *
     * @see searchForImplicitFieldSchemaChanges
     */
    readonly COLUMN_REMOVAL_CODE?: string;
    withCOLUMN_REMOVAL_CODE(COLUMN_REMOVAL_CODE: string | null): BaseCodeAnalysis.VersionDiff.Metric.SchemaChange;

    /**
     * Helper function for analyzing a specific category of changes between two
     * versions of a C3 application without needing to worry about mapping changes
     * to each other. This enables each metric to only implement the logic for
     * analyzing the specific category of changes it's responsible for.
     *
     * Every lambda from `scanSpec` is wrapped in a `try` / `catch` block, so lambdas
     * don't need to implement error handling. Additionally, messages from each lambda
     * are populated with the following metadata automatically:
     *
     * ```json
     * {
     *   "isPrivate": boolean,
     *   "isBeta": boolean,
     *   "isUi": boolean,
     *   "isTest": boolean
     * }
     * ```
     *
     * @param calculateResultsSpec
     *           Object containing relevant {@link App} / {@link Pkg} info and file
     *           changes between two versions, along with additional configurations
     *           for how to calculate results. This is usually passed through from
     *           #calculateResults.
     * @param scanSpec
     *           Spec for specifying the lambdas to use for each category of {@link TypeMeta}
     *           changes (added / removed / changed).
     * @return An array of results representing the version diff metric values for
     *         files in the package.
     */
    static scanTypeMeta(calculateResultsSpec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec, scanSpec: BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec): Array_Type<BaseCodeAnalysis.Metric.Result> | null;

    /**
     * Function to identify and analyze a specific category of changes between two
     * versions of a C3 application.
     *
     * Any implementation of this function should follow these rules when analyzing
     * [inherited fields or methods](InheritedValueType). These are important because
     * if all inherited fields were treated as changes, then it's possible for false
     * positives to be surfaced on pull requests.
     *
     *   1. If the field or method is inherited in one version but not the other, analyze
     *      all parts of the field. In the following example, the {@link ValueType},
     *      {@link ValueModifier}, and default value of `name` should be analyzed.
     *
     *      ```type
     *      ┌──────────────────┬──────────────────┐
     *      │      1.0.0       │      2.0.0       │
     *      ├──────────────────┼──────────────────┤
     *      │ type B {         │ type B mixes A { │
     *      │   name: ?string  │   name: !~ = 'x' │
     *      │ }                │ }                │
     *      └──────────────────┴──────────────────┘
     *      ```
     *
     *   2. If the field or method is inherited _from a different Type_ in both versions
     *      (after renames are resolved), analyze all parts of the field. In the following
     *      example, both the {@link ValueType} and {@link ValueModifier} of `name` should
     *      be analyzed.
     *
     *      ```type
     *      ┌──────────────────┬──────────────────┐
     *      │      1.0.0       │      2.0.0       │
     *      ├──────────────────┼──────────────────┤
     *      │ type B mixes A { │ type B mixes C { │
     *      │   name: ~        │   name: !~       │
     *      │ }                │ }                │
     *      └──────────────────┴──────────────────┘
     *      ```
     *
     *   3. If the field or method is inherited _from the same Type_ in both versions
     *      (after renames are resolved), only analyze parts that were explicitly part
     *      of that declaration. In the following examples, only the {@link ValueModifier}
     *      of `name` should be analyzed. The fully-resolved {@link ValueModifier}s should
     *      be compared, however, so if `A.name` was [non-empty](ValueModifier#NON_EMPTY)
     *      in version 1.0.0 of the first two examples, no change has actually occurred.
     *
     *      ```type
     *      ┌──────────────────┬──────────────────┐
     *      │      1.0.0       │      2.0.0       │
     *      ├──────────────────┼──────────────────┤
     *      │ type B mixes A { │ type B mixes A { │
     *      │   name: ~        │   name: !~       │
     *      │ }                │ }                │
     *      ├──────────────────┼──────────────────┤
     *      │ type B mixes A   │ type B mixes A { │
     *      │                  │   name: !~       │
     *      │                  │ }                │
     *      ├──────────────────┼──────────────────┤
     *      │ type B mixes A { │ type B mixes A   │
     *      │   name: !~       │                  │
     *      │ }                │                  │
     *      └──────────────────┴──────────────────┘
     *      ```
     *
     *   4. _Exception to Rule 3_: If an inherited method declaration is added or removed,
     *      but the method existed in both versions and the base signature either was or is
     *      [optional](MethodType#optional) or [abstract](MethodType#abstract), treat it as
     *      an addition or removal, not a change as this means a new function implementation
     *      has been added or removed.
     *
     *      ```type
     *      ┌─────────────────────────────────────────┐
     *      │ type A {                                │
     *      │   func: optional function(a: int)       │
     *      │ }                                       │
     *      ├────────────────────┬────────────────────┤
     *      │       1.0.0        │       2.0.0        │
     *      ├────────────────────┼────────────────────┤
     *      │ type B mixes A     │ type B mixes A {   │
     *      │                    │   func: ~ js-rhino │
     *      │                    │ }                  │
     *      ├────────────────────┼────────────────────┤
     *      │ type B mixes A {   │ type B mixes A     │
     *      │   func: ~ js-rhino │                    │
     *      │ }                  │                    │
     *      └────────────────────┴────────────────────┘
     *      ```
     *
     *   5. If a new mixin is added or a new field is added to a mixin and an inherited
     *      declaration for that field is also added, only report that declaration as added
     *      if it's been modified such that its addition is a breaking change, but the
     *      original field isn't. In the following example, the declaration of `name` should
     *      be reported as added in 2.0.0, but `id` shouldn't.
     *
     *      This doesn't apply to methods since any added declaration (inherited or not)
     *      indicates a new implementation.
     *
     *      ```type
     *      ┌──────────────────┬──────────────────┐
     *      │      1.0.0       │      2.0.0       │
     *      ├──────────────────┼──────────────────┤
     *      │ type B           │ type B mixes A { │
     *      │                  │   id: ~          |
     *      │                  │   name: !~       │
     *      │                  │ }                │
     *      └──────────────────┴──────────────────┘
     *      ```
     *
     *   6. If a mixin is removed or a field is removed from a mixin and an inherited
     *      declaration for that field is also removed, don't report it. If the field
     *      was removed from the original Type, it should be reported there. If a mixin
     *      was removed, that should be reported instead. In the following example, the
     *      declaration of `name` shouldn't be reported as removed in 2.0.0.
     *
     *      ```type
     *      ┌──────────────────┬──────────────────┐
     *      │      1.0.0       │      2.0.0       │
     *      ├──────────────────┼──────────────────┤
     *      │ type B mixes A { │ type B           │
     *      │   name: ~        │                  |
     *      │ }                │                  │
     *      └──────────────────┴──────────────────┘
     *      ```
     *
     * @param spec
     *           Object containing relevant {@link App} / {@link Pkg} info and file
     *           changes between two versions, along with additional configurations
     *           for how to calculate results.
     * @return An array of results representing the version diff metric values for
     *         files in the package.
     */
    static calculateResults(spec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec): Array_Type<BaseCodeAnalysis.Metric.Result> | null;

    /**
     * **This function should not be run directly. Use** #searchForTypeSchemaChanges **instead.**
     *
     * Helper function to identify any backwards-incompatible schema changes that have been
     * explicitly declared through any of the following:
     *
     *   - {@link TypeMeta#declaredSchemaName}
     *   - {@link TypeMeta#declaredTypeKey}
     *
     * @param spec
     *           The spec containing the previous and current versions of a Type which represent
     *           the previous and current DB schemas.
     * @return An array of messages reporting any declared backwards-incompatible Type schema changes.
     */
    static searchForDeclaredTypeSchemaChanges(spec: BaseCodeAnalysis.VersionDiff.CompareTypesSpec): Array_Type<BaseCodeAnalysis.Metric.Message> | null;

    /**
     * **This function should not be run directly. Use** #searchForTypeSchemaChanges **instead.**
     *
     * Helper function to identify any _implicit_ schema changes that result from things other
     * than declared schema names/type keys. For example:
     *
     *   - A Type didn't explicitly declare a schema name, but the Type was renamed. Since the
     *     schema name is derived from the Type name in lieu of an explicit declaration, this
     *     constitutes a schema change.
     *   - A [persistable](TypeMeta#isPersistable) Type was removed.
     *
     * @param spec
     *           The spec containing the previous and current versions of a Type which represent
     *           the previous and current DB schemas. If the current version is null, it's assumed
     *           that the Type was removed.
     * @return An array of messages reporting any implicit backwards-incompatible Type schema changes.
     */
    static searchForImplicitTypeSchemaChanges(spec: BaseCodeAnalysis.VersionDiff.CompareTypesSpec): Array_Type<BaseCodeAnalysis.Metric.Message> | null;

    /**
     * Function to identify any backwards-incompatible schema changes between two versions of a
     * given [persistable Type](TypeMeta#isPersistable). This function is called by #calculateResults.
     *
     * @param calculateResultsSpec
     *           The spec provided to #calculateResults.
     * @param compareSpec
     *           The spec containing the previous and current versions of a Type.
     * @return An array of messages reporting any backwards-incompatible Type schema changes.
     */
    static searchForTypeSchemaChanges(calculateResultsSpec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec, compareSpec: BaseCodeAnalysis.VersionDiff.CompareTypesSpec): Array_Type<BaseCodeAnalysis.Metric.Message> | null;

    /**
     * **This function should not be run directly. Use** #searchForFieldSchemaChanges **instead.**
     *
     * Helper function to identify any _implicit_ schema changes that result from things other
     * than declared schema names/schema suffixes. For example:
     *
     *   - A field didn't explicitly declare a schema name, but the field was renamed. Since the
     *     schema name is derived from the field name in lieu of an explicit declaration, this
     *     constitutes a schema change.
     *   - A persistable field was removed.
     *
     * @param spec
     *           The spec containing the previous and current versions of a field.
     * @return An array of messages reporting any explicit backwards-incompatible field schema changes.
     */
    static searchForDeclaredFieldSchemaChanges(spec: BaseCodeAnalysis.VersionDiff.CompareFieldsSpec): Array_Type<BaseCodeAnalysis.Metric.Message> | null;

    /**
     * **This function should not be run directly. Use** #searchForFieldSchemaChanges **instead.**
     *
     * Helper function to identify any backwards-incompatible schema changes that have been
     * explicitly declared through any of the following:
     *
     *   - {@link DeclaredFieldType#schemaName}
     *   - {@link DeclaredFieldType#schemaSuffix}
     *
     * @param spec
     *           The spec containing the previous and current versions of a field. If the current
     *           version is null, it's assumed that the field was removed.
     * @return An array of messages reporting any implicit backwards-incompatible field schema changes.
     */
    static searchForImplicitFieldSchemaChanges(spec: BaseCodeAnalysis.VersionDiff.CompareFieldsSpec): Array_Type<BaseCodeAnalysis.Metric.Message> | null;

    /**
     * Function to identify any backwards-incompatible schema changes between two versions
     * of a given [persistable Type](TypeMeta#isPersistable)'s field. This function is called
     * by #calculateResults.
     *
     * @param calculateResultsSpec
     *           The spec provided to #calculateResults.
     * @param compareSpec
     *           The spec containing the previous and current versions of a field.
     * @return An array of messages reporting any backwards-incompatible field schema changes.
     */
    static searchForFieldSchemaChanges(calculateResultsSpec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec, compareSpec: BaseCodeAnalysis.VersionDiff.CompareFieldsSpec): Array_Type<BaseCodeAnalysis.Metric.Message> | null;
  }
}

