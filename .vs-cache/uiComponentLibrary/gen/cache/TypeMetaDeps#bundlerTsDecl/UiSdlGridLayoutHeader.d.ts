export interface UiSdlGridLayoutHeader {

  readonly sticky?: boolean;
  withSticky(sticky: boolean): UiSdlGridLayoutHeader;

  readonly children?: C3.Array<UiSdlGridContainer | null | string | null | UiSdlComponentContainer | null | null>;
  withChildren(children: C3.Array<UiSdlGridContainer | null | string | null | UiSdlComponentContainer | null | null> | Array<IUiSdlGridContainer | null | string | null | IUiSdlComponentContainer | null | null>): UiSdlGridLayoutHeader;
}

