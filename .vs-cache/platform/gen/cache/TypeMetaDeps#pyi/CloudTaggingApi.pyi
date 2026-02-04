#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Pair import Pair
from c3.platform.CloudResource import CloudResource
from c3.platform.Type import Type
from c3.platform.CloudTag import CloudTag

# Python definitions for the C3 type CloudTaggingApi


class CloudTaggingApi(Value):
    """
    Cloud Provider Specific Tagging API.
    
    @remarks this represents a made instance of CloudTaggingApi
    """
    def __init__(self) -> None: ...

    @classmethod
    def allTagKeys(cls) -> Union[Array[str]]:
    """
    Returns all tag keys.
    
    @return A list of all tag keys.
    """
        ...
    @classmethod
    def allTagValues(cls, key: str) -> Union[Array[str]]:
    """
    Returns all tag values for the specified key.
    
    @param key
             The key for which you want to list all existing values.
    
    return A list of all tag values for the specified key.
    """
        ...
    @classmethod
    def resourcesByTags(cls, tags: Array[CloudTag], resourceTypes: Array[Type]=None) -> Union[Stream[CloudResource]]:
    """
    Returns all the tagged resources that are associated with the specified {@link CloudTag} (both key and value match).
    
    @param tags
             a list of {@link CloudTag cloudTags} specifying the tag keys and values you want to filter.
    
    @param resourceTypes:
             a resource type names that you want to constrain.
    
    @return a stream of matching cloud resources.
    """
        ...
    @classmethod
    def tagResources(cls, resources: Array[CloudResource]=None, tags: Array[CloudTag]=None) -> Union[Array[Pair[CloudResource, Error]]]:
    """
    Tag Cloud Resources with given Cloud Tags.
    
    @param resources
           cloud resources to tag
    @param tags
           tags to add to all resources
    @return list of failed Cloud Resources and corresponding errors
    """
        ...
    @classmethod
    def untagResources(cls, resources: Array[CloudResource]=None, tags: Array[str]=None) -> Union[Array[Pair[CloudResource, Error]]]:
    """
    Remove Tags from Cloud Resources.
    
    @param resources
           cloud resources to remove tags from
    @param tags
           tags to remove
    @return list of failed Cloud Resources and corresponding errors
    """
        ...

