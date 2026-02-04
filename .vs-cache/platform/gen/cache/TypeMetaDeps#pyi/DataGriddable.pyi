#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.DataGrid.LoadSpec import DataGrid.LoadSpec
from c3.platform.DataGrid import DataGrid
from c3.platform.DataGrid.HtmlSpec import DataGrid.HtmlSpec

# Python definitions for the C3 type DataGriddable


class DataGriddable(PyReprProtocol, PyReprHtmlProtocol, Value):
    """
    Any type that has a natural representation of its contents as a 2D grid of values can mix this type and implement
    #toDataGrid. This allow visualization of various sources of tabular data based on a standard structure.
    
    Note that this also provides default support for the Python `__repr__` protocols through **DataGrid**.
    
    @see DataGrid
    
    @remarks this represents a made instance of DataGriddable
    """
    def __init__(self) -> None: ...

    def _repr_(self) -> Union[str]:
    """
    Base implementation of Python __repr__ protocol to use {@link DataGrid#toString}.
    """
        ...
    def _reprHtml_(self) -> Union[str]:
    """
    Base implementation of Python __reprHtml__ protocol to use {@link DataGrid#toHtml}.
    """
        ...
    def toDataGrid(self, spec: DataGrid.LoadSpec=None) -> Union[DataGrid]:
    """
    Build a data grid from the underlying data. If the current value is not appropriate for a grid, null should be
    returned.
    """
        ...
    @classmethod
    def setDefaultSpec(cls, spec: DataGrid.HtmlSpec=None) -> None:
    """
    Since there is no good way to pass in the spec when using the automatic visualization, it's possible to statically
    set the default values in the local (client) environment. This spec will be used for the #_reprHtml method where
    no spec may be passed.
    """
        ...
    @classmethod
    def defaultSpec(cls) -> Union[DataGrid.HtmlSpec]:
    """
    Get the default spec for the local (client) environment. Note that there may be a default value with values
    extracted from the current environment. For example in Jupyter, display settings are taken from the current
    [pandas](https://pandas.pydata.org/) settings.
    
    @see #setDefaultSpec
    """
        ...

