export interface PopupFilterDataItem {

  readonly id?: string | null;
  withId(id: string | null): PopupFilterDataItem;

  readonly fieldName?: string | null;
  withFieldName(fieldName: string | null): PopupFilterDataItem;

  readonly displayName?: string | null;
  withDisplayName(displayName: string | null): PopupFilterDataItem;

  readonly operation?: string | null;
  withOperation(operation: string | null): PopupFilterDataItem;

  readonly value?: any;
  withValue(value: any): PopupFilterDataItem;

  readonly joinCond?: string | null;
  withJoinCond(joinCond: string | null): PopupFilterDataItem;
}

