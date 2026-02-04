// TypeScript definitions for the C3 type SendGrid

/**
 * @remarks this represents a value passed to a method that expects an instance of SendGrid
 */
declare interface ISendGrid {
}

/**
 * @remarks this represents a made instance of SendGrid
 */
declare class SendGrid {

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

  /**
   * Helper function to create a list of SendGrid-readable email identities
   */
  static createSendGridIdentityList(objs?: C3.Array<string | null | AccessControlEntity | null | null>): C3.Array<SendGridMailIdentity | null>;

  /**
   * Helper function to create a SendGrid-readable email identities
   */
  static createSendGridIdentity(obj?: string | null | AccessControlEntity | null | null): SendGridMailIdentity | null;
}

