export interface UiSdlFilterFieldOperatorToExpression {

  static readonly EQUALS: 'eq';

  static readonly CONTAINS: 'contains';

  static readonly STARTS_WITH: 'startsWith';

  static readonly ENDS_WITH: 'endsWith';

  static readonly LESS_THAN: 'lt';

  static readonly GREATER_THAN: 'gt';

  static readonly LESS_THAN_OR_EQUAL_TO: 'le';

  static readonly GREATER_THAN_OR_EQUAL_TO: 'ge';

  static readonly NOT_EQUAL: 'ne';

  static readonly IN_BETWEEN: '';

  static readonly OUTSIDE_OF: '';
}

