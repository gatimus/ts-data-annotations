import { _ValidationAttribute, ValidationAttribute } from './validation.attribute';
export interface _StringLengthAttribute extends _ValidationAttribute {
    MaximumLength?: number;
    MinimumLength?: number;
}
/**
 * Validation attribute to assert a string property, field or parameter does not exceed a maximum length
 */
export declare class StringLengthAttribute extends ValidationAttribute {
    /**
     * Gets the maximum acceptable length of the string
     */
    MaximumLength: number;
    /**
     * Gets or sets the minimum acceptable length of the string
     */
    MinimumLength: number;
    /**
     * Constructor that accepts the maximum length of the string.
     * @param maximumLength The maximum length, inclusive.  It may not be negative.
     */
    constructor(maximumLength: number);
}
export declare function StringLength(maximumLength: number): any;
export declare function StringLength(maximumLength: number, properties: _StringLengthAttribute): any;
export declare function TypewriterStringLength(csParameters: string): any;
