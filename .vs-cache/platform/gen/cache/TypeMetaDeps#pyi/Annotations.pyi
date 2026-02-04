#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Ann.ObjPool import Ann.ObjPool
from c3.platform.Ann.Template import Ann.Template
from c3.platform.Include import Include
from c3.platform.Ann.UiSdlDataSpec import Ann.UiSdlDataSpec
from c3.platform.Ann.Notifiable import Ann.Notifiable
from c3.platform.Ann.SalesforceTypePermission import Ann.SalesforceTypePermission
from c3.platform.Ann.XmlField import Ann.XmlField
from c3.platform.Ann.DenormAttr import Ann.DenormAttr
from c3.platform.Ann.UiSdlReducer import Ann.UiSdlReducer
from c3.platform.Ann.Constraint import Ann.Constraint
from c3.platform.Ann.Implicit import Ann.Implicit
from c3.platform.Ann.Js import Ann.Js
from c3.platform.Ann.PII import Ann.PII
from c3.platform.Ann.TimeseriesCallbackFunction import Ann.TimeseriesCallbackFunction
from c3.platform.Ann.TranslateData import Ann.TranslateData
from c3.platform.Ann.Azure import Ann.Azure
from c3.platform.Ann.Comparator import Ann.Comparator
from c3.platform.Ann.Dsl import Ann.Dsl
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Ann.Seed import Ann.Seed
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Ann.Restful import Ann.Restful
from c3.platform.Data import Data
from c3.platform.Promise import Promise
from c3.platform.Ann.EnumDimenzion import Ann.EnumDimenzion
from c3.platform.Ann.Search import Ann.Search
from c3.platform.Ann.GenericAttrHierarchy import Ann.GenericAttrHierarchy
from c3.platform.Ann.Denorm import Ann.Denorm
from c3.platform.Ann.QuasiId import Ann.QuasiId
from c3.platform.Ann.TypeScript import Ann.TypeScript
from c3.platform.Ann.Leaf import Ann.Leaf
from c3.platform.MapType import MapType
from c3.platform.Ann.Call import Ann.Call
from c3.platform.Ann.Mutable import Ann.Mutable
from c3.platform.Ann.Schema import Ann.Schema
from c3.platform.Ann.ML import Ann.ML
from c3.platform.Ann.Ts import Ann.Ts
from c3.platform.Ann.Db import Ann.Db
from c3.platform.Ann.Alert import Ann.Alert
from c3.platform.Ann.ImplLanguage import Ann.ImplLanguage
from c3.platform.Ann.Cache import Ann.Cache
from c3.platform.Ann.Ser import Ann.Ser
from c3.platform.Ann.PiiAggregation import Ann.PiiAggregation
from c3.platform.Ann.Pandas import Ann.Pandas
from c3.platform.Ann.Ui import Ann.Ui
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Ann.WebSocket import Ann.WebSocket
from c3.platform.ReferenceType import ReferenceType
from c3.platform.Ann.Stream import Ann.Stream
from c3.platform.Ann.Error import Ann.Error
from c3.platform.Ann.Index import Ann.Index
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.Ann.Sorted import Ann.Sorted
from c3.platform.Ann.Normalization import Ann.Normalization
from c3.platform.Ann.ServerEventProducer import Ann.ServerEventProducer
from c3.platform.Ann.DateDimenzion import Ann.DateDimenzion
from c3.platform.Ann.Dimenzion import Ann.Dimenzion
from c3.platform.Ann.Generated import Ann.Generated
from c3.platform.Ann.Vector import Ann.Vector
from c3.platform.Ann.ExternalService import Ann.ExternalService
from c3.platform.Ann.UiSdlEpic import Ann.UiSdlEpic
from c3.platform.Ann.DataGrid import Ann.DataGrid
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.Ann.ConstantMeasure import Ann.ConstantMeasure
from c3.platform.Ann.MetadataListener import Ann.MetadataListener
from c3.platform.Ann.KvFs import Ann.KvFs
from c3.platform.Ann.React import Ann.React
from c3.platform.Ann.Config import Ann.Config
from c3.platform.Ann.Rest import Ann.Rest
from c3.platform.Ann.Action import Ann.Action
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.Ann.DFE import Ann.DFE
from c3.platform.Ann.MultivaluedExpr import Ann.MultivaluedExpr
from c3.platform.Ann.Typesys import Ann.Typesys
from c3.platform.Ann.Numerical import Ann.Numerical
from c3.platform.Ann.Annotation import Ann.Annotation
from c3.platform.Ann.DeepCopyHelper import Ann.DeepCopyHelper
from c3.platform.Ann.DenormAttrHierarchy import Ann.DenormAttrHierarchy
from c3.platform.Ann.Suppress import Ann.Suppress
from c3.platform.Ann.Cloud import Ann.Cloud
from c3.platform.Ann.Dependency import Ann.Dependency
from c3.platform.Ann.AnalyticExtract import Ann.AnalyticExtract
from c3.platform.Ann.Xml import Ann.Xml
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Ann.Indexed import Ann.Indexed
from c3.platform.FieldType import FieldType
from c3.platform.Ann.MetaDeps import Ann.MetaDeps
from c3.platform.Ann.Publish import Ann.Publish
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.Ann.Beta import Ann.Beta
from c3.platform.Ann.ReClaim import Ann.ReClaim
from c3.platform.Type import Type
from c3.platform.Ann.Network import Ann.Network
from c3.platform.Ann.Value import Ann.Value
from c3.platform.ValueType import ValueType
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.Ann.Code import Ann.Code
from c3.platform.Ann.Attr import Ann.Attr
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Ann.Preference import Ann.Preference
from c3.platform.Ann.Deprecated import Ann.Deprecated
from c3.platform.SetType import SetType
from c3.platform.Ann.Unique import Ann.Unique
from c3.platform.Ann.ImportDeepUiComponentRefs import Ann.ImportDeepUiComponentRefs
from c3.platform.Exclude import Exclude
from c3.platform.Ann.Facade import Ann.Facade
from c3.platform.Ann.ListHierarchy import Ann.ListHierarchy
from c3.platform.Ann.S3Event import Ann.S3Event
from c3.platform.Ann.Tsx import Ann.Tsx
from c3.platform.Ann.Subscribe import Ann.Subscribe
from c3.platform.Ann.K8s import Ann.K8s
from c3.platform.Ann.SalesforceFieldPermission import Ann.SalesforceFieldPermission
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Ann.Metadata import Ann.Metadata
from c3.platform.Ann.QI import Ann.QI
from c3.platform.Ann.Sys import Ann.Sys
from c3.platform.ArrayType import ArrayType
from c3.platform.Ann.Nodejs import Ann.Nodejs
from c3.platform.Ann.Gis import Ann.Gis
from c3.platform.Ann.Py import Ann.Py
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.Promise import Promise
from c3.platform.Ann.Weather import Ann.Weather
from c3.platform.Ann.InvalidationQueueOptions import Ann.InvalidationQueueOptions
from c3.platform.Obj import Obj
from c3.platform.Ann.Guard import Ann.Guard
from c3.platform.Ann.Engine import Ann.Engine
from c3.platform.Ann.UiSdlActionCreator import Ann.UiSdlActionCreator
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.Ann.Java import Ann.Java
from c3.platform.FieldValue import FieldValue
from c3.platform.Annotation import Annotation
from c3.platform.Ann.Merge import Ann.Merge
from c3.platform.Ann.Obj import Ann.Obj
from c3.platform.Ann.TimeseriesMeasure import Ann.TimeseriesMeasure
from c3.platform.Ann.DateHierarchy import Ann.DateHierarchy
from c3.platform.Ann.EtlMeasure import Ann.EtlMeasure
from c3.platform.Ann.FileSystemEvent import Ann.FileSystemEvent

