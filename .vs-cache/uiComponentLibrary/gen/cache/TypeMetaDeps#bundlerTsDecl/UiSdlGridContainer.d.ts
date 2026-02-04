export interface UiSdlGridContainer {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): UiSdlGridContainer;

  readonly id?: string | null;
  withId(id: string | null): UiSdlGridContainer;

  readonly name?: string | null;
  withName(name: string | null): UiSdlGridContainer;

  readonly dataSpec?: UiSdlNoData | null;
  withDataSpec(dataSpec: IUiSdlNoData | null): UiSdlGridContainer;

  readonly disableDataRequestOnFirstRender?: boolean;
  withDisableDataRequestOnFirstRender(disableDataRequestOnFirstRender: boolean): UiSdlGridContainer;

  readonly triggersRegistered?: boolean;
  withTriggersRegistered(triggersRegistered: boolean): UiSdlGridContainer;

  readonly wrapWithMetadataId?: boolean;
  withWrapWithMetadataId(wrapWithMetadataId: boolean): UiSdlGridContainer;

  readonly column?: number | null;
  withColumn(column: number | null): UiSdlGridContainer;

  readonly display?: string | null;
  withDisplay(display: string | null): UiSdlGridContainer;

  readonly padding?: number | null;
  withPadding(padding: number | null): UiSdlGridContainer;

  readonly gutter?: number | null;
  withGutter(gutter: number | null): UiSdlGridContainer;

  readonly background?: string | null;
  withBackground(background: string | null): UiSdlGridContainer;

  readonly border?: boolean;
  withBorder(border: boolean): UiSdlGridContainer;

  readonly justifyContent?: string | null;
  withJustifyContent(justifyContent: string | null): UiSdlGridContainer;

  readonly overflow?: UiSdlGridOverflow | null;
  withOverflow(overflow: IUiSdlGridOverflow | null): UiSdlGridContainer;

  readonly children?: C3.Array<UiSdlGridContainer | null | string | null | UiSdlComponentContainer | null | UiSdlConditionalComponentContainer | null | UiSdlSwitchComponentContainer | null | null>;
  withChildren(children: C3.Array<UiSdlGridContainer | null | string | null | UiSdlComponentContainer | null | UiSdlConditionalComponentContainer | null | UiSdlSwitchComponentContainer | null | null> | Array<IUiSdlGridContainer | null | string | null | IUiSdlComponentContainer | null | IUiSdlConditionalComponentContainer | null | IUiSdlSwitchComponentContainer | null | null>): UiSdlGridContainer;
}

