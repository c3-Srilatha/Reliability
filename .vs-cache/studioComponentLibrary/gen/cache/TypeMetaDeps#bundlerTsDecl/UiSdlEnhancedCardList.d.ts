export interface UiSdlEnhancedCardList {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlEnhancedCardList;

  readonly id?: string | null;
  withId(id: string | null): UiSdlEnhancedCardList;

  readonly name?: string | null;
  withName(name: string | null): UiSdlEnhancedCardList;

  readonly dataSpec?: UiSdlEnhancedCardListDataSpec | null;
  withDataSpec(dataSpec: IUiSdlEnhancedCardListDataSpec | null): UiSdlEnhancedCardList;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlEnhancedCardList;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlEnhancedCardList;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlEnhancedCardList;

  readonly className?: string | null;
  withClassName(className: string | null): UiSdlEnhancedCardList;

  readonly compact?: boolean;
  withCompact(compact: boolean): UiSdlEnhancedCardList;

  readonly cardLimit?: number | null;
  withCardLimit(cardLimit: number | null): UiSdlEnhancedCardList;

  readonly dataCollection?: C3.Array<Obj | null>;
  withDataCollection(dataCollection: C3.Array<Obj | null> | Array<IObj | null>): UiSdlEnhancedCardList;

  readonly subCardActionGroupSetting?: UiSdlActionGroup | null;
  withSubCardActionGroupSetting(subCardActionGroupSetting: IUiSdlActionGroup | null): UiSdlEnhancedCardList;

  readonly principalCardActionGroupSetting?: UiSdlActionGroup | null;
  withPrincipalCardActionGroupSetting(principalCardActionGroupSetting: IUiSdlActionGroup | null): UiSdlEnhancedCardList;
}

