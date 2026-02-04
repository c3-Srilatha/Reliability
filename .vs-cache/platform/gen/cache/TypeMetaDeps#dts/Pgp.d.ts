// TypeScript definitions for the C3 type Pgp

/**
 * PGP stands for Pretty Good Privacy, which is an encryption program that provides cryptographic privacy and authentication
 * for data communication. PGP encryption uses a serial combination of hashing, data compression, symmetric-key cryptography,
 * and finally public-key cryptography; each step uses one of several supported algorithms. (Ex: for public-key cryptography,
 * the applied {@link CryptoKeyPair cryptoKeyPair} can be RSA algorithm or DSA algorithm.
 *
 * @remarks this represents a value passed to a method that expects an instance of Pgp
 */
declare interface IPgp {
}

/**
 * PGP stands for Pretty Good Privacy, which is an encryption program that provides cryptographic privacy and authentication
 * for data communication. PGP encryption uses a serial combination of hashing, data compression, symmetric-key cryptography,
 * and finally public-key cryptography; each step uses one of several supported algorithms. (Ex: for public-key cryptography,
 * the applied {@link CryptoKeyPair cryptoKeyPair} can be RSA algorithm or DSA algorithm.
 *
 * @remarks this represents a made instance of Pgp
 */
declare class Pgp {

  /**
   * Loads PGP public key from the {@link CryptoKeyPair cryptoKeyPair}.
   *
   * @param keyPair
   *         the {@link CryptoPublicKey cryptoPublicKey} used to load PGPPublicKey java instance.
   *
   * @return PGPPublic key java instance loaded from the given {@link CryptoPublicKey publicKey}.
   */
  static pgpPublicKey(publicKey: CryptoPublicKey): any;

  /**
   * Loads PGP secret key from the {@link CryptoKeyPair cryptoKeyPair}.
   *
   * @param keyPair
   *         the {@link CryptoKeyPair cryptoKeyPair} used to load PGPSecretKey java instance.
   *
   * @return PGPSecret key java instance loaded from the given {@link CryptoKeyPair cryptoKeyPair}.
   */
  static pgpSecretKey(keyPair: CryptoKeyPair): any;

  /**
   * Loads PGP private key from the {@link CryptoKeyPair cryptoKeyPair}.
   *
   * @param keyPai
   *          the {@link CryptoKeyPair cryptoKeyPair} used to load PGPPrivate Key java instance.
   *
   * @return PGPPrivate key java instance loaded from the given {@link CryptoKeyPair cryptoKeyPair}.
   */
  static pgpPrivateKey(keyPair: CryptoKeyPair): any;

  /**
   * Encrypts the given content with the public key using one of the listed symmetric key {@link PgpAlgorithmType pgpAlgorithm}.
   *
   * @param content
   *             The content to be encrypted.
   *
   * @param publicKey
   *             {@link CryptoPublicKey cryptoPublicKey} used to encrypt the content.
   *
   * @param algorithm
   *             The algorithm used to encrypt the PGP cipher, optional, default to PgpAlgorithmType.TRIPLE_DES
   *             {@link PgpAlgorithmType}.
   * @return the encrypted content
   */
  static encrypt(content: Content, publicKey: CryptoPublicKey, algorithm?: string | null): Content;

  /**
   * decrypts the encrypted content using private key and passphrase (optional, depends on whether the private key is
   * protected by a passphrase in the given {@link CryptoKeyPair cryptoKeyPair}).
   *
   * @param content
   *             The content to be decrypted.
   *
   * @param keyPair
   *             {@link CryptoKeyPair cryptoKeyPair}) used to decrypt the content, private key needs to exist and passphrase is optional.
   *
   * @return the decrypted content.
   */
  static decrypt(content: Content, keyPair: CryptoKeyPair): Content;
}

