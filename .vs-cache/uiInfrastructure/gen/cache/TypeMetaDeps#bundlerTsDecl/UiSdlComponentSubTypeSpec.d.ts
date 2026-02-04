export interface UiSdlComponentSubTypeSpec {

  readonly includeAbstract?: boolean;
  withIncludeAbstract(includeAbstract: boolean): UiSdlComponentSubTypeSpec;

  readonly includeUiSdlComponent?: boolean;
  withIncludeUiSdlComponent(includeUiSdlComponent: boolean): UiSdlComponentSubTypeSpec;

  readonly includeReactComponents?: boolean;
  withIncludeReactComponents(includeReactComponents: boolean): UiSdlComponentSubTypeSpec;
}

