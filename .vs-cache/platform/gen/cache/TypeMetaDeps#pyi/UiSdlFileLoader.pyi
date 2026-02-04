#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.TypeMeta import TypeMeta
from c3.platform.UiSdlFileLoaderContent import UiSdlFileLoaderContent
from c3.platform.Pkg.File.Value import Pkg.File.Value

# Python definitions for the C3 type UiSdlFileLoader


class UiSdlFileLoader(Value):
    """
    Produces source files from metadata.
    
    @remarks this represents a made instance of UiSdlFileLoader
    """
    def __init__(self) -> None: ...

    @classmethod
    def produceAll(cls, loaderData: UiSdlFileLoader=None) -> Union[UiSdlFileLoaderContent]:
    """
    Main interface between UiSdlMetadataLoader and a specific FileLoader.
    
    @param loaderData
              Extra data needed by the loader to generate its content.
    """
        ...
    @classmethod
    def indent(cls, input: str=None, level: int=None) -> Union[str]:
        ...
    @classmethod
    def metaPath(cls, rootPackageName: str=None, subPath: str=None) -> Union[str]:
        ...
    @classmethod
    def handleMissing(cls, message: str=None, failIfMissing: bool=None) -> Union[Any]:
        ...
    @classmethod
    def logWithTimestamp(cls, message: str=None) -> None:
        ...
    @classmethod
    def findUsedEnums(cls, code: str=None) -> Union[Map[str, bool]]:
    """
    Finds the enum types used within a piece of TypeScript code and returns a map of type names to true
    
    @param code
              The TypeScript code to search through
    """
        ...
    @classmethod
    def filesForTypes(cls, types: Array[TypeMeta]=None, extension: str=None) -> Union[Map[str, Pkg.File.Value]]:
    """
    Returns a map of {@link Type#name}s to {@link MetadataFileValue} for a given set of types and
    extension with proper source code implementation.
    
    Our .ts and .tsx implementations (ESM modules) cannot easily include duplicate code and
    the current C3 platform APIs that retrieve code for a type, concatenate all the implementations
    of the type's hierarchy.
    
    @param types
              The array of types to get the gien extension source code for
    @param extension
              The extension/ implementation language to fetch source code for
    @returns A of {@link Type#name}s to {@link MetadataFileValue} whose content is the source code for
              the given extension.
    """
        ...
    @classmethod
    def groupByValue(cls, mapping: Map[str, Any]=None) -> Union[Map[str, Any]]:
    """
    Creates a new mapping where all keys mapped to the same value are stored under
    the value as key.
    
    Example:
         groupByValue({a: 'lower', b: 'lower', A: 'upper'})
         // returns {lower: ['a','b'], upper: ['A']}
    
    @param mapping
         The object whose values are going to be used as keys.
    """
        ...

