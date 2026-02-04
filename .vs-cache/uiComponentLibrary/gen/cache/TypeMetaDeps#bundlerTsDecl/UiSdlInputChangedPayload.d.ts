export interface UiSdlInputChangedPayload {

  readonly componentId: string;
  withComponentId(componentId: string): UiSdlInputChangedPayload;

  readonly formFieldName?: string | null;
  withFormFieldName(formFieldName: string | null): UiSdlInputChangedPayload;

  readonly formFieldValue?: C3.Map<string | null, any>;
  withFormFieldValue(formFieldValue: C3.Map<string | null, any> | {[key: string | null]: any}): UiSdlInputChangedPayload;
}

