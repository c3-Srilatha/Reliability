// TypeScript definitions for the C3 type LdapIdp.QueryKind

/**
 * Enum type that indicates the type for a specific LdapQuery.
 *
 * @remarks this represents a value passed to a method that expects an instance of LdapIdp.QueryKind
 */
declare namespace LdapIdp {
  export interface IQueryKind {

    /**
     * The 'uid' ('userid') is the system login name associated with the object
     */
    readonly UID: 'uid';

    /**
     * The 'sn' ('surname') is the family names of a person.
     */
    readonly SN: 'sn';

    /**
     * The 'cn' ('commonName') is the name of an object. Ex: A person's full name
     */
    readonly CN: 'cn';

    /**
     * The 'distinguishedName'  is not used as the name of the object itself, but is a base type for inheritance
     */
    readonly DN: 'dn';

    /**
     * The 'email' of a user
     */
    readonly MAIL: 'mail';

    /**
     * An object class is "an identified family of objects that share certain characteristics"
     */
    readonly OBJECT_CLASS: 'objectClass';

    /**
     * The 'groupOfNames' object class is the basis of an entry that represents a set of named objects
     */
    readonly GROUP_NAMES: 'groupOfNames';

    /**
     * Similar to GROUP_NAMES, except that the object names are not repeated or reassigned within a set scope
     */
    readonly GROUP_U_NAMES: 'groupOfUniqueNames';

    /**
     * The 'uniqueMember' attribute type contains the distinguished names of an object that is on a list or in a group
     */
    readonly UNIQUE_MEMBER: 'uniqueMember';

    /**
     * The 'uniqueMember' attribute type contains the distinguished names of an object that is on a list or in a group
     */
    readonly MEMBER: 'member';

    /**
     * Possible uid for user prefix
     */
    readonly S_AMA_ACCOUNT_NAME: "sAMAccountName";

    /**
     * Possible uid for user prefix
     */
    readonly USER_PRINCIPAL_NAME: "userPrincipalName";

    /**
     * Possible group object class
     */
    readonly GROUP: "group";

    /**
     * Possible user object class
     */
    readonly USER: "user";

    /**
     * Possible user object class
     */
    readonly PERSON: "person";

    readonly AND: '&';

    readonly OR: '|';
  }
}

/**
 * Enum type that indicates the type for a specific LdapQuery.
 *
 * @remarks this represents a made instance of LdapIdp.QueryKind
 */
declare namespace LdapIdp {
  export class QueryKind {

    /**
     * The 'uid' ('userid') is the system login name associated with the object
     */
    static readonly UID: 'uid';

    /**
     * The 'sn' ('surname') is the family names of a person.
     */
    static readonly SN: 'sn';

    /**
     * The 'cn' ('commonName') is the name of an object. Ex: A person's full name
     */
    static readonly CN: 'cn';

    /**
     * The 'distinguishedName'  is not used as the name of the object itself, but is a base type for inheritance
     */
    static readonly DN: 'dn';

    /**
     * The 'email' of a user
     */
    static readonly MAIL: 'mail';

    /**
     * An object class is "an identified family of objects that share certain characteristics"
     */
    static readonly OBJECT_CLASS: 'objectClass';

    /**
     * The 'groupOfNames' object class is the basis of an entry that represents a set of named objects
     */
    static readonly GROUP_NAMES: 'groupOfNames';

    /**
     * Similar to GROUP_NAMES, except that the object names are not repeated or reassigned within a set scope
     */
    static readonly GROUP_U_NAMES: 'groupOfUniqueNames';

    /**
     * The 'uniqueMember' attribute type contains the distinguished names of an object that is on a list or in a group
     */
    static readonly UNIQUE_MEMBER: 'uniqueMember';

    /**
     * The 'uniqueMember' attribute type contains the distinguished names of an object that is on a list or in a group
     */
    static readonly MEMBER: 'member';

    /**
     * Possible uid for user prefix
     */
    static readonly S_AMA_ACCOUNT_NAME: "sAMAccountName";

    /**
     * Possible uid for user prefix
     */
    static readonly USER_PRINCIPAL_NAME: "userPrincipalName";

    /**
     * Possible group object class
     */
    static readonly GROUP: "group";

    /**
     * Possible user object class
     */
    static readonly USER: "user";

    /**
     * Possible user object class
     */
    static readonly PERSON: "person";

    static readonly AND: '&';

    static readonly OR: '|';

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
}


interface λConsumer<T> {
  (t: T): void
}
