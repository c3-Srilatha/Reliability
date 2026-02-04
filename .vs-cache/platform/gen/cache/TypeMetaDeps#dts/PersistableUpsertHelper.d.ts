// TypeScript definitions for the C3 type PersistableUpsertHelper

/**
 * Helper functions for persistable types that override upsert behavior.
 *
 * @remarks this represents a value passed to a method that expects an instance of PersistableUpsertHelper
 */
declare interface IPersistableUpsertHelper {
}

/**
 * Helper functions for persistable types that override upsert behavior.
 *
 * @remarks this represents a made instance of PersistableUpsertHelper
 */
declare class PersistableUpsertHelper {

  /**
   * Override to perform customized upsert logic.
   *
   * @param state
   *        Current upsert state.
   *
   * @return The appropriate result (e.g. ObjList, Persistable<?>, etc) depending on the upsert operation.
   */
  static doUpsert(state: any): any;

  /**
   * Override to perfrom the 'unremove' operation.
   *
   * @param obj
   *        Obj to unremove.
   *
   * @return The unremoved Obj, if any and null otherwise.
   */
  static doUnremove(obj: PersistableWritable): PersistableWritable | null;
}

