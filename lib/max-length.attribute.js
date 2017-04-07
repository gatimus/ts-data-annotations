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
import { parseCSParameters } from './parse-cs-parameters';
import { ValidationAttribute } from './validation.attribute';
/**
 * Specifies the maximum length of array/string data allowed in a property.
 */
var MaxLengthAttribute = (function (_super) {
    __extends(MaxLengthAttribute, _super);
    function MaxLengthAttribute(length) {
        var _this = _super.call(this) || this;
        _this.MaxAllowableLength = -1;
        _this.Length = length == null ? _this.MaxAllowableLength : length;
        return _this;
    }
    return MaxLengthAttribute;
}(ValidationAttribute));
export { MaxLengthAttribute };
export function MaxLength(length, properties) {
    if (properties === void 0) { properties = {}; }
    var attribute;
    if (typeof length == 'number') {
        attribute = new MaxLengthAttribute(length);
    }
    else {
        attribute = new MaxLengthAttribute();
    }
    Object.assign(attribute, properties);
    return Reflect.metadata(MaxLengthAttribute, attribute);
}
export function TypewriterMaxLength(csParameters) {
    var parameters = parseCSParameters(csParameters);
    if (parameters.parameters || parameters.parameters.length) {
        var length_1 = parseInt(parameters.parameters[0], 10);
        return MaxLength(length_1);
    }
    return MaxLength();
}
//# sourceMappingURL=C:/Users/user/Source/Repos/ts-data-annotations/src/max-length.attribute.js.map