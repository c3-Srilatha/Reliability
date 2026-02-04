// TypeScript definitions for the C3 type JwtPayloadClaimKind

/**
 * JWT payload claims
 *
 * @remarks this represents a value passed to a method that expects an instance of JwtPayloadClaimKind
 */
declare interface IJwtPayloadClaimKind {

  readonly Audience: "aud";

  readonly AuthorizedParty: "azp";

  readonly Issuer: "iss";

  readonly IssuedAt: "iat";

  readonly IdentityProvider: "idp";

  readonly NotBefore: "nbf";

  readonly ExpirationTime: "exp";

  readonly CodeHash: "c_hash";

  readonly AccessTokenHash: "at_hash";

  readonly PreferredUserName: "preferred_username";

  readonly Email: "email";

  readonly Name: "name";

  readonly FirstName: "given_name";

  readonly LastName: "family_name";

  readonly Nonce: "nonce";

  readonly ObjectId: "oid";

  readonly Roles: "roles";

  readonly Groups: "groups";

  readonly Principal: "sub";

  readonly TenantId: "tid";

  readonly UniqueName: "unique_name";

  readonly Version: "ver";

  readonly HasGroups: "hasGroups";

  readonly RelyingPartyState: "state";

  readonly EncryptedCodeVerifier: "enc_code_verifier";
}

/**
 * JWT payload claims
 *
 * @remarks this represents a made instance of JwtPayloadClaimKind
 */
declare class JwtPayloadClaimKind {

  static readonly Audience: "aud";

  static readonly AuthorizedParty: "azp";

  static readonly Issuer: "iss";

  static readonly IssuedAt: "iat";

  static readonly IdentityProvider: "idp";

  static readonly NotBefore: "nbf";

  static readonly ExpirationTime: "exp";

  static readonly CodeHash: "c_hash";

  static readonly AccessTokenHash: "at_hash";

  static readonly PreferredUserName: "preferred_username";

  static readonly Email: "email";

  static readonly Name: "name";

  static readonly FirstName: "given_name";

  static readonly LastName: "family_name";

  static readonly Nonce: "nonce";

  static readonly ObjectId: "oid";

  static readonly Roles: "roles";

  static readonly Groups: "groups";

  static readonly Principal: "sub";

  static readonly TenantId: "tid";

  static readonly UniqueName: "unique_name";

  static readonly Version: "ver";

  static readonly HasGroups: "hasGroups";

  static readonly RelyingPartyState: "state";

  static readonly EncryptedCodeVerifier: "enc_code_verifier";

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
