export interface UiSdlThemeContextReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlThemeContextReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlThemeContextReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlThemeContextReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlThemeContextReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlThemeContextReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlThemeContextReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlThemeContextReact;

  readonly styles?: C3.Array<UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null>;
  withStyles(styles: C3.Array<UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null> | Array<IUiSdlThemeTemplate | null | IUiSdlDensityTemplate | null | null>): UiSdlThemeContextReact;

  readonly themeId?: string | null;
  withThemeId(themeId: string | null): UiSdlThemeContextReact;

  readonly densityId?: string | null;
  withDensityId(densityId: string | null): UiSdlThemeContextReact;

  readonly defaultThemes?: C3.Map<string | null, UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null>;
  withDefaultThemes(defaultThemes: C3.Map<string | null, UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null> | {[key: string | null]: IUiSdlThemeTemplate | null | IUiSdlDensityTemplate | null | null}): UiSdlThemeContextReact;

  readonly isRoot?: boolean;
  withIsRoot(isRoot: boolean): UiSdlThemeContextReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlThemeContextReact;

  readonly configs?: UiSdlConfig | null;
  withConfigs(configs: IUiSdlConfig | null): UiSdlThemeContextReact;
}

