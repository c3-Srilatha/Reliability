#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type ShannonEntropy


class ShannonEntropy(Value):
    """
    Methods for computing Shannon's entropy value.
    Entropy is a basic quantity in information theory associated to any random variable,
    which can be interpreted as the average level of "information", "surprise", or "uncertainty" inherent in
    the variable's possible outcomes.
    
    More details at: https://en.wikipedia.org/wiki/Entropy_(information_theory)
    
    @remarks this represents a made instance of ShannonEntropy
    """
    def __init__(self) -> None: ...

    @classmethod
    def forString(cls, input: str) -> Union[float]:
    """
    Compute Shannon's entropy for a string
    """
        ...

