export interface UiSdlWebWorker {

  readonly id?: string | null;
  withId(id: string | null): UiSdlWebWorker;

  readonly worker?: any;
  withWorker(worker: any): UiSdlWebWorker;

  readonly status?: string | null;
  withStatus(status: string | null): UiSdlWebWorker;
}

