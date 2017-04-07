import { Attribute } from './attribute';
export interface _DisplayFormatAttribute {
    DataFormatString?: string;
    NullDisplayText?: string;
    ConvertEmptyStringToNull?: boolean;
    ApplyFormatInEditMode?: boolean;
}
export declare class DisplayFormatAttribute extends Attribute implements _DisplayFormatAttribute {
    DataFormatString: string;
    NullDisplayText: string;
    ConvertEmptyStringToNull: boolean;
    ApplyFormatInEditMode: boolean;
    constructor();
}
export declare function DisplayFormat(): any;
export declare function DisplayFormat(properties: _DisplayFormatAttribute): any;
