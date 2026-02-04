#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.MultiLocaleFetchSpec import MultiLocaleFetchSpec
from c3.platform.Meta import Meta
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.WithKey import WithKey
from c3.platform.FetchStreamSpec import FetchStreamSpec
from c3.platform.FieldType import FieldType
from c3.platform.UpsertSpec import UpsertSpec
from c3.platform.Filter import Filter
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.SetBuilder import SetBuilder
from c3.platform.FetchResult import FetchResult
from c3.platform.UiSdlRegisterTriggersAction import UiSdlRegisterTriggersAction
from c3.platform.UiSdlReduxState import UiSdlReduxState
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.baseUiComponentLibrary.UiGanttChartDataSpec import UiGanttChartDataSpec
from c3.platform.SetBuilder import SetBuilder
from c3.uiComponentLibrary.UiSdlActionGroup import UiSdlActionGroup
from c3.platform.SetType import SetType
from c3.baseUiComponentLibrary.UiGanttChartXAxisStaticConfig import UiGanttChartXAxisStaticConfig
from c3.platform.FetchFilterSpec import FetchFilterSpec
from c3.platform.MapType import MapType
from c3.platform.Exclude import Exclude
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ScanStats import ScanStats
from c3.uiInfrastructure.UiSdlComponentHeader import UiSdlComponentHeader
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.FetchResult import FetchResult
from c3.platform.BatchIdsSpec import BatchIdsSpec
from c3.uiInfrastructure.UiSdlActionsObservable import UiSdlActionsObservable
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.Stream import Stream
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.FetchArrowStreamSpec import FetchArrowStreamSpec
from c3.platform.UiSdlInitialRenderAction import UiSdlInitialRenderAction
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.ScanSpec import ScanSpec
from c3.uiInfrastructure.UiSdlStatesObservable import UiSdlStatesObservable
from c3.baseUiComponentLibrary.UiGanttChartInteractionConfig import UiGanttChartInteractionConfig
from c3.platform.ExistsSpec import ExistsSpec
from c3.platform.MetadataDeps import MetadataDeps

# Python definitions for the C3 type UiGanttChart


