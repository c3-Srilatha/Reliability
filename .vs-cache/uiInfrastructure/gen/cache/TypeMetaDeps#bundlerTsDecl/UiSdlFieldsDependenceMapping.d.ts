export interface UiSdlFieldsDependenceMapping {

  readonly updatedField?: string | null;
  withUpdatedField(updatedField: string | null): UiSdlFieldsDependenceMapping;

  readonly relatedField?: string | null;
  withRelatedField(relatedField: string | null): UiSdlFieldsDependenceMapping;

  readonly value?: any;
  withValue(value: any): UiSdlFieldsDependenceMapping;
}

