// TypeScript definitions for the C3 type MemberEntityMapping

/**
 * Holds references to MemberToEntity mappings
 *
 * @remarks this represents a value passed to a method that expects an instance of MemberEntityMapping
 */
declare interface IMemberEntityMapping<T> {

  /**
   * References to MemberToEntity that map to this instance.
   */
  memberIntersections?: Array_Type<T> | Array<T>;
}

/**
 * Holds references to MemberToEntity mappings
 *
 * @remarks this represents a made instance of MemberEntityMapping
 */
declare class MemberEntityMapping<T> {

  /**
   * References to MemberToEntity that map to this instance.
   */
  readonly memberIntersections?: Array_Type<T>;
  withMemberIntersections(memberIntersections: Array_Type<T> | Array<T> | null): MemberEntityMapping;
}

