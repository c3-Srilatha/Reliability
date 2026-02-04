#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Type import Type
from c3.platform.MetadataTransformResult import MetadataTransformResult

# Python definitions for the C3 type MetadataTransformer

SRC = TypeVar('SRC')
DEST = TypeVar('DEST')

class MetadataTransformer(Generic[SRC, DEST], Value):
    """
    Metadata or seed data transformer.
    
    SRC type can be any type (or `anyof` several C3 types); Source files will be expected to be under
    `seed/ ** /SRC/` folder.
    
    SRC can also be Type itself, in which case it will be called with each type modified by provisioning.
    
    DEST type can be any type including {@link Type}; if DEST is a {@link Type} then transformed .c3typ files will end
    up under `src/transform/ ** /<type-name>.c3typ`; otherwise target files will be added as
    `seed/transform/ ** /DEST/from_<metadata transformer type name>.json`.
    
    DEST can also be an array of a type, in which case zero or more results are expected to be produced from each SRC.
    
    DEST can be a metadata file, in which case the contents will be stored in the tag as though the file was provisioned.
    
    @remarks this represents a made instance of MetadataTransformer
    """
    def __init__(self) -> None: ...

    @classmethod
    def transform(cls, src: Array[SRC]=None) -> MetadataTransformResult[DEST]:
    """
    Metadata or seed data transformation logic. Result can be any number of instances of DEST type that will be
    provisioned into a tag.
    """
        ...
    @classmethod
    def sourceTypes(cls, failIfAbstract: bool=None) -> Union[Array[Type]]:
    """
    @return source type for this metadata transformer.
    """
        ...
    @classmethod
    def targetType(cls, failIfAbstract: bool=None) -> Union[Type]:
    """
    @return target type for this metadata transformer.
    """
        ...
    @classmethod
    def allTransformerTypes(cls) -> Union[Array[Type]]:
    """
    @return all metadata transformer types in the current tag.
    """
        ...
    @classmethod
    def allTransformerTypesForSourceType(cls, sourceType: Type) -> Union[Array[Type]]:
    """
    @return all metadata transformer types for provided source type.
    """
        ...
    @classmethod
    def allTransformerTypesForTargetType(cls, targetType: Type) -> Union[Array[Type]]:
    """
    @return all metadata transformer types for provided target type.
    """
        ...
    @classmethod
    def allSourceTypesWithTargetTypes(cls) -> Union[Map[str, Array[Type]]]:
    """
    @return all source types across all metadata transformers with target types they transform into.
    """
        ...

