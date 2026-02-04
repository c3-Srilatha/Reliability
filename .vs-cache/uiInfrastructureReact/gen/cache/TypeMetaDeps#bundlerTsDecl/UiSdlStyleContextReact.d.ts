export interface UiSdlStyleContextReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlStyleContextReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlStyleContextReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlStyleContextReact;

  readonly dataSpec?: UiSdlStyleContextDataSpec | null;
  withDataSpec(dataSpec: IUiSdlStyleContextDataSpec | null): UiSdlStyleContextReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlStyleContextReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlStyleContextReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlStyleContextReact;

  readonly styles?: C3.Array<UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null>;
  withStyles(styles: C3.Array<UiSdlThemeTemplate | null | UiSdlDensityTemplate | null | null> | Array<IUiSdlThemeTemplate | null | IUiSdlDensityTemplate | null | null>): UiSdlStyleContextReact;

  readonly styleId?: string | null;
  withStyleId(styleId: string | null): UiSdlStyleContextReact;

  readonly isRoot?: boolean;
  withIsRoot(isRoot: boolean): UiSdlStyleContextReact;

  readonly enableTunneling?: boolean;
  withEnableTunneling(enableTunneling: boolean): UiSdlStyleContextReact;

  readonly children?: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>;
  withChildren(children: C3.Array<UiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null> | Array<IUiSdlComponentRef<UiSdlComponent<UiSdlNoData | null> | null> | null>): UiSdlStyleContextReact;
}

