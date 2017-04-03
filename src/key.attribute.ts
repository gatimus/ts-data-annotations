import { Attribute } from './attribute';

/**
 * Used to mark one or more entity properties that provide the entity's unique identity
 */
export class KeyAttribute extends Attribute {}

/**
 * Used to mark one or more entity properties that provide the entity's unique identity
 */
export function Key() {
    return Reflect.metadata(KeyAttribute, new KeyAttribute());
}
