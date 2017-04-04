import { MdInputDirective } from '@angular/material';
import { parseCSParameters } from './parse-cs-parameters';
import { ValidationAttribute, AttributeRenderer } from './validation.attribute';

/**
 * Validation attribute to indicate that a property field or parameter is required.
 */
export class RequiredAttribute extends ValidationAttribute {
    /**
     * Default constructor.
     */
    constructor() {
        super('required', true);
    }
    public RenderHTMLAttribute(element: HTMLInputElement)
    public RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer)
    public RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer, mdinput: MdInputDirective)
    public RenderHTMLAttribute(element: HTMLInputElement, renderer?: AttributeRenderer, mdinput?: MdInputDirective): void {
        if (!!mdinput) {
            mdinput.required = true;
        } else {
            super.RenderHTMLAttribute(element, renderer, mdinput);
        }
    }
}

/**
 * Validation attribute to indicate that a property field or parameter is required.
 */
export function Required() {
    return Reflect.metadata(RequiredAttribute, new RequiredAttribute());
}

export function TypeWriterRequired(csParameters: string) {
    // TODO get extra properties
    return Required();
}