# Python definitions for the C3 type Annotations


class Annotations():
    """
    This object represents a view of all annotations for a specific metadata instance. It provides method-based
    access to all annotations, whether they are declared or not. This allows code to access annotation values without
    a bunch of extra checks.
    
    For example, the type declaration:
    ```type
    @ser(includeCachedMethods=['js', 'py'])
    type Snake ...
    ```
    
    Means that `Snake.meta().annotations().ser()` would return an instance of {@link Ann.Ser} because `@ser` is declared.
    However, it will also return an empty instance of every other defined annotation as well, even though they are
    not declared on Snake.
    
    @remarks this represents a made instance of Annotations
    """
    
    annotationsJson: Optional[any]=None
    """
    The annotations declared on the owning element and its mixins.
    
    @see Annotatable#annotationsJson
    """

    annotationJsonByName: Optional[Map[str, any]]=None
    """
    Map of Annotation name to it's declaration json
    """

    action: Optional[Ann.Action]=None

    hasAction: Optional[bool]=None

    alert: Optional[Ann.Alert]=None

    hasAlert: Optional[bool]=None

    analyticExtract: Optional[Ann.AnalyticExtract]=None

    hasAnalyticExtract: Optional[bool]=None

    annotation: Optional[Ann.Annotation]=None

    hasAnnotation: Optional[bool]=None

    attr: Optional[Ann.Attr]=None

    hasAttr: Optional[bool]=None

    azure: Optional[Ann.Azure]=None

    hasAzure: Optional[bool]=None

    beta: Optional[Ann.Beta]=None

    hasBeta: Optional[bool]=None

    cache: Optional[Ann.Cache]=None

    hasCache: Optional[bool]=None

    call: Optional[Ann.Call]=None

    hasCall: Optional[bool]=None

    cloud: Optional[Ann.Cloud]=None

    hasCloud: Optional[bool]=None

    code: Optional[Ann.Code]=None

    hasCode: Optional[bool]=None

    comparator: Optional[Ann.Comparator]=None

    hasComparator: Optional[bool]=None

    config: Optional[Ann.Config]=None

    hasConfig: Optional[bool]=None

    constantMeasure: Optional[Ann.ConstantMeasure]=None

    hasConstantMeasure: Optional[bool]=None

    constraint: Optional[Ann.Constraint]=None

    hasConstraint: Optional[bool]=None

    DFE: Optional[Ann.DFE]=None

    hasDFE: Optional[bool]=None

    dataGrid: Optional[Ann.DataGrid]=None

    hasDataGrid: Optional[bool]=None

    dateDimenzion: Optional[Ann.DateDimenzion]=None

    hasDateDimenzion: Optional[bool]=None

    dateHierarchy: Optional[Ann.DateHierarchy]=None

    hasDateHierarchy: Optional[bool]=None

    db: Optional[Ann.Db]=None

    hasDb: Optional[bool]=None

    deepCopyHelper: Optional[Ann.DeepCopyHelper]=None

    hasDeepCopyHelper: Optional[bool]=None

    denorm: Optional[Ann.Denorm]=None

    hasDenorm: Optional[bool]=None

    denormAttr: Optional[Ann.DenormAttr]=None

    hasDenormAttr: Optional[bool]=None

    denormAttrHierarchy: Optional[Ann.DenormAttrHierarchy]=None

    hasDenormAttrHierarchy: Optional[bool]=None

    dependency: Optional[Ann.Dependency]=None

    hasDependency: Optional[bool]=None

    deprecated: Optional[Ann.Deprecated]=None

    hasDeprecated: Optional[bool]=None

    dimenzion: Optional[Ann.Dimenzion]=None

    hasDimenzion: Optional[bool]=None

    dsl: Optional[Ann.Dsl]=None

    hasDsl: Optional[bool]=None

    engine: Optional[Ann.Engine]=None

    hasEngine: Optional[bool]=None

    enumDimenzion: Optional[Ann.EnumDimenzion]=None

    hasEnumDimenzion: Optional[bool]=None

    error: Optional[Ann.Error]=None

    hasError: Optional[bool]=None

    etlMeasure: Optional[Ann.EtlMeasure]=None

    hasEtlMeasure: Optional[bool]=None

    externalService: Optional[Ann.ExternalService]=None

    hasExternalService: Optional[bool]=None

    facade: Optional[Ann.Facade]=None

    hasFacade: Optional[bool]=None

    fileSystemEvent: Optional[Ann.FileSystemEvent]=None

    hasFileSystemEvent: Optional[bool]=None

    generated: Optional[Ann.Generated]=None

    hasGenerated: Optional[bool]=None

    genericAttrHierarchy: Optional[Ann.GenericAttrHierarchy]=None

    hasGenericAttrHierarchy: Optional[bool]=None

    gis: Optional[Ann.Gis]=None

    hasGis: Optional[bool]=None

    guard: Optional[Ann.Guard]=None

    hasGuard: Optional[bool]=None

    implLanguage: Optional[Ann.ImplLanguage]=None

    hasImplLanguage: Optional[bool]=None

    implicit: Optional[Ann.Implicit]=None

    hasImplicit: Optional[bool]=None

    importDeepUiComponentRefs: Optional[Ann.ImportDeepUiComponentRefs]=None

    hasImportDeepUiComponentRefs: Optional[bool]=None

    index: Optional[Ann.Index]=None

    hasIndex: Optional[bool]=None

    indexed: Optional[Ann.Indexed]=None

    hasIndexed: Optional[bool]=None

    invalidationQueueOptions: Optional[Ann.InvalidationQueueOptions]=None

    hasInvalidationQueueOptions: Optional[bool]=None

    java: Optional[Ann.Java]=None

    hasJava: Optional[bool]=None

    js: Optional[Ann.Js]=None

    hasJs: Optional[bool]=None

    k8s: Optional[Ann.K8s]=None

    hasK8s: Optional[bool]=None

    kvFs: Optional[Ann.KvFs]=None

    hasKvFs: Optional[bool]=None

    leaf: Optional[Ann.Leaf]=None

    hasLeaf: Optional[bool]=None

    listHierarchy: Optional[Ann.ListHierarchy]=None

    hasListHierarchy: Optional[bool]=None

    ML: Optional[Ann.ML]=None

    hasML: Optional[bool]=None

    merge: Optional[Ann.Merge]=None

    hasMerge: Optional[bool]=None

    metaDeps: Optional[Ann.MetaDeps]=None

    hasMetaDeps: Optional[bool]=None

    metadata: Optional[Ann.Metadata]=None

    hasMetadata: Optional[bool]=None

    metadataListener: Optional[Ann.MetadataListener]=None

    hasMetadataListener: Optional[bool]=None

    multivaluedExpr: Optional[Ann.MultivaluedExpr]=None

    hasMultivaluedExpr: Optional[bool]=None

    mutable: Optional[Ann.Mutable]=None

    hasMutable: Optional[bool]=None

    network: Optional[Ann.Network]=None

    hasNetwork: Optional[bool]=None

    nodejs: Optional[Ann.Nodejs]=None

    hasNodejs: Optional[bool]=None

    normalization: Optional[Ann.Normalization]=None

    hasNormalization: Optional[bool]=None

    notifiable: Optional[Ann.Notifiable]=None

    hasNotifiable: Optional[bool]=None

    numerical: Optional[Ann.Numerical]=None

    hasNumerical: Optional[bool]=None

    obj: Optional[Ann.Obj]=None

    hasObj: Optional[bool]=None

    objPool: Optional[Ann.ObjPool]=None

    hasObjPool: Optional[bool]=None

    PII: Optional[Ann.PII]=None

    hasPII: Optional[bool]=None

    pandas: Optional[Ann.Pandas]=None

    hasPandas: Optional[bool]=None

    piiAggregation: Optional[Ann.PiiAggregation]=None

    hasPiiAggregation: Optional[bool]=None

    preference: Optional[Ann.Preference]=None

    hasPreference: Optional[bool]=None

    publish: Optional[Ann.Publish]=None

    hasPublish: Optional[bool]=None

    py: Optional[Ann.Py]=None

    hasPy: Optional[bool]=None

    QI: Optional[Ann.QI]=None

    hasQI: Optional[bool]=None

    quasiId: Optional[Ann.QuasiId]=None

    hasQuasiId: Optional[bool]=None

    reClaim: Optional[Ann.ReClaim]=None

    hasReClaim: Optional[bool]=None

    react: Optional[Ann.React]=None

    hasReact: Optional[bool]=None

    rest: Optional[Ann.Rest]=None

    hasRest: Optional[bool]=None

    restful: Optional[Ann.Restful]=None

    hasRestful: Optional[bool]=None

    s3Event: Optional[Ann.S3Event]=None

    hasS3Event: Optional[bool]=None

    salesforceFieldPermission: Optional[Ann.SalesforceFieldPermission]=None

    hasSalesforceFieldPermission: Optional[bool]=None

    salesforceTypePermission: Optional[Ann.SalesforceTypePermission]=None

    hasSalesforceTypePermission: Optional[bool]=None

    schema: Optional[Ann.Schema]=None

    hasSchema: Optional[bool]=None

    search: Optional[Ann.Search]=None

    hasSearch: Optional[bool]=None

    seed: Optional[Ann.Seed]=None

    hasSeed: Optional[bool]=None

    ser: Optional[Ann.Ser]=None

    hasSer: Optional[bool]=None

    serverEventProducer: Optional[Ann.ServerEventProducer]=None

    hasServerEventProducer: Optional[bool]=None

    sorted: Optional[Ann.Sorted]=None

    hasSorted: Optional[bool]=None

    stream: Optional[Ann.Stream]=None

    hasStream: Optional[bool]=None

    subscribe: Optional[Ann.Subscribe]=None

    hasSubscribe: Optional[bool]=None

    suppress: Optional[Ann.Suppress]=None

    hasSuppress: Optional[bool]=None

    sys: Optional[Ann.Sys]=None

    hasSys: Optional[bool]=None

    template: Optional[Ann.Template]=None

    hasTemplate: Optional[bool]=None

    timeseriesCallbackFunction: Optional[Ann.TimeseriesCallbackFunction]=None

    hasTimeseriesCallbackFunction: Optional[bool]=None

    timeseriesMeasure: Optional[Ann.TimeseriesMeasure]=None

    hasTimeseriesMeasure: Optional[bool]=None

    translateData: Optional[Ann.TranslateData]=None

    hasTranslateData: Optional[bool]=None

    ts: Optional[Ann.Ts]=None

    hasTs: Optional[bool]=None

    tsx: Optional[Ann.Tsx]=None

    hasTsx: Optional[bool]=None

    typeScript: Optional[Ann.TypeScript]=None

    hasTypeScript: Optional[bool]=None

    typesys: Optional[Ann.Typesys]=None

    hasTypesys: Optional[bool]=None

    ui: Optional[Ann.Ui]=None

    hasUi: Optional[bool]=None

    uiSdlActionCreator: Optional[Ann.UiSdlActionCreator]=None

    hasUiSdlActionCreator: Optional[bool]=None

    uiSdlDataSpec: Optional[Ann.UiSdlDataSpec]=None

    hasUiSdlDataSpec: Optional[bool]=None

    uiSdlEpic: Optional[Ann.UiSdlEpic]=None

    hasUiSdlEpic: Optional[bool]=None

    uiSdlReducer: Optional[Ann.UiSdlReducer]=None

    hasUiSdlReducer: Optional[bool]=None

    unique: Optional[Ann.Unique]=None

    hasUnique: Optional[bool]=None

    value: Optional[Ann.Value]=None

    hasValue: Optional[bool]=None

    vector: Optional[Ann.Vector]=None

    hasVector: Optional[bool]=None

    weather: Optional[Ann.Weather]=None

    hasWeather: Optional[bool]=None

    webSocket: Optional[Ann.WebSocket]=None

    hasWebSocket: Optional[bool]=None

    xml: Optional[Ann.Xml]=None

    hasXml: Optional[bool]=None

    xmlField: Optional[Ann.XmlField]=None

    hasXmlField: Optional[bool]=None
    def __init__(self, annotationsJson: Optional[any]=None, annotationJsonByName: Optional[Map[str, any]]=None, action: Optional[Ann.Action]=None, hasAction: Optional[bool]=None, alert: Optional[Ann.Alert]=None, hasAlert: Optional[bool]=None, analyticExtract: Optional[Ann.AnalyticExtract]=None, hasAnalyticExtract: Optional[bool]=None, annotation: Optional[Ann.Annotation]=None, hasAnnotation: Optional[bool]=None, attr: Optional[Ann.Attr]=None, hasAttr: Optional[bool]=None, azure: Optional[Ann.Azure]=None, hasAzure: Optional[bool]=None, beta: Optional[Ann.Beta]=None, hasBeta: Optional[bool]=None, cache: Optional[Ann.Cache]=None, hasCache: Optional[bool]=None, call: Optional[Ann.Call]=None, hasCall: Optional[bool]=None, cloud: Optional[Ann.Cloud]=None, hasCloud: Optional[bool]=None, code: Optional[Ann.Code]=None, hasCode: Optional[bool]=None, comparator: Optional[Ann.Comparator]=None, hasComparator: Optional[bool]=None, config: Optional[Ann.Config]=None, hasConfig: Optional[bool]=None, constantMeasure: Optional[Ann.ConstantMeasure]=None, hasConstantMeasure: Optional[bool]=None, constraint: Optional[Ann.Constraint]=None, hasConstraint: Optional[bool]=None, DFE: Optional[Ann.DFE]=None, hasDFE: Optional[bool]=None, dataGrid: Optional[Ann.DataGrid]=None, hasDataGrid: Optional[bool]=None, dateDimenzion: Optional[Ann.DateDimenzion]=None, hasDateDimenzion: Optional[bool]=None, dateHierarchy: Optional[Ann.DateHierarchy]=None, hasDateHierarchy: Optional[bool]=None, db: Optional[Ann.Db]=None, hasDb: Optional[bool]=None, deepCopyHelper: Optional[Ann.DeepCopyHelper]=None, hasDeepCopyHelper: Optional[bool]=None, denorm: Optional[Ann.Denorm]=None, hasDenorm: Optional[bool]=None, denormAttr: Optional[Ann.DenormAttr]=None, hasDenormAttr: Optional[bool]=None, denormAttrHierarchy: Optional[Ann.DenormAttrHierarchy]=None, hasDenormAttrHierarchy: Optional[bool]=None, dependency: Optional[Ann.Dependency]=None, hasDependency: Optional[bool]=None, deprecated: Optional[Ann.Deprecated]=None, hasDeprecated: Optional[bool]=None, dimenzion: Optional[Ann.Dimenzion]=None, hasDimenzion: Optional[bool]=None, dsl: Optional[Ann.Dsl]=None, hasDsl: Optional[bool]=None, engine: Optional[Ann.Engine]=None, hasEngine: Optional[bool]=None, enumDimenzion: Optional[Ann.EnumDimenzion]=None, hasEnumDimenzion: Optional[bool]=None, error: Optional[Ann.Error]=None, hasError: Optional[bool]=None, etlMeasure: Optional[Ann.EtlMeasure]=None, hasEtlMeasure: Optional[bool]=None, externalService: Optional[Ann.ExternalService]=None, hasExternalService: Optional[bool]=None, facade: Optional[Ann.Facade]=None, hasFacade: Optional[bool]=None, fileSystemEvent: Optional[Ann.FileSystemEvent]=None, hasFileSystemEvent: Optional[bool]=None, generated: Optional[Ann.Generated]=None, hasGenerated: Optional[bool]=None, genericAttrHierarchy: Optional[Ann.GenericAttrHierarchy]=None, hasGenericAttrHierarchy: Optional[bool]=None, gis: Optional[Ann.Gis]=None, hasGis: Optional[bool]=None, guard: Optional[Ann.Guard]=None, hasGuard: Optional[bool]=None, implLanguage: Optional[Ann.ImplLanguage]=None, hasImplLanguage: Optional[bool]=None, implicit: Optional[Ann.Implicit]=None, hasImplicit: Optional[bool]=None, importDeepUiComponentRefs: Optional[Ann.ImportDeepUiComponentRefs]=None, hasImportDeepUiComponentRefs: Optional[bool]=None, index: Optional[Ann.Index]=None, hasIndex: Optional[bool]=None, indexed: Optional[Ann.Indexed]=None, hasIndexed: Optional[bool]=None, invalidationQueueOptions: Optional[Ann.InvalidationQueueOptions]=None, hasInvalidationQueueOptions: Optional[bool]=None, java: Optional[Ann.Java]=None, hasJava: Optional[bool]=None, js: Optional[Ann.Js]=None, hasJs: Optional[bool]=None, k8s: Optional[Ann.K8s]=None, hasK8s: Optional[bool]=None, kvFs: Optional[Ann.KvFs]=None, hasKvFs: Optional[bool]=None, leaf: Optional[Ann.Leaf]=None, hasLeaf: Optional[bool]=None, listHierarchy: Optional[Ann.ListHierarchy]=None, hasListHierarchy: Optional[bool]=None, ML: Optional[Ann.ML]=None, hasML: Optional[bool]=None, merge: Optional[Ann.Merge]=None, hasMerge: Optional[bool]=None, metaDeps: Optional[Ann.MetaDeps]=None, hasMetaDeps: Optional[bool]=None, metadata: Optional[Ann.Metadata]=None, hasMetadata: Optional[bool]=None, metadataListener: Optional[Ann.MetadataListener]=None, hasMetadataListener: Optional[bool]=None, multivaluedExpr: Optional[Ann.MultivaluedExpr]=None, hasMultivaluedExpr: Optional[bool]=None, mutable: Optional[Ann.Mutable]=None, hasMutable: Optional[bool]=None, network: Optional[Ann.Network]=None, hasNetwork: Optional[bool]=None, nodejs: Optional[Ann.Nodejs]=None, hasNodejs: Optional[bool]=None, normalization: Optional[Ann.Normalization]=None, hasNormalization: Optional[bool]=None, notifiable: Optional[Ann.Notifiable]=None, hasNotifiable: Optional[bool]=None, numerical: Optional[Ann.Numerical]=None, hasNumerical: Optional[bool]=None, obj: Optional[Ann.Obj]=None, hasObj: Optional[bool]=None, objPool: Optional[Ann.ObjPool]=None, hasObjPool: Optional[bool]=None, PII: Optional[Ann.PII]=None, hasPII: Optional[bool]=None, pandas: Optional[Ann.Pandas]=None, hasPandas: Optional[bool]=None, piiAggregation: Optional[Ann.PiiAggregation]=None, hasPiiAggregation: Optional[bool]=None, preference: Optional[Ann.Preference]=None, hasPreference: Optional[bool]=None, publish: Optional[Ann.Publish]=None, hasPublish: Optional[bool]=None, py: Optional[Ann.Py]=None, hasPy: Optional[bool]=None, QI: Optional[Ann.QI]=None, hasQI: Optional[bool]=None, quasiId: Optional[Ann.QuasiId]=None, hasQuasiId: Optional[bool]=None, reClaim: Optional[Ann.ReClaim]=None, hasReClaim: Optional[bool]=None, react: Optional[Ann.React]=None, hasReact: Optional[bool]=None, rest: Optional[Ann.Rest]=None, hasRest: Optional[bool]=None, restful: Optional[Ann.Restful]=None, hasRestful: Optional[bool]=None, s3Event: Optional[Ann.S3Event]=None, hasS3Event: Optional[bool]=None, salesforceFieldPermission: Optional[Ann.SalesforceFieldPermission]=None, hasSalesforceFieldPermission: Optional[bool]=None, salesforceTypePermission: Optional[Ann.SalesforceTypePermission]=None, hasSalesforceTypePermission: Optional[bool]=None, schema: Optional[Ann.Schema]=None, hasSchema: Optional[bool]=None, search: Optional[Ann.Search]=None, hasSearch: Optional[bool]=None, seed: Optional[Ann.Seed]=None, hasSeed: Optional[bool]=None, ser: Optional[Ann.Ser]=None, hasSer: Optional[bool]=None, serverEventProducer: Optional[Ann.ServerEventProducer]=None, hasServerEventProducer: Optional[bool]=None, sorted: Optional[Ann.Sorted]=None, hasSorted: Optional[bool]=None, stream: Optional[Ann.Stream]=None, hasStream: Optional[bool]=None, subscribe: Optional[Ann.Subscribe]=None, hasSubscribe: Optional[bool]=None, suppress: Optional[Ann.Suppress]=None, hasSuppress: Optional[bool]=None, sys: Optional[Ann.Sys]=None, hasSys: Optional[bool]=None, template: Optional[Ann.Template]=None, hasTemplate: Optional[bool]=None, timeseriesCallbackFunction: Optional[Ann.TimeseriesCallbackFunction]=None, hasTimeseriesCallbackFunction: Optional[bool]=None, timeseriesMeasure: Optional[Ann.TimeseriesMeasure]=None, hasTimeseriesMeasure: Optional[bool]=None, translateData: Optional[Ann.TranslateData]=None, hasTranslateData: Optional[bool]=None, ts: Optional[Ann.Ts]=None, hasTs: Optional[bool]=None, tsx: Optional[Ann.Tsx]=None, hasTsx: Optional[bool]=None, typeScript: Optional[Ann.TypeScript]=None, hasTypeScript: Optional[bool]=None, typesys: Optional[Ann.Typesys]=None, hasTypesys: Optional[bool]=None, ui: Optional[Ann.Ui]=None, hasUi: Optional[bool]=None, uiSdlActionCreator: Optional[Ann.UiSdlActionCreator]=None, hasUiSdlActionCreator: Optional[bool]=None, uiSdlDataSpec: Optional[Ann.UiSdlDataSpec]=None, hasUiSdlDataSpec: Optional[bool]=None, uiSdlEpic: Optional[Ann.UiSdlEpic]=None, hasUiSdlEpic: Optional[bool]=None, uiSdlReducer: Optional[Ann.UiSdlReducer]=None, hasUiSdlReducer: Optional[bool]=None, unique: Optional[Ann.Unique]=None, hasUnique: Optional[bool]=None, value: Optional[Ann.Value]=None, hasValue: Optional[bool]=None, vector: Optional[Ann.Vector]=None, hasVector: Optional[bool]=None, weather: Optional[Ann.Weather]=None, hasWeather: Optional[bool]=None, webSocket: Optional[Ann.WebSocket]=None, hasWebSocket: Optional[bool]=None, xml: Optional[Ann.Xml]=None, hasXml: Optional[bool]=None, xmlField: Optional[Ann.XmlField]=None, hasXmlField: Optional[bool]=None) -> None: ...

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
    def fromJson(cls, json: any) -> Union[Annotations]:
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
    def fromJsonString(cls, json: str) -> Union[Annotations]:
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
    def fromXmlString(cls, xml: str) -> Union[Annotations]:
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
    def deserialize(cls, contentStr: str, contentType: str) -> Union[Annotations]:
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
    def replaceType(self, old: Type, new: Type) -> Annotations:
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
    def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Annotations:
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
    def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> Annotations:
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
    def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Annotations]:
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
    def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[Annotations]:
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
    def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> Annotations:
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
    def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Annotations:
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
    def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> Annotations:
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
    def validateObj(self) -> Annotations:
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
    def withField(self, field: str, value: Any, doNotConvert: bool=None) -> Annotations:
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
    def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> Annotations:
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
    def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> Annotations:
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
    def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> Annotations:
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
    def withoutFieldAtPath(self, path: str) -> Annotations:
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
    def withoutField(self, field: str) -> Annotations:
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
    def withoutField(self, field: FieldType) -> Annotations:
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
    def withoutFields(self, fields: Array[str]) -> Annotations:
    """
    Builds a new Obj, removing the fields with the provided names.
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              names of the fields to remove
    @return new Obj with removed fields
    """
        ...
    def withoutFieldsByType(self, fields: Array[FieldType]) -> Annotations:
    """
    Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
    exact same type as the type of the obj to respect the "ordinal" of the field type
    
    Immutable objects may return the same instance if the fields being removed are not present in the existing object.
    
    @param fields
              field types to remove
    @return new Obj with removed fields
    """
        ...
    def withoutSecretFields(self) -> Annotations:
    """
    @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
    """
        ...
    def secretFieldsSet(self) -> Array[str]:
    """
    @return a list of the secret field paths that were found to be set on this Obj.
    """
        ...
    def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> Annotations:
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
    def defaultField(self, field: str) -> Annotations:
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
    def defaultField(self, field: FieldType) -> Annotations:
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
    def unsetField(self, field: str) -> Annotations:
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
    def unsetField(self, field: FieldType) -> Annotations:
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
    def removeField(self, field: str) -> Annotations:
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
    def removeField(self, field: FieldType) -> Annotations:
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
    def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> Annotations:
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
    def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> Annotations:
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
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> Annotations:
    """
    Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
    fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
    @param deep
           if set to true then traverse reference and collection fields and merge corresponding fields or elements with
           the same key or index.
    """
        ...
    @overload
    def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> Annotations:
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
    def mergeJson(self, json: any) -> Annotations:
        ...
    def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> Annotations:
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
    def sumObj(self, other: Obj, deep: bool=None) -> Annotations:
    """
    Adds the numeric Obj fields with the other Objs respective fields.
    If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
    references with same name and collection elements at same index or key.
    """
        ...
    def singletonArray(self) -> Array[Annotations]:
    """
    Build an array of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def array(cls, *elements: Array[Any]) -> Union[Array[Annotations]]:
    """
    Creates an array of instances of this type.
    """
        ...
    @classmethod
    def arrayBuilder(cls) -> Union[ArrayBuilder[Annotations]]:
    """
    Creates an array of instances of this type.
    """
        ...
    def singletonSet(self) -> Set[Annotations]:
    """
    Build an set of the correct type with a single element which is this instance.
    
    @return new array instance with this as only element.
    """
        ...
    @classmethod
    def setBuilder(cls) -> Union[SetBuilder[Annotations]]:
    """
    Creates a set of instances of this type.
    """
        ...
    @classmethod
    def mapBuilder(cls) -> Union[MapBuilder[str, Annotations]]:
    """
    Create a map of string to elements of this type.
    """
        ...
    @classmethod
    def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, Annotations]]:
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
    def toBuilder(self) -> ObjBuilder[Annotations]:
    """
    @return new ObjBuilder with initial state set to fields of this instance.
    """
        ...
    @classmethod
    def builder(cls) -> ObjBuilder[Annotations]:
    """
    @return new ObjBuilder of this instance.
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> Annotations:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> Annotations:
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
    def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> Annotations:
    """
    Construct instance of this type from provided field values and options
    """
        ...
    @overload
    @classmethod
    def make(cls, withDefaults: bool=None) -> Annotations:
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
    def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> Annotations:
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
    def make(cls, fields: Any, withDefaults: bool=None) -> Annotations:
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
    def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> Annotations:
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
    def afterMake(self) -> Annotations:
    """
    Optional override that will be called after every instance creation.
    
    Note that it introduces additional overhead so should only be implemented for low volume data.
    """
        ...
    @classmethod
    def cachedEmptyInst(cls) -> Annotations:
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
    def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[Annotations]]:
    """
    Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
    value is read.
    """
        ...
    @classmethod
    def generateObj(cls, spec: Obj.GenerateSpec=None) -> Annotations:
    """
    Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
    random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
    populates fields in a more realistic way.
    """
        ...
    def get(self, name: str) -> Annotation:
    """
    Get the specified annotation name (as used) if present.
    """
        ...
    def has(self, name: str, annField: str=None) -> bool:
    """
    Whether the specified annotation name (as used) or annotation field is present.
    """
        ...
    def eachAnnotation(self, action: Callable[[Union[Annotation]]]=None) -> None:
    """
    Invoke action for every annotation on this instance.
    """
        ...
    def eachAnnotationName(self, action: Callable[[str]]=None) -> None:
    """
    Invoke action for every annotation name on this instance.
    """
        ...
    def boolAt(self, annotationValuePath: str) -> bool:
    """
    @return True if the boolean field at the specified path is true and false otherwise
    """
        ...
    def isBoolAtSet(self, annotationValuePath: str) -> bool:
    """
    @return True if the boolean field was set at the specified path (either to true or false).
    """
        ...

