export interface SelfServiceDICell {

  readonly value?: any;
  withValue(value: any): SelfServiceDICell;

  readonly valueType?: string | null;
  withValueType(valueType: string | null): SelfServiceDICell;
}

