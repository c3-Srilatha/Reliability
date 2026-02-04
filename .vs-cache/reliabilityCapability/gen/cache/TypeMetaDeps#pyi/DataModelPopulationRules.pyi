#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.dataValidation.DataValidationRuleResult import DataValidationRuleResult

# Python definitions for the C3 type DataModelPopulationRules


class DataModelPopulationRules(Value):
    """
    Functions used by the {@link DataValidationRule rules} for the "Data Model Population" ruleset.
    
    @remarks this represents a made instance of DataModelPopulationRules
    """
    def __init__(self) -> None: ...

    @classmethod
    def validateFieldPopulation(cls, typeName: str, args: Map[str, Any]=None, fields: Map[str, int]=None, referenceFields: Map[str, int]=None, matchingFields: Map[str, int]=None) -> Union[Array[DataValidationRuleResult]]:
    """
    Checks for the population of fields. `fields` and `referenceFields` arguments are mappings from field names to priority levels if those fields are not populated.
    @param args
              A map containing arguments needed for validation.
    @param typeName
              The name of the type to validate.
    @param fields
              A map from field names to priority levels for field population validation.
    @param referenceFields
              A map from reference field names to priority levels for validation.
    @param matchingFields
              A map from matching field names to priority levels for validation.
    @return An array of {@link DataValidationRuleResult} objects representing validation results.
    """
        ...
    @classmethod
    def validateSensorData(cls, args: Map[str, Any]=None, p1LookbackMonths: int='4', p2LookbackMonths: int='1') -> Union[Array[DataValidationRuleResult]]:
    """
    Checks for {@link Sensor#pointSeries} population.
    @param args
              A map containing arguments needed for validation.
    @param p1LookbackMonths
              If no data exists for this many months before now, a P1 rule violation is raised.
    @param p2LookbackMonths
              If no data exists for this many months before now, a P2 rule violation is raised. Should be less than p1LookbackMonths.
    @return An array of {@link DataValidationRuleResult} objects representing validation results.
    """
        ...
    @classmethod
    def validateSensorTypeIdent(cls, args: Map[str, Any]=None) -> Union[DataValidationRuleResult]:
    """
    Checks that old {@link Sensor#typeIdent} strings do not show up in the {@link PhysicalAsset} table.
    @param args
              A map containing arguments needed for validation.
    @return A {@link DataValidationRuleResult} object representing the validation result.
    """
        ...
    @classmethod
    def validateReliabilityAssetHierarchy(cls, args: Map[str, Any]=None, connectedAssetsThreshold: float='0.8') -> Union[Array[DataValidationRuleResult]]:
    """
    Checks for proper hierarchy denormalization and asset hierarchical relations.
    @param args
              A map containing arguments needed for validation.
    @param connectedAssetsThreshold
              The threshold for connected assets validation (default: 0.8).
    @return An array of {@link DataValidationRuleResult} objects representing validation results.
    """
        ...
    @classmethod
    def validateAssetClasses(cls, args: Map[str, Any]=None, assetClassAssignmentThreshold: float='0.1') -> Union[Array[DataValidationRuleResult]]:
    """
    Checks for a healthy frequency of {@link AssetClass} assignment and associated sensor relations.
    @param args
              A map containing arguments needed for validation.
    @param assetClassAssignmentThreshold
              The threshold for asset class assignment validation (default: 0.1).
    @return An array of {@link DataValidationRuleResult} objects representing validation results.
    """
        ...
    @classmethod
    def validateExpectedSensorMetrics(cls, args: Map[str, Any]=None) -> Union[Array[DataValidationRuleResult]]:
    """
    Checks that each {@link ExpectedSensor} has a simple metric on {@link ReliabilityAsset} with no bindings.
    @param args
              A map containing arguments needed for validation.
    @return An array of {@link DataValidationRuleResult} objects representing validation results.
    """
        ...
    @classmethod
    def validateAssetSensorRelations(cls, args: Map[str, Any]=None, p1Coefficient: float='0', p2Coefficient: float='0.4') -> Union[Array[DataValidationRuleResult]]:
    """
    Checks that {@link ReliabilityAsset}s with an assigned {@link AssetClass} have associated {@link ReliabilityAssetSensorRelation}s linking to {@link Sensor}s.
    @param args
              A map containing arguments needed for validation.
    @param p1Coefficient
              The P1 coefficient for validation (default: 0).
    @param p2Coefficient
              The P2 coefficient for validation (default: 0.4).
    @return An array of {@link DataValidationRuleResult} objects representing validation results.
    """
        ...

