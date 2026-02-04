#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime

# Python definitions for the C3 type ExMachinaLegalAgreementUi


class ExMachinaLegalAgreementUi(Value):
    """
    Type for rendering the content of the Legal Agreement.
    Used in VAD on About page
    
    @remarks this represents a made instance of ExMachinaLegalAgreementUi
    """
    def __init__(self) -> None: ...

    @classmethod
    def get(cls) -> Union[str]:
    """
    Get the legal agreement content from the file located at the {@link ExMachinaApplicationConfig#legalAgreementFilePath}
    """
        ...
    @classmethod
    def getAcknowledgements(cls) -> Union[str]:
    """
    Returns the path where the acknowledgements file can be downloaded.
    """
        ...

