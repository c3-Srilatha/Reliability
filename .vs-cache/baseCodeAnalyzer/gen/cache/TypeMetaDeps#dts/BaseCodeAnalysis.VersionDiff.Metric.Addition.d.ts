// TypeScript definitions for the C3 type BaseCodeAnalysis.VersionDiff.Metric.Addition

/**
 * This version diff metric searches for and highlights any new Types, fields, methods,
 * or method parameters that have been added to the application.
 *
 * @see BaseCodeAnalysis.VersionDiff.Metric.Removal
 * @see BaseCodeAnalysis.VersionDiff.Metric.Rename
 * @see BaseCodeAnalysis.VersionDiff.Metric.Deprecation
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalysis.VersionDiff.Metric.Addition
 */
declare namespace BaseCodeAnalysis.VersionDiff.Metric {
  export interface IAddition {

    /**
     * The code for this version diff metric
     */
    METRIC_CODE?: string;

    /**
     * The sub-category code for when a Type has been added
     */
    ADDED_TYPE_CODE?: string;

    /**
     * The sub-category code for when a [field](DeclaredFieldType) has been added
     */
    ADDED_FIELD_CODE?: string;

    /**
     * The sub-category code for when a [method](MethodType) has been added
     */
    ADDED_METHOD_CODE?: string;

    /**
     * The sub-category code for when a [parameter](FunctionParam) has been added
     */
    ADDED_PARAM_CODE?: string;
  }
}

/**
 * This version diff metric searches for and highlights any new Types, fields, methods,
 * or method parameters that have been added to the application.
 *
 * @see BaseCodeAnalysis.VersionDiff.Metric.Removal
 * @see BaseCodeAnalysis.VersionDiff.Metric.Rename
 * @see BaseCodeAnalysis.VersionDiff.Metric.Deprecation
 *
 * @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff.Metric.Addition
 */
declare namespace BaseCodeAnalysis.VersionDiff.Metric {
  export class Addition {

    /**
     * The code for this version diff metric
     */
    readonly METRIC_CODE?: string;
    withMETRIC_CODE(METRIC_CODE: string | null): BaseCodeAnalysis.VersionDiff.Metric.Addition;

    /**
     * The sub-category code for when a Type has been added
     */
    readonly ADDED_TYPE_CODE?: string;
    withADDED_TYPE_CODE(ADDED_TYPE_CODE: string | null): BaseCodeAnalysis.VersionDiff.Metric.Addition;

    /**
     * The sub-category code for when a [field](DeclaredFieldType) has been added
     */
    readonly ADDED_FIELD_CODE?: string;
    withADDED_FIELD_CODE(ADDED_FIELD_CODE: string | null): BaseCodeAnalysis.VersionDiff.Metric.Addition;

    /**
     * The sub-category code for when a [method](MethodType) has been added
     */
    readonly ADDED_METHOD_CODE?: string;
    withADDED_METHOD_CODE(ADDED_METHOD_CODE: string | null): BaseCodeAnalysis.VersionDiff.Metric.Addition;

    /**
     * The sub-category code for when a [parameter](FunctionParam) has been added
     */
    readonly ADDED_PARAM_CODE?: string;
    withADDED_PARAM_CODE(ADDED_PARAM_CODE: string | null): BaseCodeAnalysis.VersionDiff.Metric.Addition;

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
  }
}

