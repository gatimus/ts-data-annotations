import { _ValidationAttribute, ValidationAttribute } from './validation.attribute';

export interface _StringLengthAttribute extends _ValidationAttribute {
    MaximumLength?: number;
    MinimumLength?: number;
}

/**
 * Validation attribute to assert a string property, field or parameter does not exceed a maximum length
 */
export class StringLengthAttribute extends ValidationAttribute {

    /**
     * Gets the maximum acceptable length of the string
     */
    public MaximumLength: number;

    /**
     * Gets or sets the minimum acceptable length of the string
     */
    public MinimumLength: number;

    /**
     * Constructor that accepts the maximum length of the string.
     * @param maximumLength The maximum length, inclusive.  It may not be negative.
     */
    constructor(maximumLength: number) {
        super();
        this.MaximumLength = maximumLength;
    }

}

export function StringLength(maximumLength: number)
export function StringLength(maximumLength: number, properties: _StringLengthAttribute)
export function StringLength(maximumLength: number, properties: _StringLengthAttribute = {}) {
    let attribute = new StringLengthAttribute(maximumLength);
    Object.assign(attribute, properties);
    return Reflect.metadata(StringLengthAttribute, attribute);
}

export function TypewriterStringLength(csParameters: string) {
    return StringLength(0);
}
