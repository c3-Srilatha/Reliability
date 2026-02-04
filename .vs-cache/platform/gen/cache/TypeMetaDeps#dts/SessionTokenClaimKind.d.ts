// TypeScript definitions for the C3 type SessionTokenClaimKind

/**
 * C3 Session Token payload claims
 *
 * @remarks this represents a value passed to a method that expects an instance of SessionTokenClaimKind
 */
declare interface ISessionTokenClaimKind {

  readonly Issuer: "iss";

  readonly IdentityProvider: "idp";

  readonly ExpirationTime: "exp";

  readonly UserId: "id";

  readonly Email: "email";

  readonly Name: "name";

  readonly SessionSequence: "sseq";

  readonly SessionId: "sid";

  readonly ObjectId: "oid";

  readonly Roles: "roles";

  readonly Application: "app";

  readonly ActionId: "actionid";

  readonly TokenKind: "kind";

  readonly OAuthAppId: "oauthappid";

  readonly IdpUserId: "idpuserid";

  readonly LastName: "lastname";

  readonly FirstName: "firstname";

  /**
   * Session Index for SAML authentication
   */
  readonly SamlSessionIndex: "ssidx";

  /**
   * groups claim present in the session token {@link SessionToken} represents the groups that the user is assigned
   */
  readonly Groups: "groups";

  /**
   * groups claim present in the session token {@link SessionToken} represents the c3groups that the user is assigned
   */
  readonly C3Groups: "c3groups";

  /**
   * groups claim present in the session token {@link SessionToken} represents the idpgroups that the user is assigned
   */
  readonly IdpGroups: "idpgroups";

  /**
   * session sequence verification claim, if set to true, c3Server validates the session sequence present in the session token.
   * {@link SessionToken}. Ignores otherwise.
   */
  readonly SessionSeqVerify: "s_v";
}

/**
 * C3 Session Token payload claims
 *
 * @remarks this represents a made instance of SessionTokenClaimKind
 */
declare class SessionTokenClaimKind {

  static readonly Issuer: "iss";

  static readonly IdentityProvider: "idp";

  static readonly ExpirationTime: "exp";

  static readonly UserId: "id";

  static readonly Email: "email";

  static readonly Name: "name";

  static readonly SessionSequence: "sseq";

  static readonly SessionId: "sid";

  static readonly ObjectId: "oid";

  static readonly Roles: "roles";

  static readonly Application: "app";

  static readonly ActionId: "actionid";

  static readonly TokenKind: "kind";

  static readonly OAuthAppId: "oauthappid";

  static readonly IdpUserId: "idpuserid";

  static readonly LastName: "lastname";

  static readonly FirstName: "firstname";

  /**
   * Session Index for SAML authentication
   */
  static readonly SamlSessionIndex: "ssidx";

  /**
   * groups claim present in the session token {@link SessionToken} represents the groups that the user is assigned
   */
  static readonly Groups: "groups";

  /**
   * groups claim present in the session token {@link SessionToken} represents the c3groups that the user is assigned
   */
  static readonly C3Groups: "c3groups";

  /**
   * groups claim present in the session token {@link SessionToken} represents the idpgroups that the user is assigned
   */
  static readonly IdpGroups: "idpgroups";

  /**
   * session sequence verification claim, if set to true, c3Server validates the session sequence present in the session token.
   * {@link SessionToken}. Ignores otherwise.
   */
  static readonly SessionSeqVerify: "s_v";

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
