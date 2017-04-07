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
/**
 * Validation attribute to assert a string property, field or parameter does not exceed a maximum length
 */
var StringLengthAttribute = (function (_super) {
    __extends(StringLengthAttribute, _super);
    /**
     * Constructor that accepts the maximum length of the string.
     * @param maximumLength The maximum length, inclusive.  It may not be negative.
     */
    function StringLengthAttribute(maximumLength) {
        var _this = _super.call(this) || this;
        _this.MaximumLength = maximumLength;
        return _this;
    }
    return StringLengthAttribute;
}(ValidationAttribute));
export { StringLengthAttribute };
export function StringLength(maximumLength, properties) {
    if (properties === void 0) { properties = {}; }
    var attribute = new StringLengthAttribute(maximumLength);
    Object.assign(attribute, properties);
    return Reflect.metadata(StringLengthAttribute, attribute);
}
export function TypewriterStringLength(csParameters) {
    return StringLength(0);
}
//# sourceMappingURL=C:/Users/user/Source/Repos/ts-data-annotations/src/string-length.attribute.js.map