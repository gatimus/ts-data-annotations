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
 * DisplayAttribute is a general-purpose attribute to specify user-visible globalizable strings for types and members.
 * The string properties of this class can be used either as literals or as resource identifiers into a specified
 */
var DisplayAttribute = (function (_super) {
    __extends(DisplayAttribute, _super);
    /**
     * Default constructor for DisplayAttribute.  All associated string properties and methods will return null.
     */
    function DisplayAttribute() {
        return _super.call(this) || this;
    }
    return DisplayAttribute;
}(Attribute));
export { DisplayAttribute };
export function Display(properties) {
    if (properties === void 0) { properties = {}; }
    var attribute = new DisplayAttribute();
    Object.assign(attribute, properties);
    return Reflect.metadata(DisplayAttribute, attribute);
}
export function TypewriterDisplay(csParameters) {
    return Display();
}
//# sourceMappingURL=C:/Users/user/Source/Repos/ts-data-annotations/src/display.attribute.js.map