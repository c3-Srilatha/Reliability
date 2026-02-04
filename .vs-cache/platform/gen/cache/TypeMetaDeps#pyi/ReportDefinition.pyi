#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type ReportDefinition


class ReportDefinition(Value):
    """
    The generic parent for all reports
    
    @remarks this represents a made instance of ReportDefinition
    """
    def __init__(self) -> None: ...


