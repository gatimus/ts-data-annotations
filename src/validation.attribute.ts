import { MdInputDirective } from '@angular/material';
import { Attribute } from './attribute';

export interface AttributeRenderer {
    setElementAttribute(renderElement: any, attributeName: string, attributeValue: string): void;
}

export abstract class ValidationAttribute extends Attribute {
    protected attribute: string;
    protected value: any;
    protected defaultRenderer: AttributeRenderer = {
        setElementAttribute: (renderElement: any, attributeName: string, attributeValue: string) => {
            renderElement[attributeName] = attributeValue;
        }
    };
    constructor(attribute: string, value: any) {
        super();
        this.attribute = attribute;
        this.value = value;
    }
    public RenderHTMLAttribute(element: HTMLInputElement)
    public RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer)
    public RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer, mdinput: MdInputDirective)
    public RenderHTMLAttribute(element: HTMLInputElement, renderer?: AttributeRenderer, mdinput?: MdInputDirective): void {
        if (!renderer) renderer = this.defaultRenderer;
        renderer.setElementAttribute(element, this.attribute, this.value);
        if (!!mdinput) mdinput[this.attribute] = this.value;
    }
} 
