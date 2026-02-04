#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.CryptoKey import CryptoKey

# Python definitions for the C3 type CryptoCipher


class CryptoCipher(Value):
    """
    Cryptographic cipher provides functionality for encryption and decryption in Public-key cryptography.
    
    @remarks this represents a made instance of CryptoCipher
    """
    def __init__(self) -> None: ...

    @classmethod
    def encrypt(cls, cryptoKey: CryptoKey, plainInput: any, transform: str) -> any:
    """
    To encrypt a plain input with a public Key.
    
    @param cryptoKey
              The {@link CryptoKey cryptoKey} that transform plain text into cipher text or vice versa.
    
    @param plainInput
              The plain input to be transformed/encrypted into cipher.
    
    @param transform
              A {@link CipherTransformation transformation} is a string that describes the operation to be performed
              on the given input to produce some output. A transformation always includes the name of a cryptographic
              algorithm (e.g., AES), and may be followed by a mode (Operation of repeatedly apply a cipher's
              single-block operation to securely transform amounts of data larger than a block.) and padding scheme.
    
    @return the encrypted data.
    """
        ...
    @classmethod
    def decrypt(cls, cryptoKey: CryptoKey, encryptedInput: any, transform: str) -> any:
    """
    To decrypt an encrypted input with a private Key.
    
    @param cryptoKey
              The {@link CryptoKey cryptoKey} that transform plain text into cipher text or vice versa.
    
    @param encryptedInput
               The transformed/encrypted input to be decrypted.
    
    @param transform
               The applied {@link CipherTransformation transformation} when decrypting.
    
    @return the decrypted data.
    """
        ...

