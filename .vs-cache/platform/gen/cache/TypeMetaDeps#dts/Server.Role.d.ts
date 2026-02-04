// TypeScript definitions for the C3 type Server.Role

/**
 * @remarks this represents a value passed to a method that expects an instance of Server.Role
 */
declare namespace Server {
  export interface IRole {

    /**
     * Node accepting API requests and managing workers and other nodes
     */
    readonly LEADER: 'leader';

    /**
     * Node managing the single compute instance of the cluster running task, data or db nodes
     */
    readonly WORKER: 'worker';

    /**
     * Node managing the single compute instance of the cluster running 3rd party software like Cassandra or PG
     */
    readonly AGENT: 'agent';

    /**
     * Node running on a worker compute instance executing tasks
     */
    readonly TASK: 'task';

    /**
     * Node running on a worker compute instance holding data
     */
    readonly DATA: 'data';

    /**
     * Node running on a worker compute instance performing database connection pooling
     */
    readonly PROXY: 'proxy';

    /**
     * Node that usually used for running {@link Engine engines}
     */
    readonly SERVICE: 'service';

    /**
     * Node that performs the operation of all server roles
     */
    readonly ALL: '*';
  }
}

/**
 * @remarks this represents a made instance of Server.Role
 */
declare namespace Server {
  export class Role {

    /**
     * Node accepting API requests and managing workers and other nodes
     */
    static readonly LEADER: 'leader';

    /**
     * Node managing the single compute instance of the cluster running task, data or db nodes
     */
    static readonly WORKER: 'worker';

    /**
     * Node managing the single compute instance of the cluster running 3rd party software like Cassandra or PG
     */
    static readonly AGENT: 'agent';

    /**
     * Node running on a worker compute instance executing tasks
     */
    static readonly TASK: 'task';

    /**
     * Node running on a worker compute instance holding data
     */
    static readonly DATA: 'data';

    /**
     * Node running on a worker compute instance performing database connection pooling
     */
    static readonly PROXY: 'proxy';

    /**
     * Node that usually used for running {@link Engine engines}
     */
    static readonly SERVICE: 'service';

    /**
     * Node that performs the operation of all server roles
     */
    static readonly ALL: '*';

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

    /**
     * @return cloud role for the provided App.Node.Role
     */
    static cloudRole(role: string): string;

    /**
     * @return App.Node.Role for the provided cloud role
     */
    static forCloudRole(cloudRole: string): string;
  }
}


interface λConsumer<T> {
  (t: T): void
}
