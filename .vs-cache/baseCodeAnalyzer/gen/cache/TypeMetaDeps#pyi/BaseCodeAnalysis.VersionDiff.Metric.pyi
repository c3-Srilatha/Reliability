#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.FetchSpec import FetchSpec
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Include import Include
from c3.platform.FieldPath import FieldPath
from c3.platform.StreamType import StreamType
from c3.platform.FunctionParam import FunctionParam
from c3.platform.MultiLocaleFetchSpec import MultiLocaleFetchSpec
from c3.platform.Promise import Promise
from c3.platform.Meta import Meta
from c3.platform.Promise import Promise
from c3.platform.FetchResult import FetchResult
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.WithKey import WithKey
from c3.platform.FieldType import FieldType
from c3.platform.FetchStreamSpec import FetchStreamSpec
from c3.platform.UpsertSpec import UpsertSpec
from c3.baseCodeAnalyzer.BaseCodeAnalysis.VersionDiff.CompareTypesSpec import BaseCodeAnalysis.VersionDiff.CompareTypesSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.MetadataDeps import MetadataDeps
from c3.baseCodeAnalyzer.BaseCodeAnalysis.AppInfo import BaseCodeAnalysis.AppInfo
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Filter import Filter
from c3.platform.SetBuilder import SetBuilder
from c3.platform.Type import Type
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ValueType import ValueType
from c3.platform.ValueSpec import ValueSpec
from c3.platform.Obj.GenerateSpec import Obj.GenerateSpec
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Data import Data
from c3.platform.SetBuilder import SetBuilder
from c3.platform.SetType import SetType
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.FetchFilterSpec import FetchFilterSpec
from c3.platform.MapType import MapType
from c3.baseCodeAnalyzer.BaseCodeAnalysis.Metric.Result import BaseCodeAnalysis.Metric.Result
from c3.platform.Exclude import Exclude
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.SetBuilder import SetBuilder
from c3.platform.ScanStats import ScanStats
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.DeclaredFieldType import DeclaredFieldType
from c3.platform.MapBuilder import MapBuilder
from c3.platform.ReferenceType import ReferenceType
from c3.baseCodeAnalyzer.BaseCodeAnalysis.Metric.Message import BaseCodeAnalysis.Metric.Message
from c3.baseCodeAnalyzer.BaseCodeAnalysis.Metric.Config.ApplySpec import BaseCodeAnalysis.Metric.Config.ApplySpec
from c3.platform.ArrayType import ArrayType
from c3.platform.SetBuilder import SetBuilder
from c3.platform.BatchIdsSpec import BatchIdsSpec
from c3.platform.ValidateObjSpec import ValidateObjSpec
from c3.platform.Promise import Promise
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Stream import Stream
from c3.platform.ValidateObjResult import ValidateObjResult
from c3.platform.MapBuilder import MapBuilder
from c3.baseCodeAnalyzer.BaseCodeAnalysis.VersionDiff.CompareFieldsSpec import BaseCodeAnalysis.VersionDiff.CompareFieldsSpec
from c3.baseCodeAnalyzer.BaseCodeAnalysis.VersionDiff.TypeMetaChanges import BaseCodeAnalysis.VersionDiff.TypeMetaChanges
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Promise import Promise
from c3.platform.Obj import Obj
from c3.platform.ObjBuilder import ObjBuilder
from c3.platform.FetchArrowStreamSpec import FetchArrowStreamSpec
from c3.platform.ArrayBuilder import ArrayBuilder
from c3.platform.Promise import Promise
from c3.platform.Expr.CompileOptions import Expr.CompileOptions
from c3.platform.FieldValue import FieldValue
from c3.platform.MapBuilder import MapBuilder
from c3.platform.Obj.MakeSpec import Obj.MakeSpec
from c3.platform.ScanSpec import ScanSpec
from c3.baseCodeAnalyzer.BaseCodeAnalysis.VersionDiff.CompareParamsSpec import BaseCodeAnalysis.VersionDiff.CompareParamsSpec
from c3.baseCodeAnalyzer.BaseCodeAnalysis.TypeInfo import BaseCodeAnalysis.TypeInfo
from c3.platform.ExistsSpec import ExistsSpec

# Python definitions for the C3 type BaseCodeAnalysis.VersionDiff.Metric


