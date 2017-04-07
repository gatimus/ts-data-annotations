import { _ValidationAttribute, ValidationAttribute } from './validation.attribute';
import { DisplayFormatAttribute } from './display-format.attribute';
import { DataType } from './data-type';
export interface _DataTypeAttribute extends _ValidationAttribute {
    DataType?: DataType;
    CustomDataType?: string;
    DisplayFormat?: DisplayFormatAttribute;
}
/**
 * Allows for clarification of the DataType represented by a given
 * property (such as DataType.PhoneNumber
 * or DataType.Url)
 */
export declare class DataTypeAttribute extends ValidationAttribute {
    DataType: DataType;
    CustomDataType: string;
    DisplayFormat: DisplayFormatAttribute;
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
}
export declare function TypewriterDataType(csParameters: string): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
