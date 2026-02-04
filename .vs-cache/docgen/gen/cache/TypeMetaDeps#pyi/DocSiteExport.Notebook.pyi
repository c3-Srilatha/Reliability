#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.docgen.DocSiteExport.WriteContentSpec import DocSiteExport.WriteContentSpec

# Python definitions for the C3 type DocSiteExport.Notebook


class Notebook(Value):
    """
    Type containing logic specific to exporting notebooks from a {@link Pkg}. Currently
    only {@link JupyterNotebook}s are exported.
    
    @remarks this represents a made instance of DocSiteExport.Notebook
    """
    def __init__(self) -> None: ...

    @classmethod
    def getValidNotebooks(cls, pkgName: str) -> Union[any]:
    """
    Gets all valid {@link JupyterNotebook}s for the given package, filtering out test files
    and notebooks from other packages.
    
    @param pkgName
              The name of the {@link Pkg} to get notebooks for.
    @return An object containing validNotebooks (array of {notebook, file, fileContent}) and errors.
    """
        ...
    @classmethod
    def exportJupyterNotebooks(cls) -> None:
    """
    Exports all the {@link JupyterNotebook#externalFile}s in the [current package](DocSiteExport.Config#pkgName).
    """
        ...
    @classmethod
    def renderJupyterNotebooksToHtml(cls, notebooks: Array[DocSiteExport.WriteContentSpec]=None) -> Union[Array[DocSiteExport.WriteContentSpec]]:
    """
    Renders the given Jupyter notebooks to HTML.
    
    @param notebooks
              The notebooks to render. If [source](DocSiteExport.WriteContentSpec#source) doesn't
              exist on _any_ of the notebooks, a `ValueError` is raised.
    @return The updated notebooks with the [html field](DocSiteExport.WriteContentSpec#html) populated.
    """
        ...