class Metric(Value):
    """
    Abstract Type for all {@link BaseCodeAnalysis.VersionDiff} metrics. This is slightly
    different from {@link BaseCodeAnalysis.Metric} since these metrics _compare_ two
    [versions](SemanticVersion) of a package, whereas {@link BaseCodeAnalysis.Metric} is
    for static analysis of a single version.
    
    @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff.Metric
    """
    def __init__(self) -> None: ...

    @classmethod
    def scanTypeMeta(cls, calculateResultsSpec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec, scanSpec: BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec) -> Union[Array[BaseCodeAnalysis.Metric.Result]]:
    """
    Helper function for analyzing a specific category of changes between two
    versions of a C3 application without needing to worry about mapping changes
    to each other. This enables each metric to only implement the logic for
    analyzing the specific category of changes it's responsible for.
    
    Every lambda from `scanSpec` is wrapped in a `try` / `catch` block, so lambdas
    don't need to implement error handling. Additionally, messages from each lambda
    are populated with the following metadata automatically:
    
    ```json
    {
      "isPrivate": boolean,
      "isBeta": boolean,
      "isUi": boolean,
      "isTest": boolean
    }
    ```
    
    @param calculateResultsSpec
              Object containing relevant {@link App} / {@link Pkg} info and file
              changes between two versions, along with additional configurations
              for how to calculate results. This is usually passed through from
              #calculateResults.
    @param scanSpec
              Spec for specifying the lambdas to use for each category of {@link TypeMeta}
              changes (added / removed / changed).
    @return An array of results representing the version diff metric values for
            files in the package.
    """
        ...
    @classmethod
    def calculateResults(cls, spec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec) -> Union[Array[BaseCodeAnalysis.Metric.Result]]:
    """
    Function to identify and analyze a specific category of changes between two
    versions of a C3 application.
    
    Any implementation of this function should follow these rules when analyzing
    [inherited fields or methods](InheritedValueType). These are important because
    if all inherited fields were treated as changes, then it's possible for false
    positives to be surfaced on pull requests.
    
      1. If the field or method is inherited in one version but not the other, analyze
         all parts of the field. In the following example, the {@link ValueType},
         {@link ValueModifier}, and default value of `name` should be analyzed.
    
         ```type
         ┌──────────────────┬──────────────────┐
         │      1.0.0       │      2.0.0       │
         ├──────────────────┼──────────────────┤
         │ type B {         │ type B mixes A { │
         │   name: ?string  │   name: !~ = 'x' │
         │ }                │ }                │
         └──────────────────┴──────────────────┘
         ```
    
      2. If the field or method is inherited _from a different Type_ in both versions
         (after renames are resolved), analyze all parts of the field. In the following
         example, both the {@link ValueType} and {@link ValueModifier} of `name` should
         be analyzed.
    
         ```type
         ┌──────────────────┬──────────────────┐
         │      1.0.0       │      2.0.0       │
         ├──────────────────┼──────────────────┤
         │ type B mixes A { │ type B mixes C { │
         │   name: ~        │   name: !~       │
         │ }                │ }                │
         └──────────────────┴──────────────────┘
         ```
    
      3. If the field or method is inherited _from the same Type_ in both versions
         (after renames are resolved), only analyze parts that were explicitly part
         of that declaration. In the following examples, only the {@link ValueModifier}
         of `name` should be analyzed. The fully-resolved {@link ValueModifier}s should
         be compared, however, so if `A.name` was [non-empty](ValueModifier#NON_EMPTY)
         in version 1.0.0 of the first two examples, no change has actually occurred.
    
         ```type
         ┌──────────────────┬──────────────────┐
         │      1.0.0       │      2.0.0       │
         ├──────────────────┼──────────────────┤
         │ type B mixes A { │ type B mixes A { │
         │   name: ~        │   name: !~       │
         │ }                │ }                │
         ├──────────────────┼──────────────────┤
         │ type B mixes A   │ type B mixes A { │
         │                  │   name: !~       │
         │                  │ }                │
         ├──────────────────┼──────────────────┤
         │ type B mixes A { │ type B mixes A   │
         │   name: !~       │                  │
         │ }                │                  │
         └──────────────────┴──────────────────┘
         ```
    
      4. _Exception to Rule 3_: If an inherited method declaration is added or removed,
         but the method existed in both versions and the base signature either was or is
         [optional](MethodType#optional) or [abstract](MethodType#abstract), treat it as
         an addition or removal, not a change as this means a new function implementation
         has been added or removed.
    
         ```type
         ┌─────────────────────────────────────────┐
         │ type A {                                │
         │   func: optional function(a: int)       │
         │ }                                       │
         ├────────────────────┬────────────────────┤
         │       1.0.0        │       2.0.0        │
         ├────────────────────┼────────────────────┤
         │ type B mixes A     │ type B mixes A {   │
         │                    │   func: ~ js-rhino │
         │                    │ }                  │
         ├────────────────────┼────────────────────┤
         │ type B mixes A {   │ type B mixes A     │
         │   func: ~ js-rhino │                    │
         │ }                  │                    │
         └────────────────────┴────────────────────┘
         ```
    
      5. If a new mixin is added or a new field is added to a mixin and an inherited
         declaration for that field is also added, only report that declaration as added
         if it's been modified such that its addition is a breaking change, but the
         original field isn't. In the following example, the declaration of `name` should
         be reported as added in 2.0.0, but `id` shouldn't.
    
         This doesn't apply to methods since any added declaration (inherited or not)
         indicates a new implementation.
    
         ```type
         ┌──────────────────┬──────────────────┐
         │      1.0.0       │      2.0.0       │
         ├──────────────────┼──────────────────┤
         │ type B           │ type B mixes A { │
         │                  │   id: ~          |
         │                  │   name: !~       │
         │                  │ }                │
         └──────────────────┴──────────────────┘
         ```
    
      6. If a mixin is removed or a field is removed from a mixin and an inherited
         declaration for that field is also removed, don't report it. If the field
         was removed from the original Type, it should be reported there. If a mixin
         was removed, that should be reported instead. In the following example, the
         declaration of `name` shouldn't be reported as removed in 2.0.0.
    
         ```type
         ┌──────────────────┬──────────────────┐
         │      1.0.0       │      2.0.0       │
         ├──────────────────┼──────────────────┤
         │ type B mixes A { │ type B           │
         │   name: ~        │                  |
         │ }                │                  │
         └──────────────────┴──────────────────┘
         ```
    
    @param spec
              Object containing relevant {@link App} / {@link Pkg} info and file
              changes between two versions, along with additional configurations
              for how to calculate results.
    @return An array of results representing the version diff metric values for
            files in the package.
    """
        ...
    
    class Deprecation(BaseCodeAnalysis.VersionDiff.Metric, Value):
        """
        This version diff metric searches for and highlights any Types, fields, or methods
        that have been [deprecated](Ann.Deprecated) between two [versions](SemanticVersion)
        of an application.
        
        @see BaseCodeAnalysis.VersionDiff.TypeMetaChangesBase.RevisionDetails
        @see BaseCodeAnalysis.VersionDiff.Metric.Addition
        @see BaseCodeAnalysis.VersionDiff.Metric.Removal
        @see BaseCodeAnalysis.VersionDiff.Metric.Rename
        
        @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff.Metric.Deprecation
        """
        
        METRIC_CODE: Optional[str]=None
        """
        The code for this version diff metric
        """

        DEPRECATED_TYPE_CODE: Optional[str]=None
        """
        The sub-category code for when a Type has been deprecated
        """

        DEPRECATED_FIELD_CODE: Optional[str]=None
        """
        The sub-category code for when a [field](DeclaredFieldType) has been deprecated
        """

        DEPRECATED_METHOD_CODE: Optional[str]=None
        """
        The sub-category code for when a [method](MethodType) has been deprecated
        """
        def __init__(self, METRIC_CODE: Optional[str]=None, DEPRECATED_TYPE_CODE: Optional[str]=None, DEPRECATED_FIELD_CODE: Optional[str]=None, DEPRECATED_METHOD_CODE: Optional[str]=None) -> None: ...

        @classmethod
        def scanTypeMeta(cls, calculateResultsSpec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec, scanSpec: BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec) -> Union[Array[BaseCodeAnalysis.Metric.Result]]:
        """
        Helper function for analyzing a specific category of changes between two
        versions of a C3 application without needing to worry about mapping changes
        to each other. This enables each metric to only implement the logic for
        analyzing the specific category of changes it's responsible for.
        
        Every lambda from `scanSpec` is wrapped in a `try` / `catch` block, so lambdas
        don't need to implement error handling. Additionally, messages from each lambda
        are populated with the following metadata automatically:
        
        ```json
        {
          "isPrivate": boolean,
          "isBeta": boolean,
          "isUi": boolean,
          "isTest": boolean
        }
        ```
        
        @param calculateResultsSpec
                  Object containing relevant {@link App} / {@link Pkg} info and file
                  changes between two versions, along with additional configurations
                  for how to calculate results. This is usually passed through from
                  #calculateResults.
        @param scanSpec
                  Spec for specifying the lambdas to use for each category of {@link TypeMeta}
                  changes (added / removed / changed).
        @return An array of results representing the version diff metric values for
                files in the package.
        """
            ...
        @classmethod
        def calculateResults(cls, spec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec) -> Union[Array[BaseCodeAnalysis.Metric.Result]]:
        """
        Function to identify and analyze a specific category of changes between two
        versions of a C3 application.
        
        Any implementation of this function should follow these rules when analyzing
        [inherited fields or methods](InheritedValueType). These are important because
        if all inherited fields were treated as changes, then it's possible for false
        positives to be surfaced on pull requests.
        
          1. If the field or method is inherited in one version but not the other, analyze
             all parts of the field. In the following example, the {@link ValueType},
             {@link ValueModifier}, and default value of `name` should be analyzed.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B {         │ type B mixes A { │
             │   name: ?string  │   name: !~ = 'x' │
             │ }                │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          2. If the field or method is inherited _from a different Type_ in both versions
             (after renames are resolved), analyze all parts of the field. In the following
             example, both the {@link ValueType} and {@link ValueModifier} of `name` should
             be analyzed.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes C { │
             │   name: ~        │   name: !~       │
             │ }                │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          3. If the field or method is inherited _from the same Type_ in both versions
             (after renames are resolved), only analyze parts that were explicitly part
             of that declaration. In the following examples, only the {@link ValueModifier}
             of `name` should be analyzed. The fully-resolved {@link ValueModifier}s should
             be compared, however, so if `A.name` was [non-empty](ValueModifier#NON_EMPTY)
             in version 1.0.0 of the first two examples, no change has actually occurred.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes A { │
             │   name: ~        │   name: !~       │
             │ }                │ }                │
             ├──────────────────┼──────────────────┤
             │ type B mixes A   │ type B mixes A { │
             │                  │   name: !~       │
             │                  │ }                │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes A   │
             │   name: !~       │                  │
             │ }                │                  │
             └──────────────────┴──────────────────┘
             ```
        
          4. _Exception to Rule 3_: If an inherited method declaration is added or removed,
             but the method existed in both versions and the base signature either was or is
             [optional](MethodType#optional) or [abstract](MethodType#abstract), treat it as
             an addition or removal, not a change as this means a new function implementation
             has been added or removed.
        
             ```type
             ┌─────────────────────────────────────────┐
             │ type A {                                │
             │   func: optional function(a: int)       │
             │ }                                       │
             ├────────────────────┬────────────────────┤
             │       1.0.0        │       2.0.0        │
             ├────────────────────┼────────────────────┤
             │ type B mixes A     │ type B mixes A {   │
             │                    │   func: ~ js-rhino │
             │                    │ }                  │
             ├────────────────────┼────────────────────┤
             │ type B mixes A {   │ type B mixes A     │
             │   func: ~ js-rhino │                    │
             │ }                  │                    │
             └────────────────────┴────────────────────┘
             ```
        
          5. If a new mixin is added or a new field is added to a mixin and an inherited
             declaration for that field is also added, only report that declaration as added
             if it's been modified such that its addition is a breaking change, but the
             original field isn't. In the following example, the declaration of `name` should
             be reported as added in 2.0.0, but `id` shouldn't.
        
             This doesn't apply to methods since any added declaration (inherited or not)
             indicates a new implementation.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B           │ type B mixes A { │
             │                  │   id: ~          |
             │                  │   name: !~       │
             │                  │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          6. If a mixin is removed or a field is removed from a mixin and an inherited
             declaration for that field is also removed, don't report it. If the field
             was removed from the original Type, it should be reported there. If a mixin
             was removed, that should be reported instead. In the following example, the
             declaration of `name` shouldn't be reported as removed in 2.0.0.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B           │
             │   name: ~        │                  |
             │ }                │                  │
             └──────────────────┴──────────────────┘
             ```
        
        @param spec
                  Object containing relevant {@link App} / {@link Pkg} info and file
                  changes between two versions, along with additional configurations
                  for how to calculate results.
        @return An array of results representing the version diff metric values for
                files in the package.
        """
            ...
    
    class ValueModifierChange(BaseCodeAnalysis.VersionDiff.Metric, Value):
        """
        This version diff metric searches for and highlights any changes to the {@link ValueModifier}
        of any fields, method parameters, or method return values.
        
        @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff.Metric.ValueModifierChange
        """
        
        METRIC_CODE: Optional[str]=None
        """
        The code for this version diff metric
        """

        CHANGED_FIELD_CODE: Optional[str]=None
        """
        The sub-category code for when a [field's](DeclaredFieldType) {@link ValueModifier}
        has changed
        """

        CHANGED_PARAM_CODE: Optional[str]=None
        """
        The sub-category code for when a [method parameter's](FunctionParam) {@link ValueModifier}
        has changed
        """

        CHANGED_RETURN_CODE: Optional[str]=None
        """
        The sub-category code for when a [method's return type's](MethodType#returnType)
        {@link ValueModifier} has changed
        """
        def __init__(self, METRIC_CODE: Optional[str]=None, CHANGED_FIELD_CODE: Optional[str]=None, CHANGED_PARAM_CODE: Optional[str]=None, CHANGED_RETURN_CODE: Optional[str]=None) -> None: ...

        @classmethod
        def scanTypeMeta(cls, calculateResultsSpec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec, scanSpec: BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec) -> Union[Array[BaseCodeAnalysis.Metric.Result]]:
        """
        Helper function for analyzing a specific category of changes between two
        versions of a C3 application without needing to worry about mapping changes
        to each other. This enables each metric to only implement the logic for
        analyzing the specific category of changes it's responsible for.
        
        Every lambda from `scanSpec` is wrapped in a `try` / `catch` block, so lambdas
        don't need to implement error handling. Additionally, messages from each lambda
        are populated with the following metadata automatically:
        
        ```json
        {
          "isPrivate": boolean,
          "isBeta": boolean,
          "isUi": boolean,
          "isTest": boolean
        }
        ```
        
        @param calculateResultsSpec
                  Object containing relevant {@link App} / {@link Pkg} info and file
                  changes between two versions, along with additional configurations
                  for how to calculate results. This is usually passed through from
                  #calculateResults.
        @param scanSpec
                  Spec for specifying the lambdas to use for each category of {@link TypeMeta}
                  changes (added / removed / changed).
        @return An array of results representing the version diff metric values for
                files in the package.
        """
            ...
        @classmethod
        def calculateResults(cls, spec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec) -> Union[Array[BaseCodeAnalysis.Metric.Result]]:
        """
        Function to identify and analyze a specific category of changes between two
        versions of a C3 application.
        
        Any implementation of this function should follow these rules when analyzing
        [inherited fields or methods](InheritedValueType). These are important because
        if all inherited fields were treated as changes, then it's possible for false
        positives to be surfaced on pull requests.
        
          1. If the field or method is inherited in one version but not the other, analyze
             all parts of the field. In the following example, the {@link ValueType},
             {@link ValueModifier}, and default value of `name` should be analyzed.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B {         │ type B mixes A { │
             │   name: ?string  │   name: !~ = 'x' │
             │ }                │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          2. If the field or method is inherited _from a different Type_ in both versions
             (after renames are resolved), analyze all parts of the field. In the following
             example, both the {@link ValueType} and {@link ValueModifier} of `name` should
             be analyzed.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes C { │
             │   name: ~        │   name: !~       │
             │ }                │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          3. If the field or method is inherited _from the same Type_ in both versions
             (after renames are resolved), only analyze parts that were explicitly part
             of that declaration. In the following examples, only the {@link ValueModifier}
             of `name` should be analyzed. The fully-resolved {@link ValueModifier}s should
             be compared, however, so if `A.name` was [non-empty](ValueModifier#NON_EMPTY)
             in version 1.0.0 of the first two examples, no change has actually occurred.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes A { │
             │   name: ~        │   name: !~       │
             │ }                │ }                │
             ├──────────────────┼──────────────────┤
             │ type B mixes A   │ type B mixes A { │
             │                  │   name: !~       │
             │                  │ }                │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes A   │
             │   name: !~       │                  │
             │ }                │                  │
             └──────────────────┴──────────────────┘
             ```
        
          4. _Exception to Rule 3_: If an inherited method declaration is added or removed,
             but the method existed in both versions and the base signature either was or is
             [optional](MethodType#optional) or [abstract](MethodType#abstract), treat it as
             an addition or removal, not a change as this means a new function implementation
             has been added or removed.
        
             ```type
             ┌─────────────────────────────────────────┐
             │ type A {                                │
             │   func: optional function(a: int)       │
             │ }                                       │
             ├────────────────────┬────────────────────┤
             │       1.0.0        │       2.0.0        │
             ├────────────────────┼────────────────────┤
             │ type B mixes A     │ type B mixes A {   │
             │                    │   func: ~ js-rhino │
             │                    │ }                  │
             ├────────────────────┼────────────────────┤
             │ type B mixes A {   │ type B mixes A     │
             │   func: ~ js-rhino │                    │
             │ }                  │                    │
             └────────────────────┴────────────────────┘
             ```
        
          5. If a new mixin is added or a new field is added to a mixin and an inherited
             declaration for that field is also added, only report that declaration as added
             if it's been modified such that its addition is a breaking change, but the
             original field isn't. In the following example, the declaration of `name` should
             be reported as added in 2.0.0, but `id` shouldn't.
        
             This doesn't apply to methods since any added declaration (inherited or not)
             indicates a new implementation.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B           │ type B mixes A { │
             │                  │   id: ~          |
             │                  │   name: !~       │
             │                  │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          6. If a mixin is removed or a field is removed from a mixin and an inherited
             declaration for that field is also removed, don't report it. If the field
             was removed from the original Type, it should be reported there. If a mixin
             was removed, that should be reported instead. In the following example, the
             declaration of `name` shouldn't be reported as removed in 2.0.0.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B           │
             │   name: ~        │                  |
             │ }                │                  │
             └──────────────────┴──────────────────┘
             ```
        
        @param spec
                  Object containing relevant {@link App} / {@link Pkg} info and file
                  changes between two versions, along with additional configurations
                  for how to calculate results.
        @return An array of results representing the version diff metric values for
                files in the package.
        """
            ...
    
    class Removal(BaseCodeAnalysis.VersionDiff.Metric, Value):
        """
        This version diff metric searches for and highlights any Types, fields, methods,
        or method parameters that have been removed from the application.
        
        @see BaseCodeAnalysis.VersionDiff.Metric.Addition
        @see BaseCodeAnalysis.VersionDiff.Metric.Rename
        @see BaseCodeAnalysis.VersionDiff.Metric.Deprecation
        
        @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff.Metric.Removal
        """
        
        METRIC_CODE: Optional[str]=None
        """
        The code for this version diff metric
        """

        REMOVED_TYPE_CODE: Optional[str]=None
        """
        The sub-category code for when a Type has been removed
        """

        REMOVED_FIELD_CODE: Optional[str]=None
        """
        The sub-category code for when a [field](DeclaredFieldType) has been removed
        """

        REMOVED_METHOD_CODE: Optional[str]=None
        """
        The sub-category code for when a [method](MethodType) has been removed
        """

        REMOVED_PARAM_CODE: Optional[str]=None
        """
        The sub-category code for when a [function parameter](FunctionParam) has been removed
        """
        def __init__(self, METRIC_CODE: Optional[str]=None, REMOVED_TYPE_CODE: Optional[str]=None, REMOVED_FIELD_CODE: Optional[str]=None, REMOVED_METHOD_CODE: Optional[str]=None, REMOVED_PARAM_CODE: Optional[str]=None) -> None: ...

        @classmethod
        def scanTypeMeta(cls, calculateResultsSpec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec, scanSpec: BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec) -> Union[Array[BaseCodeAnalysis.Metric.Result]]:
        """
        Helper function for analyzing a specific category of changes between two
        versions of a C3 application without needing to worry about mapping changes
        to each other. This enables each metric to only implement the logic for
        analyzing the specific category of changes it's responsible for.
        
        Every lambda from `scanSpec` is wrapped in a `try` / `catch` block, so lambdas
        don't need to implement error handling. Additionally, messages from each lambda
        are populated with the following metadata automatically:
        
        ```json
        {
          "isPrivate": boolean,
          "isBeta": boolean,
          "isUi": boolean,
          "isTest": boolean
        }
        ```
        
        @param calculateResultsSpec
                  Object containing relevant {@link App} / {@link Pkg} info and file
                  changes between two versions, along with additional configurations
                  for how to calculate results. This is usually passed through from
                  #calculateResults.
        @param scanSpec
                  Spec for specifying the lambdas to use for each category of {@link TypeMeta}
                  changes (added / removed / changed).
        @return An array of results representing the version diff metric values for
                files in the package.
        """
            ...
        @classmethod
        def calculateResults(cls, spec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec) -> Union[Array[BaseCodeAnalysis.Metric.Result]]:
        """
        Function to identify and analyze a specific category of changes between two
        versions of a C3 application.
        
        Any implementation of this function should follow these rules when analyzing
        [inherited fields or methods](InheritedValueType). These are important because
        if all inherited fields were treated as changes, then it's possible for false
        positives to be surfaced on pull requests.
        
          1. If the field or method is inherited in one version but not the other, analyze
             all parts of the field. In the following example, the {@link ValueType},
             {@link ValueModifier}, and default value of `name` should be analyzed.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B {         │ type B mixes A { │
             │   name: ?string  │   name: !~ = 'x' │
             │ }                │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          2. If the field or method is inherited _from a different Type_ in both versions
             (after renames are resolved), analyze all parts of the field. In the following
             example, both the {@link ValueType} and {@link ValueModifier} of `name` should
             be analyzed.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes C { │
             │   name: ~        │   name: !~       │
             │ }                │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          3. If the field or method is inherited _from the same Type_ in both versions
             (after renames are resolved), only analyze parts that were explicitly part
             of that declaration. In the following examples, only the {@link ValueModifier}
             of `name` should be analyzed. The fully-resolved {@link ValueModifier}s should
             be compared, however, so if `A.name` was [non-empty](ValueModifier#NON_EMPTY)
             in version 1.0.0 of the first two examples, no change has actually occurred.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes A { │
             │   name: ~        │   name: !~       │
             │ }                │ }                │
             ├──────────────────┼──────────────────┤
             │ type B mixes A   │ type B mixes A { │
             │                  │   name: !~       │
             │                  │ }                │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes A   │
             │   name: !~       │                  │
             │ }                │                  │
             └──────────────────┴──────────────────┘
             ```
        
          4. _Exception to Rule 3_: If an inherited method declaration is added or removed,
             but the method existed in both versions and the base signature either was or is
             [optional](MethodType#optional) or [abstract](MethodType#abstract), treat it as
             an addition or removal, not a change as this means a new function implementation
             has been added or removed.
        
             ```type
             ┌─────────────────────────────────────────┐
             │ type A {                                │
             │   func: optional function(a: int)       │
             │ }                                       │
             ├────────────────────┬────────────────────┤
             │       1.0.0        │       2.0.0        │
             ├────────────────────┼────────────────────┤
             │ type B mixes A     │ type B mixes A {   │
             │                    │   func: ~ js-rhino │
             │                    │ }                  │
             ├────────────────────┼────────────────────┤
             │ type B mixes A {   │ type B mixes A     │
             │   func: ~ js-rhino │                    │
             │ }                  │                    │
             └────────────────────┴────────────────────┘
             ```
        
          5. If a new mixin is added or a new field is added to a mixin and an inherited
             declaration for that field is also added, only report that declaration as added
             if it's been modified such that its addition is a breaking change, but the
             original field isn't. In the following example, the declaration of `name` should
             be reported as added in 2.0.0, but `id` shouldn't.
        
             This doesn't apply to methods since any added declaration (inherited or not)
             indicates a new implementation.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B           │ type B mixes A { │
             │                  │   id: ~          |
             │                  │   name: !~       │
             │                  │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          6. If a mixin is removed or a field is removed from a mixin and an inherited
             declaration for that field is also removed, don't report it. If the field
             was removed from the original Type, it should be reported there. If a mixin
             was removed, that should be reported instead. In the following example, the
             declaration of `name` shouldn't be reported as removed in 2.0.0.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B           │
             │   name: ~        │                  |
             │ }                │                  │
             └──────────────────┴──────────────────┘
             ```
        
        @param spec
                  Object containing relevant {@link App} / {@link Pkg} info and file
                  changes between two versions, along with additional configurations
                  for how to calculate results.
        @return An array of results representing the version diff metric values for
                files in the package.
        """
            ...
    
    class Config(BaseCodeAnalysis.Metric.Config):
        """
        Extension of {@link BaseCodeAnalysis.Metric.Config} that contains additional configurations
        specific to {@link BaseCodeAnalysis.VersionDiff.Metric}s.
        
        @see BaseCodeAnalysis.Config
        
        @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff.Metric.Config
        """
        
        maxSeverity: Optional[str]=None
        """
        The maximum severity that [messages](BaseCodeAnalysis.Metric.Message) reported by
        this metric can have. Any messages with a severity higher than this will be set to
        this value.
        """

        additionalConfigs: Optional[any]=None
        """
        Any configs specific to a given metric but not covered by the other fields should
        be stored here. This field is for internal use within the metric it applies to.
        """

        suppressPrivate: Optional[bool]=None
        """
        [Private](TypeMeta#declaredPrivate) Types, fields, and methods are meant to
        only be consumed by the package in which they're declared and shouldn't be
        consumed or overridden externally, thus changes to these are typically not
        considered breaking changes and shouldn't be reported. If true, suppress all
        messages for private Types, fields, and methods.
        
        Even when true, changed Types, fields, or methods are only ignored if declared
        private in _both_ versions.
        """

        suppressBeta: Optional[bool]=None
        """
        [Beta](Ann.Beta) Types, fields, and methods are experimental and thus subject
        to sudden changes / removals. Users of these features are warned of this possibility,
        so even breaking changes aren't considered problematic and shouldn't be reported.
        If true, suppress all messages for beta Types, fields, and methods.
        """
        def __init__(self, maxSeverity: Optional[str]=None, additionalConfigs: Optional[any]=None, suppressPrivate: Optional[bool]=None, suppressBeta: Optional[bool]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[BaseCodeAnalysis.VersionDiff.Metric.Config]:
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
        def fromJsonString(cls, json: str) -> Union[BaseCodeAnalysis.VersionDiff.Metric.Config]:
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
        def fromXmlString(cls, xml: str) -> Union[BaseCodeAnalysis.VersionDiff.Metric.Config]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[BaseCodeAnalysis.VersionDiff.Metric.Config]:
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
        def replaceType(self, old: Type, new: Type) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[BaseCodeAnalysis.VersionDiff.Metric.Config]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[BaseCodeAnalysis.VersionDiff.Metric.Config]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def validateObj(self) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def withoutFieldAtPath(self, path: str) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def withoutField(self, field: str) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def withoutField(self, field: FieldType) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def withoutFields(self, fields: Array[str]) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def defaultField(self, field: str) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def defaultField(self, field: FieldType) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def unsetField(self, field: str) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def unsetField(self, field: FieldType) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def removeField(self, field: str) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def removeField(self, field: FieldType) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def mergeJson(self, json: any) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def sumObj(self, other: Obj, deep: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[BaseCodeAnalysis.VersionDiff.Metric.Config]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[BaseCodeAnalysis.VersionDiff.Metric.Config]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[BaseCodeAnalysis.VersionDiff.Metric.Config]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[BaseCodeAnalysis.VersionDiff.Metric.Config]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[BaseCodeAnalysis.VersionDiff.Metric.Config]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, BaseCodeAnalysis.VersionDiff.Metric.Config]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, BaseCodeAnalysis.VersionDiff.Metric.Config]]:
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
        def toBuilder(self) -> ObjBuilder[BaseCodeAnalysis.VersionDiff.Metric.Config]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[BaseCodeAnalysis.VersionDiff.Metric.Config]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def afterMake(self) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[BaseCodeAnalysis.VersionDiff.Metric.Config]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> BaseCodeAnalysis.VersionDiff.Metric.Config:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        @classmethod
        def applyConfigToMessages(cls, spec: BaseCodeAnalysis.Metric.Config.ApplySpec) -> Union[Any]:
        """
        Helper function to apply a metric config to a particular metric result. This doesn't handle
        recomputing stats. This is handled by the parent applyConfigToResult function.
        
        @param spec
                  The spec to apply the config to.
        @returns The result with metric messages modified based on the config.
        """
            ...
    
    class Addition(BaseCodeAnalysis.VersionDiff.Metric, Value):
        """
        This version diff metric searches for and highlights any new Types, fields, methods,
        or method parameters that have been added to the application.
        
        @see BaseCodeAnalysis.VersionDiff.Metric.Removal
        @see BaseCodeAnalysis.VersionDiff.Metric.Rename
        @see BaseCodeAnalysis.VersionDiff.Metric.Deprecation
        
        @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff.Metric.Addition
        """
        
        METRIC_CODE: Optional[str]=None
        """
        The code for this version diff metric
        """

        ADDED_TYPE_CODE: Optional[str]=None
        """
        The sub-category code for when a Type has been added
        """

        ADDED_FIELD_CODE: Optional[str]=None
        """
        The sub-category code for when a [field](DeclaredFieldType) has been added
        """

        ADDED_METHOD_CODE: Optional[str]=None
        """
        The sub-category code for when a [method](MethodType) has been added
        """

        ADDED_PARAM_CODE: Optional[str]=None
        """
        The sub-category code for when a [parameter](FunctionParam) has been added
        """
        def __init__(self, METRIC_CODE: Optional[str]=None, ADDED_TYPE_CODE: Optional[str]=None, ADDED_FIELD_CODE: Optional[str]=None, ADDED_METHOD_CODE: Optional[str]=None, ADDED_PARAM_CODE: Optional[str]=None) -> None: ...

        @classmethod
        def scanTypeMeta(cls, calculateResultsSpec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec, scanSpec: BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec) -> Union[Array[BaseCodeAnalysis.Metric.Result]]:
        """
        Helper function for analyzing a specific category of changes between two
        versions of a C3 application without needing to worry about mapping changes
        to each other. This enables each metric to only implement the logic for
        analyzing the specific category of changes it's responsible for.
        
        Every lambda from `scanSpec` is wrapped in a `try` / `catch` block, so lambdas
        don't need to implement error handling. Additionally, messages from each lambda
        are populated with the following metadata automatically:
        
        ```json
        {
          "isPrivate": boolean,
          "isBeta": boolean,
          "isUi": boolean,
          "isTest": boolean
        }
        ```
        
        @param calculateResultsSpec
                  Object containing relevant {@link App} / {@link Pkg} info and file
                  changes between two versions, along with additional configurations
                  for how to calculate results. This is usually passed through from
                  #calculateResults.
        @param scanSpec
                  Spec for specifying the lambdas to use for each category of {@link TypeMeta}
                  changes (added / removed / changed).
        @return An array of results representing the version diff metric values for
                files in the package.
        """
            ...
        @classmethod
        def calculateResults(cls, spec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec) -> Union[Array[BaseCodeAnalysis.Metric.Result]]:
        """
        Function to identify and analyze a specific category of changes between two
        versions of a C3 application.
        
        Any implementation of this function should follow these rules when analyzing
        [inherited fields or methods](InheritedValueType). These are important because
        if all inherited fields were treated as changes, then it's possible for false
        positives to be surfaced on pull requests.
        
          1. If the field or method is inherited in one version but not the other, analyze
             all parts of the field. In the following example, the {@link ValueType},
             {@link ValueModifier}, and default value of `name` should be analyzed.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B {         │ type B mixes A { │
             │   name: ?string  │   name: !~ = 'x' │
             │ }                │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          2. If the field or method is inherited _from a different Type_ in both versions
             (after renames are resolved), analyze all parts of the field. In the following
             example, both the {@link ValueType} and {@link ValueModifier} of `name` should
             be analyzed.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes C { │
             │   name: ~        │   name: !~       │
             │ }                │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          3. If the field or method is inherited _from the same Type_ in both versions
             (after renames are resolved), only analyze parts that were explicitly part
             of that declaration. In the following examples, only the {@link ValueModifier}
             of `name` should be analyzed. The fully-resolved {@link ValueModifier}s should
             be compared, however, so if `A.name` was [non-empty](ValueModifier#NON_EMPTY)
             in version 1.0.0 of the first two examples, no change has actually occurred.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes A { │
             │   name: ~        │   name: !~       │
             │ }                │ }                │
             ├──────────────────┼──────────────────┤
             │ type B mixes A   │ type B mixes A { │
             │                  │   name: !~       │
             │                  │ }                │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes A   │
             │   name: !~       │                  │
             │ }                │                  │
             └──────────────────┴──────────────────┘
             ```
        
          4. _Exception to Rule 3_: If an inherited method declaration is added or removed,
             but the method existed in both versions and the base signature either was or is
             [optional](MethodType#optional) or [abstract](MethodType#abstract), treat it as
             an addition or removal, not a change as this means a new function implementation
             has been added or removed.
        
             ```type
             ┌─────────────────────────────────────────┐
             │ type A {                                │
             │   func: optional function(a: int)       │
             │ }                                       │
             ├────────────────────┬────────────────────┤
             │       1.0.0        │       2.0.0        │
             ├────────────────────┼────────────────────┤
             │ type B mixes A     │ type B mixes A {   │
             │                    │   func: ~ js-rhino │
             │                    │ }                  │
             ├────────────────────┼────────────────────┤
             │ type B mixes A {   │ type B mixes A     │
             │   func: ~ js-rhino │                    │
             │ }                  │                    │
             └────────────────────┴────────────────────┘
             ```
        
          5. If a new mixin is added or a new field is added to a mixin and an inherited
             declaration for that field is also added, only report that declaration as added
             if it's been modified such that its addition is a breaking change, but the
             original field isn't. In the following example, the declaration of `name` should
             be reported as added in 2.0.0, but `id` shouldn't.
        
             This doesn't apply to methods since any added declaration (inherited or not)
             indicates a new implementation.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B           │ type B mixes A { │
             │                  │   id: ~          |
             │                  │   name: !~       │
             │                  │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          6. If a mixin is removed or a field is removed from a mixin and an inherited
             declaration for that field is also removed, don't report it. If the field
             was removed from the original Type, it should be reported there. If a mixin
             was removed, that should be reported instead. In the following example, the
             declaration of `name` shouldn't be reported as removed in 2.0.0.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B           │
             │   name: ~        │                  |
             │ }                │                  │
             └──────────────────┴──────────────────┘
             ```
        
        @param spec
                  Object containing relevant {@link App} / {@link Pkg} info and file
                  changes between two versions, along with additional configurations
                  for how to calculate results.
        @return An array of results representing the version diff metric values for
                files in the package.
        """
            ...
    
    class ScanTypeMetaSpec(Spec):
        """
        Spec Type for {@link BaseCodeAnalysis.VersionDiff.Metric#scanTypeMeta}.
        
        All lambdas should return an array of {@link BaseCodeAnalysis.Metric.Message}s that
        will be grouped by Type into {@link BaseCodeAnalysis.Metric.Result}s. If any lambda
        isn't provided, no action will be taken for that kind of change.
        
        @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec
        """
        
        metricCode: Optional[str]
        """
        The code of the metric results are being generated for.
        """

        skipEnum: Optional[bool]=None
        """
        {@link Enum} Types are unique since their fields are always constant and don't
        have an explicit {@link ValueType}. Because of this, several metrics are irrelevant
        to {@link Enum} Types and can be skipped such as:
        
          - {@link BaseCodeAnalysis.VersionDiff.Metric.SchemaChange}
          - {@link BaseCodeAnalysis.VersionDiff.Metric.ValueTypeChange}
          - {@link BaseCodeAnalysis.VersionDiff.Metric.ValueModifierChange}
        
        If true, exclude all {@link Enum} Types and fields from the scan.
        """

        addedTypeLambda: Optional[Callable[[BaseCodeAnalysis.TypeInfo], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None
        """
        A lambda to be called for each [added](BaseCodeAnalysis.VersionDiff.TypeMetaChanges#added)
        Type with its current Type metadata.
        """

        removedTypeLambda: Optional[Callable[[BaseCodeAnalysis.TypeInfo], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None
        """
        A lambda to be called for each [removed](BaseCodeAnalysis.VersionDiff.TypeMetaChanges#removed)
        Type with its previous Type metadata.
        """

        changedTypeLambda: Optional[Callable[[Union[BaseCodeAnalysis.VersionDiff.CompareTypesSpec]], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None
        """
        A lambda to be called for all Types that were [touched](BaseCodeAnalysis.VersionDiff.TypeMetaChanges#touched)
        between the two versions. If a Type has been [renamed](BaseCodeAnalysis.VersionDiff.TypeMetaChanges#revised),
        [curTypeInfo](BaseCodeAnalysis.VersionDiff.CompareTypesSpec#curTypeInfo) will be correctly
        populated with the renamed Type and [typeRevisionDetails](BaseCodeAnalysis.VersionDiff.CompareTypesSpec#typeRevisionDetails)
        will be provided.
        """

        addedFieldLambda: Optional[Callable[[DeclaredFieldType, BaseCodeAnalysis.TypeInfo], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None
        """
        A lambda to be called for each [added](BaseCodeAnalysis.VersionDiff.TypeMetaChangesBase#added)
        field with its current field metadata and the Type it was added to.
        """

        removedFieldLambda: Optional[Callable[[DeclaredFieldType, BaseCodeAnalysis.TypeInfo], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None
        """
        A lambda to be called for each [removed](BaseCodeAnalysis.VersionDiff.TypeMetaChangesBase#removed)
        field with its previous field metadata and the Type it was removed from.
        """

        changedFieldLambda: Optional[Callable[[Union[BaseCodeAnalysis.VersionDiff.CompareFieldsSpec]], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None
        """
        A lambda to be called for all fields that were neither [added](BaseCodeAnalysis.VersionDiff.TypeMetaChangesBase#added)
        nor [removed](BaseCodeAnalysis.VersionDiff.TypeMetaChangesBase#removed) between the two versions.
        If a field or the field's Type has been [renamed](BaseCodeAnalysis.VersionDiff.TypeMetaChangesBase#revised),
        [curFieldMeta](BaseCodeAnalysis.VersionDiff.CompareFieldsSpec#curFieldMeta) and
        [curTypeInfo](BaseCodeAnalysis.VersionDiff.CompareFieldsSpec#curTypeInfo) will be correctly
        populated with the renamed field and [fieldRevisionDetails](BaseCodeAnalysis.VersionDiff.CompareFieldsSpec#fieldRevisionDetails)
        will be provided.
        
        If any of the rules from {@link BaseCodeAnalysis.VersionDiff.Metric#calculateResults} necessitate
        resolving [inherited fields](InheritedValueType) ahead of time, they will have already been resolved
        before being passed to this lambda. This means that if [curFieldMeta](BaseCodeAnalysis.VersionDiff.CompareFieldsSpec#curFieldMeta)
        or [prevFieldMeta](BaseCodeAnalysis.VersionDiff.CompareFieldsSpec#prevFieldMeta) are inherited,
        only parts that are explicitly part of that declaration should be compared.
        """

        addedMethodLambda: Optional[Callable[[DeclaredFieldType, BaseCodeAnalysis.TypeInfo], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None
        """
        A lambda to be called for each [added](BaseCodeAnalysis.VersionDiff.TypeMetaChangesBase#added)
        method with its current method metadata and the Type it was added to.
        """

        removedMethodLambda: Optional[Callable[[DeclaredFieldType, BaseCodeAnalysis.TypeInfo], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None
        """
        A lambda to be called for each [removed](BaseCodeAnalysis.VersionDiff.TypeMetaChangesBase#removed)
        method with its previous method metadata and the Type it was removed from.
        """

        changedMethodLambda: Optional[Callable[[Union[BaseCodeAnalysis.VersionDiff.CompareFieldsSpec]], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None
        """
        A lambda to be called for all methods that were neither [added](BaseCodeAnalysis.VersionDiff.TypeMetaChangesBase#added)
        nor [removed](BaseCodeAnalysis.VersionDiff.TypeMetaChangesBase#removed) between the two versions.
        If a method or the method's Type has been [renamed](BaseCodeAnalysis.VersionDiff.TypeMetaChangesBase#revised),
        [curFieldMeta](BaseCodeAnalysis.VersionDiff.CompareFieldsSpec#curFieldMeta) and
        [curTypeInfo](BaseCodeAnalysis.VersionDiff.CompareFieldsSpec#curTypeInfo) will be correctly
        populated with the renamed method and [fieldRevisionDetails](BaseCodeAnalysis.VersionDiff.CompareFieldsSpec#fieldRevisionDetails)
        will be provided.
        
        Any analysis of individual {@link FunctionParam}s should be done in #addedParamLambda,
        #removedParamLambda, and #changedParamLambda. Only analysis of the overall function
        declaration and [return type](MethodType#returnType) should be done in this lambda.
        
        If any of the rules from {@link BaseCodeAnalysis.VersionDiff.Metric#calculateResults} necessitate
        resolving [inherited methods](InheritedValueType) ahead of time, they will have already been resolved
        before being passed to this lambda. This means that if [curFieldMeta](BaseCodeAnalysis.VersionDiff.CompareFieldsSpec#curFieldMeta)
        or [prevFieldMeta](BaseCodeAnalysis.VersionDiff.CompareFieldsSpec#prevFieldMeta) are inherited,
        only parts that are explicitly part of that declaration should be compared.
        """

        addedParamLambda: Optional[Callable[[FunctionParam, DeclaredFieldType, BaseCodeAnalysis.TypeInfo], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None
        """
        A lambda to be called for each added method parameter with its current Type metadata.
        """

        removedParamLambda: Optional[Callable[[FunctionParam, DeclaredFieldType, BaseCodeAnalysis.TypeInfo], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None
        """
        A lambda to be called for each removed method parameter with its previous Type metadata.
        """

        changedParamLambda: Optional[Callable[[Union[BaseCodeAnalysis.VersionDiff.CompareParamsSpec]], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None
        """
        A lambda to be called for all method parameters that were neither added nor removed
        between the two versions.
        """
        def __init__(self, metricCode: Optional[str]=None, skipEnum: Optional[bool]=None, addedTypeLambda: Optional[Callable[[BaseCodeAnalysis.TypeInfo], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None, removedTypeLambda: Optional[Callable[[BaseCodeAnalysis.TypeInfo], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None, changedTypeLambda: Optional[Callable[[Union[BaseCodeAnalysis.VersionDiff.CompareTypesSpec]], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None, addedFieldLambda: Optional[Callable[[DeclaredFieldType, BaseCodeAnalysis.TypeInfo], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None, removedFieldLambda: Optional[Callable[[DeclaredFieldType, BaseCodeAnalysis.TypeInfo], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None, changedFieldLambda: Optional[Callable[[Union[BaseCodeAnalysis.VersionDiff.CompareFieldsSpec]], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None, addedMethodLambda: Optional[Callable[[DeclaredFieldType, BaseCodeAnalysis.TypeInfo], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None, removedMethodLambda: Optional[Callable[[DeclaredFieldType, BaseCodeAnalysis.TypeInfo], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None, changedMethodLambda: Optional[Callable[[Union[BaseCodeAnalysis.VersionDiff.CompareFieldsSpec]], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None, addedParamLambda: Optional[Callable[[FunctionParam, DeclaredFieldType, BaseCodeAnalysis.TypeInfo], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None, removedParamLambda: Optional[Callable[[FunctionParam, DeclaredFieldType, BaseCodeAnalysis.TypeInfo], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None, changedParamLambda: Optional[Callable[[Union[BaseCodeAnalysis.VersionDiff.CompareParamsSpec]], Union[Array[BaseCodeAnalysis.Metric.Message]]]]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec]:
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
        def fromJsonString(cls, json: str) -> Union[BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec]:
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
        def fromXmlString(cls, xml: str) -> Union[BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec]:
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
        def replaceType(self, old: Type, new: Type) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def validateObj(self) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def withoutFieldAtPath(self, path: str) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def withoutField(self, field: str) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def withoutField(self, field: FieldType) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def withoutFields(self, fields: Array[str]) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def defaultField(self, field: str) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def defaultField(self, field: FieldType) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def unsetField(self, field: str) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def unsetField(self, field: FieldType) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def removeField(self, field: str) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def removeField(self, field: FieldType) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def mergeJson(self, json: any) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def sumObj(self, other: Obj, deep: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec]]:
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
        def toBuilder(self) -> ObjBuilder[BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def afterMake(self) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
    
    class CalculateResultsSpec(Spec):
        """
        Spec Type for {@link BaseCodeAnalysis.VersionDiff.Metric#calculateResults}.
        
        @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec
        """
        
        prevAppInfo: Optional[BaseCodeAnalysis.AppInfo]
        """
        All information for the previous version of an application.
        """

        curAppInfo: Optional[BaseCodeAnalysis.AppInfo]
        """
        All information for the new version of an application.
        """

        typeMetaChanges: Optional[Map[str, BaseCodeAnalysis.VersionDiff.TypeMetaChanges]]=None
        """
        Any {@link TypeMeta} changes detected by {@link BaseCodeAnalysis.VersionDiff#detectStructuralChanges}
        organized by {@link Pkg#name}.
        """

        pkgNames: Optional[Set[str]]=None
        """
        If specified, only calculate results for the given {@link Pkg#name}s. If a name
        isn't present in #typeMetaChanges, it will be ignored. If not specified, results
        for all packages present in #typeMetaChanges will be calculated.
        """

        options: Optional[any]=None
        """
        Additional options for the metric.
        """
        def __init__(self, prevAppInfo: Optional[BaseCodeAnalysis.AppInfo]=None, curAppInfo: Optional[BaseCodeAnalysis.AppInfo]=None, typeMetaChanges: Optional[Map[str, BaseCodeAnalysis.VersionDiff.TypeMetaChanges]]=None, pkgNames: Optional[Set[str]]=None, options: Optional[any]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec]:
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
        def fromJsonString(cls, json: str) -> Union[BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec]:
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
        def fromXmlString(cls, xml: str) -> Union[BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec]:
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
        def replaceType(self, old: Type, new: Type) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def validateObj(self) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def withoutFieldAtPath(self, path: str) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def withoutField(self, field: str) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def withoutField(self, field: FieldType) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def withoutFields(self, fields: Array[str]) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def defaultField(self, field: str) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def defaultField(self, field: FieldType) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def unsetField(self, field: str) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def unsetField(self, field: FieldType) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def removeField(self, field: str) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def removeField(self, field: FieldType) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def mergeJson(self, json: any) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def sumObj(self, other: Obj, deep: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec]]:
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
        def toBuilder(self) -> ObjBuilder[BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def afterMake(self) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        def isMajorBump(self, prevPkgName: str=None, curPkgName: str=None) -> bool:
        """
        Helper function to return whether the given package's version has had its
        [major component](SemanticVersion#majorVersion) bumped.
        
        @param prevPkgName
                  The name of the package in the previous version.
        @param curPkgName
                  The name of the package in the current version.
        @return Whether the package's version has had its major component bumped.
        """
            ...
    
    class MessageTemplate(Metadata, Identified):
        """
        {@link BaseCodeAnalysis.VersionDiff.Metric}s must deliver messages in multiple contexts
        (e.g., changelogs and pull requests). The messaging for these contexts can differ, so this
        Type should be used to store the different messages that should be displayed in each context.
        
        Each message can either be a fully-formed message or a template that can be formatted with
        #formatMessages (e.g., `'Message with ${binding}'`).
        
        _This Type should not be confused with_ {@link BaseCodeAnalysis.Metric.Message}, _which is
        the primary Type for storing code analysis messages_.
        
        @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate
        """
        
        meta: Optional[Meta]=None
        """
        Various system fields.
        """

        id: Optional[str]
        """
        The unique and required id of this instance.
        """

        severity: Optional[str]=None
        """
        The severity that should be assigned to this message. Should never be higher than
        [warning](BaseCodeAnalysis.Metric.Message.Severity#WARNING) when #guessedMessage is used.
        """

        primaryMessage: Optional[str]=None
        """
        The message to use in all cases except when a change could have been incorrectly detected
        as a result of using {@link BaseCodeAnalysis.VersionDiff#detectStructuralChanges} with
        [guessRevisions](BaseCodeAnalysis.VersionDiff.DetectChangesOptions#guessRevisions) enabled.
        """

        guessedMessage: Optional[str]=None
        """
        The message to use when a change could have been incorrectly detected as a result of using
        {@link BaseCodeAnalysis.VersionDiff#detectStructuralChanges} with [guessRevisions](BaseCodeAnalysis.VersionDiff.DetectChangesOptions#guessRevisions) enabled.
        """

        changelogMessage: Optional[str]=None
        """
        If this change should be included in the changelog, the message to display.
        
        @see typeChangelogMessage
        @see fieldChangelogMessage
        @see paramChangelogMessage
        """

        typeChangelogMessage: Optional[str]=None
        """
        If there are multiple messages associated with a particular Type, this message
        should be used to describe the change at the Type level to avoid redundant messaging.
        
        @see changelogMessage
        @see fieldChangelogMessage
        @see paramChangelogMessage
        """

        fieldChangelogMessage: Optional[str]=None
        """
        If there are multiple messages associated with a particular field or method, this
        message should be used to describe the change at the field or method level to avoid
        redundant messaging.
        
        @see changelogMessage
        @see typeChangelogMessage
        @see paramChangelogMessage
        """

        paramChangelogMessage: Optional[str]=None
        """
        If there are multiple messages associated with a particular method parameter, this
        message should be used to describe the change at the method parameter level to avoid
        redundant messaging.
        
        @see changelogMessage
        @see typeChangelogMessage
        @see fieldChangelogMessage
        """
        def __init__(self, meta: Optional[Meta]=None, id: Optional[str]=None, severity: Optional[str]=None, primaryMessage: Optional[str]=None, guessedMessage: Optional[str]=None, changelogMessage: Optional[str]=None, typeChangelogMessage: Optional[str]=None, fieldChangelogMessage: Optional[str]=None, paramChangelogMessage: Optional[str]=None) -> None: ...

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
        def fromJson(cls, json: any) -> Union[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]:
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
        def fromJsonString(cls, json: str) -> Union[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]:
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
        def fromXmlString(cls, xml: str) -> Union[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]:
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
        def deserialize(cls, contentStr: str, contentType: str) -> Union[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]:
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
        def replaceType(self, old: Type, new: Type) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def mapFieldValues(self, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def mapFieldValues(self, spec: ValueSpec, mapper: Callable[[FieldType, Any], Union[Any]], convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def mapFieldValuesAsync(self, mapper: Callable[[FieldType, Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]:
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
        def mapFieldValuesAsync(self, spec: ValueSpec, mapper: Callable[[Union[FieldType], Any], Union[Promise[Any]]], convertValue: bool=None) -> Promise[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]:
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
        def mapFieldValue(self, mapper: Callable[[Any], Union[Any]], field: FieldType=None, includeEmpty: bool=None, convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def mapRefs(self, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def mapRefs(self, includeEmpty: bool, mapper: Callable[[FieldType, Obj], Union[Obj]], convertValue: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def validateObj(self) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def withField(self, field: str, value: Any, doNotConvert: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def withField(self, field: FieldType, value: Any, doNotConvert: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def withFields(self, fields: Map[str, Any], doNotConvert: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def withFieldAtPath(self, path: str, value: Any, doNotConvert: bool=None, doNotCreateIfMissing: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def withoutFieldAtPath(self, path: str) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def withoutField(self, field: str) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def withoutField(self, field: FieldType) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def withoutFields(self, fields: Array[str]) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
        """
        Builds a new Obj, removing the fields with the provided names.
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  names of the fields to remove
        @return new Obj with removed fields
        """
            ...
        def withoutFieldsByType(self, fields: Array[FieldType]) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
        """
        Builds a new Obj, removing the fields with the provided field types. Be sure to use the FieldType instance for the
        exact same type as the type of the obj to respect the "ordinal" of the field type
        
        Immutable objects may return the same instance if the fields being removed are not present in the existing object.
        
        @param fields
                  field types to remove
        @return new Obj with removed fields
        """
            ...
        def withoutSecretFields(self) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
        """
        @return a new Obj, removing the field types marked with annotation @config(secret=true) recursively
        """
            ...
        def withDefaults(self, includeEmptyRefsWithDefaults: bool=None, defaultFields: Array[str]=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def defaultField(self, field: str) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def defaultField(self, field: FieldType) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def unsetField(self, field: str) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def unsetField(self, field: FieldType) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def removeField(self, field: str) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def removeField(self, field: FieldType) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def mergeObj(self, other: Obj, fieldPathMergeSpec: Map[str, str]=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def mergeObj(self, other: Obj, otherFieldsFilter: Type) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldPath], Union[Any], Union[FieldPath], Union[Any]], Union[Any]], deep: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
        """
        Merge the fields of this Obj with corresponding fields on other Obj using the provided lambda. This means that
        fields that exist on other Obj and do not exist on this Obj will not be added to final Obj.
        @param deep
               if set to true then traverse reference and collection fields and merge corresponding fields or elements with
               the same key or index.
        """
            ...
        @overload
        def mergeObj(self, other: Obj, merger: Callable[[Union[FieldType], Union[Any], Union[FieldType], Union[Any]], Union[Any]]) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def mergeJson(self, json: any) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
            ...
        def mergeChildren(self, deep: bool=None, objKey: Callable[[Union[Obj]], Union[Any]]=None, filter: Callable[[str], bool]=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def sumObj(self, other: Obj, deep: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
        """
        Adds the numeric Obj fields with the other Objs respective fields.
        If deep is set it will traverse reference and collection fields and sum corresponding numeric fields in
        references with same name and collection elements at same index or key.
        """
            ...
        def singletonArray(self) -> Array[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]:
        """
        Build an array of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def array(cls, *elements: Array[Any]) -> Union[Array[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]]:
        """
        Creates an array of instances of this type.
        """
            ...
        @classmethod
        def arrayBuilder(cls) -> Union[ArrayBuilder[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]]:
        """
        Creates an array of instances of this type.
        """
            ...
        def singletonSet(self) -> Set[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]:
        """
        Build an set of the correct type with a single element which is this instance.
        
        @return new array instance with this as only element.
        """
            ...
        @classmethod
        def setBuilder(cls) -> Union[SetBuilder[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]]:
        """
        Creates a set of instances of this type.
        """
            ...
        @classmethod
        def mapBuilder(cls) -> Union[MapBuilder[str, BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]]:
        """
        Create a map of string to elements of this type.
        """
            ...
        @classmethod
        def mapBuilderOf(cls, keyType: ValueType) -> Union[MapBuilder[Any, BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]]:
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
        def toBuilder(self) -> ObjBuilder[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]:
        """
        @return new ObjBuilder with initial state set to fields of this instance.
        """
            ...
        @classmethod
        def builder(cls) -> ObjBuilder[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]:
        """
        @return new ObjBuilder of this instance.
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Any], spec: Obj.MakeSpec) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def fromFields(cls, fields: Map[FieldType, Union[Any,Any]], withDefaults: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def make(cls, fields: Map[str, Any], spec: Obj.MakeSpec) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
        """
        Construct instance of this type from provided field values and options
        """
            ...
        @overload
        @classmethod
        def make(cls, withDefaults: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def make(cls, fields: Map[str, Union[Any,Any]], withDefaults: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def make(cls, fields: Any, withDefaults: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def make(cls, s: str) -> Union[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]:
        """
        Construct an instance of this type from the string. This is an alias for #fromString, as a specific overload
        when the argument is a known string.
        
        @see #fromString
        """
            ...
        @classmethod
        def remake(cls, other: Obj, failIfExtraOrInvalidFields: bool=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def afterMake(self) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
        """
        Optional override that will be called after every instance creation.
        
        Note that it introduces additional overhead so should only be implemented for low volume data.
        """
            ...
        @classmethod
        def cachedEmptyInst(cls) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def generateObjs(cls, spec: Obj.GenerateSpec=None) -> Union[Stream[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]]:
        """
        Generate a stream of instances of this type. The stream is endless and will call #generateObj each time a new
        value is read.
        """
            ...
        @classmethod
        def generateObj(cls, spec: Obj.GenerateSpec=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
        """
        Generate a single instance of this type. The base implementation uses {@link DataGenObj} to generate uniform
        random (gibberish) values for all fields, but it may be overridden by specific types with custom logic that
        populates fields in a more realistic way.
        """
            ...
        @overload
        @classmethod
        def fetch(cls, spec: FetchSpec=None) -> FetchResult[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]:
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
        def fetch(cls, filter: Filter) -> FetchResult[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]:
        """
        Fetches multiple obj instances based on a filter.  Only objs that the caller is authorized to fetch will be
        returned.
        
        @param filter
                  Specification of filter to apply to data to fetch.  Note that default limit of 2000 will be applied.
        @return Requested objs.
        """
            ...
        @classmethod
        def fetchObjStream(cls, spec: FetchStreamSpec=None) -> Union[Stream[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]]:
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
        def fetchMultiLocale(cls, spec: MultiLocaleFetchSpec=None) -> Union[Map[str, FetchResult[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]]]:
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
        def dependencies(self) -> MetadataDeps[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]:
        """
        Retrieves dependencies to types or other metadata elements for the given instance of metadata.
        """
            ...
        def save(self, subPath: str=None, contentType: str=None) -> BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate:
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
        def update(self, srcObj: BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate=None, spec: UpsertSpec=None) -> Union[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]:
            ...
        def upsert(self, srcObj: BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate=None, spec: UpsertSpec=None) -> Union[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]:
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
        def fromString(cls, s: str) -> Union[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]:
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
        def forId(cls, id: str, failIfMissing: bool=None) -> Union[BaseCodeAnalysis.VersionDiff.Metric.MessageTemplate]:
        """
        @return single instance of this Identified type by id.
        """
            ...
        def formatMessages(self, bindings: Map[str, Any]=None, isGuessed: bool='false') -> Union[Map[str, str]]:
        """
        Helper function to format and select the appropriate messages for a specific metric.
        
        @param bindings
                  Any bindings that should be filled in to the message templates.
        @param isGuessed
                  If true, #guessedMessage will be used instead of #primaryMessage and the
                  severity will be at most a [warning](BaseCodeAnalysis.Metric.Message.Severity#WARNING).
        @return A partial version of {@link BaseCodeAnalysis.Metric.Message} containing:
        
                  - [severity](BaseCodeAnalysis.Metric.Message#severity)
                  - [message](BaseCodeAnalysis.Metric.Message#message)
                  - [changelogMessage](BaseCodeAnalysis.Metric.Message#changelogMessage)
                  - [typeChangelogMessage](BaseCodeAnalysis.Metric.Message#typeChangelogMessage)
                  - [fieldChangelogMessage](BaseCodeAnalysis.Metric.Message#fieldChangelogMessage)
                  - [paramChangelogMessage](BaseCodeAnalysis.Metric.Message#paramChangelogMessage)
        
        @see Str#format
        """
            ...
    
    class Rename(BaseCodeAnalysis.VersionDiff.Metric, Value):
        """
        This version diff metric searches for and highlights any Types, fields, or methods
        that have been renamed between two [versions](SemanticVersion) of an application.
        
        @see BaseCodeAnalysis.VersionDiff.TypeMetaChangesBase.RevisionDetails
        @see BaseCodeAnalysis.VersionDiff.Metric.Addition
        @see BaseCodeAnalysis.VersionDiff.Metric.Removal
        @see BaseCodeAnalysis.VersionDiff.Metric.Deprecation
        
        @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff.Metric.Rename
        """
        
        METRIC_CODE: Optional[str]=None
        """
        The code for this version diff metric
        """

        RENAMED_TYPE_CODE: Optional[str]=None
        """
        The sub-category code for when a Type has been renamed
        """

        RENAMED_FIELD_CODE: Optional[str]=None
        """
        The sub-category code for when a [field](DeclaredFieldType) has been renamed
        """

        RENAMED_METHOD_CODE: Optional[str]=None
        """
        The sub-category code for when a [method](MethodType) has been renamed
        """
        def __init__(self, METRIC_CODE: Optional[str]=None, RENAMED_TYPE_CODE: Optional[str]=None, RENAMED_FIELD_CODE: Optional[str]=None, RENAMED_METHOD_CODE: Optional[str]=None) -> None: ...

        @classmethod
        def scanTypeMeta(cls, calculateResultsSpec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec, scanSpec: BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec) -> Union[Array[BaseCodeAnalysis.Metric.Result]]:
        """
        Helper function for analyzing a specific category of changes between two
        versions of a C3 application without needing to worry about mapping changes
        to each other. This enables each metric to only implement the logic for
        analyzing the specific category of changes it's responsible for.
        
        Every lambda from `scanSpec` is wrapped in a `try` / `catch` block, so lambdas
        don't need to implement error handling. Additionally, messages from each lambda
        are populated with the following metadata automatically:
        
        ```json
        {
          "isPrivate": boolean,
          "isBeta": boolean,
          "isUi": boolean,
          "isTest": boolean
        }
        ```
        
        @param calculateResultsSpec
                  Object containing relevant {@link App} / {@link Pkg} info and file
                  changes between two versions, along with additional configurations
                  for how to calculate results. This is usually passed through from
                  #calculateResults.
        @param scanSpec
                  Spec for specifying the lambdas to use for each category of {@link TypeMeta}
                  changes (added / removed / changed).
        @return An array of results representing the version diff metric values for
                files in the package.
        """
            ...
        @classmethod
        def calculateResults(cls, spec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec) -> Union[Array[BaseCodeAnalysis.Metric.Result]]:
        """
        Function to identify and analyze a specific category of changes between two
        versions of a C3 application.
        
        Any implementation of this function should follow these rules when analyzing
        [inherited fields or methods](InheritedValueType). These are important because
        if all inherited fields were treated as changes, then it's possible for false
        positives to be surfaced on pull requests.
        
          1. If the field or method is inherited in one version but not the other, analyze
             all parts of the field. In the following example, the {@link ValueType},
             {@link ValueModifier}, and default value of `name` should be analyzed.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B {         │ type B mixes A { │
             │   name: ?string  │   name: !~ = 'x' │
             │ }                │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          2. If the field or method is inherited _from a different Type_ in both versions
             (after renames are resolved), analyze all parts of the field. In the following
             example, both the {@link ValueType} and {@link ValueModifier} of `name` should
             be analyzed.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes C { │
             │   name: ~        │   name: !~       │
             │ }                │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          3. If the field or method is inherited _from the same Type_ in both versions
             (after renames are resolved), only analyze parts that were explicitly part
             of that declaration. In the following examples, only the {@link ValueModifier}
             of `name` should be analyzed. The fully-resolved {@link ValueModifier}s should
             be compared, however, so if `A.name` was [non-empty](ValueModifier#NON_EMPTY)
             in version 1.0.0 of the first two examples, no change has actually occurred.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes A { │
             │   name: ~        │   name: !~       │
             │ }                │ }                │
             ├──────────────────┼──────────────────┤
             │ type B mixes A   │ type B mixes A { │
             │                  │   name: !~       │
             │                  │ }                │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes A   │
             │   name: !~       │                  │
             │ }                │                  │
             └──────────────────┴──────────────────┘
             ```
        
          4. _Exception to Rule 3_: If an inherited method declaration is added or removed,
             but the method existed in both versions and the base signature either was or is
             [optional](MethodType#optional) or [abstract](MethodType#abstract), treat it as
             an addition or removal, not a change as this means a new function implementation
             has been added or removed.
        
             ```type
             ┌─────────────────────────────────────────┐
             │ type A {                                │
             │   func: optional function(a: int)       │
             │ }                                       │
             ├────────────────────┬────────────────────┤
             │       1.0.0        │       2.0.0        │
             ├────────────────────┼────────────────────┤
             │ type B mixes A     │ type B mixes A {   │
             │                    │   func: ~ js-rhino │
             │                    │ }                  │
             ├────────────────────┼────────────────────┤
             │ type B mixes A {   │ type B mixes A     │
             │   func: ~ js-rhino │                    │
             │ }                  │                    │
             └────────────────────┴────────────────────┘
             ```
        
          5. If a new mixin is added or a new field is added to a mixin and an inherited
             declaration for that field is also added, only report that declaration as added
             if it's been modified such that its addition is a breaking change, but the
             original field isn't. In the following example, the declaration of `name` should
             be reported as added in 2.0.0, but `id` shouldn't.
        
             This doesn't apply to methods since any added declaration (inherited or not)
             indicates a new implementation.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B           │ type B mixes A { │
             │                  │   id: ~          |
             │                  │   name: !~       │
             │                  │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          6. If a mixin is removed or a field is removed from a mixin and an inherited
             declaration for that field is also removed, don't report it. If the field
             was removed from the original Type, it should be reported there. If a mixin
             was removed, that should be reported instead. In the following example, the
             declaration of `name` shouldn't be reported as removed in 2.0.0.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B           │
             │   name: ~        │                  |
             │ }                │                  │
             └──────────────────┴──────────────────┘
             ```
        
        @param spec
                  Object containing relevant {@link App} / {@link Pkg} info and file
                  changes between two versions, along with additional configurations
                  for how to calculate results.
        @return An array of results representing the version diff metric values for
                files in the package.
        """
            ...
    
    class Code():
        """
        Enum Type for the list of codes of all {@link BaseCodeAnalysis.VersionDiff.Metric}s.
        
        @see BaseCodeAnalysis.Metric.Code
        @see BaseCodeAnalysis.Metric.BaseCode
        
        @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff.Metric.Code
        """
        
        ADDITION: Optional[str]=None
        """
        The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Addition}.
        """

        REMOVAL: Optional[str]=None
        """
        The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Removal}.
        """

        RENAME: Optional[str]=None
        """
        The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Rename}.
        """

        DEPRECATION: Optional[str]=None
        """
        The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.Deprecation}.
        """

        SCHEMA_CHANGE: Optional[str]=None
        """
        The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.SchemaChange}.
        """

        VALUE_TYPE_CHANGE: Optional[str]=None
        """
        The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.ValueTypeChange}.
        """

        VALUE_MODIFIER_CHANGE: Optional[str]=None
        """
        The metric code for {@link BaseCodeAnalysis.VersionDiff.Metric.ValueModifierChange}.
        """
        def __init__(self, ADDITION: Optional[str]=None, REMOVAL: Optional[str]=None, RENAME: Optional[str]=None, DEPRECATION: Optional[str]=None, SCHEMA_CHANGE: Optional[str]=None, VALUE_TYPE_CHANGE: Optional[str]=None, VALUE_MODIFIER_CHANGE: Optional[str]=None) -> None: ...

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
    
    class SchemaChange(BaseCodeAnalysis.VersionDiff.Metric, Value):
        """
        This version diff metric searches for and highlights any changes in database (DB)
        table/column naming. If any of the following change, it's highlighted:
        
          - {@link TypeMeta#declaredSchemaName}
          - {@link TypeMeta#declaredTypeKey}
          - {@link DeclaredFieldType#schemaName}
          - {@link DeclaredFieldType#schemaSuffix}
        
        @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff.Metric.SchemaChange
        """
        
        METRIC_CODE: Optional[str]=None
        """
        The code for this version diff metric
        """

        EXPLICIT_TABLE_RENAME_CODE: Optional[str]=None
        """
        The sub-category code for when a Type's schema was explicitly changed.
        
        @see searchForDeclaredTypeSchemaChanges
        """

        IMPLICIT_TABLE_RENAME_CODE: Optional[str]=None
        """
        The sub-category code for when a Type's schema was implicitly changed.
        
        @see searchForImplicitTypeSchemaChanges
        """

        TABLE_REMOVAL_CODE: Optional[str]=None
        """
        The sub-category code for when a Type was removed.
        
        @see searchForImplicitTypeSchemaChanges
        """

        EXPLICIT_COLUMN_RENAME_CODE: Optional[str]=None
        """
        The sub-category code for when a [field](DeclaredFieldType)'s schema was explicitly changed.
        
        @see searchForDeclaredFieldSchemaChanges
        """

        IMPLICIT_COLUMN_RENAME_CODE: Optional[str]=None
        """
        The sub-category code for when a [field](DeclaredFieldType)'s schema was implicitly changed.
        
        @see searchForImplicitFieldSchemaChanges
        """

        COLUMN_REMOVAL_CODE: Optional[str]=None
        """
        The sub-category code for when a [field](DeclaredFieldType) was removed.
        
        @see searchForImplicitFieldSchemaChanges
        """
        def __init__(self, METRIC_CODE: Optional[str]=None, EXPLICIT_TABLE_RENAME_CODE: Optional[str]=None, IMPLICIT_TABLE_RENAME_CODE: Optional[str]=None, TABLE_REMOVAL_CODE: Optional[str]=None, EXPLICIT_COLUMN_RENAME_CODE: Optional[str]=None, IMPLICIT_COLUMN_RENAME_CODE: Optional[str]=None, COLUMN_REMOVAL_CODE: Optional[str]=None) -> None: ...

        @classmethod
        def scanTypeMeta(cls, calculateResultsSpec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec, scanSpec: BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec) -> Union[Array[BaseCodeAnalysis.Metric.Result]]:
        """
        Helper function for analyzing a specific category of changes between two
        versions of a C3 application without needing to worry about mapping changes
        to each other. This enables each metric to only implement the logic for
        analyzing the specific category of changes it's responsible for.
        
        Every lambda from `scanSpec` is wrapped in a `try` / `catch` block, so lambdas
        don't need to implement error handling. Additionally, messages from each lambda
        are populated with the following metadata automatically:
        
        ```json
        {
          "isPrivate": boolean,
          "isBeta": boolean,
          "isUi": boolean,
          "isTest": boolean
        }
        ```
        
        @param calculateResultsSpec
                  Object containing relevant {@link App} / {@link Pkg} info and file
                  changes between two versions, along with additional configurations
                  for how to calculate results. This is usually passed through from
                  #calculateResults.
        @param scanSpec
                  Spec for specifying the lambdas to use for each category of {@link TypeMeta}
                  changes (added / removed / changed).
        @return An array of results representing the version diff metric values for
                files in the package.
        """
            ...
        @classmethod
        def calculateResults(cls, spec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec) -> Union[Array[BaseCodeAnalysis.Metric.Result]]:
        """
        Function to identify and analyze a specific category of changes between two
        versions of a C3 application.
        
        Any implementation of this function should follow these rules when analyzing
        [inherited fields or methods](InheritedValueType). These are important because
        if all inherited fields were treated as changes, then it's possible for false
        positives to be surfaced on pull requests.
        
          1. If the field or method is inherited in one version but not the other, analyze
             all parts of the field. In the following example, the {@link ValueType},
             {@link ValueModifier}, and default value of `name` should be analyzed.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B {         │ type B mixes A { │
             │   name: ?string  │   name: !~ = 'x' │
             │ }                │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          2. If the field or method is inherited _from a different Type_ in both versions
             (after renames are resolved), analyze all parts of the field. In the following
             example, both the {@link ValueType} and {@link ValueModifier} of `name` should
             be analyzed.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes C { │
             │   name: ~        │   name: !~       │
             │ }                │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          3. If the field or method is inherited _from the same Type_ in both versions
             (after renames are resolved), only analyze parts that were explicitly part
             of that declaration. In the following examples, only the {@link ValueModifier}
             of `name` should be analyzed. The fully-resolved {@link ValueModifier}s should
             be compared, however, so if `A.name` was [non-empty](ValueModifier#NON_EMPTY)
             in version 1.0.0 of the first two examples, no change has actually occurred.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes A { │
             │   name: ~        │   name: !~       │
             │ }                │ }                │
             ├──────────────────┼──────────────────┤
             │ type B mixes A   │ type B mixes A { │
             │                  │   name: !~       │
             │                  │ }                │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes A   │
             │   name: !~       │                  │
             │ }                │                  │
             └──────────────────┴──────────────────┘
             ```
        
          4. _Exception to Rule 3_: If an inherited method declaration is added or removed,
             but the method existed in both versions and the base signature either was or is
             [optional](MethodType#optional) or [abstract](MethodType#abstract), treat it as
             an addition or removal, not a change as this means a new function implementation
             has been added or removed.
        
             ```type
             ┌─────────────────────────────────────────┐
             │ type A {                                │
             │   func: optional function(a: int)       │
             │ }                                       │
             ├────────────────────┬────────────────────┤
             │       1.0.0        │       2.0.0        │
             ├────────────────────┼────────────────────┤
             │ type B mixes A     │ type B mixes A {   │
             │                    │   func: ~ js-rhino │
             │                    │ }                  │
             ├────────────────────┼────────────────────┤
             │ type B mixes A {   │ type B mixes A     │
             │   func: ~ js-rhino │                    │
             │ }                  │                    │
             └────────────────────┴────────────────────┘
             ```
        
          5. If a new mixin is added or a new field is added to a mixin and an inherited
             declaration for that field is also added, only report that declaration as added
             if it's been modified such that its addition is a breaking change, but the
             original field isn't. In the following example, the declaration of `name` should
             be reported as added in 2.0.0, but `id` shouldn't.
        
             This doesn't apply to methods since any added declaration (inherited or not)
             indicates a new implementation.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B           │ type B mixes A { │
             │                  │   id: ~          |
             │                  │   name: !~       │
             │                  │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          6. If a mixin is removed or a field is removed from a mixin and an inherited
             declaration for that field is also removed, don't report it. If the field
             was removed from the original Type, it should be reported there. If a mixin
             was removed, that should be reported instead. In the following example, the
             declaration of `name` shouldn't be reported as removed in 2.0.0.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B           │
             │   name: ~        │                  |
             │ }                │                  │
             └──────────────────┴──────────────────┘
             ```
        
        @param spec
                  Object containing relevant {@link App} / {@link Pkg} info and file
                  changes between two versions, along with additional configurations
                  for how to calculate results.
        @return An array of results representing the version diff metric values for
                files in the package.
        """
            ...
        @classmethod
        def searchForDeclaredTypeSchemaChanges(cls, spec: BaseCodeAnalysis.VersionDiff.CompareTypesSpec) -> Union[Array[BaseCodeAnalysis.Metric.Message]]:
        """
        **This function should not be run directly. Use** #searchForTypeSchemaChanges **instead.**
        
        Helper function to identify any backwards-incompatible schema changes that have been
        explicitly declared through any of the following:
        
          - {@link TypeMeta#declaredSchemaName}
          - {@link TypeMeta#declaredTypeKey}
        
        @param spec
                  The spec containing the previous and current versions of a Type which represent
                  the previous and current DB schemas.
        @return An array of messages reporting any declared backwards-incompatible Type schema changes.
        """
            ...
        @classmethod
        def searchForImplicitTypeSchemaChanges(cls, spec: BaseCodeAnalysis.VersionDiff.CompareTypesSpec) -> Union[Array[BaseCodeAnalysis.Metric.Message]]:
        """
        **This function should not be run directly. Use** #searchForTypeSchemaChanges **instead.**
        
        Helper function to identify any _implicit_ schema changes that result from things other
        than declared schema names/type keys. For example:
        
          - A Type didn't explicitly declare a schema name, but the Type was renamed. Since the
            schema name is derived from the Type name in lieu of an explicit declaration, this
            constitutes a schema change.
          - A [persistable](TypeMeta#isPersistable) Type was removed.
        
        @param spec
                  The spec containing the previous and current versions of a Type which represent
                  the previous and current DB schemas. If the current version is null, it's assumed
                  that the Type was removed.
        @return An array of messages reporting any implicit backwards-incompatible Type schema changes.
        """
            ...
        @classmethod
        def searchForTypeSchemaChanges(cls, calculateResultsSpec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec, compareSpec: BaseCodeAnalysis.VersionDiff.CompareTypesSpec) -> Union[Array[BaseCodeAnalysis.Metric.Message]]:
        """
        Function to identify any backwards-incompatible schema changes between two versions of a
        given [persistable Type](TypeMeta#isPersistable). This function is called by #calculateResults.
        
        @param calculateResultsSpec
                  The spec provided to #calculateResults.
        @param compareSpec
                  The spec containing the previous and current versions of a Type.
        @return An array of messages reporting any backwards-incompatible Type schema changes.
        """
            ...
        @classmethod
        def searchForDeclaredFieldSchemaChanges(cls, spec: BaseCodeAnalysis.VersionDiff.CompareFieldsSpec) -> Union[Array[BaseCodeAnalysis.Metric.Message]]:
        """
        **This function should not be run directly. Use** #searchForFieldSchemaChanges **instead.**
        
        Helper function to identify any _implicit_ schema changes that result from things other
        than declared schema names/schema suffixes. For example:
        
          - A field didn't explicitly declare a schema name, but the field was renamed. Since the
            schema name is derived from the field name in lieu of an explicit declaration, this
            constitutes a schema change.
          - A persistable field was removed.
        
        @param spec
                  The spec containing the previous and current versions of a field.
        @return An array of messages reporting any explicit backwards-incompatible field schema changes.
        """
            ...
        @classmethod
        def searchForImplicitFieldSchemaChanges(cls, spec: BaseCodeAnalysis.VersionDiff.CompareFieldsSpec) -> Union[Array[BaseCodeAnalysis.Metric.Message]]:
        """
        **This function should not be run directly. Use** #searchForFieldSchemaChanges **instead.**
        
        Helper function to identify any backwards-incompatible schema changes that have been
        explicitly declared through any of the following:
        
          - {@link DeclaredFieldType#schemaName}
          - {@link DeclaredFieldType#schemaSuffix}
        
        @param spec
                  The spec containing the previous and current versions of a field. If the current
                  version is null, it's assumed that the field was removed.
        @return An array of messages reporting any implicit backwards-incompatible field schema changes.
        """
            ...
        @classmethod
        def searchForFieldSchemaChanges(cls, calculateResultsSpec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec, compareSpec: BaseCodeAnalysis.VersionDiff.CompareFieldsSpec) -> Union[Array[BaseCodeAnalysis.Metric.Message]]:
        """
        Function to identify any backwards-incompatible schema changes between two versions
        of a given [persistable Type](TypeMeta#isPersistable)'s field. This function is called
        by #calculateResults.
        
        @param calculateResultsSpec
                  The spec provided to #calculateResults.
        @param compareSpec
                  The spec containing the previous and current versions of a field.
        @return An array of messages reporting any backwards-incompatible field schema changes.
        """
            ...
    
    class ValueTypeChange(BaseCodeAnalysis.VersionDiff.Metric, Value):
        """
        This version diff metric searches for and highlights any changes to the {@link ValueType}
        of any fields, method parameters, or method return values.
        
        @remarks this represents a made instance of BaseCodeAnalysis.VersionDiff.Metric.ValueTypeChange
        """
        
        METRIC_CODE: Optional[str]=None
        """
        The code for this version diff metric.
        """

        CHANGED_FIELD_CODE: Optional[str]=None
        """
        The sub-category code for when a [field's](DeclaredFieldType) {@link ValueType} has changed
        """

        CHANGED_PARAM_CODE: Optional[str]=None
        """
        The sub-category code for when a [method parameter's](FunctionParam) {@link ValueType} has changed
        """

        CHANGED_RETURN_CODE: Optional[str]=None
        """
        The sub-category code for when a [method's return type](MethodType#returnType) has changed
        """
        def __init__(self, METRIC_CODE: Optional[str]=None, CHANGED_FIELD_CODE: Optional[str]=None, CHANGED_PARAM_CODE: Optional[str]=None, CHANGED_RETURN_CODE: Optional[str]=None) -> None: ...

        @classmethod
        def scanTypeMeta(cls, calculateResultsSpec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec, scanSpec: BaseCodeAnalysis.VersionDiff.Metric.ScanTypeMetaSpec) -> Union[Array[BaseCodeAnalysis.Metric.Result]]:
        """
        Helper function for analyzing a specific category of changes between two
        versions of a C3 application without needing to worry about mapping changes
        to each other. This enables each metric to only implement the logic for
        analyzing the specific category of changes it's responsible for.
        
        Every lambda from `scanSpec` is wrapped in a `try` / `catch` block, so lambdas
        don't need to implement error handling. Additionally, messages from each lambda
        are populated with the following metadata automatically:
        
        ```json
        {
          "isPrivate": boolean,
          "isBeta": boolean,
          "isUi": boolean,
          "isTest": boolean
        }
        ```
        
        @param calculateResultsSpec
                  Object containing relevant {@link App} / {@link Pkg} info and file
                  changes between two versions, along with additional configurations
                  for how to calculate results. This is usually passed through from
                  #calculateResults.
        @param scanSpec
                  Spec for specifying the lambdas to use for each category of {@link TypeMeta}
                  changes (added / removed / changed).
        @return An array of results representing the version diff metric values for
                files in the package.
        """
            ...
        @classmethod
        def calculateResults(cls, spec: BaseCodeAnalysis.VersionDiff.Metric.CalculateResultsSpec) -> Union[Array[BaseCodeAnalysis.Metric.Result]]:
        """
        Function to identify and analyze a specific category of changes between two
        versions of a C3 application.
        
        Any implementation of this function should follow these rules when analyzing
        [inherited fields or methods](InheritedValueType). These are important because
        if all inherited fields were treated as changes, then it's possible for false
        positives to be surfaced on pull requests.
        
          1. If the field or method is inherited in one version but not the other, analyze
             all parts of the field. In the following example, the {@link ValueType},
             {@link ValueModifier}, and default value of `name` should be analyzed.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B {         │ type B mixes A { │
             │   name: ?string  │   name: !~ = 'x' │
             │ }                │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          2. If the field or method is inherited _from a different Type_ in both versions
             (after renames are resolved), analyze all parts of the field. In the following
             example, both the {@link ValueType} and {@link ValueModifier} of `name` should
             be analyzed.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes C { │
             │   name: ~        │   name: !~       │
             │ }                │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          3. If the field or method is inherited _from the same Type_ in both versions
             (after renames are resolved), only analyze parts that were explicitly part
             of that declaration. In the following examples, only the {@link ValueModifier}
             of `name` should be analyzed. The fully-resolved {@link ValueModifier}s should
             be compared, however, so if `A.name` was [non-empty](ValueModifier#NON_EMPTY)
             in version 1.0.0 of the first two examples, no change has actually occurred.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes A { │
             │   name: ~        │   name: !~       │
             │ }                │ }                │
             ├──────────────────┼──────────────────┤
             │ type B mixes A   │ type B mixes A { │
             │                  │   name: !~       │
             │                  │ }                │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B mixes A   │
             │   name: !~       │                  │
             │ }                │                  │
             └──────────────────┴──────────────────┘
             ```
        
          4. _Exception to Rule 3_: If an inherited method declaration is added or removed,
             but the method existed in both versions and the base signature either was or is
             [optional](MethodType#optional) or [abstract](MethodType#abstract), treat it as
             an addition or removal, not a change as this means a new function implementation
             has been added or removed.
        
             ```type
             ┌─────────────────────────────────────────┐
             │ type A {                                │
             │   func: optional function(a: int)       │
             │ }                                       │
             ├────────────────────┬────────────────────┤
             │       1.0.0        │       2.0.0        │
             ├────────────────────┼────────────────────┤
             │ type B mixes A     │ type B mixes A {   │
             │                    │   func: ~ js-rhino │
             │                    │ }                  │
             ├────────────────────┼────────────────────┤
             │ type B mixes A {   │ type B mixes A     │
             │   func: ~ js-rhino │                    │
             │ }                  │                    │
             └────────────────────┴────────────────────┘
             ```
        
          5. If a new mixin is added or a new field is added to a mixin and an inherited
             declaration for that field is also added, only report that declaration as added
             if it's been modified such that its addition is a breaking change, but the
             original field isn't. In the following example, the declaration of `name` should
             be reported as added in 2.0.0, but `id` shouldn't.
        
             This doesn't apply to methods since any added declaration (inherited or not)
             indicates a new implementation.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B           │ type B mixes A { │
             │                  │   id: ~          |
             │                  │   name: !~       │
             │                  │ }                │
             └──────────────────┴──────────────────┘
             ```
        
          6. If a mixin is removed or a field is removed from a mixin and an inherited
             declaration for that field is also removed, don't report it. If the field
             was removed from the original Type, it should be reported there. If a mixin
             was removed, that should be reported instead. In the following example, the
             declaration of `name` shouldn't be reported as removed in 2.0.0.
        
             ```type
             ┌──────────────────┬──────────────────┐
             │      1.0.0       │      2.0.0       │
             ├──────────────────┼──────────────────┤
             │ type B mixes A { │ type B           │
             │   name: ~        │                  |
             │ }                │                  │
             └──────────────────┴──────────────────┘
             ```
        
        @param spec
                  Object containing relevant {@link App} / {@link Pkg} info and file
                  changes between two versions, along with additional configurations
                  for how to calculate results.
        @return An array of results representing the version diff metric values for
                files in the package.
        """
            ...

