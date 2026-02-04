#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type Pkg.Category


class Category():
    """
    Enumeration of Pkg path category.
    
    @remarks this represents a made instance of Pkg.Category
    """
    
    SRC: Optional[str]=None
    """
    Source code of the C3 application. Includes c3 type files, js, py, R and metadata (such as Metrics).
    """

    METADATA: Optional[str]=None
    """
    Metadata of the C3 application. E.g. Metric.
    """

    SEED: Optional[str]=None
    """
    Seed data of the C3 application. E.g. CronJob.
    """

    CONFIG: Optional[str]=None
    """
    Seed config of the C3 application. E.g. MailConfig.
    """

    NOTEBOOK: Optional[str]=None
    """
    C3 Notebook / .c3nb and Jupyter Notebook files.
    """

    UI: Optional[str]=None
    """
    UI code, metadata and resources for C3 application.
    """

    RESOURCE: Optional[str]=None
    """
    Generic resource for C3 application.
    """

    DATA: Optional[str]=None
    """
    Sample data for a C3 Application. This includes entity types that are intended to be stateless E.g. demo data
    """

    MIGRATION: Optional[str]=None
    """
    Migration scripts for the C3 application packages to be run when bumping dependency to a specific version of this
    package. E.g. when application developer uses C3 VS Code IDE to bump the version of `platform` package dependency
    from v8.4 to v8.5 then all the migration scripts from `/platform/migration/8.5/` will be run.
    
    Migration scripts can be a `.js` or `.py` source code or `.json` serialized version of a `lambda(pkg: !Pkg)`.
    The lambda will be called with the writable application package and expectation is that script will migrate
    package artifacts that are declared in the provided package as needed. Artifacts declared in the depending packages
    will be read only.
    
    Migration scripts are run in the order of their names. E.g. `001-format-c3typ.js` will be run before
    `002-migrate-py-runtimes.py`.
    
    Migration script names can contain action requirement as a secondary file extension. E.g.
    `003-migrate-ui.node.js`.
    
    A given migration script has to complete without errors before next migration script is run. If a migration script
    fails the migration process will be aborted and the package will be left in the partially migrated state.
    
    Status of each migration script is stored in the `migration/status/<pkg>.<version>.json` files. E.g. every
    application package that has been upgraded to v8.5 platform will have a `migration/status/platform.8.5.json` file.
    This file is instance of {@link Pkg.MigrationStatus.c3typ} and contains the status of each migration script from
    `/platform/migration/8.5/`.
    
    @see {@link Pkg.Store#migratePkg}
    """

    COMPAT: Optional[str]=None
    """
    Category for API Version compatibility transforms.
    """

    PACKAGE: Optional[str]=None
    """
    These types of file define a package (*.c3pkg.json file).
    """

    PACKAGE_LOCK: Optional[str]=None
    """
    These types of file define a partial dependency lock for a set of packages.
    During dependency resolution, this file can fix dependencies to exact versions.
    Extension is (*.c3pkg.lock.json)
    """

    OTHER: Optional[str]=None
    """
    Catch all category
    """

    JASMINE: Optional[str]=None
    """
    See {@link TestRunnerKind} Server side jasmine test files.
    """

    PYTEST: Optional[str]=None
    """
    See {@link TestRunnerKind} Server side pytest test files.
    """

    BROWSER: Optional[str]=None
    """
    See {@link TestRunnerKind} Client side (browser) jasmine test resources.
    """

    POLY: Optional[str]=None
    """
    See {@link /zoo/test/poly/doc/poly-test.c3doc.md} poly test files.
    """

    CANONICAL: Optional[str]=None
    """
    See {@link TestRunnerKind} Canonical data integration test files.
    """

    PERF: Optional[str]=None
    """
    See {@link TestRunnerKind} Performance test files.
    """

    CACHE: Optional[str]=None
    """
    See {@link TypeMetaDeps} Cached files for TypeMeta dependencies.
    """
    def __init__(self, SRC: Optional[str]=None, METADATA: Optional[str]=None, SEED: Optional[str]=None, CONFIG: Optional[str]=None, NOTEBOOK: Optional[str]=None, UI: Optional[str]=None, RESOURCE: Optional[str]=None, DATA: Optional[str]=None, MIGRATION: Optional[str]=None, COMPAT: Optional[str]=None, PACKAGE: Optional[str]=None, PACKAGE_LOCK: Optional[str]=None, OTHER: Optional[str]=None, JASMINE: Optional[str]=None, PYTEST: Optional[str]=None, BROWSER: Optional[str]=None, POLY: Optional[str]=None, CANONICAL: Optional[str]=None, PERF: Optional[str]=None, CACHE: Optional[str]=None) -> None: ...

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
    def isTest(cls, value: str) -> bool:
    """
    @return true if given category is used for testing; e.g. UNIT_TEST or FUNCTIONAL_TEST
    """
        ...

