import { MdInputDirective } from '@angular/material';
import { ValidationAttribute, AttributeRenderer } from './validation.attribute';
/**
 * Specifies the maximum length of array/string data allowed in a property.
 */
export declare class MaxLengthAttribute extends ValidationAttribute {
    private readonly MaxAllowableLength;
    /**
     * Gets the maximum allowable length of the array/string data.
     */
    Length: number;
    /**
     * Initializes a new instance of the MaxLengthAttribute class.
     * The maximum allowable length supported by the database will be used.
     */
    constructor();
    /**
     * Initializes a new instance of the MaxLengthAttribute class.
     */
    constructor(length: number);
    RenderHTMLAttribute(element: HTMLInputElement): any;
    RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer): any;
    RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer, mdinput: MdInputDirective): any;
}
/**
 * Specifies the maximum length of array/string data allowed in a property.
 */
export declare function MaxLength(): any;
/**
 * Specifies the maximum length of array/string data allowed in a property.
 */
export declare function MaxLength(length: number): any;
