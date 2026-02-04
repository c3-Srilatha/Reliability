export interface UiSdlEmptyState {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlEmptyState;

  readonly id?: string | null;
  withId(id: string | null): UiSdlEmptyState;

  readonly name?: string | null;
  withName(name: string | null): UiSdlEmptyState;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlEmptyState;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlEmptyState;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlEmptyState;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlEmptyState;

  readonly imageUrl?: string | null;
  withImageUrl(imageUrl: string | null): UiSdlEmptyState;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlEmptyState;

  readonly headerText?: string | null;
  withHeaderText(headerText: string | null): UiSdlEmptyState;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlEmptyState;

  readonly descriptionText?: string | null;
  withDescriptionText(descriptionText: string | null): UiSdlEmptyState;

  readonly primaryActionButton?: UiSdlAction | null;
  withPrimaryActionButton(primaryActionButton: IUiSdlAction | null): UiSdlEmptyState;

  readonly secondaryActionButton?: UiSdlAction | null;
  withSecondaryActionButton(secondaryActionButton: IUiSdlAction | null): UiSdlEmptyState;
}

