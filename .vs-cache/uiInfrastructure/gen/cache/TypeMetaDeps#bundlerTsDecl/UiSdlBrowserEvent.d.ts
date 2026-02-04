export interface UiSdlBrowserEvent {

  readonly target?: Obj | null;
  withTarget(target: IObj | null): UiSdlBrowserEvent;
}

