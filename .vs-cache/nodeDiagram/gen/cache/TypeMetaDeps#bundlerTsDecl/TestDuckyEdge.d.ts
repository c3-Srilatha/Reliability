export interface TestDuckyEdge {

  readonly DUCK_CLICK_SUFFIX?: string | null;
  withDUCK_CLICK_SUFFIX(DUCK_CLICK_SUFFIX: string | null): TestDuckyEdge;

  readonly count?: number | null;
  withCount(count: number | null): TestDuckyEdge;
}

