// TypeScript definitions for the C3 type WithPkg

/**
 * Base type for types that have a logical reference to instance of Pkg that should be used exclusively when there is a
 * need to resolve a type.
 * <p>
 * Normally application code would use something like `C3.type("Foo").instantiate()` or just `Foo.make(...)` to create a
 * new instance of Foo. However for types used in the Type System implementation, the `C3.pkg()` i.e. Pkg instance for
 * a thread may not be same one that contains the "Foo" type.
 * <p>
 * This is where `WithPkg#pkg` has to be used to ensure that the correct Pkg instance is used to resolve the type.
 *
 * @see Typesys
 *
 * @remarks this represents a value passed to a method that expects an instance of WithPkg
 */
declare interface IWithPkg {
}

/**
 * Base type for types that have a logical reference to instance of Pkg that should be used exclusively when there is a
 * need to resolve a type.
 * <p>
 * Normally application code would use something like `C3.type("Foo").instantiate()` or just `Foo.make(...)` to create a
 * new instance of Foo. However for types used in the Type System implementation, the `C3.pkg()` i.e. Pkg instance for
 * a thread may not be same one that contains the "Foo" type.
 * <p>
 * This is where `WithPkg#pkg` has to be used to ensure that the correct Pkg instance is used to resolve the type.
 *
 * @see Typesys
 *
 * @remarks this represents a made instance of WithPkg
 */
declare class WithPkg {

  /**
   * C3 application package that should be used by sub-types to resolve any C3 type.
   */
  get pkg(): Pkg;
}

