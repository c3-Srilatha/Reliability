// TypeScript definitions for the C3 type BaseCodeAnalysis.Metric.Code

/**
 * Enum Type for the list of codes of all metrics being evaluated in {@link BaseCodeAnalysis}.
 * This includes both {@link BaseCodeAnalysis.Metric}s and {@link BaseCodeAnalysis.VersionDiff.Metric}s.
 *
 * @remarks this represents a value passed to a method that expects an instance of BaseCodeAnalysis.Metric.Code
 */
declare namespace BaseCodeAnalysis.Metric {
  export interface ICode {

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.MissingDocumentation}.
     */
    MISSING_DOCS?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.IncompleteDocumentation}.
     */
    INCOMPLETE_METHOD_DOCS?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.BrokenDocumentationLinks}.
     */
    BROKEN_DOCUMENTATION_LINKS?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.OrphanedDocumentation}.
     */
    ORPHANED_DOCUMENTATION?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.TodoMentionTypeDocumentation}.
     */
    TODO_MENTION_TYPE_DOCS?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.MissingPackageOverview}.
     */
    MISSING_PKG_OVERVIEW?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.ExpiredDeprecations}.
     */
    EXPIRED_DEPRECATIONS?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.DeprecatedTypeUsage}.
     */
    DEPRECATIONS_USAGE?: string;

    /**
     * The metric code for the ES {@link BaseCodeAnalysis.Metric.Linter}.
     */
    ESLINT?: string;

    /**
     * The metric code for the Python {@link BaseCodeAnalysis.Metric.Linter}.
     */
    PYTHON_LINT?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.ExcessiveMethodParameters}.
     */
    EXCESSIVE_METHOD_PARAMETERS?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.HiddenFunctionCount}.
     */
    HIDDEN_FUNCTION?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.HardcodedCredentials}.
     */
    HARDCODED_CREDENTIALS?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.PsrFetchLimit}.
     */
    PSR_FETCH_LIMIT?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.PsrLoopSingleDbWrite}.
     */
    PSR_LOOP_SINGLE_DB_WRITE?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.PsrRemoveAll}.
     */
    PSR_REMOVE_ALL?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.PsrClearCollection}.
     */
    PSR_CLEAR_COLLECTION?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.SleepCall}.
     */
    PSR_SLEEP_CALL?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.PsrKvStoreCalcField}.
     */
    PSR_KV_STORED_CALC_FIELDS?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.CanonicalTestCoverage}.
     */
    CANONICAL_TEST_COVERAGE?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.TypeCount}.
     */
    TYPE_COUNT?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.FieldCount}.
     */
    FIELD_COUNT?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.LogicalLinesCount}.
     */
    LOGICAL_LINES?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.TicketMentionCount}.
     */
    TICKET_MENTION_COUNT?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.TodoCount}.
     */
    TODO_FIXME_COUNT?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.NotebookCount}.
     */
    JUPYTER_NOTEBOOK_COUNT?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.TutorialNotebookCount}.
     */
    TUTORIAL_NOTEBOOK_COUNT?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.TutorialNotebookExecution}.
     */
    TUTORIAL_NOTEBOOK_EXECUTION?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Addition}.
     */
    ADDITION?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Removal}.
     */
    REMOVAL?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Rename}.
     */
    RENAME?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Deprecation}.
     */
    DEPRECATION?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.SchemaChange}.
     */
    SCHEMA_CHANGE?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.ValueTypeChange}.
     */
    VALUE_TYPE_CHANGE?: string;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.ValueModifierChange}.
     */
    VALUE_MODIFIER_CHANGE?: string;
  }
}

/**
 * Enum Type for the list of codes of all metrics being evaluated in {@link BaseCodeAnalysis}.
 * This includes both {@link BaseCodeAnalysis.Metric}s and {@link BaseCodeAnalysis.VersionDiff.Metric}s.
 *
 * @remarks this represents a made instance of BaseCodeAnalysis.Metric.Code
 */
