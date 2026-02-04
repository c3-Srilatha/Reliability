#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Pkg.Decl import Pkg.Decl
from c3.platform.Pkg.ResultWithIssues import Pkg.ResultWithIssues
from c3.platform.TypeMeta import TypeMeta
from c3.platform.Type import Type
from c3.platform.Pkg.FilesSpec import Pkg.FilesSpec
from c3.platform.Obj import Obj
from c3.platform.File import File
from c3.platform.Pkg.File import Pkg.File

# Python definitions for the C3 type UiTagMetadataStore


class UiTagMetadataStore(Value):
    """
    A wrapper on top of {@link TagMetadataStore} to make v7->v8 migration smoother.
    this type abstracts the following methods from {@link TagMetadataStore}.
    
    @remarks this represents a made instance of UiTagMetadataStore
    """
    def __init__(self) -> None: ...

    @classmethod
    def files(cls, spec: Pkg.FilesSpec=None) -> Union[Array[File]]:
    """
    A function to return all files accessible by this MetadataStore based on the {@link Pkg.FilesSpec}.
    
    @param spec The {@link Pkg.FilesSpec} that will be used to retrive the {@link Pkg.File}.
    """
        ...
    @classmethod
    def allFiles(cls) -> Union[Array[File]]:
        ...
    @classmethod
    def typeMetasThatMixin(cls, mixinType: str, deep: bool=None) -> Union[Array[TypeMeta]]:
    """
    Get all types that mixin a specified type.
    
    @param mixin The mixin to search for.
    @param deep  If true, return types that mixin other types that mixin the specified type.
    """
        ...
    @classmethod
    def typesWithAnnotation(cls, annName: str, annField: str=None, declaredOnly: bool=None) -> Union[Array[Type]]:
    """
     Get all types that specify a given annotation.
    
     @param annName       Name of the annotation to search for on the type. E.g. If the annotation is {@link Ann.Deprecated},
    just provide "deprecated" as the annName (as it would appear on the type definition).
     @param annField      Name of the field on the annotation that is set while searching for types. E.g. If annotation is
    {@link Ann.Deprecated}, and you want types that have the field {@link Ann.Deprecated#finalVersion} set,
    then use this field. If not set, then filtering based on annField is not applied.
     @param declaredOnly  If true, return types where the given annotation has been declared on the type itself. If false (default),
    it returns types even if the annotation occurs on the mixin types.
    """
        ...
    @classmethod
    def rootPackage(cls) -> Union[Pkg.Decl]:
    """
    @return root package in this metadata store.
    """
        ...
    @classmethod
    def updateMetadata(cls, upsert: Map[str, Union[Obj,Array[Obj],any]]=None, remove: Array[str]=None, doNotRevertStateOnError: bool=None) -> Pkg.ResultWithIssues:
    """
    Updates metadata in this store.
    
    @param upsert
              Map of metadata file path to a single metadata instance (e.g. type of single object seed data), list of
              metadata objects, or encoded binary content of the metadata file.
    @param remove
              List of metedata file urls to remove.
    
    @return Any potential metadata issues after this update.
    """
        ...
    @classmethod
    def emptyFileCache(cls) -> None:
    """
    Clears the file cache for this metadata store.
    """
        ...
    @classmethod
    def makeMetadataFile(cls, category: str, subPath: str, isTest: bool=None) -> Pkg.File:
    """
    With current {@link Pkg}, returns a {@link Pkg.File} made using root package and given category and subPath.
    
    @param category
              Category for this metadata.
    @param subPath
              The sub path of the file excluding repository, package and category information. Note this should not
              be URL encoded. {@see Pkg.Path.subPath}.
    @param isTest
              If true, will make test file with given category subPath.
    
    @return File made in root package for current Pkg.
    """
        ...
    @classmethod
    def typesByPackage(cls, package: str, declaredOrMixes: bool=None) -> Union[Array[Type]]:
    """
    Get all types from a specified package.
    
    @param package Name of the existing package.
    @param declaredOrMixes If true will also return types that mixin a type declared in the provided package.
    
    @return An array of {@link TypeRef} from the specified package.
    """
        ...

