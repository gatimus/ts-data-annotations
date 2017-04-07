import { _ValidationAttribute, ValidationAttribute, AttributeRenderer } from './validation.attribute';

export interface _CompareAttribute extends _ValidationAttribute {
    OtherProperty?: string;
    OtherPropertyDisplayName?: string;
}

export class CompareAttribute extends ValidationAttribute {

    public OtherProperty: string;

    public OtherPropertyDisplayName: string;

    constructor(otherProperty: string) {
        super();
        this.OtherProperty = otherProperty;
    }

}

export function Compare(otherProperty: string)
export function Compare(otherProperty: string, properties: _CompareAttribute)
export function Compare(otherProperty: string, properties: _CompareAttribute = {}) {
    let attribute = new CompareAttribute(otherProperty);
    Object.assign(attribute, properties);
    return Reflect.metadata(CompareAttribute, attribute);
}

export function TypewriterCompare(csParameters: string) {
    return Compare('');
}
