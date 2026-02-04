export interface AvatarWithTextComponent {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): AvatarWithTextComponent;

  readonly id?: string | null;
  withId(id: string | null): AvatarWithTextComponent;

  readonly name?: string | null;
  withName(name: string | null): AvatarWithTextComponent;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): AvatarWithTextComponent;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): AvatarWithTextComponent;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): AvatarWithTextComponent;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): AvatarWithTextComponent;

  readonly titleContent?: UiSdlDynamicValueSpec | null;
  withTitleContent(titleContent: IUiSdlDynamicValueSpec | null): AvatarWithTextComponent;

  readonly subtitleContent?: C3.Array<UiSdlDynamicValueSpec | null>;
  withSubtitleContent(subtitleContent: C3.Array<UiSdlDynamicValueSpec | null> | Array<IUiSdlDynamicValueSpec | null>): AvatarWithTextComponent;

  readonly prependedAvatar?: any | null;
  withPrependedAvatar(prependedAvatar: any | null): AvatarWithTextComponent;

  readonly isClickable?: boolean;
  withIsClickable(isClickable: boolean): AvatarWithTextComponent;

  readonly actionArgs?: any | null;
  withActionArgs(actionArgs: any | null): AvatarWithTextComponent;
}

