// TypeScript definitions for the C3 type MemberToEntity

/**
 * Maps a Member to an Entity.
 *
 * @remarks this represents a value passed to a method that expects an instance of MemberToEntity
 */
declare interface IMemberToEntity<T> {

  /**
   * The Member
   */
  member: IMember;

  /**
   * The entity that the Member belongs to.
   */
  target: T;
}

/**
 * Maps a Member to an Entity.
 *
 * @remarks this represents a made instance of MemberToEntity
 */
declare class MemberToEntity<T> {

  /**
   * The Member
   */
  readonly member: Member;
  withMember(member: IMember): MemberToEntity;

  /**
   * The entity that the Member belongs to.
   */
  readonly target: T;
  withTarget(target: T): MemberToEntity;
}

