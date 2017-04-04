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
    function ValidationAttribute(attribute, value) {
        var _this = _super.call(this) || this;
        _this.defaultRenderer = {
            setElementAttribute: function (renderElement, attributeName, attributeValue) {
                renderElement[attributeName] = attributeValue;
            }
        };
        _this.attribute = attribute;
        _this.value = value;
        return _this;
    }
    ValidationAttribute.prototype.RenderHTMLAttribute = function (element, renderer, mdinput) {
        if (!renderer)
            renderer = this.defaultRenderer;
        renderer.setElementAttribute(element, this.attribute, this.value);
        if (!!mdinput)
            mdinput[this.attribute] = this.value;
    };
    return ValidationAttribute;
}(Attribute));
export { ValidationAttribute };
//# sourceMappingURL=C:/Users/User/Source/Repos/ts-data-annotations/src/validation.attribute.js.map