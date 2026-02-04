#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.genAiBase.Genai.SourceFile import Genai.SourceFile
from c3.genAiBase.Genai.SourceFile.Metadata.Category import Genai.SourceFile.Metadata.Category
from c3.platform.UiSdlNoData import UiSdlNoData
from c3.genAiSearch.GenAiUiSyncScheduleOptions import GenAiUiSyncScheduleOptions
from c3.platform.Include import Include
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.MultiLocaleFetchSpec import MultiLocaleFetchSpec
from c3.platform.Meta import Meta
from c3.genAiBase.Genai.App.ReadOnlyConfig import Genai.App.ReadOnlyConfig
from c3.platform.WithKey import WithKey
from c3.genAiBase.Genai.UnstructuredQuery.Engine.ModelConfig import Genai.UnstructuredQuery.Engine.ModelConfig
from c3.platform.FetchStreamSpec import FetchStreamSpec
from c3.platform.FieldType import FieldType
from c3.platform.UpsertSpec import UpsertSpec
from c3.genAiBase.Genai.Translator.Config import Genai.Translator.Config
from c3.genAiBase.Genai.App.UserSettings import Genai.App.UserSettings
from c3.platform.Filter import Filter
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.genAiBase.Genai.Query import Genai.Query
from c3.platform.MapBuilder import MapBuilder
from c3.genAiSearch.Genai.UserManagement.UiHelpers.PageSettings import Genai.UserManagement.UiHelpers.PageSettings
from c3.platform.UiSdlRegisterTriggersAction import UiSdlRegisterTriggersAction
from c3.platform.UiSdlReduxState import UiSdlReduxState
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.Promise import Promise
from c3.platform.SetBuilder import SetBuilder
from c3.genAiSearch.GenAiUiFilter import GenAiUiFilter
from c3.uiInfrastructure.UiSdlApplicationStateDataAddAction import UiSdlApplicationStateDataAddAction
from c3.genAiBase.Genai.Agent.Tool.Config.UiOptions import Genai.Agent.Tool.Config.UiOptions
from c3.platform.TypeMeta import TypeMeta
from c3.genAiBase.Genai.Llm.ExternalLlm.Config import Genai.Llm.ExternalLlm.Config
from c3.platform.SetType import SetType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.FetchFilterSpec import FetchFilterSpec
from c3.platform.MapType import MapType
from c3.genAiBase.Genai.App.State import Genai.App.State
from c3.platform.Exclude import Exclude
from c3.platform.ScanStats import ScanStats
from c3.genAiBase.Genai.Agent.Persistable import Genai.Agent.Persistable
from c3.genAiBase.Genai.Conversation import Genai.Conversation
from c3.platform.DeclaredFieldType import DeclaredFieldType
from c3.platform.FetchResult import FetchResult
from c3.genAiSearch.GenAiUiConfig import GenAiUiConfig
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.MetadataDeps import MetadataDeps
from c3.platform.BatchIdsSpec import BatchIdsSpec
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.uiInfrastructure.UiSdlEffectTrigger import UiSdlEffectTrigger
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.Stream import Stream
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.genAiBase.Genai.Query.Result import Genai.Query.Result
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.genAiBase.Genai.FewShotExample import Genai.FewShotExample
from c3.platform.FetchArrowStreamSpec import FetchArrowStreamSpec
from c3.genAiBase.Genai.Query.Result.GetForUiResult import Genai.Query.Result.GetForUiResult
from c3.platform.UiSdlImmutableJS import UiSdlImmutableJS
from c3.platform.UiSdlInitialRenderAction import UiSdlInitialRenderAction
from c3.uiInfrastructure.UiSdlApplicationStateDataModifyAction import UiSdlApplicationStateDataModifyAction
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.genAiBase.Genai.Project.Settings import Genai.Project.Settings
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.ScanSpec import ScanSpec
from c3.genAiSearch.Genai.LogoImages.Config import Genai.LogoImages.Config
from c3.platform.UiSdlImmutableJS import UiSdlImmutableJS
from c3.genAiBase.Genai.Agent.Planner import Genai.Agent.Planner
from c3.uiInfrastructure.UiSdlApplicationStateDataDeleteAction import UiSdlApplicationStateDataDeleteAction
from c3.platform.File import File
from c3.platform.ExistsSpec import ExistsSpec
from c3.uiInfrastructure.UiSdlApplicationStateInitializeAction import UiSdlApplicationStateInitializeAction

# Python definitions for the C3 type GenAiUiApplicationState


