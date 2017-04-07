import { MdInputDirective } from '@angular/material';
import { parseCSParameters } from './parse-cs-parameters';
import { ValidationAttribute, AttributeRenderer } from './validation.attribute';

export interface _RequiredAttribute {
    AllowEmptyStrings?: boolean;
}

/**
 * Validation attribute to indicate that a property field or parameter is required.
 */
export class RequiredAttribute extends ValidationAttribute {

    /**
     * Gets or sets a flag indicating whether the attribute should allow empty strings.
     */
    public AllowEmptyStrings: boolean;

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
export function Required()
export function Required(properties: _RequiredAttribute)
export function Required(properties: _RequiredAttribute = {}) {
    let attribute = new RequiredAttribute();
    Object.assign(attribute, properties);
    return Reflect.metadata(RequiredAttribute, attribute);
}

export function TypewriterRequired(csParameters: string) {
    // TODO get extra properties
    return Required();
}
