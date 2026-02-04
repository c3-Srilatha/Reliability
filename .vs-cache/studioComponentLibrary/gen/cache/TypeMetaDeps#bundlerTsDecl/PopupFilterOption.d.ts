export interface PopupFilterOption {

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): PopupFilterOption;

  readonly displayName?: string | null;
  withDisplayName(displayName: string | null): PopupFilterOption;

  readonly valueType?: string | null;
  withValueType(valueType: string | null): PopupFilterOption;
}