declare namespace BaseCodeAnalysis.Metric {
  export class Code {

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.MissingDocumentation}.
     */
    readonly MISSING_DOCS?: string;
    withMISSING_DOCS(MISSING_DOCS: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.IncompleteDocumentation}.
     */
    readonly INCOMPLETE_METHOD_DOCS?: string;
    withINCOMPLETE_METHOD_DOCS(INCOMPLETE_METHOD_DOCS: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.BrokenDocumentationLinks}.
     */
    readonly BROKEN_DOCUMENTATION_LINKS?: string;
    withBROKEN_DOCUMENTATION_LINKS(BROKEN_DOCUMENTATION_LINKS: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.OrphanedDocumentation}.
     */
    readonly ORPHANED_DOCUMENTATION?: string;
    withORPHANED_DOCUMENTATION(ORPHANED_DOCUMENTATION: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.TodoMentionTypeDocumentation}.
     */
    readonly TODO_MENTION_TYPE_DOCS?: string;
    withTODO_MENTION_TYPE_DOCS(TODO_MENTION_TYPE_DOCS: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.MissingPackageOverview}.
     */
    readonly MISSING_PKG_OVERVIEW?: string;
    withMISSING_PKG_OVERVIEW(MISSING_PKG_OVERVIEW: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.ExpiredDeprecations}.
     */
    readonly EXPIRED_DEPRECATIONS?: string;
    withEXPIRED_DEPRECATIONS(EXPIRED_DEPRECATIONS: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.DeprecatedTypeUsage}.
     */
    readonly DEPRECATIONS_USAGE?: string;
    withDEPRECATIONS_USAGE(DEPRECATIONS_USAGE: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for the ES {@link BaseCodeAnalysis.Metric.Linter}.
     */
    readonly ESLINT?: string;
    withESLINT(ESLINT: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for the Python {@link BaseCodeAnalysis.Metric.Linter}.
     */
    readonly PYTHON_LINT?: string;
    withPYTHON_LINT(PYTHON_LINT: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.ExcessiveMethodParameters}.
     */
    readonly EXCESSIVE_METHOD_PARAMETERS?: string;
    withEXCESSIVE_METHOD_PARAMETERS(EXCESSIVE_METHOD_PARAMETERS: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.HiddenFunctionCount}.
     */
    readonly HIDDEN_FUNCTION?: string;
    withHIDDEN_FUNCTION(HIDDEN_FUNCTION: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.HardcodedCredentials}.
     */
    readonly HARDCODED_CREDENTIALS?: string;
    withHARDCODED_CREDENTIALS(HARDCODED_CREDENTIALS: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.PsrFetchLimit}.
     */
    readonly PSR_FETCH_LIMIT?: string;
    withPSR_FETCH_LIMIT(PSR_FETCH_LIMIT: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.PsrLoopSingleDbWrite}.
     */
    readonly PSR_LOOP_SINGLE_DB_WRITE?: string;
    withPSR_LOOP_SINGLE_DB_WRITE(PSR_LOOP_SINGLE_DB_WRITE: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.PsrRemoveAll}.
     */
    readonly PSR_REMOVE_ALL?: string;
    withPSR_REMOVE_ALL(PSR_REMOVE_ALL: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.PsrClearCollection}.
     */
    readonly PSR_CLEAR_COLLECTION?: string;
    withPSR_CLEAR_COLLECTION(PSR_CLEAR_COLLECTION: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.SleepCall}.
     */
    readonly PSR_SLEEP_CALL?: string;
    withPSR_SLEEP_CALL(PSR_SLEEP_CALL: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.PsrKvStoreCalcField}.
     */
    readonly PSR_KV_STORED_CALC_FIELDS?: string;
    withPSR_KV_STORED_CALC_FIELDS(PSR_KV_STORED_CALC_FIELDS: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.CanonicalTestCoverage}.
     */
    readonly CANONICAL_TEST_COVERAGE?: string;
    withCANONICAL_TEST_COVERAGE(CANONICAL_TEST_COVERAGE: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.TypeCount}.
     */
    readonly TYPE_COUNT?: string;
    withTYPE_COUNT(TYPE_COUNT: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.FieldCount}.
     */
    readonly FIELD_COUNT?: string;
    withFIELD_COUNT(FIELD_COUNT: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.LogicalLinesCount}.
     */
    readonly LOGICAL_LINES?: string;
    withLOGICAL_LINES(LOGICAL_LINES: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.TicketMentionCount}.
     */
    readonly TICKET_MENTION_COUNT?: string;
    withTICKET_MENTION_COUNT(TICKET_MENTION_COUNT: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.TodoCount}.
     */
    readonly TODO_FIXME_COUNT?: string;
    withTODO_FIXME_COUNT(TODO_FIXME_COUNT: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.NotebookCount}.
     */
    readonly JUPYTER_NOTEBOOK_COUNT?: string;
    withJUPYTER_NOTEBOOK_COUNT(JUPYTER_NOTEBOOK_COUNT: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.TutorialNotebookCount}.
     */
    readonly TUTORIAL_NOTEBOOK_COUNT?: string;
    withTUTORIAL_NOTEBOOK_COUNT(TUTORIAL_NOTEBOOK_COUNT: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.Metric.TutorialNotebookExecution}.
     */
    readonly TUTORIAL_NOTEBOOK_EXECUTION?: string;
    withTUTORIAL_NOTEBOOK_EXECUTION(TUTORIAL_NOTEBOOK_EXECUTION: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Addition}.
     */
    readonly ADDITION?: string;
    withADDITION(ADDITION: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Removal}.
     */
    readonly REMOVAL?: string;
    withREMOVAL(REMOVAL: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Rename}.
     */
    readonly RENAME?: string;
    withRENAME(RENAME: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Deprecation}.
     */
    readonly DEPRECATION?: string;
    withDEPRECATION(DEPRECATION: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.SchemaChange}.
     */
    readonly SCHEMA_CHANGE?: string;
    withSCHEMA_CHANGE(SCHEMA_CHANGE: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.ValueTypeChange}.
     */
    readonly VALUE_TYPE_CHANGE?: string;
    withVALUE_TYPE_CHANGE(VALUE_TYPE_CHANGE: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.ValueModifierChange}.
     */
    readonly VALUE_MODIFIER_CHANGE?: string;
    withVALUE_MODIFIER_CHANGE(VALUE_MODIFIER_CHANGE: string | null): BaseCodeAnalysis.Metric.Code;

    /**
     * Translate the enum label (field name) to the value.
     * For simple enums (that don't define explicit values), the value is a string
     * that matches the label.
     * @param label the enum label
     * @return the associated value
     */
    static toValue(label: string, failIfInvalid?: boolean): string | null;

    /**
     * Translate the enum value to the label (field name).
     * @param value the enum value
     * @return the enum label
     */
    static toLabel(value: string, failIfInvalid?: boolean): string | null;

    /**
     * Get the index of the label in the enum.
     * @param label the enum label (field name)
     * @return index or -1 if not found
     */
    static labelIndex(label: string, failIfInvalid?: boolean): number;

    /**
     * Get the index of the value in the enum.
     * @param value the enum value
     * @return index or -1 if not found
     */
    static valueIndex(value: string, failIfInvalid?: boolean): number;

    /**
     * @return value type of values in this enum
     */
    static valueType(): ValueType;

    /**
     * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
     * the field name (same as the labels).
     */
    static values(): Array_Type<string> | null;

    /**
     * Return an array of all enumeration labels. These are the same as the field names of the enum type.
     */
    static labels(): Array_Type<string> | null;

    /**
     * Return a map of all enumeration values to their labels.
     */
    static valueToLabels(): Map_Type<string, string> | null;

    /**
     * Return a map of all enumeration labels to their values.
     */
    static labelToValues(): Map_Type<string, string> | null;

    /**
     * Is value a valid value for this enum type?
     * @param value the enum value
     */
    static containsValue(value: string): boolean;

    /**
     * Calls provided action for each enum label.
     */
    static eachLabel(action?: λConsumer<string>): void;

    /**
     * Calls provided action for each enum value.
     */
    static eachValue(action?: λConsumer<string>): void;

    /**
     * Helper function to convert aliases of metric codes to their canonical code. Aliases can
     * be one of:
     *
     *   - Deprecated [metric names](BaseCodeAnalysis.Metric.Name)
     *   - Old metric codes that have since been renamed
     *
     * @param alias
     *           The alias to convert. If a canonical code is provided, it's returned as is.
     * @return the canonical metric code.
     */
    static forAlias(alias: string): string | null;
  }
}


interface λConsumer<T> {
  (t: T): void
}
