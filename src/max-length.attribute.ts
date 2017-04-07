import { MdInputDirective } from '@angular/material';
import { parseCSParameters } from './parse-cs-parameters';
import { _ValidationAttribute, ValidationAttribute, AttributeRenderer } from './validation.attribute';

export interface _MaxLengthAttribute extends _ValidationAttribute {
    Length?: number;
}

/**
 * Specifies the maximum length of array/string data allowed in a property.
 */
export class MaxLengthAttribute extends ValidationAttribute {

    private readonly MaxAllowableLength: number = -1;

    /**
     * Gets the maximum allowable length of the array/string data.
     */
    public Length: number;
    
    /**
     * Initializes a new instance of the MaxLengthAttribute class.
     * The maximum allowable length supported by the database will be used.
     */
    constructor()
    /**
     * Initializes a new instance of the MaxLengthAttribute class.
     */
    constructor(length: number)
    constructor(length?: number) {
        super();
        this.Length = length == null ? this.MaxAllowableLength : length;
    }
    // public RenderHTMLAttribute(element: HTMLInputElement)
    // public RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer)
    // public RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer, mdinput: MdInputDirective)
    // public RenderHTMLAttribute(element: HTMLInputElement, renderer?: AttributeRenderer, mdinput?: MdInputDirective): void {
    //     if (!renderer) renderer = this.defaultRenderer;
    //     renderer.setElementAttribute(element, this.attribute, this.value);
    // }
}

export function MaxLength()
export function MaxLength(length: number)
export function MaxLength(length: number, properties: _MaxLengthAttribute)
export function MaxLength(length?: number, properties: _MaxLengthAttribute = {}) {
    let attribute;
    if (typeof length == 'number') {
        attribute = new MaxLengthAttribute(length);
    } else {
        attribute = new MaxLengthAttribute();
    }
    Object.assign(attribute, properties);
    return Reflect.metadata(MaxLengthAttribute, attribute);
}

export function TypewriterMaxLength(csParameters: string) {
    let parameters =  parseCSParameters(csParameters);
    if (parameters.parameters || parameters.parameters.length) {
        let length = parseInt(parameters.parameters[0], 10);
        return MaxLength(length);
    }
    return MaxLength();
}
