import { MdInputDirective } from '@angular/material';
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

export abstract class ValidationAttribute extends Attribute {

    public RequiresValidationContext: boolean;

    public ErrorMessage: string;

    public ErrorMessageResourceName: string;

    public ErrorMessageResourceType: any;

    constructor()
    constructor(errorMessage: string)
    constructor(errorMessageAccessor: () => string)
    constructor(errorMessage?: any) {
        super();
        if(typeof errorMessage == 'string') {
            this.ErrorMessage = errorMessage;
        }
        if(typeof errorMessage == 'function') {
            this.ErrorMessage = errorMessage();
        }
    }
    
    // protected attribute: string;
    // protected value: any;
    // protected defaultRenderer: AttributeRenderer = {
    //     setElementAttribute: (renderElement: any, attributeName: string, attributeValue: string) => {
    //         renderElement[attributeName] = attributeValue;
    //     }
    // };
    // constructor(attribute: string, value: any) {
    //     super();
    //     this.attribute = attribute;
    //     this.value = value;
    // }
    // public RenderHTMLAttribute(element: HTMLInputElement)
    // public RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer)
    // public RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer, mdinput: MdInputDirective)
    // public RenderHTMLAttribute(element: HTMLInputElement, renderer?: AttributeRenderer, mdinput?: MdInputDirective): void {
    //     if (!renderer) renderer = this.defaultRenderer;
    //     renderer.setElementAttribute(element, this.attribute, this.value);
    //     if (!!mdinput) mdinput[this.attribute] = this.value;
    // }
} 
