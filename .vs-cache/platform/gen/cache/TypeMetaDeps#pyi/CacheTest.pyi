#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Cached import Cached
from c3.platform.Type import Type
from c3.platform.Config import Config

# Python definitions for the C3 type CacheTest


class CacheTest(Value):
    """
    CacheTest is only for the use of testing the caching infra. Do not use it other than for tests
    
    @remarks this represents a made instance of CacheTest
    """
    def __init__(self) -> None: ...

    @classmethod
    def objectFromNativeCache(cls, cachedType: Type, cacheKey: str) -> Union[Cached]:
    """
    Gets the provided Cached object determined from type and cacheKey nativeCache in the current node.
    """
        ...
    @classmethod
    def objectFromRawJsonCache(cls, cachedType: Type, cacheKey: str) -> Union[any]:
    """
    Gets the provided Cached object determined from type and cacheKey rawJsonNativeCache in the current node.
    """
        ...
    @classmethod
    def objectFromNativeCacheOfLocalApp(cls, appId: str, cachedType: str, cacheKey: str) -> Union[Cached]:
    """
    Assumes the context of the passed in appId and gets the provided Cached object determined from type and cacheKey
    nativeCache in the current node.
    """
        ...
    @classmethod
    def objectFromRawJsonCacheOfLocalApp(cls, appId: str, cachedType: str, cacheKey: str) -> Union[any]:
    """
    Assumes the context of the passed in appId and gets the provided Cached object determined from type and cacheKey
    rawJsonNativeCache in the current node.
    """
        ...
    @classmethod
    def populateCachesForObjectInAllNodes(cls, cachedType: Type, cacheKey: str, value: Cached=None) -> None:
    """
    Tries to populate value into cache at cacheKey in all nodes of the current app
    If value is null, tries to populate cache by reading from backing storage
    """
        ...
    @classmethod
    def populateNativeCache(cls, type: Type, cacheKey: str, value: Cached=None) -> None:
    """
    Populates value into cache by directly writing to cache
    """
        ...
    @classmethod
    def writeToCacheForLocalApp(cls, appId: str, cachedType: str, cacheKey: str, obj: any) -> None:
    """
    Writes the provided object to cache assuming the context of the passed in appId.
    Does not write to the backing storage of the application, so the obj is not persisted.
    """
        ...
    @classmethod
    def fetchNativeCachedValuesForTypeInAllNodes(cls, cachedType: Type, cacheKey: str) -> Union[Map[str, Cached]]:
    """
    Fetches from native cache of the cachedType the cached object associated with the cacheKey. If no cached object
    found, returns null.
    """
        ...
    @classmethod
    def fetchRawJsonCachedValuesForTypeInAllNodes(cls, cachedType: Type, cacheKey: str) -> Union[Map[str, any]]:
    """
    Fetches from raw json native cache of the cachedType the cached object associated with the cacheKey.
    If no cached object found, returns null.
    """
        ...
    @classmethod
    def fetchFromConfigStoreForTypeInAllNodes(cls, configType: Type, configKey: str) -> Union[Map[str, Config]]:
    """
    Fetches from config store object for the config type and config key. If no  object found, returns null. Does not
    go through cache.
    """
        ...
    @classmethod
    def getConfigForTypeInAllNodes(cls, configType: Type, configKey: str=None) -> Union[Array[any]]:
    """
    getConfig for the configType associated with the cacheKey.
    """
        ...

