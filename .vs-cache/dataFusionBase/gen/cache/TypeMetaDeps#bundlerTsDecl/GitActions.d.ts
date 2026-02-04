export interface GitActions {

  readonly PUSH?: string | null;
  withPUSH(PUSH: string | null): GitActions;

  readonly PULL?: string | null;
  withPULL(PULL: string | null): GitActions;

  readonly DISCARD?: string | null;
  withDISCARD(DISCARD: string | null): GitActions;
}

