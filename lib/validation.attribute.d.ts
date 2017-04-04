import { MdInputDirective } from '@angular/material';
import { Attribute } from './attribute';
export interface AttributeRenderer {
    setElementAttribute(renderElement: any, attributeName: string, attributeValue: string): void;
}
export declare abstract class ValidationAttribute extends Attribute {
    protected attribute: string;
    protected value: any;
    protected defaultRenderer: AttributeRenderer;
    constructor(attribute: string, value: any);
    RenderHTMLAttribute(element: HTMLInputElement): any;
    RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer): any;
    RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer, mdinput: MdInputDirective): any;
}
