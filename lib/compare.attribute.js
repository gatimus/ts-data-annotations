var CompareAttribute = (function () {
    function CompareAttribute() {
    }
    return CompareAttribute;
}());
export { CompareAttribute };
export function Compare() {
    return Reflect.metadata(CompareAttribute, new CompareAttribute());
}
export function TypewriterCompare(csParameters) {
    return Compare();
}
//# sourceMappingURL=C:/Users/User/Source/Repos/ts-data-annotations/src/compare.attribute.js.map