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
 * This attribute is used to mark a Timestamp member of a Type.
 */
var TimestampAttribute = (function (_super) {
    __extends(TimestampAttribute, _super);
    function TimestampAttribute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TimestampAttribute;
}(Attribute));
export { TimestampAttribute };
/**
 * This attribute is used to mark a Timestamp member of a Type.
 */
export function Timestamp() {
    return Reflect.metadata(TimestampAttribute, new TimestampAttribute());
}
//# sourceMappingURL=C:/Users/User/Source/Repos/ts-data-annotations/src/timestamp.attribute.js.map