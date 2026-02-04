#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.AsTsMetricExprs import AsTsMetricExprs

# Python definitions for the C3 type ListenerAsTsMetricExprsCache


class ListenerAsTsMetricExprsCache(MetadataCacheOld[AsTsMetricExprs], Value):
    """
    Various expressions for as timeseries metrics
    
    @remarks this represents a made instance of ListenerAsTsMetricExprsCache
    """
    def __init__(self) -> None: ...

    @classmethod
    def get(cls, key: str) -> Union[AsTsMetricExprs]:
    """
    Get a cached entry by name. This will return null if no matching entry is found and the cache itself cannot
    produce one. The value null is cached so repeated access of keys with null values will not call produce each time.
    If {@link validate} is defined and no valid value can be retrieved from the cache, then null is returned.
    """
        ...
    @classmethod
    def require(cls, key: str) -> AsTsMetricExprs:
    """
    Get a cached entry by name. This will never return null if no matching entry is found or the cache itself cannot
    produce one. The value null is cached so repeated access of keys with null values will not call produce each time,
    however this function will itself throw an exception each time.
    If {@link validate} is defined and no valid value can be retrieved from the cache, then an exception is thrown.
    """
        ...
    @classmethod
    def keys(cls) -> Union[Array[str]]:
    """
    Get the keys currently defined in the cache. Note that this will not be all the keys ever stored, nor will it be
    all the possible key values, but only those keys presently stored and not flushed due to explicit eviction or the
    maximum size.
    """
        ...
    @classmethod
    def keyExists(cls, key: str) -> bool:
    """
    Check if the given key is cached. This will return true even stored entry is null or error occur when produce. The
    cache will not try to produce the entry if the key is not cached.
    If {@link validate} is defined and the stored entry failed validation, false will be returned.
    """
        ...
    @classmethod
    def keyHasValue(cls, key: str) -> bool:
    """
    Check if the given key is cached. This will return true ONLY when the stored entry is **not** null. The
    cache will not try to produce the entry if key is not cached.
    If {@link validate} is defined and the stored value failed validation, false will be returned as well.
    """
        ...
    @classmethod
    def put(cls, key: str, value: AsTsMetricExprs) -> None:
    """
    Put an entry into the cache. This should only be used by the owner of the cache.
    """
        ...
    @classmethod
    def evict(cls, key: str) -> bool:
    """
    Remove an entry from the cache from local node. This should only be used by the owner of the cache.
    
    @return indicates whether a value was found and evicted for input key
    """
        ...
    @classmethod
    def clear(cls) -> None:
    """
    Clear all entries in the cache. This should only be used by the owner of the cache.
    """
        ...
    @classmethod
    def refresh(cls) -> None:
    """
    Refreshes the cache with the result returned from calling {@link produceAll}.  If the result is an empty mapp,
    the cache will be cleared.  This is called during provisioning to more efficiently populate metadata caches prior
    to validation.
    """
        ...
    @classmethod
    def produce(cls, key: str) -> Union[AsTsMetricExprs]:
    """
    Produce an entry from the name. This is the preferred way to create cache entries.
    The cache infrastructure will ensure that race conditions do not cause obsolete entries to be stored.
    
    Note that due to multi-threading and multi-processing concurrency, not all entries produced
    may actually make it into the cache. Thus, no other code should maintain references to a produced
    entry; entries should only be accessed through the cache.
    
    The implementation **must not** throw an exception due to invalid metadata. Instead there should be an associated
    listener that registers a metadata issue. This is necessary to allow provisioning to continue to function in the
    face of bad metadata; otherwise the user could not provision again to fix the problem.
    
    This method should not be called directly.
    """
        ...
    @classmethod
    def produceAll(cls) -> Union[Map[str, AsTsMetricExprs]]:
    """
    Produces the entire contents for a cache.  Called by {@link refresh}.  Caches that know how to comply should
    override this.  The default behavior for caches that do not is to return an empty map, indicating that the cache
    should be cleared.
    """
        ...
    @classmethod
    def release(cls, key: str, value: AsTsMetricExprs) -> None:
    """
    Optional override called when element is released from the cache. Should perform any external resources cleanup if
    needed.
    """
        ...
    @classmethod
    def validate(cls, value: AsTsMetricExprs) -> bool:
    """
    Optional override to implement custom validation on values retrieved from the cache before returning from `get`.
    If {@link validate} returns false for a given value, then the corresponding key will be evicted from the cache and
    `produce` will be called again.
    """
        ...

