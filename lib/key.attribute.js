var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Attribute } from './attribute';
/**
 * Used to mark one or more entity properties that provide the entity's unique identity
 */
var KeyAttribute = (function (_super) {
    __extends(KeyAttribute, _super);
    function KeyAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return KeyAttribute;
}(Attribute));
export { KeyAttribute };
/**
 * Used to mark one or more entity properties that provide the entity's unique identity
 */
export function Key() {
    return Reflect.metadata(KeyAttribute, new KeyAttribute());
}
//# sourceMappingURL=C:/Users/user/Source/Repos/ts-data-annotations/src/key.attribute.js.map