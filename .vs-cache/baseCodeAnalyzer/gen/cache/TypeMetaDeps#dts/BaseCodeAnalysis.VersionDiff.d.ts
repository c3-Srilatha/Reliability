// TypeScript definitions for the C3 type BaseCodeAnalysis.VersionDiff

/**
 * Top-level Type for analyzing differences between two [versions](SemanticVersion)
 * of a C3 application. The APIs on this Type rely on {@link Pkg} information having
 * been collected through {@link BaseCodeAnalyzer#collectAppInfo}.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalysis.VersionDiff
 */
declare namespace BaseCodeAnalysis {
  export interface IVersionDiff {
  }
}

/**
 * Top-level Type for analyzing differences between two [versions](SemanticVersion)
 * of a C3 application. The APIs on this Type rely on {@link Pkg} information having
 * been collected through {@link BaseCodeAnalyzer#collectAppInfo}.
 *
 * @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff
 */
declare namespace BaseCodeAnalysis {
  export class VersionDiff {

    /**
     * Function to validate whether two instances of {@link BaseCodeAnalysis.AppInfo} can be
     * compared using #detectStructuralChanges. If they can't be compared, this function will throw
     * an error with a message explaining why.
     *
     * @param prevAppInfo
     *           The information collected for the previous version of the {@link App}.
     * @param curAppInfo
     *           The information collected for the current version of the {@link App}.
     */
    static validateAppInfos(prevAppInfo: BaseCodeAnalysis.AppInfo, curAppInfo: BaseCodeAnalysis.AppInfo): void;

    /**
     * Helper function to call {@link TypeMeta#toString} where the fields are ordered by
     * [name](DeclaredFieldType#name) instead of by declaration order. This is useful for
     * detecting similarity between two Types.
     *
     * Declared mixin order is preserved because this is significant when the same field
     * is declared on multiple mixins.
     *
     * @param typeMeta
     *           The {@link TypeMeta} instance to get the ordered string for.
     * @param skipComments
     *           Whether to exclude comments from the stringified {@link TypeMeta} instance.
     *           Non-documentation comments are always excluded.
     * @return The ordered string representation of the Type.
     */
    static getOrderedTypeMetaStr(typeMeta: TypeMeta, skipComments?: boolean = 'false'): string;

    /**
     * If Types are identical across versions, they can be filtered out of all comparisons to
     * improve performance. This function will filter out all Types that haven't be touched at
     * all between two versions of an {@link App}.
     *
     * **NOTE:** This doesn't account for a case where a Type is revised and the original Type is
     *           kept for backwards compatibility but isn't marked as [@deprecated](Ann.Deprecated).
     *           In this case, the Type would be filtered out even though it was revised.
     *
     * @param prevAppInfo
     *           The information collected for the previous version of the {@link App}.
     * @param curAppInfo
     *           The information collected for the current version of the {@link App}.
     * @return A tuple of the filtered {@link BaseCodeAnalysis.AppInfo} instances where the
     *         first element is the previous version and the second is the current version.
     *
     * @see BaseCodeAnalysis.VersionDiff.TypeMetaChanges#touched
     */
    static filterUntouchedTypeMetas(prevAppInfo: BaseCodeAnalysis.AppInfo, curAppInfo: BaseCodeAnalysis.AppInfo):  | null;

    /**
     * Within a given {@link App}, find all Types, fields, and methods that have been marked as
     * [@deprecated](Ann.Deprecated) and extract all relevant revision details for them.
     *
     * If a Type, field, or method was already deprecated in the previous version, it won't be
     * recorded again.
     *
     * @param prevAppInfo
     *           The information collected for the previous version of the {@link App}.
     * @param curAppInfo
     *           The information collected for the current version of the {@link App}.
     * @param options
     *           Additional options for what changes to detect and how to detect them.
     * @return All revision details for the Types, fields, and methods that were deprecated. See
     *         #mergeExplicitAndGuessedRevisions for the shape of the return value.
     *
     * @see BaseCodeAnalysis.AppInfo#extractRevisionDetails
     */
    static detectExplicitRevisions(prevAppInfo: BaseCodeAnalysis.AppInfo, curAppInfo: BaseCodeAnalysis.AppInfo, options?: BaseCodeAnalysis.VersionDiff.DetectChangesOptions): any | null;

    /**
     * An internal function to calculate the cosine similarity between two Types, fields,
     * or methods. This is used to determine whether they've been renamed as opposed to
     * added / removed.
     *
     * @param prevMeta
     *           The previous version of the Type, field, or method.
     * @param curMeta
     *           The current version of the Type, field, or method.
     * @return A float between 0 and 1 indicating how similar the two Types, fields, or methods are.
     *
     * @see guessRevisions
     */
    static calculateSimilarity(prevMeta: TypeMeta | DeclaredFieldType, curMeta: TypeMeta | DeclaredFieldType): number | null;

