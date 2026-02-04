#!/usr/bin/env python3
from typing import Callable, Any, Literal, Union, Generic, TypeVar, Optional, overload
from datetime import datetime
from c3.platform.Content import Content
from c3.platform.CryptoPublicKey import CryptoPublicKey
from c3.platform.CryptoKeyPair import CryptoKeyPair

# Python definitions for the C3 type Pgp


class Pgp(Value):
    """
    PGP stands for Pretty Good Privacy, which is an encryption program that provides cryptographic privacy and authentication
    for data communication. PGP encryption uses a serial combination of hashing, data compression, symmetric-key cryptography,
    and finally public-key cryptography; each step uses one of several supported algorithms. (Ex: for public-key cryptography,
    the applied {@link CryptoKeyPair cryptoKeyPair} can be RSA algorithm or DSA algorithm.
    
    @remarks this represents a made instance of Pgp
    """
    def __init__(self) -> None: ...

    @classmethod
    def pgpPublicKey(cls, publicKey: CryptoPublicKey) -> Union[Any]:
    """
    Loads PGP public key from the {@link CryptoKeyPair cryptoKeyPair}.
    
    @param keyPair
            the {@link CryptoPublicKey cryptoPublicKey} used to load PGPPublicKey java instance.
    
    @return PGPPublic key java instance loaded from the given {@link CryptoPublicKey publicKey}.
    """
        ...
    @classmethod
    def pgpSecretKey(cls, keyPair: CryptoKeyPair) -> Union[Any]:
    """
    Loads PGP secret key from the {@link CryptoKeyPair cryptoKeyPair}.
    
    @param keyPair
            the {@link CryptoKeyPair cryptoKeyPair} used to load PGPSecretKey java instance.
    
    @return PGPSecret key java instance loaded from the given {@link CryptoKeyPair cryptoKeyPair}.
    """
        ...
    @classmethod
    def pgpPrivateKey(cls, keyPair: CryptoKeyPair) -> Union[Any]:
    """
    Loads PGP private key from the {@link CryptoKeyPair cryptoKeyPair}.
    
    @param keyPai
             the {@link CryptoKeyPair cryptoKeyPair} used to load PGPPrivate Key java instance.
    
    @return PGPPrivate key java instance loaded from the given {@link CryptoKeyPair cryptoKeyPair}.
    """
        ...
    @classmethod
    def encrypt(cls, content: Content, publicKey: CryptoPublicKey, algorithm: str='TRIPLE_DES') -> Content:
    """
    Encrypts the given content with the public key using one of the listed symmetric key {@link PgpAlgorithmType pgpAlgorithm}.
    
    @param content
                The content to be encrypted.
    
    @param publicKey
                {@link CryptoPublicKey cryptoPublicKey} used to encrypt the content.
    
    @param algorithm
                The algorithm used to encrypt the PGP cipher, optional, default to PgpAlgorithmType.TRIPLE_DES
                {@link PgpAlgorithmType}.
    @return the encrypted content
    """
        ...
    @classmethod
    def decrypt(cls, content: Content, keyPair: CryptoKeyPair) -> Content:
    """
    decrypts the encrypted content using private key and passphrase (optional, depends on whether the private key is
    protected by a passphrase in the given {@link CryptoKeyPair cryptoKeyPair}).
    
    @param content
                The content to be decrypted.
    
    @param keyPair
                {@link CryptoKeyPair cryptoKeyPair}) used to decrypt the content, private key needs to exist and passphrase is optional.
    
    @return the decrypted content.
    """
        ...

