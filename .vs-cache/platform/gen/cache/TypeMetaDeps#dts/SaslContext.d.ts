// TypeScript definitions for the C3 type SaslContext

/**
 * SaslContext implementation.
 *
 * @remarks this represents a value passed to a method that expects an instance of SaslContext
 */
declare interface ISaslContext {
}

/**
 * SaslContext implementation.
 *
 * @remarks this represents a made instance of SaslContext
 */
declare class SaslContext {

  /**
   * Run a Java Supplier function under the security context generated from the KerberosSpec.
   *
   * @param kerberos
   *          KerberosSpec that contains user credentials
   * @param lambda
   *          Java Supplier function to run under the user
   */
  static doAs(kerberos?: KerberosSpec | null, lambda?: any): any;
}

