#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type BaseCodeAnalysis.Metric.Code


class Code(BaseCodeAnalysis.Metric.BaseCode, BaseCodeAnalysis.VersionDiff.Metric.Code):
    """
    Enum Type for the list of codes of all metrics being evaluated in {@link BaseCodeAnalysis}.
    This includes both {@link BaseCodeAnalysis.Metric}s and {@link BaseCodeAnalysis.VersionDiff.Metric}s.
    
    @remarks this represents a made instance of BaseCodeAnalysis.Metric.Code
    """
    
    MISSING_DOCS: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.MissingDocumentation}.
    """

    INCOMPLETE_METHOD_DOCS: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.IncompleteDocumentation}.
    """

    BROKEN_DOCUMENTATION_LINKS: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.BrokenDocumentationLinks}.
    """

    ORPHANED_DOCUMENTATION: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.OrphanedDocumentation}.
    """

    TODO_MENTION_TYPE_DOCS: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.TodoMentionTypeDocumentation}.
    """

    MISSING_PKG_OVERVIEW: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.MissingPackageOverview}.
    """

    EXPIRED_DEPRECATIONS: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.ExpiredDeprecations}.
    """

    DEPRECATIONS_USAGE: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.DeprecatedTypeUsage}.
    """

    ESLINT: Optional[str]=None
    """
    The metric code for the ES {@link BaseCodeAnalysis.Metric.Linter}.
    """

    PYTHON_LINT: Optional[str]=None
    """
    The metric code for the Python {@link BaseCodeAnalysis.Metric.Linter}.
    """

    EXCESSIVE_METHOD_PARAMETERS: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.ExcessiveMethodParameters}.
    """

    HIDDEN_FUNCTION: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.HiddenFunctionCount}.
    """

    HARDCODED_CREDENTIALS: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.HardcodedCredentials}.
    """

    PSR_FETCH_LIMIT: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.PsrFetchLimit}.
    """

    PSR_LOOP_SINGLE_DB_WRITE: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.PsrLoopSingleDbWrite}.
    """

    PSR_REMOVE_ALL: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.PsrRemoveAll}.
    """

    PSR_CLEAR_COLLECTION: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.PsrClearCollection}.
    """

    PSR_SLEEP_CALL: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.SleepCall}.
    """

    PSR_KV_STORED_CALC_FIELDS: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.PsrKvStoreCalcField}.
    """

    CANONICAL_TEST_COVERAGE: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.CanonicalTestCoverage}.
    """

    TYPE_COUNT: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.TypeCount}.
    """

    FIELD_COUNT: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.FieldCount}.
    """

    LOGICAL_LINES: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.LogicalLinesCount}.
    """

    TICKET_MENTION_COUNT: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.TicketMentionCount}.
    """

    TODO_FIXME_COUNT: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.TodoCount}.
    """

    JUPYTER_NOTEBOOK_COUNT: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.NotebookCount}.
    """

    TUTORIAL_NOTEBOOK_COUNT: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.TutorialNotebookCount}.
    """

    TUTORIAL_NOTEBOOK_EXECUTION: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.Metric.TutorialNotebookExecution}.
    """

    ADDITION: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Addition}.
    """

    REMOVAL: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Removal}.
    """

    RENAME: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Rename}.
    """

    DEPRECATION: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Deprecation}.
    """

    SCHEMA_CHANGE: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.SchemaChange}.
    """

    VALUE_TYPE_CHANGE: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.ValueTypeChange}.
    """

    VALUE_MODIFIER_CHANGE: Optional[str]=None
    """
    The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.ValueModifierChange}.
    """
    def __init__(self, MISSING_DOCS: Optional[str]=None, INCOMPLETE_METHOD_DOCS: Optional[str]=None, BROKEN_DOCUMENTATION_LINKS: Optional[str]=None, ORPHANED_DOCUMENTATION: Optional[str]=None, TODO_MENTION_TYPE_DOCS: Optional[str]=None, MISSING_PKG_OVERVIEW: Optional[str]=None, EXPIRED_DEPRECATIONS: Optional[str]=None, DEPRECATIONS_USAGE: Optional[str]=None, ESLINT: Optional[str]=None, PYTHON_LINT: Optional[str]=None, EXCESSIVE_METHOD_PARAMETERS: Optional[str]=None, HIDDEN_FUNCTION: Optional[str]=None, HARDCODED_CREDENTIALS: Optional[str]=None, PSR_FETCH_LIMIT: Optional[str]=None, PSR_LOOP_SINGLE_DB_WRITE: Optional[str]=None, PSR_REMOVE_ALL: Optional[str]=None, PSR_CLEAR_COLLECTION: Optional[str]=None, PSR_SLEEP_CALL: Optional[str]=None, PSR_KV_STORED_CALC_FIELDS: Optional[str]=None, CANONICAL_TEST_COVERAGE: Optional[str]=None, TYPE_COUNT: Optional[str]=None, FIELD_COUNT: Optional[str]=None, LOGICAL_LINES: Optional[str]=None, TICKET_MENTION_COUNT: Optional[str]=None, TODO_FIXME_COUNT: Optional[str]=None, JUPYTER_NOTEBOOK_COUNT: Optional[str]=None, TUTORIAL_NOTEBOOK_COUNT: Optional[str]=None, TUTORIAL_NOTEBOOK_EXECUTION: Optional[str]=None, ADDITION: Optional[str]=None, REMOVAL: Optional[str]=None, RENAME: Optional[str]=None, DEPRECATION: Optional[str]=None, SCHEMA_CHANGE: Optional[str]=None, VALUE_TYPE_CHANGE: Optional[str]=None, VALUE_MODIFIER_CHANGE: Optional[str]=None) -> None: ...

    @classmethod
    def toValue(cls, label: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Translate the enum label (field name) to the value.
    For simple enums (that don't define explicit values), the value is a string
    that matches the label.
    @param label the enum label
    @return the associated value
    """
        ...
    @classmethod
    def toLabel(cls, value: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Translate the enum value to the label (field name).
    @param value the enum value
    @return the enum label
    """
        ...
    @classmethod
    def labelIndex(cls, label: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the label in the enum.
    @param label the enum label (field name)
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueIndex(cls, value: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the value in the enum.
    @param value the enum value
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueType(cls) -> ValueType:
    """
    @return value type of values in this enum
    """
        ...
    @classmethod
    def values(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
    the field name (same as the labels).
    """
        ...
    @classmethod
    def labels(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration labels. These are the same as the field names of the enum type.
    """
        ...
    @classmethod
    def valueToLabels(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration values to their labels.
    """
        ...
    @classmethod
    def labelToValues(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration labels to their values.
    """
        ...
    @classmethod
    def containsValue(cls, value: str) -> bool:
    """
    Is value a valid value for this enum type?
    @param value the enum value
    """
        ...
    @classmethod
    def eachLabel(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum label.
    """
        ...
    @classmethod
    def eachValue(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum value.
    """
        ...
    @classmethod
    def forAlias(cls, alias: str) -> Union[str]:
    """
    Helper function to convert aliases of metric codes to their canonical code. Aliases can
    be one of:
    
      - Deprecated [metric names](BaseCodeAnalysis.Metric.Name)
      - Old metric codes that have since been renamed
    
    @param alias
              The alias to convert. If a canonical code is provided, it's returned as is.
    @return the canonical metric code.
    """
        ...

