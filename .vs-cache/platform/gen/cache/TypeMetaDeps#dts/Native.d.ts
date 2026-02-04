// TypeScript definitions for the C3 type Native

/**
 * This marker type ("native" keyword in DSL) indicates values which may not be fully instantiated
 * in the type system, and may be implementation-dependent in some or all of the supported programming languages.
 *
 * They can be additionally annotated with information about where the implementation in one or more
 * languages (`@java`, `@js`, `@py`, etc).
 *
 * For languages that are strongly-typed, particularly Java, it may be desirable to specify the type so that
 * the code-generated signatures and method implementation stubs are easier to use. For example:
 * ```type
 *   _counter: private @java(class="java.util.concurrent.atomic.AtomicInteger") native
 * ```
 * This will result in the Java interfaces using `AtomicInteger` instead of `Object`.
 *
 * @see Ann.Java
 * @see Ann.Js
 * @see Ann.Py
 * @see Ann.R
 *
 * @remarks this represents a value passed to a method that expects an instance of Native
 */
declare interface INative {
}

/**
 * This marker type ("native" keyword in DSL) indicates values which may not be fully instantiated
 * in the type system, and may be implementation-dependent in some or all of the supported programming languages.
 *
 * They can be additionally annotated with information about where the implementation in one or more
 * languages (`@java`, `@js`, `@py`, etc).
 *
 * For languages that are strongly-typed, particularly Java, it may be desirable to specify the type so that
 * the code-generated signatures and method implementation stubs are easier to use. For example:
 * ```type
 *   _counter: private @java(class="java.util.concurrent.atomic.AtomicInteger") native
 * ```
 * This will result in the Java interfaces using `AtomicInteger` instead of `Object`.
 *
 * @see Ann.Java
 * @see Ann.Js
 * @see Ann.Py
 * @see Ann.R
 *
 * @remarks this represents a made instance of Native
 */
declare class Native {
}

