// TypeScript definitions for the C3 type Value

/**
 * Base type of instances (value) of a type that do not have fields.
 *
 * Sub-types will not implicitly mixin Obj C3 type so will not have implicit methods like Obj.make or Obj.fromJson.
 *
 * Note that this semantic only applies to types directly mixin `Value`, if a given type does not have direct mixin of
 * Value then it will implicitly mixin {@link Obj} and will have all the methods of Obj.
 *
 * @see Obj
 * @see Array
 * @see Map
 * @see Set
 * @see Stateful
 * @see Microservice
 *
 * @remarks this represents a value passed to a method that expects an instance of Value
 */
declare interface IValue {
}

/**
 * Base type of instances (value) of a type that do not have fields.
 *
 * Sub-types will not implicitly mixin Obj C3 type so will not have implicit methods like Obj.make or Obj.fromJson.
 *
 * Note that this semantic only applies to types directly mixin `Value`, if a given type does not have direct mixin of
 * Value then it will implicitly mixin {@link Obj} and will have all the methods of Obj.
 *
 * @see Obj
 * @see Array
 * @see Map
 * @see Set
 * @see Stateful
 * @see Microservice
 *
 * @remarks this represents a made instance of Value
 */
declare class Value {
}

