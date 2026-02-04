export interface UiSdlDataSpecDetails {

  readonly dataSpecFieldName: string;
  withDataSpecFieldName(dataSpecFieldName: string): UiSdlDataSpecDetails;

  readonly dataSpecType: Type;
  withDataSpecType(dataSpecType: IType): UiSdlDataSpecDetails;

  readonly dataDestinationFieldName: string;
  withDataDestinationFieldName(dataDestinationFieldName: string): UiSdlDataSpecDetails;
}

