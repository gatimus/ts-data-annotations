import { _ValidationAttribute, ValidationAttribute } from './validation.attribute';
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
export declare class DataTypeAttribute extends ValidationAttribute {
    DataType: DataTypeEnum;
    CustomDataType: string;
    DisplayFormat: DisplayFormatAttribute;
    /**
     * Constructor that accepts a data type enumeration
     * @param dataType The DataType enum value indicating the type to apply.
     */
    constructor(dataType: DataTypeEnum);
    /**
     * Constructor that accepts the string name of a custom data type
     * @param customDataType The string name of the custom data type.
     */
    constructor(customDataType: string);
}
export declare function DataType(dataType: DataTypeEnum): any;
export declare function DataType(customDataType: string): any;
export declare function DataType(dataType: DataTypeEnum, properties: _DataTypeAttribute): any;
export declare function DataType(customDataType: string, properties: _DataTypeAttribute): any;
export declare function TypewriterDataType(csParameters: string): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
