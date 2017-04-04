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
 * Specifies the maximum length of array/string data allowed in a property.
 */
var MaxLengthAttribute = (function (_super) {
    __extends(MaxLengthAttribute, _super);
    function MaxLengthAttribute(length) {
        var _this = _super.call(this, 'maxlength', length) || this;
        _this.MaxAllowableLength = -1;
        _this.Length = length == null ? _this.MaxAllowableLength : length;
        return _this;
    }
    Object.defineProperty(MaxLengthAttribute.prototype, "Length", {
        /**
         * Gets the maximum allowable length of the array/string data.
         */
        get: function () {
            return this.value;
        },
        set: function (length) {
            this.value = length;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    MaxLengthAttribute.prototype.RenderHTMLAttribute = function (element, renderer, mdinput) {
        if (!renderer)
            renderer = this.defaultRenderer;
        renderer.setElementAttribute(element, this.attribute, this.value);
    };
    return MaxLengthAttribute;
}(ValidationAttribute));
export { MaxLengthAttribute };
export function MaxLength(length) {
    return Reflect.metadata(MaxLengthAttribute, new MaxLengthAttribute(length));
}
//# sourceMappingURL=C:/Users/User/Source/Repos/ts-data-annotations/src/max-length.attribute.js.map