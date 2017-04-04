import { MdInputDirective } from '@angular/material';
import { ValidationAttribute, AttributeRenderer } from './validation.attribute';
import { DataType } from './data-type';
/**
 * Allows for clarification of the DataType represented by a given
 * property (such as DataType.PhoneNumber
 * or DataType.Url)
 */
export declare class DataTypeAttribute extends ValidationAttribute {
    /**
     * Constructor that accepts a data type enumeration
     * @param dataType The DataType enum value indicating the type to apply.
     */
    constructor(dataType: DataType);
    /**
     * Constructor that accepts the string name of a custom data type
     * @param customDataType The string name of the custom data type.
     */
    constructor(customDataType: string);
    RenderHTMLAttribute(element: HTMLInputElement): any;
    RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer): any;
    RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer, mdinput: MdInputDirective): any;
}