    /**
     * This function is called by #guessRevisions. It will attempt to guess what Types were
     * revised across two versions of an {@link App} by comparing the similarity of their content
     * (docs / declaration).
     *
     * @param prevAppInfo
     *           The information collected for the previous version of the {@link App}.
     * @param curAppInfo
     *           The information collected for the current version of the {@link App}.
     * @param options
     *           Additional options for what changes to detect and how to detect them.
     * @param existingRevisions
     *           The results of #detectExplicitRevisions can optionally be provided as additional
     *           context for this function. The function will ignore and Types, fields, or methods
     *           that have already been identified as renamed with a valid new Type and/or field.
     * @return All guessed rename details for Types. See #mergeExplicitAndGuessedRevisions for the
     *         shape of the return value.
     */
    static guessTypeRevisions(prevAppInfo: BaseCodeAnalysis.AppInfo, curAppInfo: BaseCodeAnalysis.AppInfo, options?: BaseCodeAnalysis.VersionDiff.DetectChangesOptions, existingRevisions?: any): any | null;

    /**
     * This function is called by #guessRevisions. It will attempt to guess what fields and
     * methods were revised across two versions of an {@link App} by comparing the similarity
     * of their content (docs / declaration).
     *
     * @param prevAppInfo
     *           The information collected for the previous version of the {@link App}.
     * @param curAppInfo
     *           The information collected for the current version of the {@link App}.
     * @param options
     *           Additional options for what changes to detect and how to detect them.
     * @param existingRevisions
     *           The results of #detectExplicitRevisions can optionally be provided as additional
     *           context for this function. The function will ignore and Types, fields, or methods
     *           that have already been identified as renamed with a valid new Type and/or field.
     * @return All guessed rename details for fields or methods. See #mergeExplicitAndGuessedRevisions
     *         for the shape of the return value.
     */
    static guessFieldRevisions(prevAppInfo: BaseCodeAnalysis.AppInfo, curAppInfo: BaseCodeAnalysis.AppInfo, options?: BaseCodeAnalysis.VersionDiff.DetectChangesOptions, existingRevisions?: any): any | null;

    /**
     * This function is called by #detectStructuralChanges when {@link BaseCodeAnalysis.VersionDiff.DetectChangesOptions#guessRevisions}
     * is true. It will attempt to guess what Types, fields, or methods were renamed across two
     * versions of an {@link App} by comparing the similarity of their content (docs / declaration).
     *
     * @param prevAppInfo
     *           The information collected for the previous version of the {@link App}.
     * @param curAppInfo
     *           The information collected for the current version of the {@link App}.
     * @param options
     *           Additional options for what changes to detect and how to detect them.
     * @param existingRevisions
     *           The results of #detectExplicitRevisions can optionally be provided as additional
     *           context for this function. The function will ignore and Types, fields, or methods
     *           that have already been identified as renamed with a valid new Type and/or field.
     * @return All guessed rename details for Types, fields, and methods. See #mergeExplicitAndGuessedRevisions
     *         for the shape of the return value.
     *
     * @see calculateSimilarity
     */
    static guessRevisions(prevAppInfo: BaseCodeAnalysis.AppInfo, curAppInfo: BaseCodeAnalysis.AppInfo, options?: BaseCodeAnalysis.VersionDiff.DetectChangesOptions, existingRevisions?: any): any | null;

    /**
     * Merge the results of #detectExplicitRevisions and #guessRevisions giving results from
     * #detectExplicitRevisions precedence. The merged dict will have the following shape:
     *
     * ```json
     * {
     *   "types": {
     *     "<pkgName>": {
     *       "<TypeName>": BaseCodeAnalysis.VersionDiff.TypeMetaChangesBase.RevisionDetails
     *     }
     *   },
     *   "fields": {
     *     "<pkgName>": {
     *       "<TypeName>": {
     *         "<fieldName>": BaseCodeAnalysis.VersionDiff.TypeMetaChangesBase.RevisionDetails
     *       }
     *     }
     *   }
     * }
     * ```
     *
     * @param existingRevisions
     *           The results of #detectExplicitRevisions.
     * @param guessedRevisions
     *           The results of #guessRevisions.
     * @return The merged Python dict with all rename information.
     */
    static mergeExplicitAndGuessedRevisions(existingRevisions?: any, guessedRevisions?: any): any | null;

