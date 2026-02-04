#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type ChampionModelDefinitionListHelper


class ChampionModelDefinitionListHelper(Value):
    """
    Helper type to get Current Champion Model Information
    
    @remarks this represents a made instance of ChampionModelDefinitionListHelper
    """
    def __init__(self) -> None: ...

    @classmethod
    def get(cls, spec: any=None) -> Union[any]:
    """
    Returns Current Champion Model
    
    @param spec
              The specification object containing parameters for retrieving the champion model
    @return The current champion model data
    """
        ...

