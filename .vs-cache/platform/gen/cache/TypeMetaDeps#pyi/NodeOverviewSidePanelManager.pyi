#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.GlobalCanvasGraphNode import GlobalCanvasGraphNode
from c3.platform.NodeOverviewSidePanelOverviewData import NodeOverviewSidePanelOverviewData

# Python definitions for the C3 type NodeOverviewSidePanelManager


class NodeOverviewSidePanelManager(Value):
    """
    Util functions to get information for the NodeOverviewSidePanel, specifically the overview section.
    
    @remarks this represents a made instance of NodeOverviewSidePanelManager
    """
    def __init__(self) -> None: ...

    @classmethod
    def getOverviewSourceSystemSidePanelContent(cls, graphNode: str) -> Union[any]:
    """
    Generate configuration for source system node overview side panel dynamic section.
    """
        ...
    @classmethod
    def getOverviewSourceCollectionSidePanelContent(cls, graphNode: str) -> Union[any]:
    """
    Generate configuration for source system node overview side panel dynamic section.
    """
        ...
    @classmethod
    def getOverviewSectionConfig(cls, graphNode: str) -> Union[any]:
    """
    Generate configuration for overview section of node overview side panel.
    """
        ...
    @classmethod
    def getOverviewSectionData(cls, graphNode: GlobalCanvasGraphNode[GlobalCanvasGraphNodeData]=None) -> Union[NodeOverviewSidePanelOverviewData]:
    """
    Returns data shown in node overview side panel overview section.
    @param graphNode
             {@link GlobalCanvasGraphNode} to construct data for.
    """
        ...

