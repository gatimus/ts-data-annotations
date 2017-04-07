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
var ValidationAttribute = (function (_super) {
    __extends(ValidationAttribute, _super);
    function ValidationAttribute(errorMessage) {
        var _this = _super.call(this) || this;
        if (typeof errorMessage == 'string') {
            _this.ErrorMessage = errorMessage;
        }
        if (typeof errorMessage == 'function') {
            _this.ErrorMessage = errorMessage();
        }
        return _this;
    }
    return ValidationAttribute;
}(Attribute));
export { ValidationAttribute };
//# sourceMappingURL=C:/Users/user/Source/Repos/ts-data-annotations/src/validation.attribute.js.map