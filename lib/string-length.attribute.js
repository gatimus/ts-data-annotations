var StringLengthAttribute = (function () {
    function StringLengthAttribute() {
    }
    return StringLengthAttribute;
}());
export { StringLengthAttribute };
export function StringLength() {
    return Reflect.metadata(StringLengthAttribute, new StringLengthAttribute());
}
export function TypewriterStringLength(csParameters) {
    return StringLength();
}
//# sourceMappingURL=C:/Users/User/Source/Repos/ts-data-annotations/src/string-length.attribute.js.map