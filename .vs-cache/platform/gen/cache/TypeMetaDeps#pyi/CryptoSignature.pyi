#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.CryptoPrivateKey import CryptoPrivateKey
from c3.platform.CryptoPublicKey import CryptoPublicKey

# Python definitions for the C3 type CryptoSignature


class CryptoSignature(Value):
    """
    Signature provides functionality of a digital signature algorithm for authentication and integrity assurance of
    digital data.
    
    @remarks this represents a made instance of CryptoSignature
    """
    def __init__(self) -> None: ...

    @classmethod
    def sign(cls, privateKey: CryptoPrivateKey, data: any, algorithm: str) -> Union[any]:
    """
    Signed the data with a {@link PrivateKey PrivateKey}.
    
    @param privateKey
              The privateKey used to sign the data.
    @param data
              The well known data to be signed with the privateKey.
    @param algorithm
              The applied {@link SignatureAlgorithm algorithm} when signing.
    
    @return The signature bytes of all the data updated.
    """
        ...
    @classmethod
    def verify(cls, publicKey: CryptoPublicKey, data: any, signature: any, algorithm: str) -> bool:
    """
    Verify the signature with the specified data.
    
    @param publicKey
              The publicKey used to verify the signature.
    @param data
              The well know data.
    @param signature
              The content that signed by the authentic entity with the private key.
    @param algorithm
              The applied {@link SignatureAlgorithm algorithm} when signing.
    
    @return result of verifying the signature with the well know data.
    """
        ...

