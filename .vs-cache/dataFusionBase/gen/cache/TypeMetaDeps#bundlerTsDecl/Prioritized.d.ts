export interface Prioritized {

  readonly meta?: Meta | null;
  withMeta(meta: IMeta | null): Prioritized;

  readonly name: string;
  withName(name: string): Prioritized;

  readonly priority: number;
  withPriority(priority: number): Prioritized;

  readonly hidden?: boolean;
  withHidden(hidden: boolean): Prioritized;
}

