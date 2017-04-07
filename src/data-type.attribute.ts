import { MdInputDirective } from '@angular/material';
import { parseCSParameters } from './parse-cs-parameters';
import { _ValidationAttribute, ValidationAttribute, AttributeRenderer } from './validation.attribute';
import { DisplayFormatAttribute } from './display-format.attribute';
import { DataTypeEnum } from './data-type';

export interface _DataTypeAttribute extends _ValidationAttribute {
    DataType?: DataTypeEnum;
    CustomDataType?: string;
    DisplayFormat?: DisplayFormatAttribute;
}

/**
 * Allows for clarification of the DataType represented by a given
 * property (such as DataType.PhoneNumber
 * or DataType.Url)
 */
export class DataTypeAttribute extends ValidationAttribute {

    public DataType: DataTypeEnum;

    public CustomDataType: string;

    public DisplayFormat: DisplayFormatAttribute;

    /**
     * Constructor that accepts a data type enumeration
     * @param dataType The DataType enum value indicating the type to apply.
     */
    constructor(dataType: DataTypeEnum)
    /**
     * Constructor that accepts the string name of a custom data type
     * @param customDataType The string name of the custom data type.
     */
    constructor(customDataType: string)
    constructor(param: DataTypeEnum | string) {
        super();
        if (typeof param == 'string') {
            this.DataType = DataTypeEnum.Custom;
            this.CustomDataType = param;
        } else {
            this.DataType = param;
        }

        let value: string;
        switch (this.DataType) {
            case DataTypeEnum.CreditCard:
                throw new Error('Not Implemented');
            case DataTypeEnum.Currency:
                throw new Error('Not Implemented');
            case DataTypeEnum.Custom:
                value = <string>param;
                break;
            case DataTypeEnum.Date:
                value = 'date';
                break;
            case DataTypeEnum.DateTime:
                value = 'datetime';
                break;
            case DataTypeEnum.Duration:
                throw new Error('Not Implemented');
            case DataTypeEnum.EmailAddress:
                value = 'email';
                break;
            case DataTypeEnum.Html:
                throw new Error('Not Implemented');
            case DataTypeEnum.ImageUrl:
                value = 'url';
                break;
            case DataTypeEnum.MultilineText:
                // TODO inforce textarea??
                throw new Error('Not Implemented');
            case DataTypeEnum.Password:
                value = 'password';
                break;
            case DataTypeEnum.PhoneNumber:
                value = 'tel';
                break;
            case DataTypeEnum.PostalCode:
                throw new Error('Not Implemented');
            case DataTypeEnum.Text:
                value = 'text';
                break;
            case DataTypeEnum.Time:
                value = 'time';
                break;
            case DataTypeEnum.Upload:
                value = 'file';
                break;
            case DataTypeEnum.Url:
                value = 'url';
                break;
            default:
                throw new Error('Not Implemented');
        }
        
    }
    // public RenderHTMLAttribute(element: HTMLInputElement)
    // public RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer)
    // public RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer, mdinput: MdInputDirective)
    // public RenderHTMLAttribute(element: HTMLInputElement, renderer?: AttributeRenderer, mdinput?: MdInputDirective): void {
    //     if (!!mdinput) {
    //         mdinput.type = this.value;
    //     } else {
    //         super.RenderHTMLAttribute(element, renderer, mdinput);
    //     }
    // }
}

export function DataType(dataType: DataTypeEnum)
export function DataType(customDataType: string)
export function DataType(dataType: DataTypeEnum, properties: _DataTypeAttribute)
export function DataType(customDataType: string, properties: _DataTypeAttribute)
export function DataType(param: DataTypeEnum | string, properties: _DataTypeAttribute = {}) {
    let attribute = new DataTypeAttribute(param as any);
    Object.assign(attribute, properties);
    return Reflect.metadata(DataTypeAttribute, attribute);
}

export function TypewriterDataType(csParameters: string) {
    let parameters = parseCSParameters(csParameters);
    let namespacePath = parameters.parameters[0].split('.');
    let dataType = namespacePath[namespacePath.length - 1];
    return Reflect.metadata(DataTypeAttribute, new DataTypeAttribute(DataTypeEnum[dataType]));
}
