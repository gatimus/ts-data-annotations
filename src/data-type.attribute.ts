import { MdInputDirective } from '@angular/material';
import { parseCSParameters } from './parse-cs-parameters';
import { ValidationAttribute, AttributeRenderer } from './validation.attribute';
import { DataType } from './data-type';

/**
 * Allows for clarification of the DataType represented by a given
 * property (such as DataType.PhoneNumber
 * or DataType.Url)
 */
export class DataTypeAttribute extends ValidationAttribute {
    /**
     * Constructor that accepts a data type enumeration
     * @param dataType The DataType enum value indicating the type to apply.
     */
    constructor(dataType: DataType)
    /**
     * Constructor that accepts the string name of a custom data type
     * @param customDataType The string name of the custom data type.
     */
    constructor(customDataType: string)
    constructor(param: DataType | string) {
        let dataType: DataType;
        let value: string;
        if (typeof param == 'string') {
            dataType = DataType.Custom;
        } else {
            dataType = param;
        }
        switch (dataType) {
            case DataType.CreditCard:
                throw new Error('Not Implemented');
            case DataType.Currency:
                throw new Error('Not Implemented');
            case DataType.Custom:
                value = <string>param;
                break;
            case DataType.Date:
                value = 'date';
                break;
            case DataType.DateTime:
                value = 'datetime';
                break;
            case DataType.Duration:
                throw new Error('Not Implemented');
            case DataType.EmailAddress:
                value = 'email';
                break;
            case DataType.Html:
                throw new Error('Not Implemented');
            case DataType.ImageUrl:
                value = 'url';
                break;
            case DataType.MultilineText:
                // TODO inforce textarea??
                throw new Error('Not Implemented');
            case DataType.Password:
                value = 'password';
                break;
            case DataType.PhoneNumber:
                value = 'tel';
                break;
            case DataType.PostalCode:
                throw new Error('Not Implemented');
            case DataType.Text:
                value = 'text';
                break;
            case DataType.Time:
                value = 'time';
                break;
            case DataType.Upload:
                value = 'file';
                break;
            case DataType.Url:
                value = 'url';
                break;
            default:
                throw new Error('Not Implemented');
        }
        super('type', value);
    }
    public RenderHTMLAttribute(element: HTMLInputElement)
    public RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer)
    public RenderHTMLAttribute(element: HTMLInputElement, renderer: AttributeRenderer, mdinput: MdInputDirective)
    public RenderHTMLAttribute(element: HTMLInputElement, renderer?: AttributeRenderer, mdinput?: MdInputDirective): void {
        if (!!mdinput) {
            mdinput.type = this.value;
        } else {
            super.RenderHTMLAttribute(element, renderer, mdinput);
        }
    }
}

// TODO DataType name conflict
// export function DataType(dataType: DataType)
// export function DataType(customDataType: string)
// export function DataType(param: DataType | string) {
//     return Reflect.metadata(DataTypeAttribute, new DataTypeAttribute(param));
// }

export function TypewriterDataType(csParameters: string) {
    let parameters = parseCSParameters(csParameters);
    let namespacePath = parameters.parameters[0].split('.');
    let dataType = namespacePath[namespacePath.length - 1];
    return Reflect.metadata(DataTypeAttribute, new DataTypeAttribute(DataType[dataType]));
}
