export interface AvatarWithTextComponentReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): AvatarWithTextComponentReact;

  readonly id?: string | null;
  withId(id: string | null): AvatarWithTextComponentReact;

  readonly name?: string | null;
  withName(name: string | null): AvatarWithTextComponentReact;

  readonly dataSpec?: any;
  withDataSpec(dataSpec: any): AvatarWithTextComponentReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): AvatarWithTextComponentReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): AvatarWithTextComponentReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): AvatarWithTextComponentReact;

  readonly titleContent?: UiSdlDynamicValueSpec | null;
  withTitleContent(titleContent: IUiSdlDynamicValueSpec | null): AvatarWithTextComponentReact;

  readonly subtitleContent?: C3.Array<UiSdlDynamicValueSpec | null>;
  withSubtitleContent(subtitleContent: C3.Array<UiSdlDynamicValueSpec | null> | Array<IUiSdlDynamicValueSpec | null>): AvatarWithTextComponentReact;

  readonly prependedAvatar?: any | null;
  withPrependedAvatar(prependedAvatar: any | null): AvatarWithTextComponentReact;

  readonly isClickable?: boolean;
  withIsClickable(isClickable: boolean): AvatarWithTextComponentReact;

  readonly actionArgs?: any | null;
  withActionArgs(actionArgs: any | null): AvatarWithTextComponentReact;
}

