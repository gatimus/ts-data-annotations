/**
 * Validation attribute to assert a string property, field or parameter does not exceed a maximum length
 */
var StringLengthAttribute = (function () {
    /**
     * Constructor that accepts the maximum length of the string.
     * @param maximumLength The maximum length, inclusive.  It may not be negative.
     */
    function StringLengthAttribute(maximumLength) {
        this.MaximumLength = maximumLength;
    }
    return StringLengthAttribute;
}());
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
//# sourceMappingURL=C:/Users/User/Source/Repos/ts-data-annotations/src/string-length.attribute.js.map