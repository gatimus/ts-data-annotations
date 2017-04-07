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
 * Validation attribute to indicate that a property field or parameter is required.
 */
var RequiredAttribute = (function (_super) {
    __extends(RequiredAttribute, _super);
    /**
     * Default constructor.
     */
    function RequiredAttribute() {
        return _super.call(this, 'required', true) || this;
    }
    RequiredAttribute.prototype.RenderHTMLAttribute = function (element, renderer, mdinput) {
        if (!!mdinput) {
            mdinput.required = true;
        }
        else {
            _super.prototype.RenderHTMLAttribute.call(this, element, renderer, mdinput);
        }
    };
    return RequiredAttribute;
}(ValidationAttribute));
export { RequiredAttribute };
export function Required(properties) {
    if (properties === void 0) { properties = {}; }
    var attribute = new RequiredAttribute();
    Object.assign(attribute, properties);
    return Reflect.metadata(RequiredAttribute, attribute);
}
export function TypewriterRequired(csParameters) {
    // TODO get extra properties
    return Required();
}
//# sourceMappingURL=C:/Users/User/Source/Repos/ts-data-annotations/src/required.attribute.js.map