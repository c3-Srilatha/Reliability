// TypeScript definitions for the C3 type AuthenticationKind

/**
 * Type to represent the authentication mechanism.
 *
 * @remarks this represents a value passed to a method that expects an instance of AuthenticationKind
 */
declare interface IAuthenticationKind {

  /**
   * Basic authentication with user name and password.
   */
  readonly BASIC: 'Basic';

  /**
   * Authentication with Test Identity Provider
   */
  readonly TEST: 'TEST';

  /**
   * Authentication for registration with C3
   */
  readonly C3_REGISTRATION: 'C3_REGISTRATION';

  /**
   * Authentication using SAML
   */
  readonly SAML: 'SAML';

  /**
   * Authentication using Oidc
   */
  readonly OIDC: 'OIDC';

  /**
   * Authentication using Oidc Direct Login
   */
  readonly OIDC_DIRECT_LOGIN: 'OIDC_DIRECT_LOGIN';

  /**
   * Authentication using Ldap
   */
  readonly LDAP: 'LDAP';

  /**
   * Authentication using session token
   */
  readonly SESSION: 'SESSION';

  /**
   * Authentication using app token
   */
  readonly APP: 'c3app';

  /**
   * Undefined Authorization Header
   */
  readonly UNDEFINED: 'undefined';

  /**
   * Authentication with c3auth set in cookie.
   */
  readonly C3: 'c3auth';

  /**
   * With Public private key pair authentication.
   */
  readonly KEY: 'c3key';

  /**
   * OAuth authentication.
   */
  readonly BEARER: 'Bearer';

  /**
   * Action authentication for call back from external process.
   */
  readonly ACTION: 'C3-Action-Auth-';

  /**
   * With cluster's public key and private key pair authentication.
   */
  readonly CLUSTER: 'c3cluster';

  /**
   * Signature based authentication. Used for inter cluster authentication.
   * Currently only supported for the ClusterDispatcher.
   */
  readonly SIGNATURE: 'Signature';

  /**
   * C3 Api authentication
   */
  readonly C3BEARER: 'C3Bearer';

  /**
   * C3 OAuth Authorization Code
   */
  readonly OAUTH_CODE: 'c3oauthcode';

  /**
   * C3 OAuth Refresh Token
   */
  readonly OAUTH_REFRESH: 'c3oauthrefresh';

  /**
   * C3 OAuth Authentication with Client Credentials
   */
  readonly OAUTH_CLIENT_CREDENTIAL: 'c3oauthcc';

  /**
   * K8s Token
   */
  readonly K8S: 'k8sauth';
}

/**
 * Type to represent the authentication mechanism.
 *
 * @remarks this represents a made instance of AuthenticationKind
 */
declare class AuthenticationKind {

  /**
   * Basic authentication with user name and password.
   */
  static readonly BASIC: 'Basic';

  /**
   * Authentication with Test Identity Provider
   */
  static readonly TEST: 'TEST';

  /**
   * Authentication for registration with C3
   */
  static readonly C3_REGISTRATION: 'C3_REGISTRATION';

  /**
   * Authentication using SAML
   */
  static readonly SAML: 'SAML';

  /**
   * Authentication using Oidc
   */
  static readonly OIDC: 'OIDC';

  /**
   * Authentication using Oidc Direct Login
   */
  static readonly OIDC_DIRECT_LOGIN: 'OIDC_DIRECT_LOGIN';

  /**
   * Authentication using Ldap
   */
  static readonly LDAP: 'LDAP';

  /**
   * Authentication using session token
   */
  static readonly SESSION: 'SESSION';

  /**
   * Authentication using app token
   */
  static readonly APP: 'c3app';

  /**
   * Undefined Authorization Header
   */
  static readonly UNDEFINED: 'undefined';

  /**
   * Authentication with c3auth set in cookie.
   */
  static readonly C3: 'c3auth';

  /**
   * With Public private key pair authentication.
   */
  static readonly KEY: 'c3key';

  /**
   * OAuth authentication.
   */
  static readonly BEARER: 'Bearer';

  /**
   * Action authentication for call back from external process.
   */
  static readonly ACTION: 'C3-Action-Auth-';

  /**
   * With cluster's public key and private key pair authentication.
   */
  static readonly CLUSTER: 'c3cluster';

  /**
   * Signature based authentication. Used for inter cluster authentication.
   * Currently only supported for the ClusterDispatcher.
   */
  static readonly SIGNATURE: 'Signature';

  /**
   * C3 Api authentication
   */
  static readonly C3BEARER: 'C3Bearer';

  /**
   * C3 OAuth Authorization Code
   */
  static readonly OAUTH_CODE: 'c3oauthcode';

  /**
   * C3 OAuth Refresh Token
   */
  static readonly OAUTH_REFRESH: 'c3oauthrefresh';

  /**
   * C3 OAuth Authentication with Client Credentials
   */
  static readonly OAUTH_CLIENT_CREDENTIAL: 'c3oauthcc';

  /**
   * K8s Token
   */
  static readonly K8S: 'k8sauth';

  /**
   * Translate the enum label (field name) to the value.
   * For simple enums (that don't define explicit values), the value is a string
   * that matches the label.
   * @param label the enum label
   * @return the associated value
   */
  static toValue(label: string | null, failIfInvalid?: boolean): string | null;

  /**
   * Translate the enum value to the label (field name).
   * @param value the enum value
   * @return the enum label
   */
  static toLabel(value: string | null, failIfInvalid?: boolean): string | null;

  /**
   * Get the index of the label in the enum.
   * @param label the enum label (field name)
   * @return index or -1 if not found
   */
  static labelIndex(label: string | null, failIfInvalid?: boolean): number;

  /**
   * Get the index of the value in the enum.
   * @param value the enum value
   * @return index or -1 if not found
   */
  static valueIndex(value: string | null, failIfInvalid?: boolean): number;

  /**
   * @return value type of values in this enum
   */
  static valueType(): ValueType;

  /**
   * Return an array of all enumeration values. If there is no explicit value for an enum field, the value will be
   * the field name (same as the labels).
   */
  static values(): C3.Array<string | null>;

  /**
   * Return an array of all enumeration labels. These are the same as the field names of the enum type.
   */
  static labels(): C3.Array<string | null>;

  /**
   * Return a map of all enumeration values to their labels.
   */
  static valueToLabels(): C3.Map<string | null, string | null>;

  /**
   * Return a map of all enumeration labels to their values.
   */
  static labelToValues(): C3.Map<string | null, string | null>;

  /**
   * Is value a valid value for this enum type?
   * @param value the enum value
   */
  static containsValue(value: string): boolean;

  /**
   * Calls provided action for each enum label.
   */
  static eachLabel(action?: λConsumer<string> | null): void;

  /**
   * Calls provided action for each enum value.
   */
  static eachValue(action?: λConsumer<string> | null): void;
}


interface λConsumer<T> {
  (t: T): void
}
