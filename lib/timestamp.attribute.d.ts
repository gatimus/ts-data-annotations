import { Attribute } from './attribute';
/**
 * This attribute is used to mark a Timestamp member of a Type.
 */
export declare class TimestampAttribute extends Attribute {
}
/**
 * This attribute is used to mark a Timestamp member of a Type.
 */
export declare function Timestamp(): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
