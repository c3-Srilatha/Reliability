#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.platform.UiSdlNoData import UiSdlNoData
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.MultiLocaleFetchSpec import MultiLocaleFetchSpec
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Meta import Meta
from c3.platform.FetchResult import FetchResult
from c3.platform.ReactComponentPropsSpec import ReactComponentPropsSpec
from c3.platform.WithKey import WithKey
from c3.platform.MapBuilder import MapBuilder
from c3.platform.FetchStreamSpec import FetchStreamSpec
from c3.platform.FieldType import FieldType
from c3.platform.UpsertSpec import UpsertSpec
from c3.platform.Filter import Filter
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.UiSdlRegisterTriggersAction import UiSdlRegisterTriggersAction
from c3.platform.UiSdlReduxState import UiSdlReduxState
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetType import SetType
from c3.platform.FetchFilterSpec import FetchFilterSpec
from c3.platform.MapType import MapType
from c3.platform.Exclude import Exclude
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.ScanStats import ScanStats
from c3.platform.ScanArrowSpec import ScanArrowSpec
from c3.platform.MetadataDeps import MetadataDeps
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.BatchIdsSpec import BatchIdsSpec
from c3.uiInfrastructure.UiSdlActionsObservable import UiSdlActionsObservable
from c3.platform.Pkg.Issue import Pkg.Issue
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.UiSdlReduxAction import UiSdlReduxAction
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Stream import Stream
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.FetchArrowStreamSpec import FetchArrowStreamSpec
from c3.platform.UiSdlInitialRenderAction import UiSdlInitialRenderAction
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.ArrowIterator import ArrowIterator
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.ScanSpec import ScanSpec
from c3.platform.SetBuilder import SetBuilder
from c3.uiInfrastructure.UiSdlStatesObservable import UiSdlStatesObservable
from c3.platform.ExistsSpec import ExistsSpec
from c3.platform.Promise import Promise

# Python definitions for the C3 type DataFusionCodeEditorContainerReact


