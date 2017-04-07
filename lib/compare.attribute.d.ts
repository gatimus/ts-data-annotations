import { _ValidationAttribute, ValidationAttribute } from './validation.attribute';
export interface _CompareAttribute extends _ValidationAttribute {
    OtherProperty?: string;
    OtherPropertyDisplayName?: string;
}
export declare class CompareAttribute extends ValidationAttribute {
    OtherProperty: string;
    OtherPropertyDisplayName: string;
    constructor(otherProperty: string);
}
export declare function Compare(otherProperty: string): any;
export declare function Compare(otherProperty: string, properties: _CompareAttribute): any;
export declare function TypewriterCompare(csParameters: string): any;
