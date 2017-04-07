import { _ValidationAttribute, ValidationAttribute } from './validation.attribute';
export interface _RequiredAttribute extends _ValidationAttribute {
    AllowEmptyStrings?: boolean;
}
/**
 * Validation attribute to indicate that a property field or parameter is required.
 */
export declare class RequiredAttribute extends ValidationAttribute {
    /**
     * Gets or sets a flag indicating whether the attribute should allow empty strings.
     */
    AllowEmptyStrings: boolean;
    /**
     * Default constructor.
     */
    constructor();
}
/**
 * Validation attribute to indicate that a property field or parameter is required.
 */
export declare function Required(): any;
export declare function Required(properties: _RequiredAttribute): any;
export declare function TypewriterRequired(csParameters: string): any;