class DataFusionCodeEditorContainerReact(ReactFunction, DataFusionCodeEditorContainer):
    """
    React renderer for {@link DataFusionCodeEditorContainer}
    
    @remarks this represents a made instance of DataFusionCodeEditorContainerReact
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

    isNewEntity: Optional[bool]=None
    """
    Whether the type under edit is a new entity. This should only be set from `true` to `false` once
    a new entity type is saved successfully. Should be set to false if editing an existing root package type
    or remixing a type.
    """

    isRemix: Optional[bool]=None
    """
    Whether the type under edit is a remix type.
    """

    activeTypeName: Optional[str]=None
    """
    The name of the type under edit.
    """

    codeEditorTemplates: Optional[Array[any]]=None
    """
    The templates to be rendered when creating a new entity
    """

    typeDeclarationCode: Optional[str]=None
    """
    The code that is rendered for the type declaration in the code editor.
    """

    initialTypeDeclarationCode: Optional[str]=None
    """
    The type declaration code as it is first loaded in the code editor.
    """

    typeImplementationJsCode: Optional[str]=None
    """
    The js implementation code for the type.
    """

    remixImplementationJsCode: Optional[str]=None
    """
    If remixing, the remix implementation js code.
    """

    initialTypeImplementationJsCode: Optional[str]=None
    """
    The initial js implementation code for the type, as it is first loaded in the code editor.
    """

    initialRemixImplementationJsCode: Optional[str]=None
    """
    If remixing, the initial js implementation code for the remix, as it is first loaded in the code editor.
    """

    functionNamesList: Optional[Array[str]]=None
    """
    A list of function names for the current type, grouped by member functions and static functions.
    """

    functionDeclarations: Optional[Map[str, str]]=None
    """
    A map of function names to their declarations.
    """

    functionImplementationStatus: Optional[Map[str, bool]]=None
    """
    Status of if the function is implemented or not
    """

    remixDeclarationCode: Optional[str]=None

    resolvedDeclarationCode: Optional[str]=None
    """
    Resolved remix code, stored separately so we don't clear the original code
    """

    visibleEditorPane: Optional[str]=None
    """
    The editor pane that is currently visible
    """

    editorPaneMode: Optional[str]=None
    """
    {@link DataFusionCodeEditorContainerMode} enum to describe the editor pane mode; read-only or edit
    """

    remixPaneMode: Optional[str]=None
    """
    {@link DataFusionCodeEditorContainerMode} enum to describe the remix pane mode; edit or read-only
    """

    remixEditMode: Optional[str]=None
    """
    When in remix `edit` mode, we can be in one of three views
    """

    codeEditorDataLoading: Optional[bool]=None
    """
    Set/clear the spinner
    """

    didSetInitialRemixCode: Optional[bool]=None
    """
    Set the initial remix code once. Thereafter, use the code state
    """

    isEvaluatingSyntax: Optional[bool]=None
    """
    Whether the code editor is currently evaluating syntax.
    """

    isCreatingOrUpdatingEntity: Optional[bool]=None
    """
    Whether the code editor is currently saving or updating a type.
    """

    codeEditorConsoleIssues: Optional[Map[str, Array[Pkg.Issue]]]=None
    """
    The list of issues in the code editor console, grouped by file.
    """

    shouldFetchCodeEditorConsoleIssues: Optional[bool]=None
    """
    Whether the fetch for the issues in the code editor console should start
    """

    codeEditorConsoleIssuesFetchCount: Optional[int]=None
    """
    Keeps track of how many times the code editor console issues have been fetched.
    It is used to limit the number of fetch attempts.
    """

    codeEditorCreateUpdateModalTexts: Optional[Map[str, str]]=None
    """
    The texts to be displayed in the code editor create/update modal.
    """

    codeEditorSuggestedFileContent: Optional[Map[str, str]]=None
    """
    The map of language to corresponding suggested file content
    js -> suggested js impl of file
    c3typ -> suggested type declaration of file
    Will support python and json in 8.10
    """

    codeEditorOriginalFileContent: Optional[Map[str, str]]=None
    """
    The map of language to correponding original file content
    This is used when the user rejects the suggested changes
    js -> original js impl of file
    c3typ -> original type declaration of file
    Will support python and json in 8.10
    """

    codeEditorDiffPatches: Optional[Map[str, Array[any]]]=None
    """
    The map of language to correponding diff patches
    This is used to show the diff and highlight in the code editor
    e.g.
    [
     {codeBlock: "line1\n", status: null, lineNumbers: [1]},
     {codeBlock: "line2\n", status: 'removed', lineNumbers: [2]},
     {codeBlock: "line2_modified\n", status: 'added', lineNumbers: [3]},
     {codeBlock: "line3\n", status: null, lineNumbers: [4]}
    ]
    """

    pendingResolutionMessageIds: Optional[Map[str, str]]=None
    """
    The map of language to the id of latest message that contains suggested file content neither accepted nor rejected
    """
    def __init__(self, meta: Optional[Meta]=None, id: Optional[str]=None, name: Optional[str]=None, dataSpec: Optional[UiSdlNoData]=None, disableDataRequestOnFirstRender: Optional[bool]=None, triggersRegistered: Optional[bool]=None, wrapWithMetadataId: Optional[bool]=None, isNewEntity: Optional[bool]=None, isRemix: Optional[bool]=None, activeTypeName: Optional[str]=None, codeEditorTemplates: Optional[Array[any]]=None, typeDeclarationCode: Optional[str]=None, initialTypeDeclarationCode: Optional[str]=None, typeImplementationJsCode: Optional[str]=None, remixImplementationJsCode: Optional[str]=None, initialTypeImplementationJsCode: Optional[str]=None, initialRemixImplementationJsCode: Optional[str]=None, functionNamesList: Optional[Array[str]]=None, functionDeclarations: Optional[Map[str, str]]=None, functionImplementationStatus: Optional[Map[str, bool]]=None, remixDeclarationCode: Optional[str]=None, resolvedDeclarationCode: Optional[str]=None, visibleEditorPane: Optional[str]=None, editorPaneMode: Optional[str]=None, remixPaneMode: Optional[str]=None, remixEditMode: Optional[str]=None, codeEditorDataLoading: Optional[bool]=None, didSetInitialRemixCode: Optional[bool]=None, isEvaluatingSyntax: Optional[bool]=None, isCreatingOrUpdatingEntity: Optional[bool]=None, codeEditorConsoleIssues: Optional[Map[str, Array[Pkg.Issue]]]=None, shouldFetchCodeEditorConsoleIssues: Optional[bool]=None, codeEditorConsoleIssuesFetchCount: Optional[int]=None, codeEditorCreateUpdateModalTexts: Optional[Map[str, str]]=None, codeEditorSuggestedFileContent: Optional[Map[str, str]]=None, codeEditorOriginalFileContent: Optional[Map[str, str]]=None, codeEditorDiffPatches: Optional[Map[str, Array[any]]]=None, pendingResolutionMessageIds: Optional[Map[str, str]]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[DataFusionCodeEditorContainerReact]:
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
    def fromJsonString(cls, json: str) -> Union[DataFusionCodeEditorContainerReact]:
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
    def fromXmlString(cls, xml: str) -> Union[DataFusionCodeEditorContainerReact]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[DataFusionCodeEditorContainerReact]:
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
    def replaceType(self, old: Type, new: Type) -> DataFusionCodeEditorContainerReact:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> DataFusionCodeEditorContainerReact:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> DataFusionCodeEditorContainerReact:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[DataFusionCodeEditorContainerReact]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[DataFusionCodeEditorContainerReact]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> DataFusionCodeEditorContainerReact:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> DataFusionCodeEditorContainerReact:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> DataFusionCodeEditorContainerReact:
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
    def validateObj(self) -> DataFusionCodeEditorContainerReact:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> DataFusionCodeEditorContainerReact:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> DataFusionCodeEditorContainerReact:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> DataFusionCodeEditorContainerReact:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> DataFusionCodeEditorContainerReact:
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
    def withoutFieldAtPath(self, path: str) -> DataFusionCodeEditorContainerReact:
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
    def withoutField(self, field: str) -> DataFusionCodeEditorContainerReact:
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
    def withoutField(self, field: FieldType) -> DataFusionCodeEditorContainerReact:
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
    def withoutFields(self, fields: Array[str]) -> DataFusionCodeEditorContainerReact:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> DataFusionCodeEditorContainerReact:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> DataFusionCodeEditorContainerReact:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> DataFusionCodeEditorContainerReact:
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
    def defaultField(self, field: str) -> DataFusionCodeEditorContainerReact:
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
    def defaultField(self, field: FieldType) -> DataFusionCodeEditorContainerReact:
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
    def unsetField(self, field: str) -> DataFusionCodeEditorContainerReact:
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
    def unsetField(self, field: FieldType) -> DataFusionCodeEditorContainerReact:
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
    def removeField(self, field: str) -> DataFusionCodeEditorContainerReact:
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
    def removeField(self, field: FieldType) -> DataFusionCodeEditorContainerReact:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> DataFusionCodeEditorContainerReact:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> DataFusionCodeEditorContainerReact:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> DataFusionCodeEditorContainerReact:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> DataFusionCodeEditorContainerReact:
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
    def mergeJson(self, json: any) -> DataFusionCodeEditorContainerReact:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> DataFusionCodeEditorContainerReact:
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
    def sumObj(self, other: Obj, deep: bool=None) -> DataFusionCodeEditorContainerReact:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[DataFusionCodeEditorContainerReact]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[DataFusionCodeEditorContainerReact]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[DataFusionCodeEditorContainerReact]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[DataFusionCodeEditorContainerReact]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[DataFusionCodeEditorContainerReact]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, DataFusionCodeEditorContainerReact]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, DataFusionCodeEditorContainerReact]]:
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
    def toBuilder(self) -> ObjBuilder[DataFusionCodeEditorContainerReact]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[DataFusionCodeEditorContainerReact]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> DataFusionCodeEditorContainerReact:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> DataFusionCodeEditorContainerReact:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> DataFusionCodeEditorContainerReact:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> DataFusionCodeEditorContainerReact:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> DataFusionCodeEditorContainerReact:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> DataFusionCodeEditorContainerReact:
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
    def make(cls, s: str) -> Union[DataFusionCodeEditorContainerReact]:
    """
    Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
    when the argument is a known string.
    
    @see #fromString
    """
        ...
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> DataFusionCodeEditorContainerReact:
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
    def afterMake(self) -> DataFusionCodeEditorContainerReact:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> DataFusionCodeEditorContainerReact:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[DataFusionCodeEditorContainerReact]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> DataFusionCodeEditorContainerReact:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    @classmethod
    def tsx(cls) -> Union[str]:
    """
    Produce the complete TSX file, including the declaration of the interface for the "props" based on the data
    fields defined on the component type. This interface is always named with the type name plus "Props" and appended
    to the existing source file.
    """
        ...
    @classmethod
    def buildProps(cls, type: Type, spec: ReactComponentPropsSpec=None) -> Union[str]:
    """
    Produce the "props" interface for an arbitrary type. This will produce a TypeScript interface declaration that
    includes all the data fields of the specified type, and the public data fields of types it mixes in. The details
    can be controlled through the spec argument, but the defaults are what gets used by #tsx.
    
    @param type the type to examine
    @param spec options for interface generation
    @return TypeScript interface declaration
    """
        ...
    @classmethod
    def tsxPath(cls) -> Union[str]:
    """
    The React component's tsx file path from root folder "/ui". i.e 'common/UiImg.tsx'
    """
        ...
    @classmethod
    def importedModule(cls) -> Union[Any]:
    """
    If it has been imported, returns the imported module to render the UiComponent - the module at the tsxPath()
    """
        ...
    @classmethod
    def render(cls, props: DataFusionCodeEditorContainerReact=None) -> None:
    """
    The render function must be implemented as the function the TSX implementation exports.
    """
        ...
    @overload
    @classmethod
    def fetch(cls, spec: FetchSpec=None) -> FetchResult[DataFusionCodeEditorContainerReact]:
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
    def fetch(cls, filter: Filter) -> FetchResult[DataFusionCodeEditorContainerReact]:
    """
    Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
    returned.
    
    @param filter
              Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
    @return Requested objs.
    """
        ...
    @classmethod
    def fetchObjStream(cls, spec: FetchStreamSpec=None) -> Union[Stream[DataFusionCodeEditorContainerReact]]:
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
    def scanArrow(cls, spec: ScanArrowSpec) -> Union[ArrowIterator]:
    """
    Finds rows matching specification and returns them as iterator of Arrow batches.
    
    @param spec
              Specification of what rows to return.
    @return Iterator of Arrow batches.
    """
        ...
    @classmethod
    def fetchMultiLocale(cls, spec: MultiLocaleFetchSpec=None) -> Union[Map[str, FetchResult[DataFusionCodeEditorContainerReact]]]:
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
    def dependencies(self) -> MetadataDeps[DataFusionCodeEditorContainerReact]:
    """
    Retrieves dependencies to types or other metadata elements for the given instance of metadata.
    """
        ...
    def save(self, subPath: str=None, contentType: str=None) -> DataFusionCodeEditorContainerReact:
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
    def update(self, srcObj: DataFusionCodeEditorContainerReact=None, spec: UpsertSpec=None) -> Union[DataFusionCodeEditorContainerReact]:
        ...
    def upsert(self, srcObj: DataFusionCodeEditorContainerReact=None, spec: UpsertSpec=None) -> Union[DataFusionCodeEditorContainerReact]:
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
    def fromString(cls, s: str) -> Union[DataFusionCodeEditorContainerReact]:
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
    def forId(cls, id: str, failIfMissing: bool=None) -> Union[DataFusionCodeEditorContainerReact]:
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
    def doDataMerge(cls, componentId: str, dataSpecFieldName: str, dataDestinationFieldName: str, props: DataFusionCodeEditorContainerReact, state: UiSdlReduxState) -> Union[DataFusionCodeEditorContainerReact]:
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
    def upsertEntityAction(cls, id: str) -> UiSdlReduxAction[Any]:
    """
    Triggered to create an entity action
    
    @param id
               Id of the component.
    @returns a `UPSERT_ENTITY` action for this instance
    """
        ...
    @classmethod
    def setIsNewEntityAction(cls, id: str, isNewEntity: bool=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set value of `isNewEntity`
    
    @param id
               Id of the component.
    @param isNewEntity
              Whether this is a new or existing entity
    @returns a `SET_IS_NEW_ENTITY` action for this instance
    """
        ...
    @classmethod
    def setCodeEditorTemplatesAction(cls, id: str, codeEditorTemplates: Array[any]=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set value of `codeEditorTemplates`
    
    @param id
              Id of the component.
    @param codeEditorTemplates
              Code editor template info
    @returns a `SET_CODE_EDITOR_TEMPLATES` action for this instance
    """
        ...
    @classmethod
    def selectCodeEditorTemplateAction(cls, id: str, codeEditorTemplateName: str=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to select one of the templates.
    
    @param id
              Id of the component.
    @param codeEditorTemplateName
              The name of the template.
    @returns a `SELECT_CODE_EDITOR_TEMPLATE` action for this instance
    """
        ...
    @classmethod
    def setIsRemixAction(cls, id: str, isRemix: bool=None) -> UiSdlReduxAction[Any]:
        ...
    @classmethod
    def setActiveTypeNameAction(cls, id: str, activeTypeName: str=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set value of `activeTypeName`
    
    @param id
              Id of the component.
    @param activeTypeName
              The name of the active type
    @returns a `SET_ACTIVE_TYPE_NAME` action for this instance
    """
        ...
    @classmethod
    def setTypeDeclarationCodeAction(cls, id: str, typeDeclarationCode: str=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set value of `typeDeclarationCode`
    
    @param id
              Id of the component.
    @param typeDeclarationCode
              The declaration code for the entity
    @returns a `SET_TYPE_DECLARATION_CODE` action for this instance
    """
        ...
    @classmethod
    def setVisibleEditorPaneAction(cls, id: str, visibleEditorPane: str=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set value of `visibleEditorPane`
    
    @param id
              Id of the component.
    @param visibleEditorPane
              The name of the visible editor pane
    @returns a `SET_VISIBLE_EDITOR_PANE` action for this instance
    """
        ...
    @classmethod
    def setEditorPaneModeAction(cls, id: str, editorPaneMode: str) -> UiSdlReduxAction[Any]:
    """
    Triggered to set value of `editorPaneMode`
    
    @param id
              Id of the component.
    @param editorPaneMode
              The mode of the editor pane (read-only or edit)
    @returns a `SET_EDITOR_PANE_MODE` action for this instance
    """
        ...
    @classmethod
    def setCodeEditorDataLoadingAction(cls, id: str, codeEditorDataLoading: bool=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `codeEditorDataLoading`
    
    @param id
              Id of the component.
    @param codeEditorDataLoading
              Boolean indicating whether the code editor data is loading.
    @returns a `SET_CODE_EDITOR_DATA_LOADING` action for this instance
    """
        ...
    @classmethod
    def setTypeImplementationJsCodeAction(cls, id: str, typeImplementationJsCode: str=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set value of `typeImplementationJsCode`
    
    @param id
              Id of the component.
    @param typeImplementationJsCode
              The js implementation code for the type
    @returns a `SET_TYPE_IMPLEMENTATION_JS_CODE` action for this instance
    """
        ...
    @classmethod
    def setFunctionNamesListAction(cls, id: str, functionNamesList: Array[str]=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `functionNamesList`.
    
    @param id
              Id of the component.
    @param functionNamesList
              A list of function names for the current type.
    @returns a `SET_FUNCTION_NAMES_LIST` action for this instance.
    """
        ...
    @classmethod
    def setFunctionDeclarationsAction(cls, id: str, functionDeclarations: Map[str, str]=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `functionDeclarations`.
    
    @param id
              Id of the component.
    @param functionDeclarations
              A map of function names to their declarations.
    @returns a `SET_FUNCTION_DECLARATIONS` action for this instance.
    """
        ...
    @classmethod
    def setFunctionImplementationStatusAction(cls, id: str, functionImplementationStatus: Map[str, bool]=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `functionImplementationStatus`
    
    @param id
              Id of the component.
    @param functionImplementationStatus
              A map of function names to their implementation status (true/false)
    @returns a `SET_FUNCTION_IMPLEMENTATION_STATUS` action for this instance
    """
        ...
    @classmethod
    def setResolvedDeclarationCodeAction(cls, id: str, resolvedDeclarationCode: str=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `resolvedDeclarationCode`
    @param id
              Id of the component.
    @param resolvedDeclarationCode
              The resolved declaration code
    @returns a `SET_RESOLVED_DECLARATION_CODE` action for this instance
    """
        ...
    @classmethod
    def setRemixPaneModeAction(cls, id: str, remixPaneMode: str=None) -> UiSdlReduxAction[Any]:
        ...
    @classmethod
    def setRemixEditModeAction(cls, id: str, remixEditMode: str=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `remixEditMode`
    
    @param id
              Id of the component.
    @param remixEditMode
              The edit mode of the remix pane (resolution-declaration, original-declaration, or remix).
    @returns a `SET_REMIX_EDIT_MODE` action for this instance
    """
        ...
    @classmethod
    def upsertEntitySuccessAction(cls, id: str) -> UiSdlReduxAction[Any]:
    """
    Triggered when entity is successfully upserted.
    
    @param id
              Id of the component.
    @returns a `UPSERT_ENTITY_SUCCESS` action for this instance
    """
        ...
    @classmethod
    def setRemixDeclarationCodeAction(cls, id: str, remixDeclarationCode: str=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `remixDeclarationCode`
    
    @param id
              Id of the component.
    @param remixDeclarationCode
              The remix declaration code to be set.
    @returns a `SET_REMIX_DECLARATION_CODE` action for this instance
    """
        ...
    @classmethod
    def setDidSetInitialRemixCodeAction(cls, id: str, didSetInitialRemixCode: bool=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `didSetInitialRemixCode`
    
    @param id
              Id of the component.
    @param didSetInitialRemixCode
              Boolean indicating whether the initial remix code has been set.
    @returns a `SET_DID_SET_INITIAL_REMIX_CODE` action for this instance
    """
        ...
    @classmethod
    def evaluateEntityAction(cls, id: str) -> UiSdlReduxAction[Any]:
    """
    Triggered to evaluate the entity type.
    
    @param id
              Id of the component.
    @returns an `EVALUATE_ENTITY` action for this instance.
    """
        ...
    @classmethod
    def setIsEvaluatingSyntaxAction(cls, id: str, isEvaluatingSyntax: bool=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `isEvaluatingSyntax`.
    
    @param id
              Id of the component.
    @param isEvaluatingSyntax
              Boolean indicating whether syntax evaluation is in progress.
    @returns a `SET_IS_EVALUATING_SYNTAX` action for this instance
    """
        ...
    @classmethod
    def setIsCreatingOrUpdatingEntityAction(cls, componentId: str, isCreatingOrUpdatingEntity: bool) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `isCreatingOrUpdatingEntity`.
    
    @param id
              Id of the component.
    @param isEvaluatingSyntax
              Boolean indicating whether creating or updating entity is in progress.
    @returns a `SET_IS_CREATING_OR_UPDATING_ENTITY` action for this instance
    """
        ...
    @classmethod
    def setCodeEditorSuggestedFileContentAction(cls, componentId: str, suggestedFileContent: Map[str, str]=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `codeEditorSuggestedFileContent`.
    
    @param id
              Id of the component.
    @param suggestedFileContent
              The map of language to corresponding suggested file content
    @returns a `SET_CODE_EDITOR_SUGGESTED_FILE_CONTENT` action for this instance
    """
        ...
    @classmethod
    def setCodeEditorOriginalFileContentAction(cls, componentId: str, originalFileContent: Map[str, str]=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `codeEditorOriginalFileContent`.
    
    @param componentId
              Id of the component.
    @param originalFileContent
              The map of language to corresponding original file content
    @returns a `SET_CODE_EDITOR_ORIGINAL_FILE_CONTENT` action for this instance
    """
        ...
    @classmethod
    def setCodePendingResolutionMessageIdAction(cls, componentId: str, language: str, messageId: str) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the message id of given language in `pendingResolutionMessageIds`.
    
    @param componentId
              Id of the component.
    @param language
              The language of the file content (e.g., 'js', 'c3typ')
    @param messageId
             The id of the message that contains suggested file content
    @returns a `SET_CODE_EDITOR_PENDING_RESOLUTION_MESSAGE_ID` action for this instance
    """
        ...
    @classmethod
    def setCodePendingResolutionMessageIdsAction(cls, componentId: str, pendingResolutionMessageIds: Map[str, str]) -> UiSdlReduxAction[Any]:
    """
    Triggered to set `pendingResolutionMessageIds`.
    
    @param componentId
              Id of the component.
    @param pendingResolutionMessageIds
             The map of language to the id of latest message that contains suggested file content
    @returns a `SET_CODE_EDITOR_PENDING_RESOLUTION_MESSAGE_IDS` action for this instance
    """
        ...
    @classmethod
    def setCodeEditorDiffPatchesAction(cls, componentId: str, diffPatches: Map[str, Array[any]]=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `codeEditorDiffPatches`.
    
    @param componentId
              Id of the component.
    @param diffPatches
              The map of language to corresponding diff patches
    @returns a `SET_CODE_EDITOR_DIFF_PATCHES` action for this instance
    """
        ...
    @classmethod
    def acceptSuggestedFileContentAction(cls, componentId: str, language: str) -> UiSdlReduxAction[Any]:
    """
    Triggered when the user accepts the suggested file content.
    
    @param componentId
              Id of the component.
    @param language
              The language of the file content to accept (e.g., 'js', 'c3typ')
    @returns an `ACCEPT_SUGGESTED_FILE_CONTENT` action for this instance
    """
        ...
    @classmethod
    def rejectSuggestedFileContentAction(cls, componentId: str, language: str) -> UiSdlReduxAction[Any]:
    """
    Triggered when the user rejects the suggested file content.
    
    @param componentId
              Id of the component.
    @param language
              The language of the file content to reject (e.g., 'js', 'c3typ')
    @returns a `REJECT_SUGGESTED_FILE_CONTENT` action for this instance
    """
        ...
    @classmethod
    def resetCodeEditorDiffAction(cls, componentId: str) -> UiSdlReduxAction[Any]:
    """
    Triggered when resetting the current code editor
    by reverting the file to original content, clearing the diff patches and pending resolution message ids.
    """
        ...
    @classmethod
    def clickedBackButtonAction(cls, id: str) -> UiSdlReduxAction[Any]:
    """
    Triggered when the container back button is clicked.
    
    @param id
              Id of the component.
    @returns a `CLICKED_BACK_BUTTON` action for this instance
    """
        ...
    @classmethod
    def clickedCloseButtonAction(cls, id: str) -> UiSdlReduxAction[Any]:
    """
    Triggered when the container close button is clicked.
    
    @param id
              Id of the component.
    @returns a `CLICKED_CLOSE_BUTTON` action for this instance
    """
        ...
    @classmethod
    def setInitialTypeDeclarationCodeAction(cls, id: str, initialTypeDeclarationCode: str=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `initialTypeDeclarationCode`
    
    @param id
              Id of the component.
    @param initialTypeDeclarationCode
              The initial type declaration code for the entity
    @returns a `SET_INITIAL_TYPE_DECLARATION_CODE` action for this instance
    """
        ...
    @classmethod
    def setInitialTypeImplementationJsCodeAction(cls, id: str, initialTypeImplementationJsCode: str=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `initialTypeImplementationJsCode`
    
    @param id
              Id of the component.
    @param initialTypeImplementationJsCode
              The initial type implementation JS code for the entity
    @returns a `SET_INITIAL_TYPE_IMPLEMENTATION_JS_CODE` action for this instance
    """
        ...
    @classmethod
    def setInitialRemixDeclarationCodeAction(cls, id: str, initialRemixDeclarationCode: str=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `initialRemixDeclarationCode`
    
    @param id
              Id of the component.
    @param initialRemixDeclarationCode
              The initial remix declaration code for the entity
    @returns a `SET_INITIAL_REMIX_DECLARATION_CODE` action for this instance
    """
        ...
    @classmethod
    def setCodeEditorConsoleIssuesAction(cls, id: str, fileName: str=None, issues: Array[Pkg.Issue]=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `codeEditorConsoleIssues`
    
    @param id
              Id of the component.
    @param fileName
              The name of the file where the issues were identified.
    @param issues
              The list of issues in the code editor console.
    @returns a `SET_CODE_EDITOR_CONSOLE_ISSUES` action for this instance.
    """
        ...
    @classmethod
    def shouldFetchCodeEditorConsoleIssuesAction(cls, id: str, shouldFetchCodeEditorConsoleIssues: bool=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `shouldFetchCodeEditorConsoleIssues`
    
    @param id
              Id of the component.
    @param shouldFetchCodeEditorConsoleIssues
              Whether the fetch for the issues in the code editor console should start
    @returns a `SET_SHOULD_FETCH_CODE_EDITOR_CONSOLE_ISSUES` action for this instance
    """
        ...
    @classmethod
    def setCodeEditorConsoleIssuesFetchCountAction(cls, id: str, codeEditorConsoleIssuesFetchCount: int=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `codeEditorConsoleIssueFetchCount`.
    
    @param id
              Id of the component.
    @param codeEditorConsoleIssuesFetchCount
              The number of times the issues of the console have been fetched.
    @returns a `SET_CODE_EDITOR_CONSOLE_ISSUE_FETCH_COUNT` action for this instance.
    """
        ...
    @classmethod
    def setCodeEditorCreateUpdateModalTextsAction(cls, id: str, codeEditorCreateUpdateModalTexts: Map[str, str]=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `codeEditorCreateUpdateModalTexts`
    
    @param id
              Id of the component.
    @param codeEditorCreateUpdateModalTexts
              The texts to be displayed in the code editor create/update modal.
    @returns a `SET_CODE_EDITOR_CREATE_UPDATE_MODAL_TEXTS` action for this instance
    """
        ...
    @classmethod
    def setRemixImplementationJsCodeAction(cls, id: str, remixImplementationJsCode: str=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set value of `remixImplementationJsCode`
    
    @param id
              Id of the component.
    @param remixImplementationJsCode
              The remix implementation js code for the type
    @returns a `SET_REMIX_IMPLEMENTATION_JS_CODE` action for this instance
    """
        ...
    @classmethod
    def setInitialRemixImplementationJsCodeAction(cls, id: str, initialRemixImplementationJsCode: str=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the value of `initialRemixImplementationJsCode`
    
    @param id
              Id of the component.
    @param initialRemixImplementationJsCode
              The initial remix implementation JS code for the entity
    @returns a `SET_INITIAL_REMIX_IMPLEMENTATION_JS_CODE` action for this instance
    """
        ...
    @classmethod
    def setTypeCodeAction(cls, id: str, code: str=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the type declaration code based on the current remix state and mode.
    
    @param id
              Id of the component.
    @param code
              The code to be set for the type declaration.
    @returns a `SET_TYPE_CODE` action for this instance
    """
        ...
    @classmethod
    def setFunctionsCodeAction(cls, id: str, code: str=None) -> UiSdlReduxAction[Any]:
    """
    Triggered to set the functions implementation code based on the current remix state.
    
    @param id
              Id of the component.
    @param code
              The code to be set for the functions implementation.
    @returns a `SET_FUNCTIONS_CODE` action for this instance
    """
        ...
    @classmethod
    def isNewEntitySetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `isNewEntity` in the component state
    """
        ...
    @classmethod
    def codeEditorTemplatesSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `codeEditorTemplates` in the component state
    """
        ...
    @classmethod
    def isRemixSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
        ...
    @classmethod
    def activeTypeNameSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `activeTypeName` in the component state
    """
        ...
    @classmethod
    def typeDeclarationCodeSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `typeDeclarationCode` in the component state
    """
        ...
    @classmethod
    def visibleEditorPaneSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `visibleEditorPane` in the component state
    """
        ...
    @classmethod
    def editorPaneModeSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `editorPaneMode` in the component state
    """
        ...
    @classmethod
    def codeEditorDataLoadingSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `codeEditorDataLoading` in the component state
    """
        ...
    @classmethod
    def typeImplementationJsCodeSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `typeImplementationJsCode` in the component state
    """
        ...
    @classmethod
    def functionNamesListSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `functionNamesList` in the component state.
    """
        ...
    @classmethod
    def functionDeclarationsSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `functionDeclarations` in the component state.
    """
        ...
    @classmethod
    def functionImplementationStatusSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `functionImplementationStatus` in the component state
    """
        ...
    @classmethod
    def remixPaneModeSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
        ...
    @classmethod
    def remixEditModeSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `remixEditMode` in the component state
    """
        ...
    @classmethod
    def remixDeclarationCodeSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `remixDeclarationCode` in the component state
    """
        ...
    @classmethod
    def didSetInitialRemixCodeSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `didSetInitialRemixCode` in the component state
    """
        ...
    @classmethod
    def resolvedDeclarationCodeSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `resolvedDeclarationCode` in the component state
    """
        ...
    @classmethod
    def isEvaluatingSyntaxSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `isEvaluatingSyntax` in the component state.
    """
        ...
    @classmethod
    def isCreatingOrUpdatingEntitySetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `isCreatingOrUpdatingEntity` in the component state.
    """
        ...
    @classmethod
    def codeEditorOriginalFileContentSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `codeEditorOriginalFileContent` in the component state.
    """
        ...
    @classmethod
    def codeEditorPendingResolutionMessageIdSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of message id of given language in `pendingResolutionMessageIds` in the component state.
    """
        ...
    @classmethod
    def codeEditorPendingResolutionMessageIdsSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `pendingResolutionMessageIds` in the component state.
    """
        ...
    @classmethod
    def codeEditorDiffPatchesSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `codeEditorDiffPatches` in the component state.
    """
        ...
    @classmethod
    def initialTypeDeclarationCodeSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `initialTypeDeclarationCode` in the component state
    """
        ...
    @classmethod
    def initialTypeImplementationJsCodeSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `initialTypeImplementationJsCode` in the component state
    """
        ...
    @classmethod
    def initialRemixDeclarationCodeSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `initialRemixDeclarationCode` in the component state
    """
        ...
    @classmethod
    def codeEditorConsoleIssuesSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `codeEditorConsoleIssues` in the component state
    """
        ...
    @classmethod
    def shouldFetchCodeEditorConsoleIssuesSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `shouldFetchCodeEditorConsoleIssues` in the component state
    """
        ...
    @classmethod
    def codeEditorConsoleIssuesFetchCountSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `codeEditorConsoleIssuesFetchCount` in the component state.
    """
        ...
    @classmethod
    def codeEditorCreateUpdateModalTextsSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `codeEditorCreateUpdateModalTexts` in the component state
    """
        ...
    @classmethod
    def remixImplementationJsCodeSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `remixImplementationJsCode` in the component state
    """
        ...
    @classmethod
    def initialRemixImplementationJsCodeSetReducer(cls, state: UiSdlReduxState, action: UiSdlReduxAction[Any]) -> UiSdlReduxState:
    """
    Sets the value of `initialRemixImplementationJsCode` in the component state
    """
        ...
    @classmethod
    def getCodeEditorDiffPatches(cls, state: UiSdlReduxState, componentId: str) -> Union[Map[str, Array[any]]]:
    """
    Returns the current `codeEditorDiffPatches` from the Redux state.
    """
        ...
    @classmethod
    def getCodeEditorOriginalFileContent(cls, state: UiSdlReduxState, componentId: str) -> Union[Map[str, str]]:
    """
    Returns the current `codeEditorOriginalFileContent` from the Redux state.
    """
        ...
    @classmethod
    def getTypeDeclarationCode(cls, state: UiSdlReduxState, componentId: str) -> Union[str]:
    """
    Returns the current `typeDeclarationCode` from the Redux state.
    """
        ...
    @classmethod
    def getTypeImplementationJsCode(cls, state: UiSdlReduxState, componentId: str) -> Union[str]:
    """
    Returns the current `typeImplementationJsCode` from the Redux state.
    """
        ...
    @classmethod
    def getPendingResolutionMessageIds(cls, state: UiSdlReduxState, componentId: str) -> Union[Map[str, str]]:
    """
    Returns the current `pendingResolutionMessageIds` from the Redux state.
    """
        ...
    @classmethod
    def getPendingResolutionMessageId(cls, state: UiSdlReduxState, componentId: str, language: str) -> Union[str]:
    """
    Returns the current message id given expected language from the Redux state.
    """
        ...
    @classmethod
    def getIsRemix(cls, state: UiSdlReduxState, componentId: str) -> bool:
    """
    Returns the current `isRemix` value from the Redux state.
    """
        ...
    @classmethod
    def getRemixPaneMode(cls, state: UiSdlReduxState, componentId: str) -> Union[str]:
    """
    Returns the current `remixPaneMode` value from the Redux state.
    """
        ...
    @classmethod
    def getEditorPaneMode(cls, state: UiSdlReduxState, componentId: str) -> Union[str]:
    """
    Returns the current `editorPaneMode` value from the Redux state.
    """
        ...
    @classmethod
    def getRemixEditMode(cls, state: UiSdlReduxState, componentId: str) -> Union[str]:
    """
    Returns the current `remixEditMode` value from the Redux state.
    """
        ...
    @classmethod
    def getRemixDeclarationCode(cls, state: UiSdlReduxState, componentId: str) -> Union[str]:
    """
    Returns the current `remixDeclarationCode` value from the Redux state.
    """
        ...
    @classmethod
    def getRemixImplementationJsCode(cls, state: UiSdlReduxState, componentId: str) -> Union[str]:
    """
    Returns the current `remixImplementationJsCode` value from the Redux state.
    """
        ...
    @classmethod
    def getCodeEditorSuggestionDisabled(cls, state: UiSdlReduxState, componentId: str) -> bool:
    """
    Returns whether the code diff for Gen Ai suggestion in code editor should be disabled
    """
        ...
    @classmethod
    def upsertEntityEpic(cls, actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable) -> UiSdlActionsObservable:
    """
    Listens for actions of type `UPSERT_ENTITY` and upsert the entity.
    
    @param state
               Redux state
    @param action
               Redux action
    @returns a new Redux state
    """
        ...
    @classmethod
    def evaluateEntityEpic(cls, actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable) -> UiSdlActionsObservable:
    """
    Listens for actions of type `EVALUATE_ENTITY` and evaluates the entity.
    
    @param actionStream
              The stream of Redux actions.
    @param stateStream
              The stream of Redux state.
    @returns a new Redux state or side effects.
    """
        ...
    @classmethod
    def setCodeEditorSuggestedFileContentEpic(cls, actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable) -> UiSdlActionsObservable:
    """
    Listens for actions of type `SET_CODE_EDITOR_SUGGESTED_FILE_CONTENT` and processes suggested file content.
    
    @param actionStream
              The stream of Redux actions.
    @param stateStream
              The stream of Redux state.
    @returns a new Redux state or side effects.
    """
        ...
    @classmethod
    def acceptSuggestedFileContentEpic(cls, actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable) -> UiSdlActionsObservable:
    """
    Listens for actions of type `ACCEPT_SUGGESTED_FILE_CONTENT` and accepts the suggested file content.
    
    @param actionStream
              The stream of Redux actions.
    @param stateStream
              The stream of Redux state.
    @returns a new Redux state or side effects.
    """
        ...
    @classmethod
    def rejectSuggestedFileContentEpic(cls, actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable) -> UiSdlActionsObservable:
    """
    Listens for actions of type `REJECT_SUGGESTED_FILE_CONTENT` and rejects the suggested file content.
    
    @param actionStream
              The stream of Redux actions.
    @param stateStream
              The stream of Redux state.
    @returns a new Redux state or side effects.
    """
        ...
    @classmethod
    def setInitialCodeEditorGenAiContextEpic(cls, actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable) -> UiSdlActionsObservable:
    """
    Sets the genai context on {@link StudioGenAiState} with some initial values.
    """
        ...
    @classmethod
    def resetCodeEditorDiffEpic(cls, actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable) -> UiSdlActionsObservable:
    """
    Listens for actions of type `RESET_CODE_EDITOR_DIFF` and resets the code editor diff.
    @param actionStream
              The stream of Redux actions.
    @param stateStream
              The stream of Redux state.
    @returns a new Redux state or side effects.
    """
        ...
    @classmethod
    def typeCodeSetEpic(cls, actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable) -> UiSdlActionsObservable:
    """
    Listens for actions of type `SET_TYPE_CODE` and updates the corresponding type declaration code in the Redux state
    based on the current remix state and mode.
    
    @param actionStream
              The stream of Redux actions.
    @param stateStream
              The stream of Redux state.
    @returns a new Redux state or side effects.
    """
        ...
    @classmethod
    def functionsCodeSetEpic(cls, actionStream: UiSdlActionsObservable, stateStream: UiSdlStatesObservable) -> UiSdlActionsObservable:
    """
    Listens for actions of type `SET_FUNCTIONS_CODE` and updates the corresponding implementation code in the Redux state
    based on the current remix state.
    
    @param actionStream
              The stream of Redux actions.
    @param stateStream
              The stream of Redux state.
    @returns a new Redux state or side effects.
    """
        ...
    @classmethod
    def resolvedLanguage(cls, language: str) -> Union[str]:
    """
    Resolve the language to the corresponding {@link CodeEditorFileType}
    """
        ...

