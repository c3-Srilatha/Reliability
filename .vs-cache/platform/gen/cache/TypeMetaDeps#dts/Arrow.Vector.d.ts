// TypeScript definitions for the C3 type Arrow.Vector

/**
 * Type representing https://arrow.apache.org/docs/index.html value vector
 *
 * @remarks this represents a value passed to a method that expects an instance of Arrow.Vector
 */
declare namespace Arrow {
  export interface IVector {
  }
}

/**
 * Type representing https://arrow.apache.org/docs/index.html value vector
 *
 * @remarks this represents a made instance of Arrow.Vector
 */
declare namespace Arrow {
  export class Vector {

    /**
     * Retrieve value at index
     */
    at(index: number): T | null;

    /**
     * Retrieve double value at index; or error if this is not a double vector
     */
    doubleAt(index: number): number;

    /**
     * Retrieve string value at index; or error if this is not a string vector
     */
    strAt(index: number): string | null;

    /**
     * Retrieve datetime value at index; or error if this is not a string vector
     */
    datetimeAt(index: number): DateTime | null;

    /**
     * Retrieve UTF-8 string value at index; or error if this is not a string vector
     */
    utf8At(index: number): any | null;

    /**
     * Check if value at index in null
     */
    isNull(index: number): boolean;

    /**
     * Name of the field for this vector
     */
    get name(): string;

    /**
     * C3 Value Type of elements in this vector
     */
    get valueType(): ValueType;

    /**
     * String representation of Arrow schema of field for this vector
     */
    get arrowType(): string;

    /**
     * Java native schema of this Arrow buffer
     */
    get javaField(): any;

    /**
     * @param valueTypeOverrides
     *      We always override the `ValueType` as provided in the `valueTypeOverrides` but do attempt to validate the
     *      `ValueType` from the data and throw an exception when neither the "overridden ValueType"
     *      would be serialized as the given FieldVector nor the ValueTypes are bi-directionally assignable to each other: {@link ValueType#isAssignableTo}
     *      When its not provided, then we go with "inferred ValueType", if it can be inferred and go for `any` if it can't.
     * Convert an Arrow.FieldVector to a C3.Collection.
     * Please note that this function does not copy the contents from the fieldVector during creation but on first access,
     * therefore, please consume / materialize the array before moving to the next Arrow Record Batch
     * C3 ValueType is inferred from the Arrow Field using {@link Arrow#c3ValueTypeFromArrowField}
     */
    static toCol(fieldVector: any, valueTypeOverrides?: C3.Map<string | null, ValueType | null>): C3.Array<any>;

    iter(): Iterator<any> | null;
  }
}

