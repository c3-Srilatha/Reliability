#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.SchemaSpreadsheetResult import SchemaSpreadsheetResult
from c3.platform.SchemaSpreadsheetSpec import SchemaSpreadsheetSpec
from c3.platform.DataErDiagramResult import DataErDiagramResult
from c3.platform.ErDiagramSpec import ErDiagramSpec
from c3.platform.DataErDiagramSpec import DataErDiagramSpec

# Python definitions for the C3 type DbUtil


class DbUtil(Value):
    """
    @remarks this represents a made instance of DbUtil
    """
    def __init__(self) -> None: ...

    @classmethod
    def erDiagram(cls, spec: ErDiagramSpec=None) -> Union[str]:
    """
    generated entity relationship diagram based on c3 metadata
    """
        ...
    @classmethod
    def dataErDiagram(cls, spec: DataErDiagramSpec=None) -> Union[DataErDiagramResult]:
    """
    generated entity relationship diagram based on c3 metadata
    """
        ...
    @classmethod
    def schemaSpreadsheet(cls, spec: SchemaSpreadsheetSpec=None) -> Union[SchemaSpreadsheetResult]:
    """
    generated database information spreadsheet based on metadata
    """
        ...

