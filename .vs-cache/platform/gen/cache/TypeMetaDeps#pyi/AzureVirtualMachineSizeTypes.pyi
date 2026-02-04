#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type AzureVirtualMachineSizeTypes


class AzureVirtualMachineSizeTypes(Value):
    """
    @remarks this represents a made instance of AzureVirtualMachineSizeTypes
    """
    
    BASIC_A0: Optional[str]=None

    BASIC_A1: Optional[str]=None

    BASIC_A2: Optional[str]=None

    BASIC_A3: Optional[str]=None

    BASIC_A4: Optional[str]=None

    STANDARD_A0: Optional[str]=None

    STANDARD_A1: Optional[str]=None

    STANDARD_A2: Optional[str]=None

    STANDARD_A3: Optional[str]=None

    STANDARD_A4: Optional[str]=None

    STANDARD_A5: Optional[str]=None

    STANDARD_A6: Optional[str]=None

    STANDARD_A7: Optional[str]=None

    STANDARD_A8: Optional[str]=None

    STANDARD_A9: Optional[str]=None

    STANDARD_A10: Optional[str]=None

    STANDARD_A11: Optional[str]=None

    STANDARD_A1_V2: Optional[str]=None

    STANDARD_A2_V2: Optional[str]=None

    STANDARD_A4_V2: Optional[str]=None

    STANDARD_A8_V2: Optional[str]=None

    STANDARD_A2M_V2: Optional[str]=None

    STANDARD_A4M_V2: Optional[str]=None

    STANDARD_A8M_V2: Optional[str]=None

    STANDARD_B1S: Optional[str]=None

    STANDARD_B1MS: Optional[str]=None

    STANDARD_B2S: Optional[str]=None

    STANDARD_B2MS: Optional[str]=None

    STANDARD_B4MS: Optional[str]=None

    STANDARD_B8MS: Optional[str]=None

    STANDARD_D1: Optional[str]=None

    STANDARD_D2: Optional[str]=None

    STANDARD_D3: Optional[str]=None

    STANDARD_D4: Optional[str]=None

    STANDARD_D11: Optional[str]=None

    STANDARD_D12: Optional[str]=None

    STANDARD_D13: Optional[str]=None

    STANDARD_D14: Optional[str]=None

    STANDARD_D1_V2: Optional[str]=None

    STANDARD_D2_V2: Optional[str]=None

    STANDARD_D3_V2: Optional[str]=None

    STANDARD_D4_V2: Optional[str]=None

    STANDARD_D5_V2: Optional[str]=None

    STANDARD_D2_V3: Optional[str]=None

    STANDARD_D4_V3: Optional[str]=None

    STANDARD_D8_V3: Optional[str]=None

    STANDARD_D16_V3: Optional[str]=None

    STANDARD_D32_V3: Optional[str]=None

    STANDARD_D64_V3: Optional[str]=None

    STANDARD_D2S_V3: Optional[str]=None

    STANDARD_D4S_V3: Optional[str]=None

    STANDARD_D8S_V3: Optional[str]=None

    STANDARD_D16S_V3: Optional[str]=None

    STANDARD_D32S_V3: Optional[str]=None

    STANDARD_D64S_V3: Optional[str]=None

    STANDARD_D11_V2: Optional[str]=None

    STANDARD_D12_V2: Optional[str]=None

    STANDARD_D13_V2: Optional[str]=None

    STANDARD_D14_V2: Optional[str]=None

    STANDARD_D15_V2: Optional[str]=None

    STANDARD_DS1: Optional[str]=None

    STANDARD_DS2: Optional[str]=None

    STANDARD_DS3: Optional[str]=None

    STANDARD_DS4: Optional[str]=None

    STANDARD_DS11: Optional[str]=None

    STANDARD_DS12: Optional[str]=None

    STANDARD_DS13: Optional[str]=None

    STANDARD_DS14: Optional[str]=None

    STANDARD_DS1_V2: Optional[str]=None

    STANDARD_DS2_V2: Optional[str]=None

    STANDARD_DS3_V2: Optional[str]=None

    STANDARD_DS4_V2: Optional[str]=None

    STANDARD_DS5_V2: Optional[str]=None

    STANDARD_DS11_V2: Optional[str]=None

    STANDARD_DS12_V2: Optional[str]=None

    STANDARD_DS13_V2: Optional[str]=None

    STANDARD_DS14_V2: Optional[str]=None

    STANDARD_DS15_V2: Optional[str]=None

    STANDARD_DS13_4_V2: Optional[str]=None

    STANDARD_DS13_2_V2: Optional[str]=None

    STANDARD_DS14_8_V2: Optional[str]=None

    STANDARD_DS14_4_V2: Optional[str]=None

    STANDARD_E2_V3: Optional[str]=None

    STANDARD_E4_V3: Optional[str]=None

    STANDARD_E8_V3: Optional[str]=None

    STANDARD_E16_V3: Optional[str]=None

    STANDARD_E32_V3: Optional[str]=None

    STANDARD_E64_V3: Optional[str]=None

    STANDARD_E2S_V3: Optional[str]=None

    STANDARD_E4S_V3: Optional[str]=None

    STANDARD_E8S_V3: Optional[str]=None

    STANDARD_E16S_V3: Optional[str]=None

    STANDARD_E32S_V3: Optional[str]=None

    STANDARD_E64S_V3: Optional[str]=None

    STANDARD_E32_16_V3: Optional[str]=None

    STANDARD_E32_8S_V3: Optional[str]=None

    STANDARD_E64_32S_V3: Optional[str]=None

    STANDARD_E64_16S_V3: Optional[str]=None

    STANDARD_F1: Optional[str]=None

    STANDARD_F2: Optional[str]=None

    STANDARD_F4: Optional[str]=None

    STANDARD_F8: Optional[str]=None

    STANDARD_F16: Optional[str]=None

    STANDARD_F1S: Optional[str]=None

    STANDARD_F2S: Optional[str]=None

    STANDARD_F4S: Optional[str]=None

    STANDARD_F8S: Optional[str]=None

    STANDARD_F16S: Optional[str]=None

    STANDARD_F2S_V2: Optional[str]=None

    STANDARD_F4S_V2: Optional[str]=None

    STANDARD_F8S_V2: Optional[str]=None

    STANDARD_F16S_V2: Optional[str]=None

    STANDARD_F32S_V2: Optional[str]=None

    STANDARD_F64S_V2: Optional[str]=None

    STANDARD_F72S_V2: Optional[str]=None

    STANDARD_G1: Optional[str]=None

    STANDARD_G2: Optional[str]=None

    STANDARD_G3: Optional[str]=None

    STANDARD_G4: Optional[str]=None

    STANDARD_G5: Optional[str]=None

    STANDARD_GS1: Optional[str]=None

    STANDARD_GS2: Optional[str]=None

    STANDARD_GS3: Optional[str]=None

    STANDARD_GS4: Optional[str]=None

    STANDARD_GS5: Optional[str]=None

    STANDARD_GS4_8: Optional[str]=None

    STANDARD_GS4_4: Optional[str]=None

    STANDARD_GS5_16: Optional[str]=None

    STANDARD_GS5_8: Optional[str]=None

    STANDARD_H8: Optional[str]=None

    STANDARD_H16: Optional[str]=None

    STANDARD_H8M: Optional[str]=None

    STANDARD_H16M: Optional[str]=None

    STANDARD_H16R: Optional[str]=None

    STANDARD_H16MR: Optional[str]=None

    STANDARD_L4S: Optional[str]=None

    STANDARD_L8S: Optional[str]=None

    STANDARD_L16S: Optional[str]=None

    STANDARD_L32S: Optional[str]=None

    STANDARD_M64S: Optional[str]=None

    STANDARD_M64MS: Optional[str]=None

    STANDARD_M128S: Optional[str]=None

    STANDARD_M128MS: Optional[str]=None

    STANDARD_M64_32MS: Optional[str]=None

    STANDARD_M64_16MS: Optional[str]=None

    STANDARD_M128_64MS: Optional[str]=None

    STANDARD_M128_32MS: Optional[str]=None

    STANDARD_NC6: Optional[str]=None

    STANDARD_NC12: Optional[str]=None

    STANDARD_NC24: Optional[str]=None

    STANDARD_NC24R: Optional[str]=None

    STANDARD_NC6S_V2: Optional[str]=None

    STANDARD_NC12S_V2: Optional[str]=None

    STANDARD_NC24S_V2: Optional[str]=None

    STANDARD_NC24RS_V2: Optional[str]=None

    STANDARD_NC6S_V3: Optional[str]=None

    STANDARD_NC12S_V3: Optional[str]=None

    STANDARD_NC24S_V3: Optional[str]=None

    STANDARD_NC24RS_V3: Optional[str]=None

    STANDARD_ND6S: Optional[str]=None

    STANDARD_ND12S: Optional[str]=None

    STANDARD_ND24S: Optional[str]=None

    STANDARD_ND24RS: Optional[str]=None

    STANDARD_NV6: Optional[str]=None

    STANDARD_NV12: Optional[str]=None

    STANDARD_NV24: Optional[str]=None

    STANDARD_D2_V5: Optional[str]=None

    STANDARD_D4_V5: Optional[str]=None

    STANDARD_D8_V5: Optional[str]=None

    STANDARD_D16_V5: Optional[str]=None

    STANDARD_D32_V5: Optional[str]=None

    STANDARD_D48_V5: Optional[str]=None

    STANDARD_D64_V5: Optional[str]=None

    STANDARD_D96_V5: Optional[str]=None

    STANDARD_D2S_V5: Optional[str]=None

    STANDARD_D4S_V5: Optional[str]=None

    STANDARD_D8S_V5: Optional[str]=None

    STANDARD_D16S_V5: Optional[str]=None

    STANDARD_D32S_V5: Optional[str]=None

    STANDARD_D48S_V5: Optional[str]=None

    STANDARD_D64S_V5: Optional[str]=None

    STANDARD_D96S_V5: Optional[str]=None

    STANDARD_D2D_V5: Optional[str]=None

    STANDARD_D4D_V5: Optional[str]=None

    STANDARD_D8D_V5: Optional[str]=None

    STANDARD_D16D_V5: Optional[str]=None

    STANDARD_D32D_V5: Optional[str]=None

    STANDARD_D48D_V5: Optional[str]=None

    STANDARD_D64D_V5: Optional[str]=None

    STANDARD_D96D_V5: Optional[str]=None

    STANDARD_D2DS_V5: Optional[str]=None

    STANDARD_D4DS_V5: Optional[str]=None

    STANDARD_D8DS_V5: Optional[str]=None

    STANDARD_D16DS_V5: Optional[str]=None

    STANDARD_D32DS_V5: Optional[str]=None

    STANDARD_D48DS_V5: Optional[str]=None

    STANDARD_D64DS_V5: Optional[str]=None

    STANDARD_D96DS_V5: Optional[str]=None

    STANDARD_E2_V5: Optional[str]=None

    STANDARD_E4_V5: Optional[str]=None

    STANDARD_E8_V5: Optional[str]=None

    STANDARD_E16_V5: Optional[str]=None

    STANDARD_E20_V5: Optional[str]=None

    STANDARD_E32_V5: Optional[str]=None

    STANDARD_E48_V5: Optional[str]=None

    STANDARD_E64_V5: Optional[str]=None

    STANDARD_E96_V5: Optional[str]=None

    STANDARD_E104_V5: Optional[str]=None

    STANDARD_E2S_V5: Optional[str]=None

    STANDARD_E4S_V5: Optional[str]=None

    STANDARD_E8S_V5: Optional[str]=None

    STANDARD_E16S_V5: Optional[str]=None

    STANDARD_E20S_V5: Optional[str]=None

    STANDARD_E32S_V5: Optional[str]=None

    STANDARD_E48S_V5: Optional[str]=None

    STANDARD_E64S_V5: Optional[str]=None

    STANDARD_E96S_V5: Optional[str]=None

    STANDARD_E104S_V5: Optional[str]=None

    STANDARD_E2D_V5: Optional[str]=None

    STANDARD_E4D_V5: Optional[str]=None

    STANDARD_E8D_V5: Optional[str]=None

    STANDARD_E16D_V5: Optional[str]=None

    STANDARD_E20D_V5: Optional[str]=None

    STANDARD_E32D_V5: Optional[str]=None

    STANDARD_E48D_V5: Optional[str]=None

    STANDARD_E64D_V5: Optional[str]=None

    STANDARD_E96D_V5: Optional[str]=None

    STANDARD_E104D_V5: Optional[str]=None

    STANDARD_E2DS_V5: Optional[str]=None

    STANDARD_E4DS_V5: Optional[str]=None

    STANDARD_E8DS_V5: Optional[str]=None

    STANDARD_E16DS_V5: Optional[str]=None

    STANDARD_E20DS_V5: Optional[str]=None

    STANDARD_E32DS_V5: Optional[str]=None

    STANDARD_E48DS_V5: Optional[str]=None

    STANDARD_E64DS_V5: Optional[str]=None

    STANDARD_E96DS_V5: Optional[str]=None

    STANDARD_E104DS_V5: Optional[str]=None
    def __init__(self, BASIC_A0: Optional[str]=None, BASIC_A1: Optional[str]=None, BASIC_A2: Optional[str]=None, BASIC_A3: Optional[str]=None, BASIC_A4: Optional[str]=None, STANDARD_A0: Optional[str]=None, STANDARD_A1: Optional[str]=None, STANDARD_A2: Optional[str]=None, STANDARD_A3: Optional[str]=None, STANDARD_A4: Optional[str]=None, STANDARD_A5: Optional[str]=None, STANDARD_A6: Optional[str]=None, STANDARD_A7: Optional[str]=None, STANDARD_A8: Optional[str]=None, STANDARD_A9: Optional[str]=None, STANDARD_A10: Optional[str]=None, STANDARD_A11: Optional[str]=None, STANDARD_A1_V2: Optional[str]=None, STANDARD_A2_V2: Optional[str]=None, STANDARD_A4_V2: Optional[str]=None, STANDARD_A8_V2: Optional[str]=None, STANDARD_A2M_V2: Optional[str]=None, STANDARD_A4M_V2: Optional[str]=None, STANDARD_A8M_V2: Optional[str]=None, STANDARD_B1S: Optional[str]=None, STANDARD_B1MS: Optional[str]=None, STANDARD_B2S: Optional[str]=None, STANDARD_B2MS: Optional[str]=None, STANDARD_B4MS: Optional[str]=None, STANDARD_B8MS: Optional[str]=None, STANDARD_D1: Optional[str]=None, STANDARD_D2: Optional[str]=None, STANDARD_D3: Optional[str]=None, STANDARD_D4: Optional[str]=None, STANDARD_D11: Optional[str]=None, STANDARD_D12: Optional[str]=None, STANDARD_D13: Optional[str]=None, STANDARD_D14: Optional[str]=None, STANDARD_D1_V2: Optional[str]=None, STANDARD_D2_V2: Optional[str]=None, STANDARD_D3_V2: Optional[str]=None, STANDARD_D4_V2: Optional[str]=None, STANDARD_D5_V2: Optional[str]=None, STANDARD_D2_V3: Optional[str]=None, STANDARD_D4_V3: Optional[str]=None, STANDARD_D8_V3: Optional[str]=None, STANDARD_D16_V3: Optional[str]=None, STANDARD_D32_V3: Optional[str]=None, STANDARD_D64_V3: Optional[str]=None, STANDARD_D2S_V3: Optional[str]=None, STANDARD_D4S_V3: Optional[str]=None, STANDARD_D8S_V3: Optional[str]=None, STANDARD_D16S_V3: Optional[str]=None, STANDARD_D32S_V3: Optional[str]=None, STANDARD_D64S_V3: Optional[str]=None, STANDARD_D11_V2: Optional[str]=None, STANDARD_D12_V2: Optional[str]=None, STANDARD_D13_V2: Optional[str]=None, STANDARD_D14_V2: Optional[str]=None, STANDARD_D15_V2: Optional[str]=None, STANDARD_DS1: Optional[str]=None, STANDARD_DS2: Optional[str]=None, STANDARD_DS3: Optional[str]=None, STANDARD_DS4: Optional[str]=None, STANDARD_DS11: Optional[str]=None, STANDARD_DS12: Optional[str]=None, STANDARD_DS13: Optional[str]=None, STANDARD_DS14: Optional[str]=None, STANDARD_DS1_V2: Optional[str]=None, STANDARD_DS2_V2: Optional[str]=None, STANDARD_DS3_V2: Optional[str]=None, STANDARD_DS4_V2: Optional[str]=None, STANDARD_DS5_V2: Optional[str]=None, STANDARD_DS11_V2: Optional[str]=None, STANDARD_DS12_V2: Optional[str]=None, STANDARD_DS13_V2: Optional[str]=None, STANDARD_DS14_V2: Optional[str]=None, STANDARD_DS15_V2: Optional[str]=None, STANDARD_DS13_4_V2: Optional[str]=None, STANDARD_DS13_2_V2: Optional[str]=None, STANDARD_DS14_8_V2: Optional[str]=None, STANDARD_DS14_4_V2: Optional[str]=None, STANDARD_E2_V3: Optional[str]=None, STANDARD_E4_V3: Optional[str]=None, STANDARD_E8_V3: Optional[str]=None, STANDARD_E16_V3: Optional[str]=None, STANDARD_E32_V3: Optional[str]=None, STANDARD_E64_V3: Optional[str]=None, STANDARD_E2S_V3: Optional[str]=None, STANDARD_E4S_V3: Optional[str]=None, STANDARD_E8S_V3: Optional[str]=None, STANDARD_E16S_V3: Optional[str]=None, STANDARD_E32S_V3: Optional[str]=None, STANDARD_E64S_V3: Optional[str]=None, STANDARD_E32_16_V3: Optional[str]=None, STANDARD_E32_8S_V3: Optional[str]=None, STANDARD_E64_32S_V3: Optional[str]=None, STANDARD_E64_16S_V3: Optional[str]=None, STANDARD_F1: Optional[str]=None, STANDARD_F2: Optional[str]=None, STANDARD_F4: Optional[str]=None, STANDARD_F8: Optional[str]=None, STANDARD_F16: Optional[str]=None, STANDARD_F1S: Optional[str]=None, STANDARD_F2S: Optional[str]=None, STANDARD_F4S: Optional[str]=None, STANDARD_F8S: Optional[str]=None, STANDARD_F16S: Optional[str]=None, STANDARD_F2S_V2: Optional[str]=None, STANDARD_F4S_V2: Optional[str]=None, STANDARD_F8S_V2: Optional[str]=None, STANDARD_F16S_V2: Optional[str]=None, STANDARD_F32S_V2: Optional[str]=None, STANDARD_F64S_V2: Optional[str]=None, STANDARD_F72S_V2: Optional[str]=None, STANDARD_G1: Optional[str]=None, STANDARD_G2: Optional[str]=None, STANDARD_G3: Optional[str]=None, STANDARD_G4: Optional[str]=None, STANDARD_G5: Optional[str]=None, STANDARD_GS1: Optional[str]=None, STANDARD_GS2: Optional[str]=None, STANDARD_GS3: Optional[str]=None, STANDARD_GS4: Optional[str]=None, STANDARD_GS5: Optional[str]=None, STANDARD_GS4_8: Optional[str]=None, STANDARD_GS4_4: Optional[str]=None, STANDARD_GS5_16: Optional[str]=None, STANDARD_GS5_8: Optional[str]=None, STANDARD_H8: Optional[str]=None, STANDARD_H16: Optional[str]=None, STANDARD_H8M: Optional[str]=None, STANDARD_H16M: Optional[str]=None, STANDARD_H16R: Optional[str]=None, STANDARD_H16MR: Optional[str]=None, STANDARD_L4S: Optional[str]=None, STANDARD_L8S: Optional[str]=None, STANDARD_L16S: Optional[str]=None, STANDARD_L32S: Optional[str]=None, STANDARD_M64S: Optional[str]=None, STANDARD_M64MS: Optional[str]=None, STANDARD_M128S: Optional[str]=None, STANDARD_M128MS: Optional[str]=None, STANDARD_M64_32MS: Optional[str]=None, STANDARD_M64_16MS: Optional[str]=None, STANDARD_M128_64MS: Optional[str]=None, STANDARD_M128_32MS: Optional[str]=None, STANDARD_NC6: Optional[str]=None, STANDARD_NC12: Optional[str]=None, STANDARD_NC24: Optional[str]=None, STANDARD_NC24R: Optional[str]=None, STANDARD_NC6S_V2: Optional[str]=None, STANDARD_NC12S_V2: Optional[str]=None, STANDARD_NC24S_V2: Optional[str]=None, STANDARD_NC24RS_V2: Optional[str]=None, STANDARD_NC6S_V3: Optional[str]=None, STANDARD_NC12S_V3: Optional[str]=None, STANDARD_NC24S_V3: Optional[str]=None, STANDARD_NC24RS_V3: Optional[str]=None, STANDARD_ND6S: Optional[str]=None, STANDARD_ND12S: Optional[str]=None, STANDARD_ND24S: Optional[str]=None, STANDARD_ND24RS: Optional[str]=None, STANDARD_NV6: Optional[str]=None, STANDARD_NV12: Optional[str]=None, STANDARD_NV24: Optional[str]=None, STANDARD_D2_V5: Optional[str]=None, STANDARD_D4_V5: Optional[str]=None, STANDARD_D8_V5: Optional[str]=None, STANDARD_D16_V5: Optional[str]=None, STANDARD_D32_V5: Optional[str]=None, STANDARD_D48_V5: Optional[str]=None, STANDARD_D64_V5: Optional[str]=None, STANDARD_D96_V5: Optional[str]=None, STANDARD_D2S_V5: Optional[str]=None, STANDARD_D4S_V5: Optional[str]=None, STANDARD_D8S_V5: Optional[str]=None, STANDARD_D16S_V5: Optional[str]=None, STANDARD_D32S_V5: Optional[str]=None, STANDARD_D48S_V5: Optional[str]=None, STANDARD_D64S_V5: Optional[str]=None, STANDARD_D96S_V5: Optional[str]=None, STANDARD_D2D_V5: Optional[str]=None, STANDARD_D4D_V5: Optional[str]=None, STANDARD_D8D_V5: Optional[str]=None, STANDARD_D16D_V5: Optional[str]=None, STANDARD_D32D_V5: Optional[str]=None, STANDARD_D48D_V5: Optional[str]=None, STANDARD_D64D_V5: Optional[str]=None, STANDARD_D96D_V5: Optional[str]=None, STANDARD_D2DS_V5: Optional[str]=None, STANDARD_D4DS_V5: Optional[str]=None, STANDARD_D8DS_V5: Optional[str]=None, STANDARD_D16DS_V5: Optional[str]=None, STANDARD_D32DS_V5: Optional[str]=None, STANDARD_D48DS_V5: Optional[str]=None, STANDARD_D64DS_V5: Optional[str]=None, STANDARD_D96DS_V5: Optional[str]=None, STANDARD_E2_V5: Optional[str]=None, STANDARD_E4_V5: Optional[str]=None, STANDARD_E8_V5: Optional[str]=None, STANDARD_E16_V5: Optional[str]=None, STANDARD_E20_V5: Optional[str]=None, STANDARD_E32_V5: Optional[str]=None, STANDARD_E48_V5: Optional[str]=None, STANDARD_E64_V5: Optional[str]=None, STANDARD_E96_V5: Optional[str]=None, STANDARD_E104_V5: Optional[str]=None, STANDARD_E2S_V5: Optional[str]=None, STANDARD_E4S_V5: Optional[str]=None, STANDARD_E8S_V5: Optional[str]=None, STANDARD_E16S_V5: Optional[str]=None, STANDARD_E20S_V5: Optional[str]=None, STANDARD_E32S_V5: Optional[str]=None, STANDARD_E48S_V5: Optional[str]=None, STANDARD_E64S_V5: Optional[str]=None, STANDARD_E96S_V5: Optional[str]=None, STANDARD_E104S_V5: Optional[str]=None, STANDARD_E2D_V5: Optional[str]=None, STANDARD_E4D_V5: Optional[str]=None, STANDARD_E8D_V5: Optional[str]=None, STANDARD_E16D_V5: Optional[str]=None, STANDARD_E20D_V5: Optional[str]=None, STANDARD_E32D_V5: Optional[str]=None, STANDARD_E48D_V5: Optional[str]=None, STANDARD_E64D_V5: Optional[str]=None, STANDARD_E96D_V5: Optional[str]=None, STANDARD_E104D_V5: Optional[str]=None, STANDARD_E2DS_V5: Optional[str]=None, STANDARD_E4DS_V5: Optional[str]=None, STANDARD_E8DS_V5: Optional[str]=None, STANDARD_E16DS_V5: Optional[str]=None, STANDARD_E20DS_V5: Optional[str]=None, STANDARD_E32DS_V5: Optional[str]=None, STANDARD_E48DS_V5: Optional[str]=None, STANDARD_E64DS_V5: Optional[str]=None, STANDARD_E96DS_V5: Optional[str]=None, STANDARD_E104DS_V5: Optional[str]=None) -> None: ...

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

