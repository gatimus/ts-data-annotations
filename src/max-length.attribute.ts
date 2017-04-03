import { MdInputDirective } from '@angular/material';
import { ValidationAttribute, AttributeRenderer } from './validation.attribute';

/**
 * Specifies the maximum length of array/string data allowed in a property.
 */
export class MaxLengthAttribute extends ValidationAttribute {
    private readonly MaxAllowableLength: number = -1;
    /**
     * Gets the maximum allowable length of the array/string data.
     */
    public get Length(): number {
        return this.value;
    };
    public set Length(length: number) {
        this.value = length;
    };
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
        super('maxlength', length);
        this.Length = length == null ? this.MaxAllowableLength : length;
    }
    public RenderHTMLAttribute(element: HTMLInputElement)
    public RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer)
    public RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer, mdinput: MdInputDirective)
    public RenderHTMLAttribute(element: HTMLInputElement, renderer?: AttributeRenderer, mdinput?: MdInputDirective): void {
        if (!renderer) renderer = this.defaultRenderer;
        renderer.setElementAttribute(element, this.attribute, this.value);
    }
}

/**
 * Specifies the maximum length of array/string data allowed in a property.
 */
export function MaxLength()
/**
 * Specifies the maximum length of array/string data allowed in a property.
 */
export function MaxLength(length: number)
export function MaxLength(length?: number) {
    return Reflect.metadata(MaxLengthAttribute, new MaxLengthAttribute(length));
}
