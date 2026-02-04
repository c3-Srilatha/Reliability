export interface CurrentUserApplicationState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): CurrentUserApplicationState;

  readonly id?: string | null;
  withId(id: string | null): CurrentUserApplicationState;

  readonly name?: string | null;
  withName(name: string | null): CurrentUserApplicationState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): CurrentUserApplicationState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): CurrentUserApplicationState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): CurrentUserApplicationState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): CurrentUserApplicationState;

  readonly REDUX_NAMESPACE?: string | null;
  withREDUX_NAMESPACE(REDUX_NAMESPACE: string | null): CurrentUserApplicationState;

  readonly effectTriggers?: C3.Array<UiSdlEffectTrigger | null>;
  withEffectTriggers(effectTriggers: C3.Array<UiSdlEffectTrigger | null> | Array<IUiSdlEffectTrigger | null>): CurrentUserApplicationState;

  readonly currentUser?: User | null;
  withCurrentUser(currentUser: IUser | null): CurrentUserApplicationState;
}