class UiGanttChart(UiSdlComponent[UiGanttChartDataSpec], UiSdlStandardFetchFilterable, UiSdlChartColorConfig):
    """
    `UiGanttChart` is a component focused on visualizing a Gantt chart.
    
    @remarks this represents a made instance of UiGanttChart
    """
    
    meta: Optional[Meta]=None
    """
    Various system fields.
    """

    id: Optional[str]=None
    """
    Unique identifier for the logical object that instance of this type represents.
    """

    name: Optional[str]=None
    """
    The name of the component. Optional field for informational purposes only.
    """

    dataSpec: Optional[UiGanttChartDataSpec]=None
    """
    The specification used for retrieving data displayed by the Gantt chart.
    """

    disableDataRequestOnFirstRender: Optional[bool]=None
    """
    Disable if you want to avoid sending any and all requests for this component on first render.
    """

    triggersRegistered: Optional[bool]=None
    """
    Whether the effect triggers and epics have been registered
    """

    wrapWithMetadataId: Optional[bool]=None
    """
    Whether to wrap the component with a div which has a class name of its metdata id. Useful for targeting with css.
    """

    defaultColors: Optional[Array[str]]=None
    """
    A list of default colors.
    If a series doesn't have specified color it will take color from here in order.
    """

    data: Optional[FetchResult[Obj]]=None
    """
    Holds the data to display in the Gantt chart.
    """

    header: Optional[UiSdlComponentHeader]=None
    """
    Chart header.
    """

    interactions: Optional[UiGanttChartInteractionConfig]=None
    """
    Chart interactions.
    """

    xAxis: Optional[UiGanttChartXAxisStaticConfig]=None
    """
    The xAxis configuration for this Gantt chart that determines the start/end date.
    """

    yAxisName: Optional[str]=None
    """
    The yAxis name for this Gantt chart.
    """

    rowHeight: Optional[str]=None
    """
    The puck size configuration.
    """

    puckLabelHorizontalAlignment: Optional[str]=None
    """
    Horizontal label alignment on a puck.
    """

    puckLabelVerticalAlignment: Optional[str]=None
    """
    Vertical label alignment on a puck.
    """

    tooltipDecimalPrecision: Optional[int]=None
    """
    The decimal precision to show on the puck tooltips.
    """

    showLineage: Optional[bool]=None
    """
    Set this field value when "Show Lineage" or "Hide Lineage" is selected.
    """

    multiSelectMode: Optional[bool]=None
    """
    Whether the user has entered multi-select mode.
    """

    saveDataOnDrop: Optional[bool]=None
    """
    Whether data should be automatically saved on puck drop.
    """

    showStacking: Optional[bool]=None
    """
    Whether overlapped pucks should be stacking.
    """

    mouseTracking: Optional[bool]=None
    """
    Whether the cursor tracking line should be shown.
    """

    showYaxisGridLine: Optional[bool]=None
    """
    Whether to show the y-axis grid line.
    """

    hideEmptyTooltipValue: Optional[bool]=None
    """
    Whether to hide empty tooltip value (i.e. a line with just tooltip label).
    """

    exportInLocalTime: Optional[bool]=None
    """
    If set to false UTC time will be shown in the exported CSV.
    """

    fixedContainerHeight: Optional[int]=None
    """
    Sets a specific height (in pixels) for the Gantt chart container. If set, and the Gantt chart height exceeds the
    value in this field, the chart will be scrollable.
    """

    puckDeemphasizedColor: Optional[str]=None
    """
    When in "show dependencies" state, only the selected puck and any dependencies should be shown in their normal
    color state.  All other pucks should be de-emphasized.
    """

    unionPuckColor: Optional[str]=None
    """
    Color string for union pucks (i.e. union of overlapping pucks).
    """

    chartActionsCollapseThreshold: Optional[int]=None
    """
    The number of chart actions to display on the grid header. If there are more, an additional chart action
    icon is displayed, and the extra actions are displayed under a dropdown triggered by clicking the additional
    chart action.
    
    Chart actions that are configured outside of the {@link chartActions} field do not count towards this limit.
    The additional chart action itself does count towards the limit. Examples:
    
    - If chartActionsCollapseThreshold is set to 2 and there are two actions, both of them are shown on the
      chart header, and there is no additional actions icon.
    - If chartActionsCollapseThreshold is set to 2 and there are three actions - "A", "B", and "C" - the
      chart header will show action "A" and the additional actions icon.  Clicking the additional actions icon
      will show a dropdown containing actions "B" and "C".
    """

    chartActions: Optional[Array[UiSdlActionGroup]]=None
    """
    The set of actions that don't depend on a selected puck, e.g., export, refresh. A toggleable group of actions can
    also be specified. When considering the `chartActionsCollapseThreshold`, consider the chart actions to be
    flattened. Listen to triggers of the chart actions through `CHART_ACTION_CLICK_${actionSuffix}`.
    """

    multiplePuckActionsCollapseThreshold: Optional[int]=None
    """
    The number of puck actions to display on the chart header.
    Similar logic to `chartActionsCollapseThreshold`. See the other field for details.
    """

    puckActionType: Optional[str]=None
    """
    The action type for the selected puck.
    This field is used with {@link multiplePuckActions} to display the puck actions.
    """

    multiplePuckActions: Optional[Map[str, Array[UiSdlActionGroup]]]=None
    """
    The set of actions that apply to pucks.
    Those actions will be visible only if at least one puck has been selected.
    Listen to triggers of the puck actions through `MULTIPLE_PUCK_ACTION_CLICK_${actionSuffix}`.
    The key must be the same as `puckActionType` field on puck type. 'default' is
    used for null/undefined `puckActionType` field.
    """

    selectedItemIds: Optional[Array[str]]=None
    """
    Currently selected item ids.
    """

    expandedRowIds: Optional[Array[str]]=None
    """
    Currently expanded row ids. Used for overlapping/union pucks feature.
    """

    expandedParentRowIds: Optional[Array[str]]=None
    """
    Currently expanded row ids of parent pucks.
    This is used to expand a parent puck to reveal its child pucks.
    """

    deHighlightedItemIds: Optional[Array[str]]=None
    """
    Currently de-highlighed item ids.
    """

    immovablePuckLegendLabel: Optional[str]=None
    """
    Legend label for immovable pucks (locked, or overtime/downtime pucks).
    """
    def __init__(self, meta: Optional[Meta]=None, id: Optional[str]=None, name: Optional[str]=None, dataSpec: Optional[UiGanttChartDataSpec]=None, disableDataRequestOnFirstRender: Optional[bool]=None, triggersRegistered: Optional[bool]=None, wrapWithMetadataId: Optional[bool]=None, defaultColors: Optional[Array[str]]=None, data: Optional[FetchResult[Obj]]=None, header: Optional[UiSdlComponentHeader]=None, interactions: Optional[UiGanttChartInteractionConfig]=None, xAxis: Optional[UiGanttChartXAxisStaticConfig]=None, yAxisName: Optional[str]=None, rowHeight: Optional[str]=None, puckLabelHorizontalAlignment: Optional[str]=None, puckLabelVerticalAlignment: Optional[str]=None, tooltipDecimalPrecision: Optional[int]=None, showLineage: Optional[bool]=None, multiSelectMode: Optional[bool]=None, saveDataOnDrop: Optional[bool]=None, showStacking: Optional[bool]=None, mouseTracking: Optional[bool]=None, showYaxisGridLine: Optional[bool]=None, hideEmptyTooltipValue: Optional[bool]=None, exportInLocalTime: Optional[bool]=None, fixedContainerHeight: Optional[int]=None, puckDeemphasizedColor: Optional[str]=None, unionPuckColor: Optional[str]=None, chartActionsCollapseThreshold: Optional[int]=None, chartActions: Optional[Array[UiSdlActionGroup]]=None, multiplePuckActionsCollapseThreshold: Optional[int]=None, puckActionType: Optional[str]=None, multiplePuckActions: Optional[Map[str, Array[UiSdlActionGroup]]]=None, selectedItemIds: Optional[Array[str]]=None, expandedRowIds: Optional[Array[str]]=None, expandedParentRowIds: Optional[Array[str]]=None, deHighlightedItemIds: Optional[Array[str]]=None, immovablePuckLegendLabel: Optional[str]=None) -> None: ...

    @overload
    def toJson(self) -> any:
    """
    Convert the internal object representation to a JSON object.
    
    @return JSON object representation
    
    @see #fromJson
    """
        ...
    @overload
    def toJson(self, include: str=None, exclude: str=None) -> any:
        ...
    @overload
    def toJson(self, include: Include=None, exclude: Exclude=None) -> any:
        ...
    @overload
    def toTypedJson(self, omitTopLevelType: bool=None, actionRequirement: str=None) -> any:
    """
    Convert the internal object representation to a _typed_ JSON object.
    @param omitTopLevelType
           Whether to leave out `type: {{ type of this serializable instance }}` as the **first** key-value pair in
           the outer level of the produced json.
    @param runtime
           If provided, then any special serialization logic required for the {@link ImplLanguage.Runtime} will be
           performed. **NOTE** This argument is ignored if `typed` is not `true`. @see Ann.Ser
    
    
    @return JSON object representation
    
    @see #fromJson
    @see #toJson
    @see serdeser.c3doc
    @see JsonType
    """
        ...
    @overload
    def toTypedJson(self, include: str=None, exclude: str=None) -> any:
        ...
    @overload
    def toTypedJson(self, include: Include=None, exclude: Exclude=None) -> any:
        ...
    @overload
    def toJsonString(self) -> str:
        ...
    @overload
    def toJsonString(self, pretty: bool) -> str:
    """
    Convert the internal object representation to a serialized JSON string.
    
    @return JSON object as string
    """
        ...
    @overload
    def toTypedJsonString(self) -> str:
        ...
    @overload
    def toTypedJsonString(self, pretty: bool=None, omitTopLevelType: bool=None) -> str:
        ...
    @overload
    def toJsString(self) -> str:
        ...
    @overload
    def toJsString(self, withType: bool) -> str:
    """
    Convert the internal object representation to a serialized JavaScript object literal.
    
    @return JavaScript object literal string
    """
        ...
    @overload
    def toXmlString(self) -> str:
        ...
    @overload
    def toXmlString(self, withType: bool) -> str:
    """
    Convert the internal object representation to a serialized XML string.
    
    @return XML element as string
    
    @see #fromXmlString
    """
        ...
    def serialize(self, contentType: str, toUntyped: bool=None) -> Union[str]:
    """
    Convert the internal object representation to a string serialized representation of the object.
    
    @return string serialized object representation
    """
        ...
    @classmethod
    def fromJson(cls, json: any) -> Union[UiGanttChart]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJson is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
    called-on type, but perhaps not identical. In particular, `Obj.fromJson` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJson
    """
        ...
    @classmethod
    def fromJsonString(cls, json: str) -> Union[UiGanttChart]:
    """
    Load the JSON-based representation and reconstruct the corresponding object.
    
    fromJsonString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type will be isA the
    called-on type, but perhaps not identical. In particular, `Obj.fromJsonString` works for any actual type and will return
    an instance of the correct type.
    
    @see #toJsonString
    """
        ...
    @classmethod
    def fromXmlString(cls, xml: str) -> Union[UiGanttChart]:
    """
    Load the XML-based representation and reconstruct the corresponding object.
    
    fromXmlString is be called on the type be deserialized and must reconstruct an Obj of the appropriate type (which
    may be a type that mixes in the type on which it is called). This means that the resulting object's type will be
    isA the called type, but perhaps not identical. In particular, `Obj.fromXmlString` works for any actual type and
    will return an instance of the correct type.
    
    @see #toXmlString
    """
        ...
    @classmethod
    def deserialize(cls, contentStr: str, contentType: str) -> Union[UiGanttChart]:
    """
    Load from contentType representation and reconstruct the corresponding object.
    
    fromString is be called on the type be deserialized and must reconstruct an object of the appropriate type
    (which may be a type that mixes in the type on which it is called). This means that the resulting object's type
    will be isA the called-on type, but perhaps not identical. In particular, `fromString` works for any actual
    type and will return an instance of the correct type.
    """
        ...
    def fingerprint(self, allIdentifiedRefFields: bool=None, trackRecursiveRefs: bool=None, traversedRefs: SetBuilder[Obj]=None) -> int:
    """
    Produce a checksum that can easily be compared to determine if two objects are definitely different. Note that
    there is a slight possibility that two objects with the same fingerprint will actually differ.
    
    The fingerprint recurses into field values, including collections and referenced Objs. The handling of nested
    {@link Identified identified} references (typically entities) differ in that _only_ the `id` field is included
    unless the allIdentifiedRefFields option is specified.
    
    If the object graph may contain recursive embedded object references, the trackRecursiveRefs option may be used.
    However, maintaining the list of visited objects is costly so this should not be done unnecessarily.
    
    @param allIdentifiedRefFields
              if `true`, fingerprint individual fields of persistable references, not just the `id`
    @param trackRecursiveRefs
              if `true`, a set of referenced objects is maintained to avoid infinite recursion
    @param traversedRefs
              only considered together with trackRecursiveRefs and if provided then all traversed references are
              checked against and added to it
    @return integer fingerprint
    
    @see https://en.wikipedia.org/wiki/Fingerprint_(computing)
    """
        ...
    def retainedMemory(self, deep: bool=None, allMeasured: SetBuilder[Any]=None) -> int:
    """
    Measures retained memory by this instance.
    
    @param deep
           if true and this instance contains references to other objects also measures memory retained by those
    @param allMeasured
           if set then will skip instances that are in the set and will add instances that where measured by this call
    @return retained memory in bytes for this instances
    """
        ...
    def type(self) -> Type:
    """
    C3 Type of this instance.
    """
        ...
    def replaceType(self, old: Type, new: Type) -> UiGanttChart:
    """
    Returns new instance with all references to old type, including result of #type, replaced with new type. If new
    type does not contain fields from old or field value types are not convertable then drops the field.
    
    This method is used during live metadata update
    """
        ...
    def super(self, mixin: Type=None) -> Any:
    """
     Produce a calling proxy that represents the content of all Obj type's mixins, but not the type itself. This is
     useful for redispatching **member** methods reimplemented on this type to a parent implementation:
     ```js
     function toString() {
       return this.super().toString() + ', x=' + this.x;
     }
     ```
    
     ```py
     def toString(this):
        return this.super().toString() + ', x=' + this.x
    ```
    
     To redispatch **static** methods, see {@link Type#super}.
    
     Note that this not the same as the language-specific `super` keyword because it works through the type system and
     supports multiple mixins. It behaves like the Python `super()` function, except called on the instance rather than
     globally.
    
     If `mixin` is the implementing type in a client implementation, this will delegate the call to the server.
     This can be used to create a local implementation "around" the server implementation for additional caching or
     other local state management.
    
     @param mixin if specified, this mixin is used instead or an error is thrown
     @return "super" calling proxy for this object
    
     @see Type.super
    """
        ...
    @overload
    def instanceOf(self, typeName: str) -> bool:
    """
    Checks whether this Obj is an instance of the specified type by checking both its type and the mixin chain.
    This is the most convenient way to ask "is this type usable in a context requiring the other type?"
    
    @return true if this instance is of this type or any of its mixins
    """
        ...
    @overload
    def instanceOf(self, type: Type) -> bool:
    """
    Checks whether this instance is an instance of the specified type by checking both its type and the mixin chain.
    This is the most convenient way to ask "is this type usable in a context requiring the other type?"
    
    @return true if this instance is of this type or any of its mixins
    
    @see ValueType#isA
    """
        ...
    def isEmptyObj(self) -> bool:
    """
    Whether all the fields of this instance are empty.
    """
        ...
    def isSame(self, other: Obj) -> bool:
    """
    Whether the specified instance represents exactly the same object as this instance.
    """
        ...
    @overload
    def isFieldSet(self, field: str) -> bool:
    """
     Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
     if the field value set the its default value by the constructor. A set field is never missing.
    
    @param field the field to check
    
    @return whether the specified field is set
    """
        ...
    @overload
    def isFieldSet(self, field: FieldType) -> bool:
    """
     Used to determine if a field is set. A field is set if a value was provided for that field to a constructor, or
     if the field value set the its default value by the constructor. A set field is never missing.
    
    @param field the field to check
    
    @return whether the specified field is set
    """
        ...
    @overload
    def isFieldMissing(self, field: str) -> bool:
    """
     Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
     should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
    {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
    A missing field is never set.
    
    @param field the field to check
    
    @return whether the specified field is missing
    """
        ...
    @overload
    def isFieldMissing(self, field: FieldType) -> bool:
    """
     Used to determine if a field is missing. The value of a missing field is not known, so a missing field's value
     should not be used. For example, when {@link Fetchable#fetch fetching} an entity, a field that is not
    {@link Include included} in the fetch is missing. Accessing a missing field will yield an empty value.
    A missing field is never set.
    
    @param field the field to check
    
    @return whether the specified field is missing
    """
        ...
    @overload
    def fieldValue(self, field: str, defaultToEmpty: bool=None) -> Union[T]:
    """
    Returns value of the given field.
    
    @param field
              Field to return the value for
           defaultToEmpty
              will return default empty value if field is missing
    """
        ...
    @overload
    def fieldValue(self, field: FieldType, defaultToEmpty: bool=None) -> Union[T]:
    """
    Returns value of the given field type. Be sure to use the FieldType instance for the exact same type as the type of
    the obj.
    
    @param field
              Field to return the value for
           defaultToEmpty
              will return default empty value if field is missing
    @return value for the given field
    """
        ...
    def fieldValues(self) -> Union[Array[FieldValue]]:
    """
    Returns all non empty field values. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldValuesByOrdinal(self, skipTrailingEmpty: bool=None) -> Union[Array[Any]]:
    """
    Returns all field values including empty ones as array where value of a field is at corresponding ordinal position.
    Unless `skipTrailingEmpty` parameter is set and there are trailing empty values resulting array has same size as
    #dataFieldTypes
    """
        ...
    def fieldValuesByFieldType(self) -> Union[Map[FieldType, Any]]:
    """
    Returns all non empty field values by field type. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldValuesByFieldName(self) -> Union[Map[str, Any]]:
    """
    Returns all non empty field values by field name. Note that it is recommended to use #eachFieldValue instead
    """
        ...
    def fieldNames(self) -> Union[Array[str]]:
    """
    Returns all data field names including those whose values are empty. Array is ordered by
    field ordinal.
    """
        ...
    def unsetFieldNames(self) -> Union[Array[str]]:
    """
    @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@link #isFieldSet are not set}. Array is ordered by
    field ordinal.
    """
        ...
    def missingFieldNames(self) -> Union[Array[str]]:
    """
    @return the name of all {@link TypeMeta#dataFieldTypes} on this `Obj` that {@Link isFieldMissing are missing}. Array is ordered by
    field ordinal.
    """
        ...
    @overload
    def at(self, ordinal: int) -> Union[T]:
    """
    Return value of the field at provided ordinal. Throws an error on an invalid value (out of range).
    
    @param ordinal
            Integer ordinal of the field in the parent type
    @return value of field at ordinal
    """
        ...
    @overload
    def at(self, expr: str, failIfNotValid: bool=None) -> Union[T]:
    """
    Return value for the given serialized expression
    
    @param expr
            Serialized expression to obtain the value in the given Obj
    @param failIfNotValid
            If set, fails if not a valid expression
    @return value obtained as a result of expression evaluation
    """
        ...
    def fieldValueAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[T]:
    """
    Looks up a single field value by path from this Obj. Field paths are separated by dots so an expression like
    `fieldValueAtPath("location.elevation")` is equivalent to `traverse("location").fieldValue("elevation")` except
    that it also handles `null`. If path contains any collections then only first element will be traversed,
    unless the collection index is specified in the path.
    
    If you need to traverse all elements of collection fields use #fieldValuesAtPath instead.
    
    @param fieldPath
              field names separated by dots
    @param failIfNotFound
              if true, an error will be thrown if the any of the field types aren't defined
    @param context
              if an error is thrown, the context returned by calling the lambda will be incorporated
    @return the field or null
    """
        ...
    def fieldValuesAtPath(self, fieldPath: str, failIfNotFound: bool=None, context: Callable[[], Union[str]]=None) -> Union[Array[T]]:
    """
    Looks up all the fields by path from root Obj. If path contains any collections then result will contain all
    traversals, unless the collection index is specified in the path.
    
    @param fieldPath
              field names separated by dots
    @param failIfNotFound
              if true, an error will be thrown if the any of the field types aren't defined
    @param context
              if an error is thrown, the context returned by calling the lambda will be incorporated
    @return fields as a flat list
    
    @see #fieldValueAtPath
    """
        ...
    @overload
    def eachFieldValue(self, action: Callable[[FieldType, Any]]) -> None:
    """
    Perform an action for each non-empty field of this object.
    
    @param action
              lambda to apply
    """
        ...
    @overload
    def eachFieldValue(self, spec: ValueSpec, action: Callable[[FieldType, Any]]) -> None:
    """
    Perform an action for each non-empty field of this object. Fields are filtered based on provided `spec`.
    
    @param spec
              which fields to include
    @param action
              lambda to apply
    """
        ...
    def eachSetFieldValue(self, action: Callable[[FieldType, Union[Any]]]) -> None:
    """
    Perform an action for each {@link isFieldSet set} field of this object.
    
    @param action
              lambda to apply
    """
        ...
    def eachFieldValueWhile(self, spec: ValueSpec, action: Callable[[FieldType, Any], bool]) -> bool:
    """
    Perform an action for each field of this object while processing action returns `true`. Fields are filtered based
    on provided `spec`.
    
    @param spec
              which fields to include
    @param action
              lambda to apply; stop if this `action` returns `false
    @return `true` if iteration was not aborted by lambda i.e. it saw all field values
    """
        ...
    @overload
    def eachRef(self, action: Callable[[FieldType, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
    the field value if non-null and for collections of Obj, this means each element in the collection.
    
    @param action
              function to be executed for each pair of field type and Obj instance
    """
        ...
    @overload
    def eachRef(self, includeEmpty: bool, action: Callable[[FieldType, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type. For reference fields, this means
    the field value if non-null and for collections of Obj, this means each element in the collection.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param action
              function to be executed for each pair of field type and Obj instance
    """
        ...
    def eachRefWhile(self, includeEmpty: bool, action: Callable[[FieldType, Obj], bool]) -> bool:
    """
    Execute the specified lambda against each referenced Obj instance in this type while processing action returns
    `true`.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param action
              function to be executed for each pair of field type and Obj instance; stops processing if return `false`
    @return `true` if iteration was not aborted by lambda i.e. it saw all refs
    """
        ...
    def eachRefRecursive(self, includeEmpty: bool, action: Callable[[FieldPath, Obj]]) -> None:
    """
    Execute the specified lambda against each referenced Obj instance in this type or in any child refs.
    """
        ...
    def eachRefRecursiveWhile(self, includeEmpty: bool, action: Callable[[FieldPath, Obj], bool]) -> bool:
    """
    Execute the specified lambda against each referenced Obj instance in this type or in any child refs. Continue while
    processing action returns `true`.
    """
        ...
    @overload
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> UiGanttChart:
    """
    Result of this function call is a copy of current instance with all non empty fields replaced based on results of
    the `mapper` invocation.
    
    @param action
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> UiGanttChart:
    """
    Result of this function call is a copy of current instance with all fields replaced based on results of the
    `mapper` invocation.
    
    @param spec
              which fields to include
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[UiGanttChart]:
    """
    Result of this function call is a copy of current instance with all non empty fields replaced based on results of
    the asynchronous `mapper` invocation.
    
    @param action
              lambda to apply for every field value to produce a new value for that fields
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[UiGanttChart]:
    """
    Result of this function call is a copy of current instance with all fields replaced based on results of the
    asynchronous `mapper` invocation.
    
    @param spec
              which fields to include
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> UiGanttChart:
    """
    Result of this function call is a copy of current instance with specified field value replaced based on result of
    the `mapper` invocation.
    @param field
              field being mapped
    @param includeEmpty
              if set, invokes mapper for fields with empty value
    @param mapper
              lambda to apply for every field value to produce a new value for that field
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> UiGanttChart:
    """
    Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
    lambda application.
    
    Result of this function call is a copy of current instance with all references replaced based on results of the
    `mapper` invocation.
    
    @param action
              function to be executed for each pair of field type and Obj instance
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> UiGanttChart:
    """
    Executes the specified lambda against each referenced Obj instance and replaces it's value with result of this
    lambda application.
    
    Result of this function call is a copy of current instance with all references replaced based on results of the
    `mapper` invocation.
    
    @param includeEmpty
              if `true` will also process references with `null` / "Empty" references
    @param mapper
              function to be executed for each pair of field type and Obj instance for producing new reference value
    @param convertValue
              if true, attempt to convert the value to match the field's type
    """
        ...
    @overload
    def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]]) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
    argument is a result of previous application. Initial value of `accumulator` will be `null`.
    
    This function is useful for calculating aggregate values based on all current non empty field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def foldFieldValues(self, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every non empty field value where `accumulator`
    argument is a result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
    
    This function is useful for calculating aggregate values based on all current non empty field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def foldFieldValues(self, spec: ValueSpec, folder: Callable[[FieldType, Any, Union[T]], Union[T]], initial: T=None) -> Union[T]:
    """
    Result of this function is application of `folder` lambda to every field value where `accumulator` argument is a
    result of previous application. Initial value of `accumulator` is provided via `initial` parameter.
    
    This function is useful for calculating aggregate values based on all field values.
    Based on the folder, may return `any` value. (Primitive, Obj, Collection, Any, etc.)
    e.g
    ```
    o = {a:1, b:2, c:0}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == 0 // Primitive
    
    o = {a: {x:1, y:2}, b: {x:10, z:2}}
    o.foldFieldValues((ft,value,acc) -> Val.min(acc,value)) == {x:1, y:2, z: 2} // Obj
    ```
    """
        ...
    @overload
    def evalProjection(self, projection: str, resultType: ValueType=None, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Any]:
    """
    Evaluates given projection expression over this instance.
    """
        ...
    @overload
    def evalProjection(self, projection: any, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[any]:
    """
    Evaluates given projection over this instance and returns results as json.
    """
        ...
    @overload
    def evalProjection(self, projection: any, resultType: Type, bindings: Map[str, Any]=None, options: Expr.CompileOptions=None) -> Union[Obj]:
    """
    Evaluates given projection over this instance and returns results as instance of the new Obj.
    """
        ...
    @overload
    def validateObj(self) -> UiGanttChart:
    """
    Populates all missing default values and throws error if any constraint is violated.
    """
        ...
    @overload
    def validateObj(self, spec: ValidateObjSpec) -> ValidateObjResult:
    """
    Validate that the Obj fields are set according to all the required rules.
    """
        ...
    @overload
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> UiGanttChart:
    """
    Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
    defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
    
    @param field
              name of the field
    @param value
              of the field
    @param doNotConvert
              if true, do not attempt to convert the value to match the field's type
    @return new Obj
    
    @see #withoutField
    @see #defaultField
    """
        ...
    @overload
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> UiGanttChart:
    """
    Builds a new Obj instance by adding the provided field in it. The name must correspond to an existing field
    defined on this type or its mixins. The value must be of the correct type if doNotConvert flag is true.
    
    @param field
              the field
    @param value
              of the field
    @param doNotConvert
              if true, do not attempt to convert the value to match the field's type
    @return new Obj
    
    @see #withoutField
    @see #defaultField
    """
        ...
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> UiGanttChart:
    """
    Builds a new Obj instance by adding the provided fields in it. The name must correspond to an existing fields
    defined on this type or its mixins. The values must be of the correct type if doNotConvert flag is true.
    
    @param fields
              map of field names/values
    @param doNotConvert
              if true, attempt to convert the values to match the fields' type
    @return new Obj
    """
        ...
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> UiGanttChart:
    """
    Builds a new Obj with the value at the specified path field. If the field is null, the field #isFieldSet to null.
    If you would like to #unsetField, you should call #withoutFieldAtPath instead.
    
    Immutable objects may return the same instance if the field being set does not actually represent a
    change to the existing object.
    
    @param path
              path to set value at
    @param value
              value to set
    @param doNotConvert
              if true, attempt to convert the values to match the fields' type
    @param doNotCreateIfMissing
              true indicates that any empty reference along the path will not set the value
    @return new Obj
    """
        ...
    def withoutFieldAtPath(self, path: str) -> UiGanttChart:
    """
    Builds a new Obj without the specified path field.
    
    Immutable objects may return the same instance if the field being removed does not actually represent a
    change to the existing object.
    
    @param path
              path for field to remove
    @return new Obj
    
    @see #withFieldAtPath
    @see #withoutField
    """
        ...
    @overload
    def withoutField(self, field: str) -> UiGanttChart:
    """
    Builds a new Obj, removing the field with the provided name.
    
    Immutable objects may return the same instance if the field being removed is not present in the existing object.
    
    @param field
              name of the field to remove
    @return new Obj with removed field
    
    @see #unsetField
    @see #removeField
    """
        ...
    @overload
    def withoutField(self, field: FieldType) -> UiGanttChart:
    """
    Builds a new Obj, removing the field with the provided field type.
    
    Immutable objects may return the same instance if the field being removed is not present in the existing object.
    
    @param field
              name of the field to remove
    @return new Obj with removed field
    
    @see #unsetField
    @see #removeField
    """
        ...
    def withoutFields(self, fields: Array[str]) -> UiGanttChart:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> UiGanttChart:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> UiGanttChart:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> UiGanttChart:
    """
    Builds a new Obj instance by adding the default values (if defined) for all unset fields. This is implemented by
    calling {@link FieldType#defaultValue defaultValue} for a field if it is not already set and
    {@link FieldType#hasDefault has a default}. It will also set {@see ValueType#initialValue initial values} for
    fields with required primitive ValueTypes (E.g. x: `!int32` -> will be set to 0). Note that this will not overwrite
    fields that have already been set.
    
    {@link FunctionParam#validateArg} will call {@link #withDefaults} for {@link Spec}s passed as arguments to methods.
    As a result, methods should be implemented assuming all default values are set on `Spec` arguments.
    
    @param includeEmptyRefsWithDefaults
              it `true` then missing / empty child references that have fields with defaults will also be instantiated
    @param defaultFields
              If not empty, a list of default field paths to populate.  Any default fields not specified in the
              array will be ignored.
    @return new Obj
    
    @see #defaultField
    @see FieldType#defaultValueConst
    @see FieldType#defaultValue
    """
        ...
    @overload
    def defaultField(self, field: str) -> UiGanttChart:
    """
    Builds a new Obj, by setting a field on this `Obj` to the field's default value. If the field has no default, this
    method will behave the same as {@link #unsetField}.
    
    @param field
            name of the field to default
    @return new `Obj` with the specified field set to its default value
    
    @see #withField
    @see #unsetField
    """
        ...
    @overload
    def defaultField(self, field: FieldType) -> UiGanttChart:
    """
    Builds a new Obj, by setting a field on this `Obj` to the fields default value. If the field has no default, this
    method will behave the same as {@link #unsetField}.
    
    @param field
            field type to default
    @return new `Obj` with the specified field set to its default value
    
    @see #withField
    @see #unsetField
    """
        ...
    @overload
    def unsetField(self, field: str) -> UiGanttChart:
    """
    Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
    is different from {@link removeField}
    
    @param field
            name of the field to unset
    @return new `Obj` with the specified field unset
    
    @see #withoutField
    @see #removeField
    """
        ...
    @overload
    def unsetField(self, field: FieldType) -> UiGanttChart:
    """
    Unsets a field from this `Obj`, meaning that the field will become not {@link #isFieldSet set}. Note that this
    is different from {@link removeField}
    
    @param field
            field type to unset
    @return new `Obj` with the specified field unset
    
    @see #withoutField
    @see #removeField
    """
        ...
    @overload
    def removeField(self, field: str) -> UiGanttChart:
    """
    Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
    is different from {@link #unsetField}
    
    @param field
            name of the field to remove
    @return new `Obj` with the specified field removed
    
    @see #withoutField
    @see #unsetField
    """
        ...
    @overload
    def removeField(self, field: FieldType) -> UiGanttChart:
    """
    Removes a field from this `Obj`, meaning that the field will become {@link isFieldMissing missing}. Note that this
    is different from {@link #unsetField}
    
    @param field
            field type to remove
    @return new `Obj` with the specified field removed
    
    @see #withoutField
    @see #unsetField
    """
        ...
    @overload
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> UiGanttChart:
    """
    Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
    In case of conflicts, fields of other instance take precedence unless otherwise specified by the fieldPathMergeSpec
    
    @param other
              object
    @param fieldPathMergeSpec
              mapping of fields of the object to the respective merge annotations
    @return the new merged Obj
    """
        ...
    @overload
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> UiGanttChart:
    """
    Merges all the fields of the provided Obj into this instance, producing a new Obj of the same type as this one.
    In case of conflicts, fields of other instance take precedence.
    
    @param other
              object
    @param otherFieldsFilter
              only fields of otherFieldsFilter type from other are merged into this obj.
    @return the new merged Obj
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> UiGanttChart:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> UiGanttChart:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist other Obj and do not exist on this Obj will not be added to final Obj or evaluated. Does not
    traverse child reference and collection fields.
    """
        ...
    def mergeAndExpandObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Union[R]:
    """
    Create new Obj with all non-null fields of this and other. Fields that are non null in both apply merger lambda.
    Fields that non null in only one of this and other will be in the resulting Obj without change.
    """
        ...
    def mergeJson(self, json: any) -> UiGanttChart:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> UiGanttChart:
    """
    Merge the obj references within the current obj
    @param deep
           If set, traverses the reference fields within the obj as well for a deep merge
    @param objKey
           lambda specifying how to obtain the key for the Obj while determining which Objs to merge
    @param filter
           Field paths that need to be filtered from this merge
    @return Obj with child references merged
    """
        ...
    def sumObj(self, other: Obj, deep: bool=None) -> UiGanttChart:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[UiGanttChart]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[UiGanttChart]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[UiGanttChart]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[UiGanttChart]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[UiGanttChart]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, UiGanttChart]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, UiGanttChart]]:
    """
    Create a map with the given key type and elements of this type.
    """
        ...
    @classmethod
    def myReferenceType(cls) -> ReferenceType:
        ...
    @classmethod
    def myMapTypeOf(cls, keyType: ValueType) -> MapType:
        ...
    @classmethod
    def myMapType(cls) -> MapType:
        ...
    @classmethod
    def myArrayType(cls) -> ArrayType:
        ...
    @classmethod
    def mySetType(cls) -> SetType:
        ...
    @classmethod
    def myStreamType(cls) -> StreamType:
        ...
    def toBuilder(self) -> ObjBuilder[UiGanttChart]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[UiGanttChart]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> UiGanttChart:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> UiGanttChart:
    """
    Construct an instance of this type from provided fields
    @param fields
               Fields to construct the instance of the obj with
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
    
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> UiGanttChart:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> UiGanttChart:
    """
    Construct an instance of this type with no non-default field values unless explicitly specified by passing param true
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0)
               populated
    
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> UiGanttChart:
    """
    Construct an instance from provided fields
    @param fields
               Fields (in the format <field_name, value>) to construct an instance of the obj. Note that "type" as a
               field_name will be considered as the actual Obj's type, e.g. Obj.make({"type": "Panda"}) is equivalent
               to Panda.make()
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32
               -> 0) populated. Passing an empty value for a field will result in the initial value being set if
               the field does not {@link ValueModifier#PRESERVES_EMPTY preserve empty}
    
    
    @see fromFields
    @see beforeMake
    @see afterMake
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, fields: Any, withDefaults: bool=None) -> UiGanttChart:
    """
    Construct an instance of this type from provided fields. Note it is more efficient to use #fromFields and other overloads
    
    ```js
    User.make({
      email: 'joe@smith.com',
      realName: 'Joe Smith'
    })
    
    Obj.make({
      type: 'User',
      email: 'joe@smith.com',
      realName: 'Joe Smith'
    })
    ```
    
    ```py
    c3.User.make({
      "email": 'joe@smith.com',
      "realName": 'Joe Smith'
    })
    
    c3.Obj.make({
      "type": 'User',
      "email": 'joe@smith.com',
      "realName": 'Joe Smith'
    })
    
    c3.User(email='joe@smith.com', realName='Joe Smith')
    
    c3.Obj(type='User', email='joe@smith.com', realName='Joe Smith')
    ```
    
    Note that this is **not** the same as the [serialization format](serdeser.c3doc). This is a convenient way to
    specify fields and values in the "JSON like" form supported by each language, but the usual serialization rules,
    such as {@link Ann.Ser} do not apply.
    @param fields
               Fields to construct the instance of the obj with
    @param withDefaults
               If set, then the Obj is made with default & initial values (required primitive fields e.g. !int32 -> 0) populated
    
    @see fromFields
    @see beforeMake
    @see afterMake
    @see withDefaults
    """
        ...
    @overload
    @classmethod
    def make(cls, s: str) -> Union[UiGanttChart]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> UiGanttChart:
    """
    Construct an instance of this type from provided instance of a subtype or a "duck type".
    """
        ...
    def remakeAs(self, type: Type) -> O:
    """
    Creates an obj of the new type with all fields that exist on the original obj that are defined in the new type
    converted and copied to the new obj instance. Note, that checking assignability and conversion of field values
    could be costly if types have different value types for same fields.
    
    @param type
            Type of new obj to return
    @return new obj of the requested type with all fields present in the original obj that are defined in the new type
            converted and copied to it
    """
        ...
    @classmethod
    def beforeMake(cls, fields: Map[FieldType, Any]) -> Union[Map[FieldType, Any]]:
    """
    Optional override that will be called every time instance of this type is created.
    
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    def afterMake(self) -> UiGanttChart:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> UiGanttChart:
    """
    Creates an empty inst using `MyType.make()` and caches it. Avoid recreating multiple copies of the spec for
    every action dispatch. The cached inst can also be used for comparing whether the object is an empty or not
    Will only create empty instance for immutable Obj e.g. if an Obj is Mutable, this method will throw an error
    
    @see ValueType#defaultEmptyValue
    """
        ...
    def toData(self) -> Union[Data]:
    """
    Represent the current obj instance as {@link Data}
    """
        ...
    @classmethod
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[UiGanttChart]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> UiGanttChart:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    @overload
    @classmethod
    def fetch(cls, spec: FetchSpec=None) -> FetchResult[UiGanttChart]:
    """
    Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param spec
              Specification of what data to fetch.  If not specified, no filtering will be applied and a default limit
              of 2000 will be applied.
    @return Requested objs.
    """
        ...
    @overload
    @classmethod
    def fetch(cls, filter: Filter) -> FetchResult[UiGanttChart]:
    """
    Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param filter
              Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
    @return Requested objs.
    """
        ...
    @classmethod
    def fetchObjStream(cls, spec: FetchStreamSpec=None) -> Union[Stream[UiGanttChart]]:
    """
    Fetches multiple obj instances based on a specification.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param spec
              Specification of what data to fetch.  If not specified, no filtering or limit will be applied.
    @return Requested obj stream.
    """
        ...
    @classmethod
    def fetchArrowStream(cls, spec: FetchArrowStreamSpec) -> Stream[Arrow]:
    """
    Fetches multiple obj instances based on a specification and returns them as stream of Arrow batches with
    specified maximum batch size.
    
    @param spec
              Specification of what data to fetch.
    @return Stream of Arrow batches.
    """
        ...
    @classmethod
    def fetchMultiLocale(cls, spec: MultiLocaleFetchSpec=None) -> Union[Map[str, FetchResult[UiGanttChart]]]:
    """
    Fetched multiple obj instances in multiple locales based on specification.
    
    @param spec
           Specification of what data to fetch. If not specified, all objs will be returned in all locales for the
           type.
    @return Requested objs where key of map is locale id
    """
        ...
    @classmethod
    def fetchCount(cls, spec: FetchFilterSpec=None) -> int:
    """
    @return The number of entries that match the specification.
    """
        ...
    @classmethod
    def fetchCountEstimated(cls, spec: FetchFilterSpec=None, updateStatistics: bool=None) -> int:
    """
    Gets the estimated count of objs that a fetch on the type with the optional filter will return.
    For non-kv types, The count is obtained from the query explain plan for the fetch.
    For kv types, the count is obtained by reading metadata from the state column and approximating the size of every
    other column based on newColMaxObjCount. Since we compute based on max obj count, this value will be the
    upper bound for the partition. For more accurate results, perform fillBuckets first.
    
    @param spec
           Optional filter to use for the estimated count.  Note that since the estimate is obtained from the query
           explain plan for the fetch it's accuracy will be MUCH greater if the filter involves only indexed
           fields.
    @param updateStatistics
           If true, the database statistics for all tables involved in the query will be updated prior to obtaining
           the estimated row count.  This will give the most up to date estimate for types that are updated frequently.
    
    @return The requested estimated count.
    """
        ...
    @classmethod
    def scan(cls, spec: ScanSpec) -> Union[ScanStats]:
    """
    Fetches all the data for this type based on provided filter and include spec, groups them by batchSize and invokes
    a callback function for the given batch.
    
    @param spec
              Specification of the scan action.
    @return Statistics of the scan action.
    """
        ...
    @classmethod
    def batchIds(cls, spec: BatchIdsSpec=None) -> Union[Stream[str]]:
    """
    Returns a stream of ids for batches where the result[i] is the starting id for batch 'i + 1'.
    
    @param spec
           Spec indicating how the operation should work.
    
    IMPORTANT - If both `suggestedNumBatches` and `batchSize` are specified in the spec, then the maximum number of
                rows that will participate in the resulting batches is `suggestedNumBatches` * `batchSize`.  This could
                cause an issue if the results are blindly used to create filters for fetching batches as the last batch
                would include EVERYTHING after the requested number of batches.  Therefore, typically only one or the
                other would be specified, depending on whether you are interested in controlling the number of batches
                or batch size.
    
    @return A stream of batch ids based on the input parameters.
    """
        ...
    @overload
    @classmethod
    def exists(cls, spec: ExistsSpec=None) -> bool:
    """
    @return True if there are at least the number of entries matching the filter/count specified in the spec.
    """
        ...
    @overload
    @classmethod
    def exists(cls, filter: Filter) -> bool:
    """
    @return True if there are at least the number of entries matching the filter/count specified in the spec.
    """
        ...
    @classmethod
    def keyFieldType(cls) -> FieldType:
    """
    @return key field type.
    """
        ...
    def keyFieldValue(self) -> Union[str]:
    """
    @return key field value.
    """
        ...
    def singletonMap(self) -> Map[str, WithKey]:
    """
    Build a map of the correct type with a single element which is this instance and key field value as key.
    """
        ...
    def dependencies(self) -> MetadataDeps[UiGanttChart]:
    """
    Retrieves dependencies to types or other metadata elements for the given instance of metadata.
    """
        ...
    def save(self, subPath: str=None, contentType: str=None) -> UiGanttChart:
        ...
    def remove(self, spec: UpsertSpec=None) -> bool:
        ...
    def removeWithChildren(self) -> bool:
    """
    Remove the metadata instance as well as its associated backward dependencies.
    Ex: {@link SourceSystem} has backward dependencies on {@link SourceCollection}
    """
        ...
    @classmethod
    def removeAll(cls, removeFilter: str=None) -> int:
        ...
    def update(self, srcObj: UiGanttChart=None, spec: UpsertSpec=None) -> Union[UiGanttChart]:
        ...
    def upsert(self, srcObj: UiGanttChart=None, spec: UpsertSpec=None) -> Union[UiGanttChart]:
        ...
    @classmethod
    def metadataFolder(cls) -> Union[str]:
    """
    Retrieves folder that holds metadata.
    """
        ...
    @classmethod
    def hasArbitraryFolderHierarchy(cls) -> bool:
    """
    If this Metadata type has arbitrary folder hierarchy.
    """
        ...
    @classmethod
    def isValidMetadataJson(cls, pkg: str, filePath: str) -> bool:
    """
    If metadata path is valid.
    @param pkg
       name of the package
    @param filePath
       path of metadata json file
    """
        ...
    def validateMetadata(self) -> ValidateObjResult:
    """
    Optional member function to enable custom validation logic.
    """
        ...
    def toString(self) -> Union[str]:
    """
    Build the canonical string representation of this instance. This must be implemented to provide serialization.
    
    If the object has no content, and fromString would properly reproduce it from a null value, toString may return
    null or empty string. Note that toString is primarily for serialization and only secondarily for inspection.
    
    @see #fromString
    """
        ...
    @classmethod
    def fromString(cls, s: str) -> Union[UiGanttChart]:
    """
    Parse the string-based representation and reconstruct the corresponding instance. This must be implemented to
    provide deserialization.
    
    fromString is called on the type be deserialized and must reconstruct an Obj of the appropriate type (which may be
    a type that mixes in the type on which it is called). This means that the resulting object's type can be a sub-type
    of called-on type, but perhaps not the same type.
    
    E.g. `Url.fromString('c3fs:///...')` will produce {@link FileUrl}
    
    @see #toString
    """
        ...
    @classmethod
    def forId(cls, id: str, failIfMissing: bool=None) -> Union[UiGanttChart]:
    """
    @return single instance of this Identified type by id.
    """
        ...
    def jsonStringify(self) -> Union[str]:
        ...
    @classmethod
    def jsonify(cls, value: Any=None) -> Union[str]:
        ...
    @classmethod
    def doDataMerge(cls, componentId: str, dataSpecFieldName: str, dataDestinationFieldName: str, props: UiGanttChart, state: UiSdlReduxState) -> Union[UiGanttChart]:
    """
    A function to perform the setting and merging of keys and values for the dataSpec
    and entity data in the react props. Components that need custom merging of multiple or nested datasources
    should override this function and provide their own custom setting/merging logic.
    
    @param componentId
              The id of the component on which the function is being called
    @param dataSpecFieldName
              The name of the field which is annotated as a dataSpec
    @param dataDestinationFieldName
              Contains field name to store the returned data
    @param props
              The object that will eventually be delivered to the component as react props
    @param state
              The redux state
    @returns props after the data has been set/merged
    """
        ...
    @classmethod
    def renderInitialAction(cls, id: str) -> UiSdlInitialRenderAction:
    """
    Triggered the first time a component renders. Applications should never
    trigger this action manually, as it will be triggered internally by the
    framework. If multiple instances of the same component (i.e. having the
    same id) are present on a single page, the framework _may_ trigger this
    action multiple times—at most once per component instance and at least once
    overall.
    
    @param id
              The id of the component that is rendered.
    @returns an `INITIAL_RENDER` action.
    """
        ...
    @classmethod
    def registerTriggersAction(cls, id: str) -> UiSdlRegisterTriggersAction:
    """
    Triggered the first time a component renders. Component will trigger this action
    when it registers effect triggers
    @param id
              The id of the component that is rendered.
    @returns an `REGISTER_TRIGGERS` action.
    """
        ...
    def triggersRegisterEffect(self, state: UiSdlReduxState, action: UiSdlRegisterTriggersAction) -> UiSdlReduxState:
    """
    Listens for actions of type `REGISTER_TRIGGERS` and flips a triggersRegistered when effect triggers are registered
    
    @param state
              Redux state
    @param action
              Redux action
    @returns a new Redux state
    """
        ...
    @classmethod
    def generateFilterString(cls, fieldValues: Map[str, Any]=None) -> Union[str]:
    """
    Private helper function to generate a filter expression from {@link fieldValues}.
    
    @param filterValues
            A mapping of field names to values.
    
    @return string
            The filter string representing the {@link fieldValues}.
    """
        ...
    @classmethod
    def getRelevantFieldValues(cls, fieldValues: Map[str, Any], typeName: str=None, componentId: str=None) -> Union[Map[str, Any]]:
    """
    Private helper function to get relevant field values for this specific component from raw field values.
    Every component at this page should call this helper function to get the relevant field values.
    What it does is loop over raw field values and only look at the fields that have the same data type at
    `dataMappings` field as the data type used in data spec.  Also if applicable, it will transform the fieldNames
    as specified in the {@link UiSdlFieldSetFilterFieldSetting#componentsToFilterMapping} or
    {@link UiSdlFieldSetInputFieldSetting#metricBasedComponentsToInputMapping} value.
    
    @param fieldValues
              A mapping of field names to values.
    @param typeName
              The name of the type to get relevant fields for.
    @param componentId
              Optional componentId; this will be used when checking if there are any component field bindings; if so,
              the fieldName will be transformed to that which is specified in the
              {@link UiSdlFieldSetFilterFieldSetting#componentsToFilterMapping} or
              {@link UiSdlFieldSetInputFieldSetting#metricBasedComponentsToInputMapping} value.
    
    @return Only relevant field values.
    """
        ...
    @classmethod
    def generateFilterStringElem(cls, item: Any=None, field: str=None) -> Union[str]:
    """
    Generate each filter string element of final filter string.
    
    @param item
             Json config of one field to filter on.
    @param field
             Field path on type.
    """
        ...
    @classmethod
    def transformFieldNameForComponentBinding(cls, fieldName: str, fieldValue: Map[str, Any], componentId: str) -> str:
    """
    Transform fieldName for this specific component based on the field bindings.
    Will determine which field value applies to the current component and what field to assign that value to.
    
    @param fieldName
              The fieldName which may be transformed.
    @param fieldValue
              The fieldValue associated with the fieldName.
    @param componentId
              The componentId for the component to be filtered.
    
    @return Only relevant field values.
    """
        ...
    @classmethod
    def filterSubmitEpic(cls, actionStream: UiSdlActionsObservable=None, stateStream: UiSdlStatesObservable=None) -> Union[UiSdlActionsObservable]:
    """
    Triggers `FILTER_SUBMIT` action.
    
    @param actionStream
              Observable action stream.
    @param stateStream
              Observable state stream.
    
    @returns An Observable action stream.
    """
        ...
    @classmethod
    def advancedFilterSubmitEpic(cls, actionStream: UiSdlActionsObservable=None, stateStream: UiSdlStatesObservable=None) -> Union[UiSdlActionsObservable]:
    """
    Triggers `ADVANCED_FILTER_SUBMIT` action.
    
    @param actionStream
              Observable action stream.
    @param stateStream
              Observable state stream.
    
    @returns An Observable action stream.
    """
        ...
    @classmethod
    def showOrHideLineageAction(cls, id: str=None, shouldShowLineage: bool=None) -> Union[UiSdlReduxAction[Any]]:
    """
    Triggered when a user selects to show or hide lineage.
    
    @param id
              The componentId.
    @param shouldShowLineage
              Whether the lineage should be shown or hidden.
    @return A `LINEAGE_(SHOW|HIDE)` action for this instance.
    """
        ...
    @classmethod
    def lineageShowReducer(cls, state: UiSdlReduxState=None, action: UiSdlReduxAction[Any]=None) -> Union[UiSdlReduxState]:
    """
    Listens for actions of type `LINEAGE_SHOW` and sets internal field {@link showLineage}.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return A new Redux state.
    """
        ...
    @classmethod
    def lineageHideReducer(cls, state: UiSdlReduxState=None, action: UiSdlReduxAction[Any]=None) -> Union[UiSdlReduxState]:
    """
    Listens for actions of type `LINEAGE_HIDE` and sets internal field {@link showLineage}.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return A new Redux state.
    """
        ...
    @classmethod
    def changeSelectionsAction(cls, itemIds: Array[str], selected: bool, id: str=None) -> Union[UiSdlReduxAction[Any]]:
    """
    Triggered when the user (un)selects multiple pucks.
    
    @param id
              Id of the component.
    @param selected
              `true` if the item was selected (in non multi-select mode, this would overwrite the `selectedItemIds`
              field), `false` if it was unselected.
    @param itemIds
              The `id` of the objects that were (un)selected.
    @return A `SELECTION_CHANGE` action for this instance.
    """
        ...
    @classmethod
    def selectionChangeReducer(cls, state: UiSdlReduxState=None, action: UiSdlReduxAction[Any]=None) -> Union[UiSdlReduxState]:
    """
    Listens for actions of type `SELECTION_CHANGE` and updates internal
    field {@link selectedItemIds} by setting or unsetting it to the id of the selected puck.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return A new Redux state.
    """
        ...
    @classmethod
    def toggleParentPuckRowAction(cls, rowId: str, id: str=None) -> Union[UiSdlReduxAction[Any]]:
    """
    Triggered when the user expands/collapses a row with a union puck.
    
    @param id
              Id of the component.
    @param rowId
              The `id` of the parent puck row that was expanded/collapsed.
    @return A `PARENT_PUCK_ROW_TOGGLE` action for this instance.
    """
        ...
    @classmethod
    def parentPuckRowToggleReducer(cls, state: UiSdlReduxState=None, action: UiSdlReduxAction[Any]=None) -> Union[UiSdlReduxState]:
    """
    Listens for actions of type `PARENT_PUCK_ROW_TOGGLE` and updates internal
    field {@link expandedParentRowIds} by setting or unsetting it to the id of the expanded row.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return A new Redux state.
    """
        ...
    @classmethod
    def toggleUnionPuckRowsAction(cls, rowIds: Array[str], id: str=None, expanded: bool=None) -> Union[UiSdlReduxAction[Any]]:
    """
    Triggered when the user expands/collapses a row with a union puck.
    
    @param id
              Id of the component.
    @param rowIds
              The `id` of the rows that were expanded/collapsed
    @param expanded
              Optional parameter to indicate if the rows should be expanded. If undefined, then the state is toggled.
    @return A `UNION_PUCK_ROW_TOGGLE` action for this instance.
    """
        ...
    @classmethod
    def unionPuckRowsToggleReducer(cls, state: UiSdlReduxState=None, action: UiSdlReduxAction[Any]=None) -> Union[UiSdlReduxState]:
    """
    Listens for actions of type `UNION_PUCK_ROW_TOGGLE` and updates internal
    field {@link expandedRowIds} by setting or unsetting it to the id of the expanded row.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return A new Redux state.
    """
        ...
    @classmethod
    def toggleAllUnionPuckRowsReducer(cls, state: UiSdlReduxState=None, action: UiSdlReduxAction[Any]=None) -> Union[UiSdlReduxState]:
    """
    Listens for actions of type `CHART_ACTION_CLICK_UNION_PUCK_ROW_TOGGLE_ALL` and updates internal
    field {@link expandedRowIds} by setting it to all rows or empty array.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return A new Redux state.
    """
        ...
    @classmethod
    def clearSelectionAction(cls, id: str=None) -> Union[UiSdlReduxAction[Any]]:
    """
    Action for clearing a puck selection.
    
    @param id
              Id of the component.
    @return A `SELECTION_CLEAR` action for this instance.
    """
        ...
    @classmethod
    def updateMultiSelectModeReducer(cls, state: UiSdlReduxState=None, action: UiSdlReduxAction[Any]=None) -> Union[UiSdlReduxState]:
    """
    Listens for actions of type `MULTI_SELECT_MODE_UPDATE` toggles `multiSelectMode` in the state
    to be inverse of its latest value.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return A new Redux state.
    """
        ...
    @classmethod
    def toggleMouseLineReducer(cls, state: UiSdlReduxState=None, action: UiSdlReduxAction[Any]=None) -> Union[UiSdlReduxState]:
    """
    Listens for actions of type `CHART_ACTION_CLICK_MOUSE_LINE_TOGGLE` and sets internal field {@link mouseTracking}.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return A new Redux state.
    """
        ...
    @classmethod
    def selectionClearReducer(cls, state: UiSdlReduxState=None, action: UiSdlReduxAction[Any]=None) -> Union[UiSdlReduxState]:
    """
    Listens for actions of type `SELECTION_CLEAR` and clears selectedItemIds.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return A new Redux state.
    """
        ...
    @classmethod
    def triggerChartActionAction(cls, id: str=None, actionSuffix: str=None, payload: Any=None) -> Union[UiSdlReduxAction[Any]]:
    """
    Triggers an action that applies to the whole component.
    
    @param id
              Id of the component.
    @param actionSuffix
              The suffix of the action that should be triggered.
    @param payload
              Optional argument to specify the payload of the underlying action.
    @return A `CHART_ACTION_CLICK_${actionSuffix}` action.
    """
        ...
    @classmethod
    def triggerMultiplePuckActionAction(cls, id: str=None, actionSuffix: str=None, itemIds: Array[str]=None) -> Union[UiSdlReduxAction[Any]]:
    """
    Triggers an action that applies to the currently selected item only.
    
    @param id
              Id of the component.
    @param actionSuffix
              The suffix of the action that should be triggered.
    @param itemIds
              The ids of the records that were selected at the time the action is triggered.
    @return A `MULTIPLE_PUCK_ACTION_CLICK_${actionSuffix}` action.
    """
        ...
    @classmethod
    def saveDataAction(cls, id: str=None, dataItems: Array[any]=None) -> Union[UiSdlReduxAction[Any]]:
    """
    Triggered by editing a puck to save data that was modified.
    Triggers epic to save and persist changes to the data source.
    Modified from UiSdlDataRedux.
    
    @param id
              Id of the component.
    @param dataItems
              The modified dataItems.
    @return A `DATA_SAVE` action for this instance.
    """
        ...
    @classmethod
    def ganttChartMountAction(cls, id: str=None) -> Union[UiSdlReduxAction[Any]]:
    """
    @param id
              Id of the component.
    @return A `GANTT_CHART_MOUNT_ACTION` action for this instance.
    """
        ...
    @classmethod
    def dataSaveEpic(cls, actionStream: UiSdlActionsObservable=None, stateStream: UiSdlStatesObservable=None) -> Union[UiSdlActionsObservable]:
    """
    Listens for actions of type `DATA_SAVE` and saves modified data items.
    Creates a copy of the original state to act as the modified state and send to the dataSetEffect.
    
    @param actionStream
              Redux actionStream.
    @param stateStream
              Redux stateStream.
    @return A {@link UiSdlActionsObservable} for this instance.
    """
        ...
    @classmethod
    def dataExportEpic(cls, actionStream: UiSdlActionsObservable=None, stateStream: UiSdlStatesObservable=None) -> Union[UiSdlActionsObservable]:
    """
    Listens for actions of type `CHART_ACTION_CLICK_EXPORT` and exports the data that is currently in the gantt chart
    state to a csv file.
    
    @param actionStream
              Redux actionStream.
    @param stateStream
              Redux stateStream.
    @return A {@link UiSdlActionsObservable} for this instance.
    """
        ...
    @classmethod
    def droppedPuckAction(cls, id: str=None, event: Any=None) -> Union[UiSdlReduxAction[Any]]:
    """
    Triggered after dropping a puck.
    
    @param id
              Id of the component.
    @param event
              The mouse drop event.
    @return A `PUCK_DROPPED` action for this instance.
    """
        ...
    @classmethod
    def updateRangeAction(cls, id: str=None, start: datetime=None, end: datetime=None) -> Union[UiSdlReduxAction[Any]]:
    """
    Triggered when the start/end dates of the Gantt chart are changed.
    
    @param id
              Id of the component.
    @return A `RANGE_UPDATE` action for this instance.
    """
        ...
    @classmethod
    def rangeUpdateReducer(cls, state: UiSdlReduxState=None, action: UiSdlReduxAction[Any]=None) -> Union[UiSdlReduxState]:
    """
    Updates the start/end dates of the Gantt chart.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return A new Redux state.
    """
        ...
    @classmethod
    def lockPucksAction(cls, id: str=None, itemIds: Array[str]=None, locked: bool=None) -> Union[UiSdlReduxAction[Any]]:
    """
    Trigger to set a puck's isLocked field to true or false.
    
    @param id
              Id of the component.
    @param itemIds
              The ids of the pucks.
    @param locked
              `true` if puck is to be locked, `false` if it is to be unlocked.
    @return A `PUCKS_LOCK` action for this instance.
    """
        ...
    @classmethod
    def pucksLockEpic(cls, actionStream: UiSdlActionsObservable=None, stateStream: UiSdlStatesObservable=None) -> Union[UiSdlActionsObservable]:
    """
    Updates the lock state of pucks.
    
    @param actionStream
              Redux actionStream.
    @param stateStream
              Redux stateStream.
    @return A {@link UiSdlActionsObservable} for this instance.
    """
        ...
    @classmethod
    def updateDraggableAction(cls, id: str=None, draggable: bool=None) -> Union[UiSdlReduxAction[Any]]:
    """
    Triggered when making Gantt chart pucks draggable or not.
    
    @param id
              Id of the component.
    @param draggable
              Whether the Gantt chart pucks should be draggable.
    @return A `DRAGGABLE_UPDATE` action for this instance.
    """
        ...
    @classmethod
    def draggableUpdateReducer(cls, state: UiSdlReduxState=None, action: UiSdlReduxAction[Any]=None) -> Union[UiSdlReduxState]:
    """
    Updates the horizontal and vertical draggability of pucks.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return A new Redux state.
    """
        ...
    @classmethod
    def updateChartActionsAction(cls, id: str=None, updatedChartActions: Array[UiSdlActionGroup]=None) -> Union[UiSdlReduxAction[Any]]:
    """
    Triggered when updating the Gantt Chart chart actions.
    
    @param id
              Id of the component.
    @param updatedChartActions
              List of updated chart actions for the Gantt chart.
    @return A `CHART_ACTIONS_UPDATE` action for this instance.
    """
        ...
    @classmethod
    def chartActionsUpdateReducer(cls, state: UiSdlReduxState=None, action: UiSdlReduxAction[Any]=None) -> Union[UiSdlReduxState]:
    """
    Updates the {@link #chartActions} of the Gantt Chart.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return A new Redux state.
    """
        ...
    @classmethod
    def updateMultiplePuckActionsAction(cls, id: str=None, updatedMultiplePuckActions: Map[str, Array[UiSdlActionGroup]]=None) -> Union[UiSdlReduxAction[Any]]:
    """
    Triggered when updating the Gantt Chart puck actions.
    
    @param id
              Id of the component.
    @param updatedMultiplePuckActions
              List of updated puck actions for the Gantt chart.
    @return A `MULTIPLE_PUCK_ACTIONS_UPDATE` action for this instance.
    """
        ...
    @classmethod
    def multiplePuckActionsUpdateReducer(cls, state: UiSdlReduxState=None, action: UiSdlReduxAction[Any]=None) -> Union[UiSdlReduxState]:
    """
    Updates the {@link #multiplePuckActions} of the Gantt Chart.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return A new Redux state.
    """
        ...
    @classmethod
    def highlightPuckAction(cls, id: str=None, highlightedPuckIds: Array[str]=None) -> Union[UiSdlReduxAction[Any]]:
    """
    Triggered when filtering pucks to be highlighted.
    
    @param id
              Id of the component.
    @param highlightedPuckIds
              An array of highlighted puck ids.
    @return A `PUCK_HIGHLIGHT` action for this instance.
    """
        ...
    @classmethod
    def puckHighlightReducer(cls, state: UiSdlReduxState=None, action: UiSdlReduxAction[Any]=None) -> Union[UiSdlReduxState]:
    """
    Highlights filtered pucks.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return A new Redux state.
    """
        ...
    @classmethod
    def updateValidDropZonesAction(cls, id: str=None, fieldName: str=None) -> Union[UiSdlReduxAction[Any]]:
    """
    Triggered when updating valid drop zones of pucks.
    
    @param id
              Id of the component.
    @param fieldName
              Field name of {@link UiGanttChartPuckDataSpec} valid drop zones to be updated. When not provided,
              {@link UiGanttChartPuckDataSpec} valid drop zones will be undefined, and any puck can be dropped anywhere.
    @return A `VALID_DROP_ZONE_UPDATE` action for this instance.
    """
        ...
    @classmethod
    def validDropZonesUpdateReducer(cls, state: UiSdlReduxState=None, action: UiSdlReduxAction[Any]=None) -> Union[UiSdlReduxState]:
    """
    Updates valid drop zones of pucks.
    
    @param state
              Redux state.
    @param action
              Redux action.
    @return A new Redux state.
    """
        ...

