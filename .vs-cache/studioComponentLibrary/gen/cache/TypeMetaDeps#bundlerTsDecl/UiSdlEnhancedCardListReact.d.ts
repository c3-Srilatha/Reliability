export interface UiSdlEnhancedCardListReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlEnhancedCardListReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlEnhancedCardListReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlEnhancedCardListReact;

  readonly dataSpec?: UiSdlEnhancedCardListDataSpec | null;
  withDataSpec(dataSpec: IUiSdlEnhancedCardListDataSpec | null): UiSdlEnhancedCardListReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlEnhancedCardListReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlEnhancedCardListReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlEnhancedCardListReact;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlEnhancedCardListReact;

  readonly compact?: boolean;
  withCompact(compact: boolean): UiSdlEnhancedCardListReact;

  readonly cardLimit?: number | null;
  withCardLimit(cardLimit: number | null): UiSdlEnhancedCardListReact;

  readonly dataCollection?: C3.Array<Obj | null>;
  withDataCollection(dataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlEnhancedCardListReact;

  readonly subCardActionGroupSetting?: UiSdlActionGroup | null;
  withSubCardActionGroupSetting(subCardActionGroupSetting: IUiSdlActionGroup | null): UiSdlEnhancedCardListReact;

  readonly principalCardActionGroupSetting?: UiSdlActionGroup | null;
  withPrincipalCardActionGroupSetting(principalCardActionGroupSetting: IUiSdlActionGroup | null): UiSdlEnhancedCardListReact;
}

