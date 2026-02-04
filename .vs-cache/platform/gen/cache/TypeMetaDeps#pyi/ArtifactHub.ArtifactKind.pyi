#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type ArtifactHub.ArtifactKind


class ArtifactKind():
    """
    An enum used to make code more readable when working with {@link ArtifactHub.Artifact#kind}.
    
    @remarks this represents a made instance of ArtifactHub.ArtifactKind
    """
    
    EXPORT: Optional[str]=None
    """
    Set when calling {@link ArtifactHub#exportArtifacts}
    """

    LEGACY_PKG: Optional[str]=None
    """
    Set when migrating {@link ArtifactHub.Artifact}s that existed prior to the introduction of
    {@link ArtifactHub#importUpstreamArtifacts}.
    """

    PKG: Optional[str]=None
    """
    Set when calling {@link Pkg#zipArtifact} with dependencies
    """

    ROOT_SOURCE: Optional[str]=None
    """
    Set when calling {@link Pkg#zipArtifact} for a single package
    """

    CONDA_PKG: Optional[str]=None
    """
    Set when importing artifacts from the conda repository
    """

    PY_PACKAGE_INDEX_PKG: Optional[str]=None
    """
    Set when importing artifacts from the python package index
    """

    PY_PACKAGE_INDEX_SIMPLE: Optional[str]=None
    """
    Set when importing artifacts from the python package index
    """

    NPM_PKG: Optional[str]=None
    """
    Set when importing artifacts from the npm repository
    """

    NPM_PKG_METADATA: Optional[str]=None
    """
    Set when importing artifacts from the npm repository
    """

    CONFIGURED_MICROSERVICE_PKG: Optional[str]=None
    """
    Set when calling {@link Microservice.DeployedService#start} for {@link Pkg pkgs}
    {@link Microservice.PkgConfiguration#createPkgFromConfiguration configured} to run one or more
    {@link Microservice.Service microservice}.
    """

    NOTEBOOK: Optional[str]=None
    """
    Set for Jupyter notebooks and similar features in Console and VSCode.
    """

    APPLICATION_CARD: Optional[str]=None
    """
    An application package refers to a package that is used directly as an application.
    """

    PLUGIN_CARD: Optional[str]=None
    """
    A plugin package refers to a package that is mainly used as a dependency.
    """

    QUICKSTART_CARD: Optional[str]=None
    """
    A quickstart package is an instructional package, which users can modify and play around with.
    """

    RESOURCE: Optional[str]=None
    """
    An artifact that serves as a supporting document (like documentation) for another artifact
    """

    DOC_SITE: Optional[str]=None
    """
    An artifact that serves as a documentation for another artifact
    """

    DOCUMENTATION: Optional[str]=None
    """
    An artifact that serves as a documentation for another artifact (legacy)
    """
    def __init__(self, EXPORT: Optional[str]=None, LEGACY_PKG: Optional[str]=None, PKG: Optional[str]=None, ROOT_SOURCE: Optional[str]=None, CONDA_PKG: Optional[str]=None, PY_PACKAGE_INDEX_PKG: Optional[str]=None, PY_PACKAGE_INDEX_SIMPLE: Optional[str]=None, NPM_PKG: Optional[str]=None, NPM_PKG_METADATA: Optional[str]=None, CONFIGURED_MICROSERVICE_PKG: Optional[str]=None, NOTEBOOK: Optional[str]=None, APPLICATION_CARD: Optional[str]=None, PLUGIN_CARD: Optional[str]=None, QUICKSTART_CARD: Optional[str]=None, RESOURCE: Optional[str]=None, DOC_SITE: Optional[str]=None, DOCUMENTATION: Optional[str]=None) -> None: ...

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

