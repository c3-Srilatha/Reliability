// TypeScript definitions for the C3 type JobCoordinator

/**
 * This type is created to help co-ordinate sequential execution of jobs
 * The 'run' function executes jobs defined in 'JobInformation'
 * It handles failures and retries
 *
 * @remarks this represents a value passed to a method that expects an instance of JobCoordinator
 */
declare interface IJobCoordinator {
}

/**
 * This type is created to help co-ordinate sequential execution of jobs
 * The 'run' function executes jobs defined in 'JobInformation'
 * It handles failures and retries
 *
 * @remarks this represents a made instance of JobCoordinator
 */
declare class JobCoordinator {

  /**
   * There exists seed data that will cause a cron job to be setup for this function.
   *
   * cron expression : 0 0 0 ? * *
   *
   * The expression means that this function will get fired every midnight (12 AM)
   */
  static run(): void;
}

