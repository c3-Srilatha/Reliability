#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.PgPartitionDef import PgPartitionDef
from c3.platform.Promise import Promise
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.ReferenceType import ReferenceType
from c3.platform.ArrayType import ArrayType
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.FieldType import FieldType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.PartitionBucketStrategy import PartitionBucketStrategy
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.SetType import SetType
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.MapType import MapType
from c3.platform.Exclude import Exclude

# Python definitions for the C3 type Ann.Db


class Db(Annotation):
    """
    @remarks this represents a made instance of Ann.Db
    """
    
    VALUE_ONLY_FIELD: Optional[str]=None
    """
    The special field name which will receive the shortcut, value-only syntax value. If a field with this name is
    defined on the annotation, the value-only syntax may be used: `@xyz(`_value_`)`.
    
    @see Ann.Annotation#value
    """

    noInherit: Optional[bool]=None
    """
    If true, the annotation is not inherited by mixins.
    """

    domain: Optional[str]=None
    """
    Data Domain for this entity type
    """

    datastore: Optional[str]=None
    """
    Datastore for entity types (e.g. "kv").  The datastore indicates where the data will be persisted.  If not
    specified, the data will be persisted in the default datastore for the app (e.g. the relational datastore.
    """

    secondaryDatastore: Optional[str]=None
    """
    Secondary datastore (e.g. "redshift").  When set, the contents of the type will automatically be synchronized to
    the specified secondary datastore.
    """

    pgPartition: Optional[PgPartitionDef]=None
    """
    Only valid for types persisted in Postgres.
    
    @see PgPartitionDef for details
    """

    partitionKeyField: Optional[str]=None
    """
    For {@link Partitionable} types only - Partition key field (e.g. parent field).
    The parent field is the field that objs will be grouped by in persistence.  If specified, only filters that include
    the parent field will be allowed (filtering by additional fields is allowed).  If not specified, then only
    filtering by id is supported.
    """

    partitionKeyBin: Optional[str]=None
    """
    For {@link Partitionable} types only, this field will allow splitting data for a partition key into multiple
    {@link KvRow}s based on an expression. Currently the recommended expression is using date information with format
    year-month-day. For example:
    ```
    concat(year(start), "-", month(start), "-", day(start))    // start is a datetime filed in the type
    concat(year(start), "-", month(start))
    ```
    """

    defaultPartitionStrategy: Optional[PartitionBucketStrategy]=None
    """
    If set, attempts to use the partition strategy as indicated. A best effort will be adopted to incorporate the
    strategy. However, the engine may optimize storage internally and doesn't guarantee exact strategy semantics
    """

    persistenceOrder: Optional[str]=None
    """
    Order spec for persisting objs within a partition key. Any unique indexes must also be specified in the persistence
    order. See {@link DataPartitionBucket}.
    
    Note the following behavior when specifying persistence order:
    1. If meta field is used in persistence order, de-duplication will be disabled, so use with caution!
    2. It is recommended to use primitive value types when possible to provide better performance.
    """

    persistDuplicates: Optional[bool]=None
    """
    If true, duplicate rows will be kept.  By default, a duplicate row matches every field except the id. This can be
    configured using the @db(unique) annotation. For example:
    @db(datastore="kv",
      partitionKeyField='parent',
      persistenceOrder='start',
      persistDuplicates=true,
      compactType=true,
      unique=['parent, start'],
    )
    """

    systemType: Optional[bool]=None
    """
    Indicates that the type is owned by the server framework.
    """

    compactType: Optional[bool]=None
    """
    Indicates that the type will not persist the {@link Persistable#meta} field.  Used for certain high velocity types
    and types that are very large where created/updated info is not required.
    """

    writeOnce: Optional[bool]=None
    """
    Indicates that once a field in an obj is persisted, it may not be modified.  This differs from {@link createOnly}
    in that if the value is initially null when the obj is created, a non-null value will be allowed to be set on an
    existing obj where the value is null.
    """

    systemUpdateOnly: Optional[bool]=None
    """
    Indicates that a field may not be updated by the user.  Only updates from the system are allowed.
    """

    createOnly: Optional[bool]=None
    """
    If specified on a field, indicates that the field may only have its value set when an obj is being created.  No
    updates to the field for existing objs will be allowed.
    
    If specified on a type, indicates that instances of the type may be created (and removed), but not updated.
    """

    textSearchField: Optional[bool]=None
    """
    Indicates that a field is used for full text search.  For full text search fields, a full text search index is
    created in the relational datastore.  Not applicable for KV datastores.
    """

    order: Optional[str]=None
    """
    Order spec used for ordering values returned in an entity type or an fkey arry field.
    
    @see fkey
    @see key
    """

    unique: Optional[Array[str]]=None
    """
    List of unique indexes to be created for the type.  Each index is a comma separated list of fields.
    """

    index: Optional[Array[Union[str,Any]]]=None
    """
    List of non-unique indexes to be created for the type.  Each index is a comma separated list of fields with
    optional ascending/descending and nulls first/last support.  By default, null values appear last in an ascending
    sort and first in a descending sort.  To specify the opposite null sorting, specify the field in the appropriate
    sort function.  For example:
    
    @db(index = ['ascending(f1, true), f2']) - ascending on f1 with nulls first and ascending on f2 with nulls last
    @db(index = ['descending(f1, true), f2']) - descending on f1 with nulls last and ascending on f2 with nulls last
    """

    shortId: Optional[bool]=None
    """
    If true, automatically generated unique ids for objs being created will be short, and their format configurable by
    {@link shortIdPrefix} and {@link shortIdSuffix} rather than being GUIDs.
    """

    shortIdPrefix: Optional[str]=None
    """
    If {@link shortId} is true, then this is the prefix that will be used for every generated short id.
    """

    shortIdSuffixType: Optional[str]=None
    """
    If {@link shortId} is true, then this will be the type for the suffix for each generated id.  Possible values are:
    enum ("numeric", "alphanumeric") = numeric.
    """

    shortIdReservationRange: Optional[int]=None
    """
    If {@link shortId} is true, the database is used to reserve ranges of unique ids for each server.  This specifies
    the number of ids to reserve when requesting a new short id for the type and there are no reserved ids left.  If
    the value is very small, the database will be hit more often.  If it is very large, then large numbers of ids may
    get wasted when a server is restarted.
    """

    filter: Optional[str]=None
    """
    A filter expression that can be used to restrict values returned when including an fkey field.  Note that this
    filter is not applied when filtering on the fkey field.  When filtering on the fkey field, the entire contents of
    the fkey relationship are included.
    
    @see fkey
    @see key
    """

    limit: Optional[int]=None
    """
    The maximum number of values returned in an fkey field (-1 or null means all). Note that this limit is not applied
    when filtering on the fkey field.  When filtering on the fkey field, the entire contents of the fkey relationship
    are included.
    
    @see fkey
    @see key
    """

    viewFilter: Optional[str]=None
    """
    Filter for a database view.  A database view is any type that is not an entity type itself that mixes in an entity
    type.  Specifying the viewFilter limits the objs returned by any fetch/get operation on the view type to those
    specified.  Runtime filters will only further restrict the returned objs.
    """

    archive: Optional[bool]=None
    """
    Indicates that a type's instances should be archived, rather than physically removed during
    {@link Persistable#remove}.  Archived instances can be restored using {@link Persistable#unremove}.  An archived
    instance will remain indefinitely.  Care should be taken to not create a new instance with an archived instance's
    id as that new instance will then itself not be removable/archivable due to a unique index collision in the archive
    table.  Also, having an instance with the same id as an archived instance will cause the original archived instance
    to not be recoverable due to a unique index violation in the root table.
    """

    versionHistory: Optional[bool]=None
    """
    If true, then any update to an obj will be recorded in the {@link Persistable#versionEdits} field.  This recorded
    history can be used to retrieve objs at the state they were in based on a previous time or version.
    
    @see Persistable#get
    @see Meta#getVersion
    @see Meta#getVersionAsOf
    """

    counter: Optional[bool]=None
    """
    For counter fields in cassandra types.
    """

    timedValueHistoryField: Optional[str]=None
    """
    If specified on a field that mixes in {@link TimedValue}, then it identifies the history field that is linked with
    it. That field must be an fkey array of a type that mixes in {@link TimedValueHistory} and otherwise contain the
    same value fields as the field that specifies this.  For fields that specify this, any updates to the field will be
    added to the history and and any changes to the history type that change the most recent value will cause the field
    to be updated with the latest value.
    
    Note that this is not valid for {@link TimedCharacteristic} fields.  For those, use
    {@link timeCharacteristicHistoryField}.
    """

    timedValueHistoryPreventOverlaps: Optional[bool]=None
    """
    For timed value history fields (e.g. fields referenced in {@link timedValueHistoryField}) where the timedValue
    field mixes in {@link TimedIntervalValue}, if this is set to true, then the history will not allow overlapping time
    range.  Existing time ranges will be cropped, if necessary when new entries are added to the history.
    """

    timedRelationHistoryDedupToSide: Optional[bool]=None
    """
    Timed relations can only be deduped in one direction and the default is to dedup based on the from side.  Set this
    to true on the timed relation history type if deduping should instead be based on the to side.
    """

    timedCharacteristicHistoryField: Optional[str]=None
    """
    Can only be specified on a map field with a key value type of string and an element type of a type that mixes in
    {@link TimedCharacteristic}.  The field specified must be an fkey array field of a type that mixes in
    {@link TimedCharacteristicHistory} and has the same value fields as the field this is specified on.
    
    The field that this is specified on will become read only and treated as a stored calc field which will be updated
    to maintain the latest values for each characteristic in the history.  Note that this is a different behavior to
    {@link timedValueHistoryField}.
    """

    columnarStorage: Optional[bool]=None
    """
    If this parameter is set, then we'll attempt to store data in a columnar compressed format. This is mostly
    applicable to timeseries data points. This cannot be used with extendable types.
    """

    persistAllFields: Optional[bool]=None
    """
    When specified on a reference field (generic obj or normal reference field), the entire contents of a referenced
    type (even if it's an external type) will be stored in the field, rather than just the id.  This enables persisting
    snapshots of external references or storing heterogeneous included refs. Note that once this annotation is set,
    filtering on individual fields may not be supported or performant.
    """

    include: Optional[str]=None
    """
    Default include for a reference field.  This will be applied if the field is included (either explicitly or by an
    empty include/this).  For fkey fields, this will also cause them to be fetched by default instead of requiring an
    explicit include.
    """

    viewInclude: Optional[str]=None
    """
    Include for a database view.  A database view is any type that is not an entity type itself that mixes in an entity
    type.  Specifying the viewInclude limits the fields returned by any fetch/get operation on the view type to those
    specified.  However, for included fields that are reference fields, further traversal via a runtime include is
    permitted.  Filtering on fields that aren't included is permitted.
    """

    defaultCommitSize: Optional[int]=None
    """
    If specified, the default commit size used in UpsertTask operations.  May be overridden by
    {@link UpsertSpec#commitSize}.  If set to -1, the entire operation will be performed as one batch/transaction.
    """

    dataTypeOverride: Optional[str]=None
    """
    Used by {@link SqlSourceCollection.inferSourceType} to allow a string "id" field to work properly if the underlying
    column in the external table is not a string.
    """

    enforceAcl: Optional[bool]=None
    """
    If true on a type that mixes {@link AclEnabled}, then acls will always be enforced, regardless of whether or not an
    entry exists in {@link EnableAclPrivilege}.
    """

    enforceUpdateAclForNonClusterAdmin: Optional[bool]=None
    """
    If true on a type that mixes {@link AclEnabled}, then acl authorization will be applied during updates, even for
    roles that would ordinarily not be subject to acl authz.
    """

    disableAutoStoredCalcRefresh: Optional[bool]=None
    """
    If true, then any stored calc fields defined in the type will not be automatically recomputed when anything they
    depend on changes.  This should only be set for types where the stored calc refresh will be scheduled independently
    (e.g. via a cron job).
    """

    cacheData: Optional[bool]=None

    fkeyConstraint: Optional[bool]=None

    tempTable: Optional[bool]=None

    includeReadCalcs: Optional[bool]=None
    """
    If true, then all read calcs will be returned by default (including for any included child refs that specify the
    default include), if false, only those specifically requested via the `include` will be returned.
    """

    callbackDisabled: Optional[bool]=None
    """
    When set on one of the {@link Persistable} functions (e.g. before..., after..., created, updated, removed) the
    callback function will be ignored.  This is useful in a remix situation where a type being remixed has a callback
    which is not appropriate in the remixed scenario.
    """

    castVarcharLength: Optional[bool]=None
    """
    Some databases (e.g. Impala), require casting of varchar columns with the defined length of the column.  If this is
    set to true and the value of {@link: Ann.Constraint#length} > 0, casting will be done for those databases in
    insert/update sql statements.  The length should be set to the defined length of the column in the database.
    """

    h2UseClobCol: Optional[bool]=None
    """
    When using the H2 db for testing, text columns of unlimited size are more complicated than they are in Postgres and
    have issues in some circumstances (notably they can't be indexed and cause NPEs in some concurrency scenarios. As a
    result it is not the default behavior.  Set this to `true` if a particular field needs to have a length longer than
    the maximum H2 character value length (1048576) when running/testing using the H2 database.  It will be ignored for
    Postgres.
    
    Note that if specified for a collection field (e.g. map<string, string>, map<string, json>, etc.), it will be
    applied to the column holding the value.  If the value is not a string or json value, this will be ignored.
    """

    compositeKeyFieldMapping: Optional[Map[str, str]]=None
    """
    Maps fields in a reference to a {@link CompositeKey} type to fields in the type owning the reference.
    
    See {@link CompositeKey} for details
    """

    pgPersistAsJson: Optional[bool]=None
    """
    When applied to a field and the database is Postgres (or H2), field values will be persisted as typed json values
    regardless of the field's value type.  The data type of the column in the database will be JSONB (JSON for H2).
    This will be ignored for all other databases.
    
    Note the following for fields that specify this:
    
    1. This differs from specifying a value type of json for a field in that this applies to persistence only and the
       values that are set/retrieved for the field will retain their designated value types.
    2. If specified for a collection field (e.g. array/set/map), then the entire collection will be serialized to typed
       json and persisted, not the individual elements of the collection.  If the elements are references, the entire
       contents of the ref will be persisted in the json (e.g. equivalent to also specifying persistAllFields.
    3. References will not be traversable via the include spec during fetch.
    4. For maps, only non-indexed maps with primitive keys are supported.  All arrays and sets are supported.
       Additional value types may be supported in the future as use cases are identified.
    5. Filtering will be extremely limited.  At this time, filtering is only supported on Postgres for collections of
       primitive values and only with the following patterns:
       - "jsonbMap['hello'] == 'world'" - filters for entries with the specified key and value
       - "exists(jsonbMap['hello'] == 'world')" - filters for entries with the specified key and value
       - "jsonbMap.key() == 'hello'" - filters for entries with the specified key
       - "exists(jsonbMap['hello'])" - filters for entries with the specified key
       - "intersects(jsonbMap.key(), ['hello', 'other'])" - filters for entries that match any of the specified keys
       - "exists(jsonbMap['hello'] || jsonbMap['other'])" - filters for entries that match any of the specified keys
       Additional filtering patterns may be provided in the future as use cases are identified.
    """

    callbackRequired: Optional[bool]=None
    """
    When set on one of the {@link Persistable} functions (e.g. before..., after...) the callback function may not be
    disabled via the {@link UpsertSpec}.  Attempts to do so will be ignored.
    """

    blockAclRefFiltering: Optional[bool]=None
    """
    When true and specified on a field with a reference to a type where acl is being applied for the current user, any
    attempts by the user to filter or order by traversing that field will result in an exception being thrown.  When
    specified on a type, any such attempts to filter or order on any field that references that type will similarly
    result in an exception being thrown.
    """
    def __init__(self, VALUE_ONLY_FIELD: Optional[str]=None, noInherit: Optional[bool]=None, domain: Optional[str]=None, datastore: Optional[str]=None, secondaryDatastore: Optional[str]=None, pgPartition: Optional[PgPartitionDef]=None, partitionKeyField: Optional[str]=None, partitionKeyBin: Optional[str]=None, defaultPartitionStrategy: Optional[PartitionBucketStrategy]=None, persistenceOrder: Optional[str]=None, persistDuplicates: Optional[bool]=None, systemType: Optional[bool]=None, compactType: Optional[bool]=None, writeOnce: Optional[bool]=None, systemUpdateOnly: Optional[bool]=None, createOnly: Optional[bool]=None, textSearchField: Optional[bool]=None, order: Optional[str]=None, unique: Optional[Array[str]]=None, index: Optional[Array[Union[str,Any]]]=None, shortId: Optional[bool]=None, shortIdPrefix: Optional[str]=None, shortIdSuffixType: Optional[str]=None, shortIdReservationRange: Optional[int]=None, filter: Optional[str]=None, limit: Optional[int]=None, viewFilter: Optional[str]=None, archive: Optional[bool]=None, versionHistory: Optional[bool]=None, counter: Optional[bool]=None, timedValueHistoryField: Optional[str]=None, timedValueHistoryPreventOverlaps: Optional[bool]=None, timedRelationHistoryDedupToSide: Optional[bool]=None, timedCharacteristicHistoryField: Optional[str]=None, columnarStorage: Optional[bool]=None, persistAllFields: Optional[bool]=None, include: Optional[str]=None, viewInclude: Optional[str]=None, defaultCommitSize: Optional[int]=None, dataTypeOverride: Optional[str]=None, enforceAcl: Optional[bool]=None, enforceUpdateAclForNonClusterAdmin: Optional[bool]=None, disableAutoStoredCalcRefresh: Optional[bool]=None, cacheData: Optional[bool]=None, fkeyConstraint: Optional[bool]=None, tempTable: Optional[bool]=None, includeReadCalcs: Optional[bool]=None, callbackDisabled: Optional[bool]=None, castVarcharLength: Optional[bool]=None, h2UseClobCol: Optional[bool]=None, compositeKeyFieldMapping: Optional[Map[str, str]]=None, pgPersistAsJson: Optional[bool]=None, callbackRequired: Optional[bool]=None, blockAclRefFiltering: Optional[bool]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[Ann.Db]:
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
    def fromJsonString(cls, json: str) -> Union[Ann.Db]:
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
    def fromXmlString(cls, xml: str) -> Union[Ann.Db]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[Ann.Db]:
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
    def replaceType(self, old: Type, new: Type) -> Ann.Db:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Ann.Db:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Ann.Db:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Ann.Db]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Ann.Db]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Ann.Db:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Ann.Db:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Ann.Db:
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
    def validateObj(self) -> Ann.Db:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Ann.Db:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Ann.Db:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Ann.Db:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Ann.Db:
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
    def withoutFieldAtPath(self, path: str) -> Ann.Db:
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
    def withoutField(self, field: str) -> Ann.Db:
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
    def withoutField(self, field: FieldType) -> Ann.Db:
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
    def withoutFields(self, fields: Array[str]) -> Ann.Db:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> Ann.Db:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> Ann.Db:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Ann.Db:
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
    def defaultField(self, field: str) -> Ann.Db:
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
    def defaultField(self, field: FieldType) -> Ann.Db:
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
    def unsetField(self, field: str) -> Ann.Db:
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
    def unsetField(self, field: FieldType) -> Ann.Db:
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
    def removeField(self, field: str) -> Ann.Db:
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
    def removeField(self, field: FieldType) -> Ann.Db:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Ann.Db:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Ann.Db:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Ann.Db:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Ann.Db:
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
    def mergeJson(self, json: any) -> Ann.Db:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Ann.Db:
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
    def sumObj(self, other: Obj, deep: bool=None) -> Ann.Db:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[Ann.Db]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[Ann.Db]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[Ann.Db]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[Ann.Db]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[Ann.Db]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, Ann.Db]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Ann.Db]]:
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
    def toBuilder(self) -> ObjBuilder[Ann.Db]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[Ann.Db]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Ann.Db:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Ann.Db:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Ann.Db:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> Ann.Db:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Ann.Db:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> Ann.Db:
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
    @classmethod
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Ann.Db:
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
    def afterMake(self) -> Ann.Db:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> Ann.Db:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Ann.Db]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> Ann.Db:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def annDeclaredName(self) -> str:
    """
    Name as specified in the annotation usage.
    """
        ...
    @classmethod
    def hasValueField(cls) -> bool:
    """
    Whether this annotation type has a field named "_value_" or annotates one of its fields with
    `@annotation(value=true)`.
    """
        ...
    @classmethod
    def valueFieldName(cls, failIfNone: bool=None) -> Union[str]:
    """
    If this annotation type has a field named "_value_" or annotates one of its fields with `@annotation(value=true)`,
    returns the name of that field.
    
    @param failIfNone if true and there is no such field, an error is thrown
    """
        ...
    def valueFieldValue(self, failIfNone: bool=None) -> Union[Any]:
    """
    If this annotation type has a field named "_value_" or annotates one of its fields with `@annotation(value=true)`,
    returns the value of that field in this instance of the annotation.
    
    @param failIfNone if true and there is no such field, an error is thrown
    """
        ...

