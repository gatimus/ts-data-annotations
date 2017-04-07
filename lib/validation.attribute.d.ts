import { Attribute } from './attribute';
export interface _ValidationAttribute {
    RequiresValidationContext?: boolean;
    ErrorMessage?: string;
    ErrorMessageResourceName?: string;
    ErrorMessageResourceType?: any;
}
export interface AttributeRenderer {
    setElementAttribute(renderElement: any, attributeName: string, attributeValue: string): void;
}
export declare abstract class ValidationAttribute extends Attribute {
    RequiresValidationContext: boolean;
    ErrorMessage: string;
    ErrorMessageResourceName: string;
    ErrorMessageResourceType: any;
    constructor();
    constructor(errorMessage: string);
    constructor(errorMessageAccessor: () => string);
}
