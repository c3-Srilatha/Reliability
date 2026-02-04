#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type DocSiteExport.Image


class Image(Value):
    """
    Type containing logic specific to exporting images from a {@link Pkg}.
    
    @remarks this represents a made instance of DocSiteExport.Image
    """
    def __init__(self) -> None: ...

    @classmethod
    def exportImages(cls) -> None:
    """
    Exports all the images in the [current package](DocSiteExport.Config#pkgName), maintaining
    the same [directory structure](Pkg.File#subPathWithCategory) as their source.
    """
        ...

