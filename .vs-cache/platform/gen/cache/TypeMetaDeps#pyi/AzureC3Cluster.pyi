#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.AzureDeploymentSpec import AzureDeploymentSpec
from c3.platform.AzureDeploymentResult import AzureDeploymentResult

# Python definitions for the C3 type AzureC3Cluster


class AzureC3Cluster(Value):
    """
    @remarks this represents a made instance of AzureC3Cluster
    """
    def __init__(self) -> None: ...

    @classmethod
    def start(cls, spec: AzureDeploymentSpec=None) -> AzureDeploymentResult:
    """
    Deploy all the deployment templates available on this type
    @returns public ip address of the cluster created
    """
        ...

