#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Error import Error
from c3.platform.FulfillablePromise import FulfillablePromise
from c3.platform.Promise import Promise
from c3.platform.Promise import Promise
from c3.platform.Duration import Duration
from c3.platform.Future import Future

# Python definitions for the C3 type FulfillablePromise

V = TypeVar('V')

class FulfillablePromise(Generic[V], Promise[V], Value):
    """
    An empty promise that can be fulfilled or rejected in the future.
    
    Note that may not be implemented of runtime language does not have a support for it
    
    @see Promise#make
    
    @remarks this represents a made instance of FulfillablePromise
    """
    def __init__(self) -> None: ...

    def then(self, onFulfill: Callable[[Union[V]]], onReject: Callable[[Error]]=None) -> None:
    """
    Call provided handler once promised value is available or call error handler on failure.
    """
        ...
    def thenChain(self, onFulfill: Callable[[Union[V]], Union[R]], onReject: Callable[[Error], Error]=None) -> Union[Promise[R]]:
    """
    Call provided handler once promised value is available or call error handler on failure. Return value of the
    onFulfill consumer will be passed down to promise returned by #then method. Similarly Error returned by onReject
    handler will be passed down to the same promise.
    """
        ...
    def thenPromise(self, onFulfill: Callable[[Union[V]], Union[Promise[R]]], onReject: Callable[[Error], Error]=None) -> Union[Promise[R]]:
    """
    Call provided handler once promised value is available or call error handler on failure. Returned promise of the
    onFulfill consumer will be passed down to caller of #then method. Similarly Error returned by onReject handler
    will be passed down to the same promise.
    """
        ...
    def catch(self, onReject: Callable[[Error]]) -> None:
    """
    Call error handler on failure.
    """
        ...
    def catchChain(self, onReject: Callable[[Error], Error]) -> Union[Promise[V]]:
    """
    Call error handler on failure.
    """
        ...
    def finally(self, onFinally: Callable[[Promise[V]]]) -> None:
    """
    Call the callback once promise is settled.
    """
        ...
    def finallyChain(self, onFinally: Callable[[Promise[V]]]) -> Union[Promise[V]]:
    """
    Call the callback once promise is settled.
    """
        ...
    def future(self) -> Future[V]:
    """
    @return future result; note that may not be implemented of runtime language does not have a support for it
    """
        ...
    def await(self, timeout: Duration=None) -> bool:
    """
    Awaits for promise fulfillment.
    
    @returns `true` if done or `false` if timeout expired
    """
        ...
    @overload
    @classmethod
    def make(cls, fulfiller: Callable[[], Union[R]]) -> Union[Promise[R]]:
    """
    Creates a new promise by asynchronously invoking provided fulfiller
    """
        ...
    @overload
    @classmethod
    def make(cls, action: Callable[[Callable[[Union[R]]], Callable[[Union[Error]]]]]) -> Union[Promise[R]]:
    """
    Creates a new promise by asynchronously invoking provided action
    """
        ...
    @overload
    @classmethod
    def make(cls) -> Union[FulfillablePromise[R]]:
    """
    Creates an empty promise that can be fulfilled or rejected in the future
    """
        ...
    @overload
    def fulfill(self, res: Callable[[], Union[V]]) -> None:
    """
    Fulfills the promise with result of application of provided lambda; note that promise can be fulfilled or rejected
    once
    """
        ...
    @overload
    def fulfill(self, res: V) -> None:
    """
    Fulfills the promise; note that promise can be fulfilled or rejected once
    """
        ...
    @overload
    def reject(self, err: Error) -> None:
    """
    Reject the promise; note that promise can be fulfilled or rejected once
    """
        ...
    @overload
    def reject(self, err: Any) -> None:
    """
    Reject the promise; note that promise can be fulfilled or rejected once
    """
        ...

