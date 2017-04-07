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
var DisplayFormatAttribute = (function (_super) {
    __extends(DisplayFormatAttribute, _super);
    function DisplayFormatAttribute() {
        var _this = _super.call(this) || this;
        _this.ConvertEmptyStringToNull = true;
        return _this;
    }
    return DisplayFormatAttribute;
}(Attribute));
export { DisplayFormatAttribute };
export function DisplayFormat(properties) {
    if (properties === void 0) { properties = {}; }
    var attribute = new DisplayFormatAttribute();
    Object.assign(attribute, properties);
    return Reflect.metadata(DisplayFormatAttribute, attribute);
}
//# sourceMappingURL=C:/Users/user/Source/Repos/ts-data-annotations/src/display-format.attribute.js.map