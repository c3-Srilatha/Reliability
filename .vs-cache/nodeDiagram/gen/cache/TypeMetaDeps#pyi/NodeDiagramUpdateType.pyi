#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type NodeDiagramUpdateType


class NodeDiagramUpdateType():
    """
    Enumerates the types of updates that can be made to the {@link NodeDiagram} instance
    
    @remarks this represents a made instance of NodeDiagramUpdateType
    """
    
    ADD_NODE: Optional[str]=None
    """
    Add a node to the {@link NodeDiagram}.
    {@link NodeDiagramUpdate#data} is expected to the entire {@link NodeDiagramNode} instance.
    """

    ADD_EDGE: Optional[str]=None
    """
    Add an edge to the {@link NodeDiagram}.
    {@link NodeDiagramUpdate#data} is expected to the entire {@link NodeDiagramEdge} instance.
    """

    REMOVE_NODE: Optional[str]=None
    """
    Remove a node in the {@link NodeDiagram}.
    {@link NodeDiagramUpdate#data} is expected to be `{ id: string }` where id is {@link NodeDiagramNode#id}.
    """

    REMOVE_EDGE: Optional[str]=None
    """
    Remove an edge to the {@link NodeDiagram}
    {@link NodeDiagramUpdate#data} is expected to be `{ id: string }` where id is the {@link NodeDiagramEdge#id}.
    """

    UPDATE_NODE: Optional[str]=None
    """
    Update a node to the {@link NodeDiagram}.
    The {@link NodeDiagramUpdate#data} will be merged with the existing {@link NodeDiagramNode}, including the
    merging of {@link NodeDiagramNode#data}.
    """

    UPDATE_EDGE: Optional[str]=None
    """
    Update an edge to the {@link NodeDiagram}.
    The {@link NodeDiagramUpdate#data} will be merged with the existing {@link NodeDiagramEdge}, including the
    merging of {@link NodeDiagramEdge#data}.
    """

    SET_DIAGRAM: Optional[str]=None
    """
    Sets the entire {@link NodeDiagram} state for `nodes` and `edges`.
    The {@link NodeDiagramUpdate#data} is expected to be a json structured
    ```
    {nodes: [NodeDiagramNode], edges: [NodeDiagramEdge]}
    ```
    """

    VISIBILITY: Optional[str]=None

    CENTER: Optional[str]=None
    """
    Centers the view port on a specific node.
    {@link NodeDiagramUpdate#data} is expected to be `{ nodeId: string, zoom: int }` where nodeId is the {@link NodeDiagramNode#id},
    `zoom` is the factor to zoom in by (default to 2).
    """

    LAYOUT: Optional[str]=None
    """
    Lays out the nodes in the {@link NodeDiagram} and re-renders the diagram.
    The {@link NodeDiagramUpdate#data} is expected to be { fitView: boolean }
    - `fitView` true if the view port should be changed to fit the entire diagram.
    """

    FITVIEW: Optional[str]=None
    """
    Fit the diagram into view port.
    """

    PAN_TO_AVOID: Optional[str]=None
    """
    Pan the diagram to have the selected node to avoid the given area.
    {@link NodeDiagramUpdate#data} is expected to be:
    `{
       diagramSelector: string
       selectedNodeId: string,
       moveDirection: string,
       horizontalAreasToAvoid: [{upperLeft: {x: number, y: number}, bottomRight: {x: number, y: number}}],
       verticalAreasToAvoid: [{upperLeft: {x: number, y: number}, bottomRight: {x: number, y: number}}]
     }`
    where the `diagramSelector` is the unique selector for the diagram to target. `selectedNodeId` is the id for the
    node to target, `moveDirection` is either `upLeft` or `downRight`, to indicate the direction to have the node in
    respect to the 2 areas to avoid.
    `horizontalAreaToAvoid` and `verticalAreaToAvoid` are regions to avoid in the window, and the x, y values are in pixels from the upperLeft corner (with coordinate 0, 0) of the window, with positive direction to the right or down.
    Negative values for x/y stand for (windowWidth/windowHeight - the according value), to facilitate user to define the area easily.
    """
    def __init__(self, ADD_NODE: Optional[str]=None, ADD_EDGE: Optional[str]=None, REMOVE_NODE: Optional[str]=None, REMOVE_EDGE: Optional[str]=None, UPDATE_NODE: Optional[str]=None, UPDATE_EDGE: Optional[str]=None, SET_DIAGRAM: Optional[str]=None, VISIBILITY: Optional[str]=None, CENTER: Optional[str]=None, LAYOUT: Optional[str]=None, FITVIEW: Optional[str]=None, PAN_TO_AVOID: Optional[str]=None) -> None: ...

    @classmethod
    def toValue(cls, label: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Translate the enum label (field name) to the value.
    For simple enums (that don't define explicit values), the value is a string
    that matches the label.
    @param label the enum label
    @return the associated value
    """
        ...
    @classmethod
    def toLabel(cls, value: str, failIfInvalid: bool=None) -> Union[str]:
    """
    Translate the enum value to the label (field name).
    @param value the enum value
    @return the enum label
    """
        ...
    @classmethod
    def labelIndex(cls, label: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the label in the enum.
    @param label the enum label (field name)
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueIndex(cls, value: str, failIfInvalid: bool=None) -> int:
    """
    Get the index of the value in the enum.
    @param value the enum value
    @return index or -1 if not found
    """
        ...
    @classmethod
    def valueType(cls) -> ValueType:
    """
    @return value type of values in this enum
    """
        ...
    @classmethod
    def values(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
    the field name (same as the labels).
    """
        ...
    @classmethod
    def labels(cls) -> Union[Array[str]]:
    """
    Return an array of all enumeration labels. These are the same as the field names of the enum type.
    """
        ...
    @classmethod
    def valueToLabels(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration values to their labels.
    """
        ...
    @classmethod
    def labelToValues(cls) -> Union[Map[str, str]]:
    """
    Return a map of all enumeration labels to their values.
    """
        ...
    @classmethod
    def containsValue(cls, value: str) -> bool:
    """
    Is value a valid value for this enum type?
    @param value the enum value
    """
        ...
    @classmethod
    def eachLabel(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum label.
    """
        ...
    @classmethod
    def eachValue(cls, action: Callable[[str]]=None) -> None:
    """
    Calls provided action for each enum value.
    """
        ...

