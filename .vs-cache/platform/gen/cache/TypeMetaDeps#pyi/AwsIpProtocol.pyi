#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.ValueType import ValueType

# Python definitions for the C3 type AwsIpProtocol


class AwsIpProtocol():
    """
    Enum for all possible aws ip protocol type
    
    @remarks this represents a made instance of AwsIpProtocol
    """
    
    ALL: Optional[str]=None

    HOPOPT: Optional[str]=None

    ICMP: Optional[str]=None

    IGMP: Optional[str]=None

    GGP: Optional[str]=None

    IPV4: Optional[str]=None

    ST: Optional[str]=None

    TCP: Optional[str]=None

    CBT: Optional[str]=None

    EGP: Optional[str]=None

    IGP: Optional[str]=None

    BBN_RCC_MON: Optional[str]=None

    NVP_II: Optional[str]=None

    PUP: Optional[str]=None

    ARGUS: Optional[str]=None

    EMCON: Optional[str]=None

    XNET: Optional[str]=None

    CHAOS: Optional[str]=None

    UDP: Optional[str]=None

    MUX: Optional[str]=None

    DCN_MEAS: Optional[str]=None

    HMP: Optional[str]=None

    PRM: Optional[str]=None

    XNS_IDP: Optional[str]=None

    TRUNK_1: Optional[str]=None

    TRUNK_2: Optional[str]=None

    LEAF_1: Optional[str]=None

    LEAF_2: Optional[str]=None

    RDP: Optional[str]=None

    IRTP: Optional[str]=None

    ISO_TP4: Optional[str]=None

    NETBLT: Optional[str]=None

    MFE_NSP: Optional[str]=None

    MERIT_INP: Optional[str]=None

    DCCP: Optional[str]=None

    THREE_PC: Optional[str]=None

    IDPR: Optional[str]=None

    XTP: Optional[str]=None

    DDP: Optional[str]=None

    IDPR_CMTP: Optional[str]=None

    TP_PLUSPLUS: Optional[str]=None

    IL: Optional[str]=None

    IPV6: Optional[str]=None

    SDRP: Optional[str]=None

    IPV6_ROUTE: Optional[str]=None

    IPV6_FRAG: Optional[str]=None

    IDRP: Optional[str]=None

    RSVP: Optional[str]=None

    GRE: Optional[str]=None

    DSR: Optional[str]=None

    BNA: Optional[str]=None

    ESP: Optional[str]=None

    AH: Optional[str]=None

    I_NLSP: Optional[str]=None

    SWIPE: Optional[str]=None

    NARP: Optional[str]=None

    MOBILE: Optional[str]=None

    TLSP: Optional[str]=None

    SKIP: Optional[str]=None

    IPV6_ICMP: Optional[str]=None

    IPV6_NONXT: Optional[str]=None

    IPV6_OPTS: Optional[str]=None

    CFTP: Optional[str]=None

    SAT_EXPAK: Optional[str]=None

    KRYPTOLAN: Optional[str]=None

    RVD: Optional[str]=None

    IPPC: Optional[str]=None

    SAT_MON: Optional[str]=None

    VISA: Optional[str]=None

    IPCV: Optional[str]=None

    CPNX: Optional[str]=None

    CPHB: Optional[str]=None

    WSN: Optional[str]=None

    PVP: Optional[str]=None

    BR_SAT_MON: Optional[str]=None

    SUN_ND: Optional[str]=None

    WB_MON: Optional[str]=None

    WB_EXPAK: Optional[str]=None

    ISO_IP: Optional[str]=None

    VMTP: Optional[str]=None

    SECURE_VMTP: Optional[str]=None

    VINES: Optional[str]=None

    TTP: Optional[str]=None

    IPTM: Optional[str]=None

    NSFNET_IGP: Optional[str]=None

    DGP: Optional[str]=None

    TCF: Optional[str]=None

    EIGRP: Optional[str]=None

    OSPFIGP: Optional[str]=None

    SPRITE_RPC: Optional[str]=None

    LARP: Optional[str]=None

    MTP: Optional[str]=None

    AX_25: Optional[str]=None

    IPIP: Optional[str]=None

    MICP: Optional[str]=None

    SCC_SP: Optional[str]=None

    ETHERIP: Optional[str]=None

    ENCAP: Optional[str]=None

    GMTP: Optional[str]=None

    IFMP: Optional[str]=None

    PNNI: Optional[str]=None

    PIM: Optional[str]=None

    ARIS: Optional[str]=None

    SCPS: Optional[str]=None

    QNX: Optional[str]=None

    A_N: Optional[str]=None

    IPCOMP: Optional[str]=None

    SNP: Optional[str]=None

    COMPAQ_PEER: Optional[str]=None

    IPX_IN_IP: Optional[str]=None

    VRRP: Optional[str]=None

    PGM: Optional[str]=None

    L2TP: Optional[str]=None

    DDX: Optional[str]=None

    IATP: Optional[str]=None

    STP: Optional[str]=None

    SRP: Optional[str]=None

    UTI: Optional[str]=None

    SMP: Optional[str]=None

    SM: Optional[str]=None

    PTP: Optional[str]=None

    ISIS: Optional[str]=None

    FIRE: Optional[str]=None

    CRTP: Optional[str]=None

    CRUDP: Optional[str]=None

    SSCOPMCE: Optional[str]=None

    IPLT: Optional[str]=None

    SPS: Optional[str]=None

    PIPE: Optional[str]=None

    SCTP: Optional[str]=None

    FC: Optional[str]=None

    RSVP_E2E_IGNORE: Optional[str]=None

    MOBILITY: Optional[str]=None

    UDP_LITE: Optional[str]=None

    MPLS_IN_IP: Optional[str]=None

    MANET: Optional[str]=None

    HIP: Optional[str]=None

    SHIM6: Optional[str]=None

    WESP: Optional[str]=None

    ROHC: Optional[str]=None
    def __init__(self, ALL: Optional[str]=None, HOPOPT: Optional[str]=None, ICMP: Optional[str]=None, IGMP: Optional[str]=None, GGP: Optional[str]=None, IPV4: Optional[str]=None, ST: Optional[str]=None, TCP: Optional[str]=None, CBT: Optional[str]=None, EGP: Optional[str]=None, IGP: Optional[str]=None, BBN_RCC_MON: Optional[str]=None, NVP_II: Optional[str]=None, PUP: Optional[str]=None, ARGUS: Optional[str]=None, EMCON: Optional[str]=None, XNET: Optional[str]=None, CHAOS: Optional[str]=None, UDP: Optional[str]=None, MUX: Optional[str]=None, DCN_MEAS: Optional[str]=None, HMP: Optional[str]=None, PRM: Optional[str]=None, XNS_IDP: Optional[str]=None, TRUNK_1: Optional[str]=None, TRUNK_2: Optional[str]=None, LEAF_1: Optional[str]=None, LEAF_2: Optional[str]=None, RDP: Optional[str]=None, IRTP: Optional[str]=None, ISO_TP4: Optional[str]=None, NETBLT: Optional[str]=None, MFE_NSP: Optional[str]=None, MERIT_INP: Optional[str]=None, DCCP: Optional[str]=None, THREE_PC: Optional[str]=None, IDPR: Optional[str]=None, XTP: Optional[str]=None, DDP: Optional[str]=None, IDPR_CMTP: Optional[str]=None, TP_PLUSPLUS: Optional[str]=None, IL: Optional[str]=None, IPV6: Optional[str]=None, SDRP: Optional[str]=None, IPV6_ROUTE: Optional[str]=None, IPV6_FRAG: Optional[str]=None, IDRP: Optional[str]=None, RSVP: Optional[str]=None, GRE: Optional[str]=None, DSR: Optional[str]=None, BNA: Optional[str]=None, ESP: Optional[str]=None, AH: Optional[str]=None, I_NLSP: Optional[str]=None, SWIPE: Optional[str]=None, NARP: Optional[str]=None, MOBILE: Optional[str]=None, TLSP: Optional[str]=None, SKIP: Optional[str]=None, IPV6_ICMP: Optional[str]=None, IPV6_NONXT: Optional[str]=None, IPV6_OPTS: Optional[str]=None, CFTP: Optional[str]=None, SAT_EXPAK: Optional[str]=None, KRYPTOLAN: Optional[str]=None, RVD: Optional[str]=None, IPPC: Optional[str]=None, SAT_MON: Optional[str]=None, VISA: Optional[str]=None, IPCV: Optional[str]=None, CPNX: Optional[str]=None, CPHB: Optional[str]=None, WSN: Optional[str]=None, PVP: Optional[str]=None, BR_SAT_MON: Optional[str]=None, SUN_ND: Optional[str]=None, WB_MON: Optional[str]=None, WB_EXPAK: Optional[str]=None, ISO_IP: Optional[str]=None, VMTP: Optional[str]=None, SECURE_VMTP: Optional[str]=None, VINES: Optional[str]=None, TTP: Optional[str]=None, IPTM: Optional[str]=None, NSFNET_IGP: Optional[str]=None, DGP: Optional[str]=None, TCF: Optional[str]=None, EIGRP: Optional[str]=None, OSPFIGP: Optional[str]=None, SPRITE_RPC: Optional[str]=None, LARP: Optional[str]=None, MTP: Optional[str]=None, AX_25: Optional[str]=None, IPIP: Optional[str]=None, MICP: Optional[str]=None, SCC_SP: Optional[str]=None, ETHERIP: Optional[str]=None, ENCAP: Optional[str]=None, GMTP: Optional[str]=None, IFMP: Optional[str]=None, PNNI: Optional[str]=None, PIM: Optional[str]=None, ARIS: Optional[str]=None, SCPS: Optional[str]=None, QNX: Optional[str]=None, A_N: Optional[str]=None, IPCOMP: Optional[str]=None, SNP: Optional[str]=None, COMPAQ_PEER: Optional[str]=None, IPX_IN_IP: Optional[str]=None, VRRP: Optional[str]=None, PGM: Optional[str]=None, L2TP: Optional[str]=None, DDX: Optional[str]=None, IATP: Optional[str]=None, STP: Optional[str]=None, SRP: Optional[str]=None, UTI: Optional[str]=None, SMP: Optional[str]=None, SM: Optional[str]=None, PTP: Optional[str]=None, ISIS: Optional[str]=None, FIRE: Optional[str]=None, CRTP: Optional[str]=None, CRUDP: Optional[str]=None, SSCOPMCE: Optional[str]=None, IPLT: Optional[str]=None, SPS: Optional[str]=None, PIPE: Optional[str]=None, SCTP: Optional[str]=None, FC: Optional[str]=None, RSVP_E2E_IGNORE: Optional[str]=None, MOBILITY: Optional[str]=None, UDP_LITE: Optional[str]=None, MPLS_IN_IP: Optional[str]=None, MANET: Optional[str]=None, HIP: Optional[str]=None, SHIM6: Optional[str]=None, WESP: Optional[str]=None, ROHC: Optional[str]=None) -> None: ...

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

