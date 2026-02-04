// TypeScript definitions for the C3 type Data.Visitor

/**
 * Visitor interface for Data related types
 *
 * @see DataVisitable
 *
 * @remarks this represents a value passed to a method that expects an instance of Data.Visitor
 */
declare namespace Data {
  export interface IVisitor<C> {
  }
}

/**
 * Visitor interface for Data related types
 *
 * @see DataVisitable
 *
 * @remarks this represents a made instance of Data.Visitor
 */
declare namespace Data {
  export class Visitor<C> {

    lazy(lazy: DataImpl.Lazy | null, ctx: C | null): C | null;

    pandas(pandas: DataImpl.Pandas | null, ctx: C | null): C | null;
  }
}

