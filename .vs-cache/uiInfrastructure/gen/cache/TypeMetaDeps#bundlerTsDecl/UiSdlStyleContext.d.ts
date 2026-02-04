export interface UiSdlStyleContext {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlStyleContext;

  readonly id?: string | null;
  withId(id: string | null): UiSdlStyleContext;

  readonly name?: string | null;
  withName(name: string | null): UiSdlStyleContext;

  readonly dataSpec?: UiSdlStyleContextDataSpec | null;
  withDataSpec(dataSpec: IUiSdlStyleContextDataSpec | null): UiSdlStyleContext;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlStyleContext;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlStyleContext;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlStyleContext;

  readonly styles?: C3.Array<UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null>;
  withStyles(styles: C3.Array<UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null> | Array<IUiSdlThemeTemplate | null | IUiSdlDensityTemplate | null | null>): UiSdlStyleContext;

  readonly styleId?: string | null;
  withStyleId(styleId: string | null): UiSdlStyleContext;

  readonly isRoot?: boolean;
  withIsRoot(isRoot: boolean): UiSdlStyleContext;

  readonly enableTunneling?: boolean;
  withEnableTunneling(enableTunneling: boolean): UiSdlStyleContext;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlStyleContext;
}

