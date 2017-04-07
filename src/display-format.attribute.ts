import { Attribute } from './attribute';

export interface _DisplayFormatAttribute {
    DataFormatString?: string;
    NullDisplayText?: string;
    ConvertEmptyStringToNull?: boolean;
    ApplyFormatInEditMode?: boolean;
}

export class DisplayFormatAttribute extends Attribute implements _DisplayFormatAttribute {

    public DataFormatString: string;
    public NullDisplayText: string;
    public ConvertEmptyStringToNull: boolean;
    public ApplyFormatInEditMode: boolean;

    constructor() {
        super();
        this.ConvertEmptyStringToNull = true;
    }

}

export function DisplayFormat()
export function DisplayFormat(properties: _DisplayFormatAttribute)
export function DisplayFormat(properties: _DisplayFormatAttribute = {}) {
    let attribute = new DisplayFormatAttribute();
    Object.assign(attribute, properties);
    return Reflect.metadata(DisplayFormatAttribute, attribute);
}
