export interface UiSdlThemeContext {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlThemeContext;

  readonly id?: string | null;
  withId(id: string | null): UiSdlThemeContext;

  readonly name?: string | null;
  withName(name: string | null): UiSdlThemeContext;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlThemeContext;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlThemeContext;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlThemeContext;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlThemeContext;

  readonly styles?: C3.Array<UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null>;
  withStyles(styles: C3.Array<UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null> | Array<IUiSdlThemeTemplate | null | IUiSdlDensityTemplate | null | null>): UiSdlThemeContext;

  readonly themeId?: string | null;
  withThemeId(themeId: string | null): UiSdlThemeContext;

  readonly densityId?: string | null;
  withDensityId(densityId: string | null): UiSdlThemeContext;

  readonly defaultThemes?: C3.Map<string | null, UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null>;
  withDefaultThemes(defaultThemes: C3.Map<string | null, UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null> | {[key: string | null]: IUiSdlThemeTemplate | null | IUiSdlDensityTemplate | null | null}): UiSdlThemeContext;

  readonly isRoot?: boolean;
  withIsRoot(isRoot: boolean): UiSdlThemeContext;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlThemeContext;

  readonly configs?: UiSdlConfig | null;
  withConfigs(configs: IUiSdlConfig | null): UiSdlThemeContext;
}

