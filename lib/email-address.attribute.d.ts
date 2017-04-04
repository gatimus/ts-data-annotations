import { DataTypeAttribute } from './data-type.attribute';
export declare class EmailAddressAttribute extends DataTypeAttribute {
    constructor();
}
export declare function EmailAddress(): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
export declare function TypewriterEmailAddress(csParameters: string): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
