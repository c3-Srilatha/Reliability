// TypeScript definitions for the C3 type MailServiceProvider

/**
 * Base type to integrate third party email service providers. Can be configured using
 * {@link MailConfig#serviceProvider}
 *
 * @remarks this represents a value passed to a method that expects an instance of MailServiceProvider
 */
declare interface IMailServiceProvider {
}

/**
 * Base type to integrate third party email service providers. Can be configured using
 * {@link MailConfig#serviceProvider}
 *
 * @remarks this represents a made instance of MailServiceProvider
 */
declare class MailServiceProvider {

  /**
   * Depending on the {@link MailConfig#serviceProvider} configured, internally calls this method
   * when a call to {@link Mail#send} is made.
   * @param mail
   *         The Main that is to be sent.
   * @returns The Mail record that was sent or null if none was sent.
   */
  static send(mail?: Mail | null): Mail | null;

  /**
   * Depending on the {@link MailConfig#serviceProvider} configured, internally calls this method
   * when a call to {@link Mail#isValidEmail} is made.
   */
  static isValidEmail(email?: string | null): boolean;
}

