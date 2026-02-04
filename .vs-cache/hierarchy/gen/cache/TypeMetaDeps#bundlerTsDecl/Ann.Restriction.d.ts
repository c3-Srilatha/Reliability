declare namespace Ann {
  export interface Restriction {

    readonly VALUE_ONLY_FIELD?: string | null;
    withVALUE_ONLY_FIELD(VALUE_ONLY_FIELD: string | null): Ann.Restriction;

    readonly noInherit?: boolean;
    withNoInherit(noInherit: boolean): Ann.Restriction;

    readonly expr?: string | null;
    withExpr(expr: string | null): Ann.Restriction;

    readonly filter?: string | null;
    withFilter(filter: string | null): Ann.Restriction;

    readonly callback?: string | null;
    withCallback(callback: string | null): Ann.Restriction;

    readonly order?: string | null;
    withOrder(order: string | null): Ann.Restriction;
  }
}