    /**
     * Function to organize all _structural_ changes between two versions of an {@link App}
     * by {@link Pkg#name}.
     *
     * @param prevAppInfo
     *           The information collected for the previous version of the {@link App}.
     * @param curAppInfo
     *           The information collected for the current version of the {@link App}.
     * @param revisions
     *           Any revisions detected by #detectExplicitRevisions and #guessRevisions.
     * @return The changes between the two versions, categorized by {@link Pkg#name}.
     */
    static organizeChangesByPkg(prevAppInfo: BaseCodeAnalysis.AppInfo, curAppInfo: BaseCodeAnalysis.AppInfo, revisions?: any): Map_Type<string, BaseCodeAnalysis.VersionDiff.TypeMetaChanges> | null;

    /**
     * Function to detect _structural_ changes between two versions of a [C3 application](App).
     * This doesn't actually perform any analysis on said changes. Instead, it creates a "state"
     * for all {@link BaseCodeAnalysis.VersionDiff.Metric}s to refer to when reporting issues.
     * This function reports the following:
     *
     *   - Which Types, fields, and methods are new to an {@link App}
     *   - Which Types, fields, and methods have been removed from an {@link App}
     *   - When a Type, field, or method has been renamed, its old and new names and any
     *     relevant [deprecation details](Ann.Deprecated)
     *   - When a Type has been moved to a different package
     *
     * This function only detects changes in the declared structure of Types, so in some cases
     * a field or method may be reported as added or removed, but the field was originally
     * [inherited](InheritedValueType) and thus isn't net-new or removed. In these cases, each
     * individual [metric](BaseCodeAnalysis.VersionDiff.Metric) is responsible for handling
     * inherited fields correctly.
     *
     * ```type
     * ┌───────────────────────────────────────────────────────┐
     * │ type A {                                              │
     * │   field1: string                                      │
     * │ }                                                     │
     * ├───┬──────────────────┬──────────────────┬─────────────┤
     * │   │      1.0.0       │      2.0.0       │ Reported As │
     * ├───┼──────────────────┼──────────────────┼─────────────┤
     * │   │ type B mixes A   │ type B mixes A { │ Added       │
     * │ 1 │                  │   field1: !~     │             │
     * │   │                  │ }                │             │
     * ├───┼──────────────────┼──────────────────┼─────────────┤
     * │   │ type B           │ type B mixes A { │ Added       │
     * │ 2 │                  │   field1: !~     │             │
     * │   │                  │ }                │             │
     * ├───┼──────────────────┼──────────────────┼─────────────┤
     * │   │ type B mixes A { │ type B mixes A   │ Removed     │
     * │ 3 │   field1: ~      │                  │             │
     * │   │ }                │                  │             │
     * ├───┼──────────────────┼──────────────────┼─────────────┤
     * │   │ type B mixes A { │ type B           │ Removed     │
     * │ 4 │   field1: ~      │                  │             │
     * │   │ }                │                  │             │
     * ├───┼──────────────────┼──────────────────┼─────────────┤
     * │   │ type B {         │ type B mixes A { │ No change   │
     * │ 5 │   field1: string │   field1: !~     │             │
     * │   │ }                │ }                │             │
     * ├───┼──────────────────┼──────────────────┼─────────────┤
     * │   │ type B mixes A { │ type B {         │ No change   │
     * │ 6 │   field1: ~      │   field1: string │             │
     * │   │ }                │ }                │             │
     * └───┴──────────────────┴──────────────────┴─────────────┘
     * ```
     *
     * @param prevAppInfo
     *           The information collected for the previous version of a C3 application.
     * @param curAppInfo
     *           The information collected for the current version of a C3 application.
     * @param options
     *           Additional options for what changes to detect and how to detect them.
     * @return The changes between the two versions, categorized by {@link Pkg#name}.
     */
    static detectStructuralChanges(prevAppInfo: BaseCodeAnalysis.AppInfo, curAppInfo: BaseCodeAnalysis.AppInfo, options?: BaseCodeAnalysis.VersionDiff.DetectChangesOptions): Map_Type<string, BaseCodeAnalysis.VersionDiff.TypeMetaChanges> | null;

    /**
     * Calls child actions to generate file-level version diff analysis metrics for the provided
     * previous and current versions of a [C3 application](App).
     *
     * @param spec
     *           The spec for the #compareVersions function.
     * @return An array of {@link BaseCodeAnalysis.Result}, one per {@link Pkg}.
     */
    static compareVersions(spec: BaseCodeAnalysis.VersionDiff.CompareVersionsSpec): Array_Type<BaseCodeAnalysis.Result> | null;
  }
}

