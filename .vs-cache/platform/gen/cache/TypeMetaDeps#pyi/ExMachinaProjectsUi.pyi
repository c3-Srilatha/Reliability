#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.platform.FetchResult import FetchResult

# Python definitions for the C3 type ExMachinaProjectsUi


class ExMachinaProjectsUi(Value):
    """
    APIs to help perform UI actions for actions on the Projects page or otherwise related to
    {@link ExMachinaProjectRoot}s or {@link ExMachinaProject}s
    
    @remarks this represents a made instance of ExMachinaProjectsUi
    """
    def __init__(self) -> None: ...

    @classmethod
    def fetchProjects(cls, spec: FetchSpec=None) -> Union[FetchResult[any]]:
    """
    Takes the fetch spec passed from the grid or filter panel and adds a filter to ensure only the current team's
    projects are fetched
    @param spec
             The fetch spec passed from actions taken in the grid/filter panel (pagination, filter, etc.)
    """
        ...
    @classmethod
    def fetchProjectsCount(cls, spec: FetchSpec=None) -> Union[int]:
    """
    Takes the fetch spec passed from the grid or filter panel and adds a filter to ensure only the current team's
    projects are fetched
    @param spec
             The fetch spec passed from actions taken in the grid/filter panel (pagination, filter, etc.)
    """
        ...
    @classmethod
    def assembleProjectsFilter(cls, spec: FetchSpec=None) -> Union[str]:
    """
    Helper for {@link fetchProjects} to assemble the projects filter
    """
        ...
    @classmethod
    def getLoadedGraphs(cls) -> Union[Array[str]]:
    """
    Helper function to safely retrieve the list of ids for projects loaded in the session
    """
        ...
    @classmethod
    def isProjectLoaded(cls, loadedGraphs: Array[str]=None, projectId: str=None) -> bool:
    """
    Given a list of project graps loaded into memory, returns whether the current project is in the list
    """
        ...

