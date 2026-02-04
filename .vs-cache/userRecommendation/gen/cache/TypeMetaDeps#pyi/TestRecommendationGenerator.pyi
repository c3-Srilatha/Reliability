#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.userRecommendation.UserRecommendation import UserRecommendation

# Python definitions for the C3 type TestRecommendationGenerator


class TestRecommendationGenerator(Value):
    """
    Type used to test the {@link UserRecommendation} function.
    
    @remarks this represents a made instance of TestRecommendationGenerator
    """
    def __init__(self) -> None: ...

    @classmethod
    def exampleGenerate(cls, args: Map[str, Any]=None) -> Union[UserRecommendation]:
    """
    Example function to generate a {@link UserRecommendation}.
    """
        ...

