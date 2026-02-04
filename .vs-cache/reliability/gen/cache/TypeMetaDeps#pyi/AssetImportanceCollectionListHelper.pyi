#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type AssetImportanceCollectionListHelper


class AssetImportanceCollectionListHelper(Value):
    """
    Type to fetch data for the AssetImportance Collection List on Overview Page.
    
    @remarks this represents a made instance of AssetImportanceCollectionListHelper
    """
    def __init__(self) -> None: ...

    @classmethod
    def fetchMostImportantAssets(cls, selectedFacilities: str=None) -> Union[any]:
    """
    Fetches the most important assets with and without alerts for the selected facilities.
    
    @param selectedFacilities A JSON string representing the list of selected facility IDs.
    @returns A JSON object containing the aggregated counts of the most important assets.
      - `objs`: An array containing the asset importance objs count and data.
      - `count`: The total count of AssetImportance objs (always 2 in this case).
      - `hasMore`: A boolean indicating whether more data is available (always false in this case).
    """
        ...

