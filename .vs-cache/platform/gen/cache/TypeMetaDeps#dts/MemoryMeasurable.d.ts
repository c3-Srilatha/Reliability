// TypeScript definitions for the C3 type MemoryMeasurable

/**
 * Base type for values and instances that can measure their retained memory
 *
 * @remarks this represents a value passed to a method that expects an instance of MemoryMeasurable
 */
declare interface IMemoryMeasurable {
}

/**
 * Base type for values and instances that can measure their retained memory
 *
 * @remarks this represents a made instance of MemoryMeasurable
 */
declare class MemoryMeasurable {

  /**
   * Measures retained memory by this instance.
   *
   * @param deep
   *        if true and this instance contains references to other objects also measures memory retained by those
   * @param allMeasured
   *        if set then will skip instances that are in the set and will add instances that where measured by this call
   * @return retained memory in bytes for this instances
   */
  retainedMemory(deep?: boolean, allMeasured?: SetBuilder<any> | null): number;
}

