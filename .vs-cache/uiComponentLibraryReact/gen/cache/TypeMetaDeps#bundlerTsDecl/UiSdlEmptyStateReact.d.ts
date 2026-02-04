export interface UiSdlEmptyStateReact {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlEmptyStateReact;

  readonly id?: string | null;
  withId(id: string | null): UiSdlEmptyStateReact;

  readonly name?: string | null;
  withName(name: string | null): UiSdlEmptyStateReact;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlEmptyStateReact;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlEmptyStateReact;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlEmptyStateReact;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlEmptyStateReact;

  readonly imageUrl?: string | null;
  withImageUrl(imageUrl: string | null): UiSdlEmptyStateReact;

  readonly size?: string | null;
  withSize(size: string | null): UiSdlEmptyStateReact;

  readonly headerText?: string | null;
  withHeaderText(headerText: string | null): UiSdlEmptyStateReact;

  readonly height?: number | null;
  withHeight(height: number | null): UiSdlEmptyStateReact;

  readonly descriptionText?: string | null;
  withDescriptionText(descriptionText: string | null): UiSdlEmptyStateReact;

  readonly primaryActionButton?: UiSdlAction | null;
  withPrimaryActionButton(primaryActionButton: IUiSdlAction | null): UiSdlEmptyStateReact;

  readonly secondaryActionButton?: UiSdlAction | null;
  withSecondaryActionButton(secondaryActionButton: IUiSdlAction | null): UiSdlEmptyStateReact;
}

