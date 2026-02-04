#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.UiMetadataPackage import UiMetadataPackage
from c3.platform.Filter import Filter
from c3.platform.Type import Type
from c3.platform.TypeIdentifier import TypeIdentifier
from c3.platform.TypesByCategory import TypesByCategory

# Python definitions for the C3 type GlobalCanvasCommonUtil


class GlobalCanvasCommonUtil(Value):
    """
    Util functions for interacting with the global canvas
    WARNING: The nodeId arguments in these functions are not truly {@link GlobalCanvasGraphNode#id}! They are more like "instanceIdentifier".
    
    @remarks this represents a made instance of GlobalCanvasCommonUtil
    """
    def __init__(self) -> None: ...

    @classmethod
    def getTypeIdentifierByNodeCategoryAndNodeId(cls, nodeCategory: str, nodeId: str) -> Union[TypeIdentifier]:
    """
    Returns a TypeIdentifier.
    @param nodeCategory
               The node category
    @param nodeId
               The node id
    @return {@link TypeIdentifier}
    """
        ...
    @classmethod
    def getRecordTypeByNodeCategoryAndNodeId(cls, nodeCategory: str, nodeId: str) -> Union[Type]:
    """
    Returns the type of record.
    @param nodeCategory
               The node category
    @param nodeId
               The node id
    @return {@link Type}
    """
        ...
    @classmethod
    def getTypeDocByNodeCategoryAndNodeId(cls, nodeCategory: str, nodeId: str) -> Union[str]:
    """
    Returns type documentation.
    @param nodeCategory
               The node category
    @param nodeId
               The node id
    @return documentation
    """
        ...
    @classmethod
    def getFilterByTypeIdentifier(cls, typeIdentifier: TypeIdentifier) -> Union[Filter]:
    """
    Returns a filter based on given type identifier
    @param typeIdentifier
               The typeIdentifier
    @return {@link Filter}
    """
        ...
    @classmethod
    def rootPackageAndDependencies(cls) -> Union[Array[UiMetadataPackage]]:
    """
    Fetches the list of the current tag's accessible packages
    @return the list of {@link UiMetadataPackage}
    """
        ...
    @classmethod
    def getFullTypesByCategory(cls) -> Union[Map[str, Array[TypesByCategory]]]:
    """
    Retrieves lists of all types information. Allows for further filtering on the {@link TypesByCategory}.
    
    @return An object containing {@link TypesByCategory} mapped to their respective lists of types
    """
        ...
    @classmethod
    def identity(cls, actionArgs: any=None) -> Union[any]:
    """
    Returns the input params passed.
    This is workaround to load the dataSpec of a {@link UiSdlComponent}
    from {@link UiDataRedux} instead of an API.
    @return actionArgs
    """
        ...
    @classmethod
    def getAsJson(cls, type: Type, id: str, include: str=None) -> Union[any]:
    """
    Fetches the instance of the type as json, which maybe necessary when the type is written as seed data.
    @param type
               The type to fetch
    @param id
               The id instance to fetch
    @param include
               An optional include statement to execute on the get. If not specified, "this" will be used.
    """
        ...
    @classmethod
    def getRelativeFilePathForMetadata(cls, categoryMetadataIdentifier: str) -> Union[str]:
    """
    Get the path of the file related to the node based on its id and category.
    @param categoryMetadataIdentifier
               The identifier of the metadata.
    @return Relative path of the metadata file. It won't start with '/'
    """
        ...
    @classmethod
    def getRelativeUrlForJupyter(cls) -> Union[str]:
    """
    Returns relative jupyter url using platform APIs.
    """
        ...

