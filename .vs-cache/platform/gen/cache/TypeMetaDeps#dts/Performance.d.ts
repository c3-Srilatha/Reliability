// TypeScript definitions for the C3 type Performance

/**
 * This type exposes endpoints for high-resolution timing and memory size measurement. These are implemented in each
 * language so are usable for performance analysis. In particular, they are used by {@link Microbench} to implement
 * KPI tests in all languages.
 *
 * @remarks this represents a value passed to a method that expects an instance of Performance
 */
declare interface IPerformance {
}

/**
 * This type exposes endpoints for high-resolution timing and memory size measurement. These are implemented in each
 * language so are usable for performance analysis. In particular, they are used by {@link Microbench} to implement
 * KPI tests in all languages.
 *
 * @remarks this represents a made instance of Performance
 */
declare class Performance {

  /**
   * Current high-resolution timestamp in seconds. This is not the current time, but only a relative value within
   * the current execution context that increases each time called. The difference between two calls to now will be the
   * elapsed time, but with a fraction for finer-grained testing.
   *
   * ```js
   * const t0 = Performance.now();
   * runSlowOperation();
   * const elapsed = Performance.now() - t0;
   * console.log(`slow operation took ${elapsed.toFixed(2)}s`);
   * ```
   *
   * These values cannot be used for any other purpose than timing since they don't represent any external state
   * (such as the clock).
   */
  static now(): number;

  /**
   * Measure the amount of memory retained by the specified object in bytes. This is the memory used by the object
   * itself plus other objects it references.
   *
   * Note that this may be an overestimate for objects which refer to state shared by other objects. No individual
   * object will be counted more than once per call, but counting two objects separately that share a third object will
   * attribute the size of the shared object to both.
   *
   * If the top-level or a referenced value is MemoryMeasurable (and implemented in the current runtime), its
   * {@link MemoryMeasurable#retainedMem} method will be called with `deep = true`, otherwise a language- and
   * runtime-specific size estimator will be used.
   *
   * @see MemoryMeasurable
   */
  static retainedMem(value: any): number;

  /**
   * Measure the amount of memory retained by the specified object in bytes. This is the memory used by the object
   * itself only.
   */
  static shallowMem(value: any): number;

  /**
   * Measure the amount of memory retained by the specified object in Java (server). This is the memory used by the
   * object itself plus other objects it references.
   *
   * Note that this may be an overestimate for objects which refer to state shared by other objects. No individual
   * object will be counted more than once per call, but counting two objects separately that share a third object will
   * attribute the size of the shared object to both.
   *
   * If the top-level or a referenced value is MemoryMeasurable, its {@link MemoryMeasurable#retainedMem} method will
   * be called with `deep = true`, otherwise a Java Object size estimator will be used.
   *
   * @see MemoryMeasurable
   */
  static retainedMemJava(value: any): number;

  /**
   * Measure the amount of memory retained by the specified object in Java (server). This is the memory used by the
   * object itself only.
   */
  static shallowMemJava(value: any): number;
}

