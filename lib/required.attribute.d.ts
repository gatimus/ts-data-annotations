import { MdInputDirective } from '@angular/material';
import { ValidationAttribute, AttributeRenderer } from './validation.attribute';
export interface _RequiredAttribute {
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
    RenderHTMLAttribute(element: HTMLInputElement): any;
    RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer): any;
    RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer, mdinput: MdInputDirective): any;
}
/**
 * Validation attribute to indicate that a property field or parameter is required.
 */
export declare function Required(): any;
export declare function Required(properties: _RequiredAttribute): any;
export declare function TypewriterRequired(csParameters: string): any;