class GenAiUiApplicationState(UiSdlApplicationState):
    """
    {@link UiSdlApplicationState Application} of the Search Advantage application.
    
    @remarks this represents a made instance of GenAiUiApplicationState
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

    dataSpec: Optional[UiSdlNoData]=None
    """
    The data settings for this component.
    
    @uiSdlDesignerCustomRenderer(rendererType='')
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

    REDUX_NAMESPACE: Optional[str]=None
    """
    The Redux namespace for the application state to indicate where the application data is stored in the Redux state.
    """

    effectTriggers: Optional[Array[UiSdlEffectTrigger]]=None
    """
    Collection of extra async {@link UiSdlEffectTrigger}.
    """

    isAppLoading: Optional[bool]=None
    """
    Indicates if the application is loading and the UI should show an overlay with a spinner.
    """

    projectSettings: Optional[Genai.Project.Settings]=None
    """
    Project settings (ie: default and tutorial project)
    """

    uiSettings: Optional[GenAiUiConfig]=None
    """
    UI Settings dependent on the backend configuration
    """

    userSettings: Optional[Genai.App.UserSettings]=None
    """
    User Settings for the application (ie: active project for the user)
    """

    generativeAiResult: Optional[Genai.Query.Result]=None
    """
    The result of sending the query string to the Generative AI model. Fills out answer, rationale,
    and sources in the UI
    """

    queryResultHistoryCache: Optional[Map[str, any]]=None
    """
    A representation of historical modififications to query results. This is specific to the scenario where a user
    uses a UI feature, such as the Eval Spec Popover, to make a modification to a query result and apply changes.
    A query result will only appear in this map if it was the result of such a modification.
    """

    queryString: Optional[str]=None
    """
    The most recent query string the User has input
    """

    selectedEntityId: Optional[str]=None
    """
    An entity id selected from a component in the UI
    """

    selectedPassageId: Optional[str]=None
    """
    A passage relation id selected from the search results grid
    """

    selectedDocument: Optional[Genai.SourceFile]=None
    """
    A source file selected from the Documents grid
    """

    sourceMetadataFields: Optional[Array[DeclaredFieldType]]=None
    """
    Filterable metadata fields for the app instance
    """

    sourceMetadataValues: Optional[Map[str, Set[str]]]=None
    """
    All metadata values associated with the fields in #sourceMetadataFields
    """

    uiFilters: Optional[Array[GenAiUiFilter]]=None
    """
    Filters applied through the UI
    """

    disableChat: Optional[bool]=None
    """
    Whether the chat input should be disabled
    """

    disableChatInput: Optional[bool]=None
    """
    Whether the full chat input should be disabled
    """

    disableSearch: Optional[bool]=None
    """
    Whether the chat input should be disabled
    """

    disableToolSelector: Optional[bool]=None
    """
    Whether the query tool selector should be disabled
    """

    hideFilterApply: Optional[bool]=None
    """
    Whether to hide the 'Apply' button in the filters bar
    """

    readOnlyConfig: Optional[Genai.App.ReadOnlyConfig]=None
    """
    Set of feature configuration values that are read-only to the user.
    """

    syncScheduleOptions: Optional[GenAiUiSyncScheduleOptions]=None
    """
    The saved options for document syncing.
    """

    subscriptionPlan: Optional[Any]=None
    """
    Whether or not the current application is in a free trial state.
    This is a value of type Genai.Billing.SubscriptionPlan. It is set to any because Genai.Billing.SubscriptionPlan is not in this package.
    ONLY USED IN SELF SERVICE APPLICATIONS
    """

    storedCollectionFiles: Optional[Array[File]]=None
    """
    Files fetched from the selected collection while uploading documents
    """

    selectedTagType: Optional[Genai.SourceFile.Metadata.Category]=None
    """
    A category tag type selected from the TagsGrid
    """

    queryToolOptionsLoading: Optional[bool]=None
    """
    Whether the query tool options are currently loading. This allows us to delay some UI elements until loaded.
    """

    queryToolOptions: Optional[Array[Genai.Agent.Tool.Config.UiOptions]]=None
    """
    The query tool options available to the user. This allows the user to target a specific tool when submitting a
    query.
    """

    chatQueryMultiToolSelections: Optional[Array[Genai.Agent.Tool.Config.UiOptions]]=None
    """
    The query tool options that are currently selected by the user for chat queries when allowMultipleToolSelection is set to true
    """

    selectedChatQueryTool: Optional[Genai.Agent.Tool.Config.UiOptions]=None
    """
    The query tool option that is currently selected by the user for chat queries. Search queries are handled
    separately via page params.
    """

    typeMetasCache: Optional[Map[str, TypeMeta]]=None
    """
    A map of {@link Type#name} to the associated {@link TypeMeta} for quick lookup in the UI.
    """

    conversation: Optional[Genai.Conversation]=None
    """
    The current conversation to display. Used in the Conversation Detail Page.
    """

    showUnhelpfulSpecNotif: Optional[bool]=None
    """
    Whether to show unhelpful spec notification to user
    """

    plannerOptions: Optional[Array[Genai.Agent.Persistable[Any, Any]]]=None
    """
    The planner options available to the user.
    This allows the user to target a specific planner when submitting a query.
    """

    selectedPlanner: Optional[str]=None
    """
    The name of the config of the planner selected by the user.
    """

    plannerOptionsLoading: Optional[bool]=None
    """
    Whether the planner options are currently loading. This allows us to delay some UI elements until loaded.
    """
    def __init__(self, meta: Optional[Meta]=None, id: Optional[str]=None, name: Optional[str]=None, dataSpec: Optional[UiSdlNoData]=None, disableDataRequestOnFirstRender: Optional[bool]=None, triggersRegistered: Optional[bool]=None, wrapWithMetadataId: Optional[bool]=None, REDUX_NAMESPACE: Optional[str]=None, effectTriggers: Optional[Array[UiSdlEffectTrigger]]=None, isAppLoading: Optional[bool]=None, projectSettings: Optional[Genai.Project.Settings]=None, uiSettings: Optional[GenAiUiConfig]=None, userSettings: Optional[Genai.App.UserSettings]=None, generativeAiResult: Optional[Genai.Query.Result]=None, queryResultHistoryCache: Optional[Map[str, any]]=None, queryString: Optional[str]=None, selectedEntityId: Optional[str]=None, selectedPassageId: Optional[str]=None, selectedDocument: Optional[Genai.SourceFile]=None, sourceMetadataFields: Optional[Array[DeclaredFieldType]]=None, sourceMetadataValues: Optional[Map[str, Set[str]]]=None, uiFilters: Optional[Array[GenAiUiFilter]]=None, disableChat: Optional[bool]=None, disableChatInput: Optional[bool]=None, disableSearch: Optional[bool]=None, disableToolSelector: Optional[bool]=None, hideFilterApply: Optional[bool]=None, readOnlyConfig: Optional[Genai.App.ReadOnlyConfig]=None, syncScheduleOptions: Optional[GenAiUiSyncScheduleOptions]=None, subscriptionPlan: Optional[Any]=None, storedCollectionFiles: Optional[Array[File]]=None, selectedTagType: Optional[Genai.SourceFile.Metadata.Category]=None, queryToolOptionsLoading: Optional[bool]=None, queryToolOptions: Optional[Array[Genai.Agent.Tool.Config.UiOptions]]=None, chatQueryMultiToolSelections: Optional[Array[Genai.Agent.Tool.Config.UiOptions]]=None, selectedChatQueryTool: Optional[Genai.Agent.Tool.Config.UiOptions]=None, typeMetasCache: Optional[Map[str, TypeMeta]]=None, conversation: Optional[Genai.Conversation]=None, showUnhelpfulSpecNotif: Optional[bool]=None, plannerOptions: Optional[Array[Genai.Agent.Persistable[Any, Any]]]=None, selectedPlanner: Optional[str]=None, plannerOptionsLoading: Optional[bool]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[GenAiUiApplicationState]:
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
    def fromJsonString(cls, json: str) -> Union[GenAiUiApplicationState]:
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
    def fromXmlString(cls, xml: str) -> Union[GenAiUiApplicationState]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[GenAiUiApplicationState]:
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
    def replaceType(self, old: Type, new: Type) -> GenAiUiApplicationState:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> GenAiUiApplicationState:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> GenAiUiApplicationState:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[GenAiUiApplicationState]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[GenAiUiApplicationState]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> GenAiUiApplicationState:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> GenAiUiApplicationState:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> GenAiUiApplicationState:
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
    def validateObj(self) -> GenAiUiApplicationState:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> GenAiUiApplicationState:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> GenAiUiApplicationState:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> GenAiUiApplicationState:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> GenAiUiApplicationState:
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
    def withoutFieldAtPath(self, path: str) -> GenAiUiApplicationState:
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
    def withoutField(self, field: str) -> GenAiUiApplicationState:
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
    def withoutField(self, field: FieldType) -> GenAiUiApplicationState:
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
    def withoutFields(self, fields: Array[str]) -> GenAiUiApplicationState:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> GenAiUiApplicationState:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> GenAiUiApplicationState:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> GenAiUiApplicationState:
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
    def defaultField(self, field: str) -> GenAiUiApplicationState:
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
    def defaultField(self, field: FieldType) -> GenAiUiApplicationState:
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
    def unsetField(self, field: str) -> GenAiUiApplicationState:
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
    def unsetField(self, field: FieldType) -> GenAiUiApplicationState:
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
    def removeField(self, field: str) -> GenAiUiApplicationState:
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
    def removeField(self, field: FieldType) -> GenAiUiApplicationState:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> GenAiUiApplicationState:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> GenAiUiApplicationState:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> GenAiUiApplicationState:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> GenAiUiApplicationState:
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
    def mergeJson(self, json: any) -> GenAiUiApplicationState:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> GenAiUiApplicationState:
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
    def sumObj(self, other: Obj, deep: bool=None) -> GenAiUiApplicationState:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[GenAiUiApplicationState]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[GenAiUiApplicationState]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[GenAiUiApplicationState]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[GenAiUiApplicationState]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[GenAiUiApplicationState]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, GenAiUiApplicationState]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, GenAiUiApplicationState]]:
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
    def toBuilder(self) -> ObjBuilder[GenAiUiApplicationState]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[GenAiUiApplicationState]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> GenAiUiApplicationState:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> GenAiUiApplicationState:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> GenAiUiApplicationState:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> GenAiUiApplicationState:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> GenAiUiApplicationState:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> GenAiUiApplicationState:
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
    def make(cls, s: str) -> Union[GenAiUiApplicationState]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> GenAiUiApplicationState:
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
    def afterMake(self) -> GenAiUiApplicationState:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> GenAiUiApplicationState:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[GenAiUiApplicationState]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> GenAiUiApplicationState:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    @overload
    @classmethod
    def fetch(cls, spec: FetchSpec=None) -> FetchResult[GenAiUiApplicationState]:
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
    def fetch(cls, filter: Filter) -> FetchResult[GenAiUiApplicationState]:
    """
    Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param filter
              Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
    @return Requested objs.
    """
        ...
    @classmethod
    def fetchObjStream(cls, spec: FetchStreamSpec=None) -> Union[Stream[GenAiUiApplicationState]]:
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
    def fetchMultiLocale(cls, spec: MultiLocaleFetchSpec=None) -> Union[Map[str, FetchResult[GenAiUiApplicationState]]]:
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
    def dependencies(self) -> MetadataDeps[GenAiUiApplicationState]:
    """
    Retrieves dependencies to types or other metadata elements for the given instance of metadata.
    """
        ...
    def save(self, subPath: str=None, contentType: str=None) -> GenAiUiApplicationState:
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
    def update(self, srcObj: GenAiUiApplicationState=None, spec: UpsertSpec=None) -> Union[GenAiUiApplicationState]:
        ...
    def upsert(self, srcObj: GenAiUiApplicationState=None, spec: UpsertSpec=None) -> Union[GenAiUiApplicationState]:
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
    def fromString(cls, s: str) -> Union[GenAiUiApplicationState]:
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
    def forId(cls, id: str, failIfMissing: bool=None) -> Union[GenAiUiApplicationState]:
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
    def doDataMerge(cls, componentId: str, dataSpecFieldName: str, dataDestinationFieldName: str, props: GenAiUiApplicationState, state: UiSdlReduxState) -> Union[GenAiUiApplicationState]:
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
    def getStateNamespace(cls) -> Union[str]:
    """
    Gets the namespace for this state
    @return the namespace
    """
        ...
    @classmethod
    def getInitialStateNamespace(cls) -> Union[str]:
    """
    Gets the namespace for the initial state
    @return the namespace
    """
        ...
    @classmethod
    def getConfigStatePath(cls, id: str=None) -> Union[Array[str]]:
    """
    Gets the entire path to the state
    @param id
              The id of the stateful entity
    @return an array of the entire path to the state
    """
        ...
    @classmethod
    def getInitialConfigStatePath(cls, id: str=None) -> Union[Array[str]]:
    """
    Gets the enire path to the initial state
    @param id
              The id of the stateful entity
    @return an array of the entire path to the initial state
    """
        ...
    @classmethod
    def getConfigFromState(cls, id: str=None, state: UiSdlReduxState=None, dataPath: Array[str]=None) -> Union[UiSdlImmutableJS[Any]]:
    """
    Helper method to retrieve config values from the state.
    
    @param id The stateful entity holding the config
    @param state The Redux state
    @param dataPath The path to the config
    @returns The config value as UiSdlImmutableJS
    """
        ...
    @classmethod
    def setConfigInState(cls, id: str=None, state: UiSdlReduxState=None, dataPath: Array[str]=None, value: Any=None) -> Union[UiSdlImmutableJS[Any]]:
    """
    Helper method to retrieve config values from the state.
    
    @param id The stateful entity holding the config
    @param state The Redux state
    @param dataPath The path to the config
    @param value The value to set
    @returns The new state as UiSdlImmutableJS
    """
        ...
    @classmethod
    def getInitialConfigFromState(cls, id: str=None, state: UiSdlReduxState=None, dataPath: Array[str]=None) -> Union[UiSdlImmutableJS[Any]]:
    """
    Helper method to retrieve initial config values from the state.
    
    @param id The stateful entity holding the config
    @param state The Redux state
    @param dataPath The path to the config
    @returns The config value as UiSdlImmutableJS
    """
        ...
    @classmethod
    def setInitialConfigInState(cls, id: str=None, state: UiSdlReduxState=None, dataPath: Array[str]=None, value: Any=None) -> Union[UiSdlImmutableJS[Any]]:
    """
    Helper method to retrieve initial config values from the state.
    
    @param id The stateful entity holding the config
    @param state The Redux state
    @param dataPath The path to the config
    @param value The value to set
    @returns The new state as UiSdlImmutableJS
    """
        ...
    @classmethod
    def isLimitEffectOnState(cls) -> bool:
    """
    Determines whether or not the `UiSdlState` can update state outside of its own state
    @return true if the `UiSdlState` should not be able to set state outside of its own state
    """
        ...
    @classmethod
    def getConfigFromApplicationState(cls, stateId: str, state: UiSdlReduxState, dataPath: Array[str]=None) -> UiSdlReduxState:
    """
    Retrieves config value from application state.
    
    @param stateId
              Id of the state.
    @param state
              Redux state.
    @param dataPath
              The path to the config value.
    @returns Redux state.
    """
        ...
    @classmethod
    def setConfigInApplicationState(cls, stateId: str, state: UiSdlReduxState, value: Any, dataPath: Array[str]=None) -> UiSdlReduxState:
    """
    Sets config value in application state.
    
    @param stateId
              Id of the state.
    @param state
              Redux state.
    @param dataPath
              The path to the config value.
    @param value
              The config value to set.
    @returns Redux state.
    """
        ...
    @classmethod
    def removeConfigInApplicationState(cls, stateId: str, state: UiSdlReduxState, dataPath: Array[str]=None) -> UiSdlReduxState:
    """
    Remove config value in the state.
    
    @param stateId
              Id of the state.
    @param state
              Redux state.
    @param dataPath
              The path to the config value.
    @returns Redux state.
    """
        ...
    @classmethod
    def initializeApplicationStateAction(cls, stateId: str) -> UiSdlApplicationStateInitializeAction:
    """
    Triggers when the `UiSdlApplicationState` is initialized.
    
    @param stateId
               Id of the state.
    @return a 'APPLICATION_STATE_INITIALIZE' action.
    """
        ...
    @classmethod
    def applicationStateDeleteDataAction(cls, stateId: str, ids: Array[str]=None, dataPath: str=None) -> UiSdlApplicationStateDataDeleteAction:
    """
    Action to delete data in a certain slice of the application state
    
    @param stateId
               Id of the state.
    @param ids
               Ids of the objects to be deleted
    @param dataPath
               slice of the application state to put the new object in
    @return a 'APPLICATION_STATE_DATA_DELETE' action.
    """
        ...
    @classmethod
    def applicationStateAddDataAction(cls, stateId: str, id: str=None, dataPath: str=None) -> UiSdlApplicationStateDataAddAction:
    """
    Action to add data to a certain slice in the application state
    
    @param stateId
               Id of the state.
    @param id
               Id of the newly added object
    @param dataPath
               slice of the application state to put the new object in
    @return a 'APPLICATION_STATE_DATA_ADD' action.
    """
        ...
    @classmethod
    def applicationStateModifyDataAction(cls, stateId: str, id: str=None, dataPath: str=None, field: str=None, newValue: Any=None) -> UiSdlApplicationStateDataModifyAction:
    """
    Action to modify data to a certain slice in the application state
    
    @param stateId
               Id of the state.
    @param id
               Id of the newly added object
    @param dataPath
               slice of the application state to put the new object in
    @return a 'APPLICATION_STATE_MODIFY_ADD' action.
    """
        ...
    @classmethod
    def applicationStateDataDeleteEffect(cls, state: UiSdlReduxState, action: UiSdlApplicationStateDataDeleteAction) -> UiSdlReduxState:
    """
    Listens to actions of 'APPLICATION_STATE_DATA_DELETE' and delete objects in the application state.
    
    @param state
               Redux state.
    @param action
               Redux action.
    @return the new Redux state.
    """
        ...
    @classmethod
    def applicationStateDataAddEffect(cls, state: UiSdlReduxState, action: UiSdlApplicationStateDataAddAction) -> UiSdlReduxState:
    """
    Listens to actions of 'APPLICATION_STATE_DATA_ADD' and add new data to the specified data path in the payload.
    
    @param state
               Redux state.
    @param action
               Redux action.
    @return the new Redux state.
    """
        ...
    @classmethod
    def applicationStateDataModifyEffect(cls, state: UiSdlReduxState, action: UiSdlApplicationStateDataModifyAction) -> UiSdlReduxState:
    """
    Listens to actions of 'APPLICATION_STATE_DATA_MODIFY' and add new data to the specified data path in the payload.
    
    @param state
               Redux state.
    @param action
               Redux action.
    @return the new Redux state.
    """
        ...
    @classmethod
    def generateSelector(cls, applicationId: str=None) -> Union[Callable[[Union[UiSdlReduxState]], Union[UiSdlImmutableJS[UiSdlApplicationState]]]]:
    """
    Generates a function that is able to return the application metadata from the redux state.
    @param applicationId
               The application ID to generate a selector for
    @return a function that can return the metadata for the applicationID when given the redux state
    """
        ...
    @classmethod
    def getReadOnlyConfig(cls, state: UiSdlReduxState) -> Union[Genai.App.ReadOnlyConfig]:
    """
    Gets the ReadOnlyConfig stored in application state
    """
        ...
    @classmethod
    def addQueryResultHistoryCacheEntryReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `GENERATIVE_AI_RESULT_SET` to update #queryResultHistoryCache in
    application state.
    
    @param state
              Redux state
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def setQueryResultAction(cls, id: str, generativeAiResultForUi: Genai.Query.Result.GetForUiResult) -> UiSdlReduxAction[Any]:
    """
    Triggered as the User submits the query from the {@link GenAiUiFuzzySearch} components in the application.
    @param id
              The id of the application state.
    @param generativeAiResultForUi
              The result from calling {@link Genai.Query.Result#getForUi}.
    @return a Redux action
    """
        ...
    @classmethod
    def generativeAiResultSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `GENERATIVE_AI_RESULT_SET`, and sets a provided payload {@link Genai.Query.Result} into the application state.
    
    @param state
              Redux state
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def applyLeaveFeedbackAction(cls, id: str, genAiResultId: str, helpful: bool, selections: Array[any]=None, comment: str=None, trajectoryStepId: str=None) -> UiSdlReduxAction[Any]:
    """
    Triggered when the user submits feedback.
    @param id
              The id of the application state.
    @param genAiResultId
              The result they are rating.
    @param helpful
              Thumbs up/thumbs down
    @param selections
              The selections the user made.
    @return a Redux action
    """
        ...
    @classmethod
    def setQueryStringAction(cls, id: str, queryString: str) -> UiSdlReduxAction[Any]:
    """
    Triggered as the User interacts with the {@link GenAiUiFuzzySearch} components in the application.
    @param id
              The id of the application state.
    @param queryString
              The queryString the User has input into the search.
    @return a Redux action
    """
        ...
    @classmethod
    def queryStringSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `QUERY_STRING_SET`, and sets a provided payload queryString into the application state.
    
    @param state
              Redux state
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def entityIdSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxAction[Any]:
    """
    Listens for actions of type `ENTITY_ID_SET` and sets a provided payload entity Id into the application state.
    
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def passageIdSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxAction[Any]:
    """
    Listens for actions of type `PASSAGE_ID_SET` and sets the provided payload passage Id into the application state.
    
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def blueprintStepIdSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxAction[Any]:
    """
    Listens for actions of type `BLUEPRINT_STEP_ID` and sets the provided payload blueprint step Id into the
    application state.
    
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def setDocumentDetailSelectionAction(cls, id: str, document: Genai.SourceFile) -> UiSdlReduxAction[Any]:
    """
    Triggered when the user clicks a row in the `GenAiUi.DocumentsGrid`.
    @param id
              The id of the application state.
    @param document
              The source file document
    @return a Redux action
    """
        ...
    @classmethod
    def documentDetailSelectionSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxAction[Any]:
    """
    Listens for actions of type `DOCUMENT_DETAIL_SELECTION_SET` and sets the provided payload for the selected
    Document into the application state.
    
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def setIsPollingAction(cls, id: str, dataSpecId: str, isPolling: bool, startPolling: bool=None) -> UiSdlReduxAction[Any]:
    """
    Trigger this action to signify that a data spec is currently polling. This can be used to conditionally avoid
    re-starting a new polling process if the data spec is already polling.
    """
        ...
    @classmethod
    def setIsPollingReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxAction[Any]:
    """
    Listens for actions of type `SET_IS_POLLING` and sets the polling state the application state.
    """
        ...
    @classmethod
    def setSourceMetadataFieldsAction(cls, id: str, fields: Array[DeclaredFieldType]) -> UiSdlReduxAction[Any]:
    """
    Triggered when the `GenAiUi.SearchResultPage` component is initially rendered.
    Stores the fields of {@link Genai.SourceFile.Metadata} into application state to use for the filter UX.
    @param id
              The id of the application state.
    @param fields
              The filterable metadata fields.
    @return a Redux action
    """
        ...
    @classmethod
    def setSourceMetadataFieldsReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxAction[Any]:
    """
    Listens for actions of type `SOURCE_METADATA_FIELDS_SET` and sets the filterable metadata fields in application state.
    """
        ...
    @classmethod
    def setSourceMetadataValuesAction(cls, id: str, values: Map[str, Set[str]]) -> UiSdlReduxAction[Any]:
    """
    Triggered when the `GenAiUi.SearchResultPage` component is initially rendered.
    Stores the values of {@link Genai.SourceFile.Metadata} into application state to use for fuzzy search in the filter UX.
    @param id
              The id of the application state.
    @param values
              The values of the filterable metadata fields.
    @return a Redux action
    """
        ...
    @classmethod
    def setSourceMetadataValuesReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxAction[Any]:
    """
    Listens for actions of type `SOURCE_METADATA_VALUES_SET` and sets the metadata values in application state.
    """
        ...
    @classmethod
    def loadSettingsAction(cls, id: str) -> UiSdlReduxAction[Any]:
    """
    Triggered to load the settings of the application state. For example, it is used
    to reload the settings after the active project is changed from the UI.
    """
        ...
    @classmethod
    def setProjectSettingsAction(cls, id: str, projectSettings: Genai.Project.Settings) -> UiSdlReduxAction[Any]:
    """
    Triggered when the app is initially rendered.
    Stores the User Settings into application state.
    @param id
              The id of the application state.
    @param projectSettings
              The project settings to set in the application state.
    @return a Redux action
    """
        ...
    @classmethod
    def setProjectSettingsReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxAction[Any]:
    """
    Listens for actions of type `PROJECT_SETTINGS_SET` and sets the project settings the application state.
    """
        ...
    @classmethod
    def setUiSettingsAction(cls, id: str, uiSettings: GenAiUiConfig=None) -> UiSdlReduxAction[Any]:
    """
    Triggered when the `GenAiUi.SearchResultPage` component is initially rendered.
    Stores the UI Settings dependent on the Genai.ChatBot configuration into application state.
    @param id
              The id of the application state.
    @param uiSettings
              The UI Settings to set in the application state.
    @return a Redux action
    """
        ...
    @classmethod
    def setUiSettingsReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxAction[Any]:
    """
    Listens for actions of type `UI_SETTINGS_SET` and sets the UI Settings the application state.
    """
        ...
    @classmethod
    def setTranslatorConfigAction(cls, id: str, translatorConfig: Genai.Translator.Config=None) -> UiSdlReduxAction[Any]:
    """
    Stores the translation config for multi-lingual configuration into application state.
    @param id
              The id of the application state.
    @param translatorConfig
              Whether translation config is enabled to set in the application state.
    @return a Redux action
    """
        ...
    @classmethod
    def setTranslatorConfigReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxAction[Any]:
    """
    Listens for actions of type `TRANSLATOR_CONFIG_SET` and sets the translation config the application state.
    """
        ...
    @classmethod
    def setUserSettingsAction(cls, id: str, userSettings: Genai.App.UserSettings) -> UiSdlReduxAction[Any]:
    """
    Triggered when the app is initially rendered.
    Stores the User Settings into application state.
    @param id
              The id of the application state.
    @param userSettings
              The user settings to set in the application state.
    @return a Redux action
    """
        ...
    @classmethod
    def setUserSettingsReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxAction[Any]:
    """
    Listens for actions of type `USER_SETTINGS_SET` and sets the user settings the application state.
    """
        ...
    @classmethod
    def setDisableChatAction(cls, id: str, shouldDisable: bool=None) -> UiSdlReduxAction[Any]:
    """
    Listens for actions of type `DISABLE_CHAT_SET` and sets whether the chat is disabled in
    the application state.
    """
        ...
    @classmethod
    def setDisableChatReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `DISABLE_CHAT_SET` and sets whether the chat reducer is disabled
    in the application state.
    """
        ...
    @classmethod
    def setDisableSearchAction(cls, id: str, shouldDisable: bool=None) -> UiSdlReduxAction[Any]:
    """
    Stores the `shouldDisable` field into the application state to determine whether to disable the search input.
    @param id
              The id of the application state.
    @param shouldDisable
              Whether to disable the search input.
    @return a Redux action
    """
        ...
    @classmethod
    def setDisableSearchReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `DISABLE_SEARCH_SET` and sets shouldDisable into the application state.
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def setDisableToolSelectorAction(cls, id: str, shouldDisable: bool=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to disable the tool selector, (e.g. the user selects Math Agent by clicking on the calculator icon in a grid)
    Stores the `shouldDisable` field into the application state to determine whether to disable the tool selector.
    @param id
              The id of the application state.
    @param shouldDisable
              Whether to disable the tool selector.
    @return a Redux action
    """
        ...
    @classmethod
    def setDisableToolSelectorReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `DISABLE_TOOL_SELECTOR` and sets disableToolSelector into the application state.
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def setDisableChatInputAction(cls, id: str, shouldDisable: bool=None) -> UiSdlReduxAction[Any]:
    """
    Triggered when the training admin selects option yes in the eval spec popover.
    Stores the `shouldDisable` field into the application state to determine whether to disable the chat input.
    @param id
              The id of the application state.
    @param shouldDisable
              Whether to disable the chat input.
    @return a Redux action
    """
        ...
    @classmethod
    def setDisableChatInputReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `DISABLE_CHAT_INPUT_SET` and sets shouldDisable into the application state.
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def setEvalSpecPopoverHighlightAction(cls, id: str, shouldHighlight: bool, queryOrigin: str) -> UiSdlReduxAction[Any]:
    """
    Triggered when the user selects relational database query in the negative feedback popover.
    Stores the `shouldHighlight` field in the state to determine whether to highlight the eval spec popover button.
    Stores the `queryOrigin` field in the state to record the query type.
    @param id
              The id of the application state.
    @param shouldHighlight
              Whether to highlight the eval spec popover button.
    @param queryOrigin
              The query type from where the action was triggered.
    @return a Redux action
    """
        ...
    @classmethod
    def setEvalSpecPopoverHighlightReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `HIGHLIGHT_EVAL_SPEC_POPOVER_SET` and sets shouldHighlight and queryOrigin
    into the application state.
    
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def setHideFilterApplyAction(cls, id: str, shouldDisable: bool=None) -> UiSdlReduxAction[Any]:
    """
    Action creator for actions of type `HIDE_FILTER_APPLY_SET`
    """
        ...
    @classmethod
    def setHideFilterApplyReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Reducer for actions of type `HIDE_FILTER_APPLY_SET`
    """
        ...
    @classmethod
    def setUiFiltersReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Reducer for actions of type `UI_FILTERS_SET`
    """
        ...
    @classmethod
    def getUiFilters(cls, state: UiSdlReduxState) -> Union[Array[GenAiUiFilter]]:
    """
    Helper function to get the UI filters from the application state.
    """
        ...
    @classmethod
    def setIsAppLoadingAction(cls, id: str, isAppLoading: bool=None) -> UiSdlReduxAction[Any]:
    """
    Triggered when a app blocking operation is triggered or has finished processing.
    Stores the "isAppLoading" field in the state to determine whether to render the spinner.
    @param id
              The id of the application state.
    @param isAppLoading
              Whether the UI should show the app-level spinner or not.
    @return a Redux action
    """
        ...
    @classmethod
    def setIsAppLoadingReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Reducer for actions of type `IS_APP_LOADING_SET`
    """
        ...
    @classmethod
    def setSubscriptionPlanAction(cls, id: str, subscriptionPlan: any=None) -> UiSdlReduxAction[Any]:
    """
    Triggered when the Application state is initially rendered.
    Stores the current subscription plan, regardless if free or paid, in the application state.
    @param id
              The id the application state.
    @param subscriptionPlan
              The current subscription plan.
    @return a Redux action
    """
        ...
    @classmethod
    def setSubscriptionPlanReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Reducer for actions of type `SUBSCRIPTION_PLAN_SET`
    """
        ...
    @classmethod
    def refreshQueryToolOptionsAction(cls) -> UiSdlReduxAction[Any]:
    """
    Action creator for actions of type `REFRESH_QUERY_TOOL_OPTIONS`
    """
        ...
    @classmethod
    def setQueryToolOptionsLoadingAction(cls, queryToolOptions: Array[Genai.Agent.Tool.Config.UiOptions]=None) -> UiSdlReduxAction[Any]:
    """
    Triggered on initial page load to set the query tool options loading state while the #queryToolOptions are
    being loaded.
    """
        ...
    @classmethod
    def setQueryToolOptionsLoadingReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Reducer for actions of type `QUERY_TOOL_OPTIONS_LOADING_SET`
    """
        ...
    @classmethod
    def setQueryToolOptionsAction(cls, queryToolOptions: Array[Genai.Agent.Tool.Config.UiOptions]=None) -> UiSdlReduxAction[Any]:
    """
    Triggered on initial page load to set the available query tool options. If multiple options exist, they will be
    presented to the user next to the search input, allowing the user to select a specific tool when running queries.
    """
        ...
    @classmethod
    def setQueryToolOptionsReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Reducer for actions of type `QUERY_TOOL_OPTIONS_SET`
    """
        ...
    @classmethod
    def setSearchQueryToolSelectionAction(cls, searchQueryToolSelection: Genai.Agent.Tool.Config.UiOptions=None, payloadPath: Array[str]=None) -> UiSdlReduxAction[Any]:
    """
    Triggered a) on page load if {@link GenAiUiConfig#queryToolSelectorVisibility} is set to "full" or "hideAllOption",
    and b) when the user sets the query tool from action button dropdown next to the search input.
    """
        ...
    @classmethod
    def searchQueryToolSelectionSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `SEARCH_QUERY_TOOL_SELECTION_SET` and sets the selected query tool in the application state.
    """
        ...
    @classmethod
    def setSearchQueryMultiToolSelectionAction(cls, searchQueryMultiToolSelection: Array[Genai.Agent.Tool.Config.UiOptions]=None, payloadPath: Array[str]=None) -> UiSdlReduxAction[Any]:
    """
    Triggered when allowMultipleToolSelection is set to true and
    when the user selects query tools from the action button dropdown next to the search input.
    """
        ...
    @classmethod
    def searchQueryMultiToolSelectionSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `SEARCH_QUERY_MULTI_TOOL_SELECTION_SET` and sets the selected query tools in the application state.
    """
        ...
    @classmethod
    def setChatQueryMultiToolSelectionsAction(cls, chatQueryMultiToolSelections: Array[Genai.Agent.Tool.Config.UiOptions]=None, payloadPath: Array[str]=None) -> UiSdlReduxAction[Any]:
    """
    Triggered when allowMultipleToolSelection is set to true and
    when the user selects query tools from the action button dropdown next to the search input for chat queries
    """
        ...
    @classmethod
    def chatQueryMultiToolSelectionsSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `CHAT_QUERY_MULTI_TOOL_SELECTIONS_SET` and sets the selected query tools for chat queries in the application state.
    """
        ...
    @classmethod
    def setChatQueryToolSelectionAction(cls, chatQueryToolSelection: Genai.Agent.Tool.Config.UiOptions=None, payloadPath: Array[str]=None) -> UiSdlReduxAction[Any]:
    """
    If {@link GenAiUiConfig#queryToolSelectorVisibility} is set to "full" or "hideAllOption", this is triggered upon
    search to set the selected _chat_ query tool in application state. Note that this query tool selection is specific
    to chat queries and is maintained separately from the one that lives in page params. That one controls the
    selected query tool for searches. This is also triggered when the user changes the chat query tool from the UI.
    """
        ...
    @classmethod
    def chatQueryToolSelectionSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `CHAT_QUERY_TOOL_SELECTION_SET` and sets the selected query tool in the application state.
    """
        ...
    @classmethod
    def setUserManagementPageSettingsAction(cls, id: str, userManagementPageSettings: Genai.UserManagement.UiHelpers.PageSettings=None) -> UiSdlReduxAction[Any]:
    """
    Triggered on load of the User Management page and when the users have changed
    (see UserManagement.ApplicationState.USERS_CHANGED). Fetches information used by the User Management page and any
    children components on the page.
    """
        ...
    @classmethod
    def setUserManagementPageSettingsReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Reducer for actions of type `USER_MANAGEMENT_PAGE_SETTINGS_SET`
    """
        ...
    @classmethod
    def setAvailableSourcesAction(cls, sources: Array[Genai.SourceFile]=None) -> UiSdlReduxAction[Any]:
    """
    Action creator for actions of type `SET_AVAILABLE_SOURCES`
    """
        ...
    @classmethod
    def setAvailableSourcesReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Reducer for actions of type `SET_AVAILABLE_SOURCES`
    """
        ...
    @classmethod
    def startDataModelListenerAction(cls, id: str) -> UiSdlReduxAction[Any]:
    """
    Triggered when the data model listener is started.
    """
        ...
    @classmethod
    def refreshServerSideAppStateAction(cls, id: str) -> UiSdlReduxAction[Any]:
    """
    Triggered periodically to poll the server side app state.
    """
        ...
    @classmethod
    def setServerSideAppStateAction(cls, id: str) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the server side app state in client side.
    """
        ...
    @classmethod
    def setServerSideAppStateReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Reducer for actions of type `SERVER_SIDE_APP_STATE_SET`
    """
        ...
    @classmethod
    def getServerSideAppState(cls, state: UiSdlReduxState) -> Union[Genai.App.State]:
    """
    Gets the server-side app state stored in application state
    """
        ...
    @classmethod
    def setReadOnlyConfigAction(cls, id: str, readOnlyConfig: Genai.App.ReadOnlyConfig=None) -> UiSdlReduxAction[Any]:
    """
    Triggered on page load, it feches the canary mode status for the app and sets it in the application state.
    """
        ...
    @classmethod
    def setReadOnlyConfigReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Reducer for actions of type `READ_ONLY_CONFIG_SET`
    """
        ...
    @classmethod
    def setStoredCollectionFilesAction(cls, id: str, files: Array[File]=None) -> UiSdlReduxAction[Any]:
    """
    Stores the files under the selected collection
    """
        ...
    @classmethod
    def storedCollectionFilesSetEffect(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Reducer for actions of type `STORED_COLLECTION_FILES_SET`
    """
        ...
    @classmethod
    def setStreamedAnswerAction(cls, id: str, partialAnswer: str=None) -> UiSdlReduxAction[Any]:
    """
    Triggered when a stream chunk is received. Sets the partially received answer in the UI.
    """
        ...
    @classmethod
    def streamedAnswerSetEffect(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Reducer for actions of type `STREAMED_ANSWER_SET`
    """
        ...
    @classmethod
    def setTypewriterDelayAction(cls, id: str, delay: int=None) -> UiSdlReduxAction[Any]:
    """
    Triggered when streaming begins.
    Sets the typewriter delay to the configured amount in {@link Genai.Streaming.Config}.
    """
        ...
    @classmethod
    def typewriterDelaySetEffect(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Reducer for actions of type `TYPEWRITER_DELAY_SET`
    """
        ...
    @classmethod
    def refreshTypeMetasCacheAction(cls) -> UiSdlReduxAction[Any]:
    """
    An action to trigger loading/refreshing of the {@link TypeMeta}s cache.
    
    @return a `REFRESH_TYPE_METAS_CACHE` action
    """
        ...
    @classmethod
    def setTypeMetasCacheAction(cls, typeMetas: Array[TypeMeta]=None) -> UiSdlReduxAction[Any]:
    """
    An action to update the #typeMetasCache.
    
    @param typeMetas
              The {@link TypeMeta}s to add to the cache
    
    @return a `SET_TYPE_METAS_CACHE` action
    """
        ...
    @classmethod
    def setTypeMetasCacheReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `SET_TYPE_METAS_CACHE` and updates the #typeMetasCache.
    """
        ...
    @classmethod
    def setTagTypeAction(cls, stateId: str, tagType: Genai.SourceFile.Metadata.Category) -> UiSdlReduxAction[Any]:
    """
    Triggered when the user clicks a row in the `GenAiUi.TagsGrid`.
    @param stateId
              The id of the application state.
    @param tagType
              The category tag type to be set in the application state.
    @return a Redux action
    """
        ...
    @classmethod
    def tagTypeSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxAction[Any]:
    """
    Listens for actions of type `SET_TAG_TYPE` and sets the provided payload for the selected
    TagType into the application state.
    
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def setConversationAction(cls, id: str, conversation: Genai.Conversation=None) -> UiSdlReduxAction[Any]:
    """
    Triggered when the user loads into the query detail page.
    Sets the current conversation to the one derived by the query ID in the URL params.
    """
        ...
    @classmethod
    def setConversationReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `CONVERSATION_SET` and sets the provided conversation into app state.
    
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def setSelectedConversationAction(cls, stateId: str, conversation: Genai.Conversation) -> UiSdlReduxAction[Any]:
    """
    Action to set the currently selected conversation for renaming/deletion.
    
    @param stateId
              The id of the application state.
    @param conversation
              The {@link Genai.Conversation} to set as selected
    @return a new Redux state
    """
        ...
    @classmethod
    def setSelectedConversationReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `SELECTED_CONVERSATION_SET` and sets the currently selected conversation.
    
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def setRecentConversationsAction(cls, stateId: str, conversations: Array[Genai.Conversation]) -> UiSdlReduxAction[Any]:
    """
    Action to set the conversation history to show in the side panel.
    
    @param stateId
              The id of the application state.
    @param conversations
              The recent {@link Genai.Conversation}s
    @return a new Redux state
    """
        ...
    @classmethod
    def setRecentConversationsReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens to actions of type 'RECENT_CONVERSATIONS_SET' and sets the conversation history to show in the side panel.
    
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def removeRecentConversationAction(cls, stateId: str, conversationId: str) -> UiSdlReduxAction[Any]:
    """
    Action to remove a conversation from the conversation history list shown in the side panel.
    
    @param stateId
              The id of the application state.
    @param conversationId
              The id of the {@link Genai.Conversation} to remove
    @return a new Redux state
    """
        ...
    @classmethod
    def removeRecentConversationReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens to actions of type `RECENT_CONVERSATION_REMOVE` and removes conversation from the conversation history.
    
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def addRecentConversationAction(cls, stateId: str, conversation: Genai.Conversation) -> UiSdlReduxAction[Any]:
    """
    Action to add a conversation from the conversation history list shown in the side panel.
    
    @param stateId
              The id of the application state.
    @param conversation
              The {@link Genai.Conversation} to add to the history.
    @return a new Redux state
    """
        ...
    @classmethod
    def addRecentConversationReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens to actions of type `RECENT_CONVERSATION_ADD` and adds conversation to the conversation history.
    
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def setShowUnhelpfulSpecNotifAction(cls, id: str, showUnhelpfulSpecNotif: bool, queryOrigin: str) -> UiSdlReduxAction[Any]:
    """
    Triggered when user has edited the spec and indicated query result to be unhelpful.
    Stores the `showUnhelpfulSpecNotif` field in the state to determine whether to render the unhelpful spec notification.
    Stores the `queryOrigin` field in the state to record the query type.
    @param id
              The id of the application state.
    @param showUnhelpfulSpecNotif
              Whether to show unhelpful spec notification to user
    @param queryOrigin
              The query type from where the action was triggered.
    @return a Redux action
    """
        ...
    @classmethod
    def setShowUnhelpfulSpecNotifReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `SHOW_UNHELPFUL_SPEC_NOTIF_SET` and sets showUnhelpfulSpecNotif and queryOrigin
    into the application state.
    
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def setProjectsModeAction(cls, usingProjects: bool=None) -> UiSdlReduxAction[Any]:
    """
    Action creator for actions of type `SET_PROJECTS_MODE`
    """
        ...
    @classmethod
    def setProjectsModeReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Reducer for actions of type `SET_PROJECTS_MODE`
    """
        ...
    @classmethod
    def setAttributionEnabledStateAction(cls, id: str, visibility: bool) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the {@link Genai.Agent.Tool.Util.Attributor.Spec} setting to state in client side. This variable represents if the feature is enable/disable.
    """
        ...
    @classmethod
    def setAttributionEnabledStateReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Reducer for actions of type `IS_ATTRIBUTION_ENABLED_STATE_SET`
    """
        ...
    @classmethod
    def setShowCorroborationResultStateAction(cls, id: str, showCorroborationResult: bool) -> UiSdlReduxAction[Any]:
    """
    Triggered when the user select if the corroboration results should be display/hide in the UI.
    """
        ...
    @classmethod
    def setShowCorroborationResultStateReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Reducer for actions of type `SHOW_CORROBORATION_RESULT_STATE_SET`
    """
        ...
    @classmethod
    def submitSearchQueryAction(cls, id: str, searchQuery: Genai.Query) -> Union[UiSdlReduxAction[Any]]:
    """
    Kicks off a `SEARCH_QUERY_SUBMIT` action with the {@link Genai.Query} that the user clicked.
    """
        ...
    @classmethod
    def setImagesLogoStateAction(cls, id: str, images: Genai.LogoImages.Config) -> UiSdlReduxAction[Any]:
    """
    Triggered when the app is initially rendered.
    Stores the {@link Genai.LogoImages.Config} into application state.
    @param id
              The id of the application state.
    @param images
              The {@link Genai.LogoImages.Config} to be set in the application state.
    @return a Redux action
    """
        ...
    @classmethod
    def setImagesLogoStateReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `SET_IMAGES_LOGO` and sets the {@link Genai.LogoImages.Config} into the application state.
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def setPlannerOptionsAction(cls, id: str=None, plannerOptions: Array[Genai.Agent.Persistable[Any, Any]]=None) -> UiSdlReduxAction[Any]:
    """
    Triggered on initial page load to set the available planner options. If multiple options exist, they will be
    presented to the user next to the search input, allowing the user to select a specific planner when running queries.
    @param id
              The id of the application state.
    @param plannerOptions
              List of planner options available to the user.
    @return a Redux action
    """
        ...
    @classmethod
    def setPlannerOptionsReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `PLANNER_OPTIONS_SET` and sets the provided payload for the plan and execute options
    into the application state.
    """
        ...
    @classmethod
    def setPlannerSelectionAction(cls, id: str=None, selectedPlanner: Genai.Agent.Planner=None, toggle: bool=None) -> UiSdlReduxAction[Any]:
    """
    Triggered a) on page load if {@link GenAiUiConfig#queryToolSelectorVisibility} is set to "full" or "hideAllOption",
    and b) when the user sets the planner from action button dropdown next to the search input.
    @param id
              The id of the application state.
    @param selectedPlanner
              The planner selected by the user or the default planner.
    @param toggle
              Whether to show the planner selection.
    @return a Redux action
    """
        ...
    @classmethod
    def plannerSelectionSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `PLANNER_SELECTION_SET` and sets the selected planner in the application state.
    """
        ...
    @classmethod
    def refreshPlannerOptionsAction(cls, id: str=None) -> UiSdlReduxAction[Any]:
    """
    Triggered when the page is loaded or refreshed to set the planner options.
    @param id
              The id of the application state.
    """
        ...
    @classmethod
    def setPlannerOptionsLoadingAction(cls, id: str=None, isLoading: bool=None) -> UiSdlReduxAction[Any]:
    """
    Triggered on initial page load to set the query tool options loading state while the #queryToolOptions are
    being loaded.
    
    @param id
              The id of the application state.
    @param isLoading
              Whether the planner options are currently loading.
    """
        ...
    @classmethod
    def setPlannerOptionsLoadingReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Reducer for actions of type `PLANNER_OPTIONS_LOADING_SET`
    """
        ...
    @classmethod
    def setModelConfigCurrentFewShotAction(cls, stateId: str, currentFewShot: Genai.FewShotExample=None) -> UiSdlReduxAction[Any]:
    """
    Triggered when the user selects a few shot example to see its details.
    Stores the `currentFewShot` field in the state to determine the selected few shot example.
    @param stateId
              The id of the application state.
    @param currentFewShot
              The selected few shot value.
    @return a Redux action
    """
        ...
    @classmethod
    def setModelConfigCurrentFewShotReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Listens for actions of type `SET_MODEL_CONFIG_CURRENT_FEW_SHOT` and sets the provided payload for the current few shot
    into the application state.
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def addTagToDocumentAction(cls, id: str=None, activeAction: str=None, requestPayload: Any=None) -> UiSdlReduxAction[Any]:
    """
    Initiates an `ADD_TAG_TO_DOCUMENT` action to add a {@link Genai.SourceFile.Metadata.Tag} to the specified {@link Genai.SourceFile}.
    
    @param id
           The id of the application state.
    @param activeAction
          The action that was triggered.
    @param requestPayload
           The payload to be sent with the action to manage the {@link Genai.SourceFile.Metadata.Tag}.
    """
        ...
    @classmethod
    def editTagInDocumentAction(cls, id: str=None, activeAction: str=None, requestPayload: Any=None) -> UiSdlReduxAction[Any]:
    """
    Initiates an `EDIT_TAG_IN_DOCUMENT` action to modify a {@link Genai.SourceFile.Metadata.Tag} within a specified {@link Genai.SourceFile}.
    
    @param id
           The id of the application state.
    @param activeAction
           The action that was triggered.
    @param requestPayload
           The payload to be sent with the action to manage the {@link Genai.SourceFile.Metadata.Tag}.
    """
        ...
    @classmethod
    def removeTagFromDocumentAction(cls, id: str=None, activeAction: str=None, requestPayload: Any=None) -> UiSdlReduxAction[Any]:
    """
    Initiates a `REMOVE_TAG_FROM_DOCUMENT` action to remove a {@link Genai.SourceFile.Metadata.Tag} from a specified {@link Genai.SourceFile}.
    
    @param id
           The id of the application state.
    @param activeAction
           The action that was triggered.
    @param requestPayload
           The payload to be sent with the action to manage the {@link Genai.SourceFile.Metadata.Tag}.
    """
        ...
    @classmethod
    def setCredentialSelectedAction(cls, id: str, credential: Genai.Llm.ExternalLlm.Config) -> UiSdlReduxAction[Any]:
    """
    Triggered when the user clicks a row in the `GenAiUi.CredentialsGrid`.
    @param id
              The id of the application state.
    @param credential
              The credential to be set in the application state.
    @return a Redux action
    """
        ...
    @classmethod
    def setCredentialSelectedReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxAction[Any]:
    """
    Listens for actions of type `SET_CREDENTIAL_SELECTED` and sets the provided payload for the selected
    credential into the application state.
    
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def setAuthFieldsSelectedAction(cls, id: str, authFields: any) -> UiSdlReduxAction[Any]:
    """
    Triggered when the authFields data is loaded.
    @param id
              The id of the application state.
    @param authFields
              The authFields to be set in the application state.
    @return a Redux action
    """
        ...
    @classmethod
    def setAuthFieldsSelectedReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxAction[Any]:
    """
    Listens for actions of type `SET_AUTH_FIELDS_SELECTED` and sets the provided payload for the selected
    authFields into the application state.
    
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def setLLMSelectedAction(cls, id: str, llm: Genai.UnstructuredQuery.Engine.ModelConfig) -> UiSdlReduxAction[Any]:
    """
    Triggered when the user clicks a row in the `GenAiUi.CredentialsGrid`.
    @param id
              The id of the application state.
    @param llm
              The LLM to be set in the application state.
    @return a Redux action
    """
        ...
    @classmethod
    def setLLMSelectedReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxAction[Any]:
    """
    Listens for actions of type `SET_LLM_SELECTED` and sets the provided payload for the selected
    LLM into the application state.
    
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def setLLMParamsSelectedAction(cls, id: str, LLMParams: any) -> UiSdlReduxAction[Any]:
    """
    Triggered when the LLM Params data is loaded.
    @param id
              The id of the application state.
    @param LLMParams
              The LMM params to be set in the application state.
    @return a Redux action
    """
        ...
    @classmethod
    def setLLMParamsSelectedReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxAction[Any]:
    """
    Listens for actions of type `SET_LLM_PARAMS_SELECTED` and sets the provided payload for the selected
    LLMParams into the application state.
    
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...
    @classmethod
    def setLLMsFormSValidationAction(cls, id: str, actionForm: str, isValid: bool) -> UiSdlReduxAction[Any]:
    """
    Triggered when the user edit a field on a form in LLM pages.
    @param id
              The id of the application state.
    @param actionForm
              The form that was edited.
    @param isValid
              The boolean value that indicates if the form is valid.
    @return a Redux action
    """
        ...
    @classmethod
    def setLLMsFormSValidationReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxAction[Any]:
    """
    Listens for actions of type `SET_LLM_FORMS_VALIDATION` and sets the provided payload for the selected
    LLM into the application state.
    
    @param state
              Redux State
    @param action
              Redux action
    @return a new Redux state
    """
        ...

