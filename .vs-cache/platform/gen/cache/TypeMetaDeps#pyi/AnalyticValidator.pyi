#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Pkg.Issue import Pkg.Issue

# Python definitions for the C3 type AnalyticValidator


class AnalyticValidator(Value):
    """
    Validates all Analytics provisioned in tag post deployment.
    
    @remarks this represents a made instance of AnalyticValidator
    """
    def __init__(self) -> None: ...

    @classmethod
    def validate(cls) -> Union[Array[Pkg.Issue]]:
    """
    Validate all Analytics implemented.
    This is called automatically during provisioning.
    It checks all metrics declared in input dfe definition are provisioned in tag.
    """
        ...

