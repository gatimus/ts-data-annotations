import { Attribute } from './attribute';

/**
 * This attribute is used to mark a Timestamp member of a Type. 
 */
export class TimestampAttribute extends Attribute {}

/**
 * This attribute is used to mark a Timestamp member of a Type. 
 */
export function Timestamp() {
    return Reflect.metadata(TimestampAttribute, new TimestampAttribute());
}