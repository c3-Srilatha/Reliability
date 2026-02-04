#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ElasticSearchIndexProperties import ElasticSearchIndexProperties
from c3.platform.ElasticSearchIndexCreateBody import ElasticSearchIndexCreateBody

# Python definitions for the C3 type ElasticSearchIndexMapping

T = TypeVar('T')

class ElasticSearchIndexMapping(Generic[T], Value):
    """
    @remarks this represents a made instance of ElasticSearchIndexMapping
    """
    def __init__(self) -> None: ...

    @classmethod
    def generateElasticMapping(cls, typeName: str=None) -> Union[ElasticSearchIndexCreateBody]:
    """
    Generates an ElasticSearch index mapping for a type definition.
    """
        ...
    @classmethod
    def elasticMapping(cls, typeName: str=None) -> Union[ElasticSearchIndexProperties]:
    """
    Generates ElasticSearch properties mapping for a type definition.
    This method is called by generateElasticMapping.
    """
        ...
    @classmethod
    def searchableElasticMapping(cls, typeName: str=None) -> Union[ElasticSearchIndexProperties]:
    """
    Generates ElasticSearch properties mapping for a type definition.
    Unlike elasticMapping, this function only generates mappings for {@link Ann.Search} annotated fields.
    """
        ...
    @classmethod
    def getIndexStatusForType(cls, typeName: str=None) -> Union[int]:
    """
    Checks the status of the index for the type.  200 indicates that index or index alias exists
    """
        ...

