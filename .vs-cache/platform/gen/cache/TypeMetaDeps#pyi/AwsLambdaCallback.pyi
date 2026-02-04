#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type AwsLambdaCallback


class AwsLambdaCallback(Value):
    """
    @remarks this represents a made instance of AwsLambdaCallback
    """
    def __init__(self) -> None: ...

    @classmethod
    def callbackWrapper(cls, event: Any=None, context: Any=None, callback: Any=None, scheme: str=None, host: str=None, port: int=None, path: str=None, auth: str=None, postData: str=None, eventProc: bool=None) -> None:
    """
    callbackWrapper serves as PartiallyAppliedAction, whose jsImpl will be uploaded as zip Package into Aws Lambda
    
    @param event
               AWS Lambda uses this parameter to pass in event data.
    @param context
               AWS Lambda uses this parameter to provide the runtime information of the executing Lambda function.
    @param callback
               You can use the optional callback to return information to the caller.
    @param scheme
               The scheme of the C3 url. E.g. "http" and "https".
    @param host
               The host address of the C3 url. E.g. "localhost" and "host.c3-e.com".
    @param port
               The port number of the C3 url.
    @param path
               The path to the callback function. E.g., "/api/1/c3/c3/AwsLambdaFunc?action=listResources"
    @param auth
               The authentication for Restful Call. It can be user/password or c3auth Token
    @param postData
               The input arguments of the callback function
    @param eventProc
               The indicator whether the callback function uses the event data as input
    """
        ...

