import { MdInputDirective } from '@angular/material';
import { ValidationAttribute, AttributeRenderer } from './validation.attribute';
/**
 * Validation attribute to indicate that a property field or parameter is required.
 */
export declare class RequiredAttribute extends ValidationAttribute {
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
export declare function Required(): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
export declare function TypeWriterRequired(csParameters: string): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
