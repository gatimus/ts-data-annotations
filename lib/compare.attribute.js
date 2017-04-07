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
import { ValidationAttribute } from './validation.attribute';
var CompareAttribute = (function (_super) {
    __extends(CompareAttribute, _super);
    function CompareAttribute(otherProperty) {
        var _this = _super.call(this, '', '') || this;
        _this.OtherProperty = otherProperty;
        return _this;
    }
    return CompareAttribute;
}(ValidationAttribute));
export { CompareAttribute };
export function Compare(otherProperty, properties) {
    if (properties === void 0) { properties = {}; }
    var attribute = new CompareAttribute(otherProperty);
    Object.assign(attribute, properties);
    return Reflect.metadata(CompareAttribute, attribute);
}
export function TypewriterCompare(csParameters) {
    return Compare('');
}
//# sourceMappingURL=C:/Users/User/Source/Repos/ts-data-annotations/src/compare.attribute.js.map