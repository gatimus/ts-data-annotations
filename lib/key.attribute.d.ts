import { Attribute } from './attribute';
/**
 * Used to mark one or more entity properties that provide the entity's unique identity
 */
export declare class KeyAttribute extends Attribute {
}
/**
 * Used to mark one or more entity properties that provide the entity's unique identity
 */
export declare function Key(): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
