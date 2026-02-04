export interface ClickableAvatarWithTextComponent {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): ClickableAvatarWithTextComponent;

  readonly id?: string | null;
  withId(id: string | null): ClickableAvatarWithTextComponent;

  readonly name?: string | null;
  withName(name: string | null): ClickableAvatarWithTextComponent;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): ClickableAvatarWithTextComponent;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): ClickableAvatarWithTextComponent;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): ClickableAvatarWithTextComponent;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): ClickableAvatarWithTextComponent;

  readonly content?: UiSdlDynamicValueSpec | null;
  withContent(content: IUiSdlDynamicValueSpec | null): ClickableAvatarWithTextComponent;

  readonly link?: UiSdlDynamicValueSpec | null;
  withLink(link: IUiSdlDynamicValueSpec | null): ClickableAvatarWithTextComponent;

  readonly usage?: string | null;
  withUsage(usage: string | null): ClickableAvatarWithTextComponent;

  readonly orientation?: string | null;
  withOrientation(orientation: string | null): ClickableAvatarWithTextComponent;

  readonly fontSize?: string | null;
  withFontSize(fontSize: string | null): ClickableAvatarWithTextComponent;

  readonly prependedAvatar?: UiSdlGraphicAvatarStaticConfig | null;
  withPrependedAvatar(prependedAvatar: IUiSdlGraphicAvatarStaticConfig | null): ClickableAvatarWithTextComponent;

  readonly appendedAvatar?: UiSdlGraphicAvatarStaticConfig | null;
  withAppendedAvatar(appendedAvatar: IUiSdlGraphicAvatarStaticConfig | null): ClickableAvatarWithTextComponent;

  readonly actionArgs?: any | null;
  withActionArgs(actionArgs: any | null): ClickableAvatarWithTextComponent;

  readonly truncate?: boolean;
  withTruncate(truncate: boolean): ClickableAvatarWithTextComponent;

  readonly truncatedCharacterLimit?: number | null;
  withTruncatedCharacterLimit(truncatedCharacterLimit: number | null): ClickableAvatarWithTextComponent;

  readonly tooltip?: UiSdlDynamicValueSpec | null;
  withTooltip(tooltip: IUiSdlDynamicValueSpec | null): ClickableAvatarWithTextComponent;

  readonly opensInNewTab?: boolean;
  withOpensInNewTab(opensInNewTab: boolean): ClickableAvatarWithTextComponent;
}

