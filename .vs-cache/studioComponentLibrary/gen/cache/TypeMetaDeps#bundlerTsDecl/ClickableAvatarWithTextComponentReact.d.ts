export interface ClickableAvatarWithTextComponentReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ClickableAvatarWithTextComponentReact;

  readonly id?: string | null;
  withId(id: string | null): ClickableAvatarWithTextComponentReact;

  readonly name?: string | null;
  withName(name: string | null): ClickableAvatarWithTextComponentReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): ClickableAvatarWithTextComponentReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): ClickableAvatarWithTextComponentReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): ClickableAvatarWithTextComponentReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): ClickableAvatarWithTextComponentReact;

  readonly content?: UiSdlDynamicValueSpec | null;
  withContent(content: IUiSdlDynamicValueSpec | null): ClickableAvatarWithTextComponentReact;

  readonly link?: UiSdlDynamicValueSpec | null;
  withLink(link: IUiSdlDynamicValueSpec | null): ClickableAvatarWithTextComponentReact;

  readonly usage?: string | null;
  withUsage(usage: string | null): ClickableAvatarWithTextComponentReact;

  readonly orientation?: string | null;
  withOrientation(orientation: string | null): ClickableAvatarWithTextComponentReact;

  readonly fontSize?: string | null;
  withFontSize(fontSize: string | null): ClickableAvatarWithTextComponentReact;

  readonly prependedAvatar?: UiSdlGraphicAvatarStaticConfig | null;
  withPrependedAvatar(prependedAvatar: IUiSdlGraphicAvatarStaticConfig | null): ClickableAvatarWithTextComponentReact;

  readonly appendedAvatar?: UiSdlGraphicAvatarStaticConfig | null;
  withAppendedAvatar(appendedAvatar: IUiSdlGraphicAvatarStaticConfig | null): ClickableAvatarWithTextComponentReact;

  readonly actionArgs?: any | null;
  withActionArgs(actionArgs: any | null): ClickableAvatarWithTextComponentReact;

  readonly truncate?: boolean;
  withTruncate(truncate: boolean): ClickableAvatarWithTextComponentReact;

  readonly truncatedCharacterLimit?: number | null;
  withTruncatedCharacterLimit(truncatedCharacterLimit: number | null): ClickableAvatarWithTextComponentReact;

  readonly tooltip?: UiSdlDynamicValueSpec | null;
  withTooltip(tooltip: IUiSdlDynamicValueSpec | null): ClickableAvatarWithTextComponentReact;

  readonly opensInNewTab?: boolean;
  withOpensInNewTab(opensInNewTab: boolean): ClickableAvatarWithTextComponentReact;
}

