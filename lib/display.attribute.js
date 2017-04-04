var DisplayAttribute = (function () {
    function DisplayAttribute() {
    }
    return DisplayAttribute;
}());
export { DisplayAttribute };
export function Display() {
    return Reflect.metadata(DisplayAttribute, new DisplayAttribute());
}
export function TypewriterDisplay(csParameters) {
    return Display();
}
//# sourceMappingURL=C:/Users/User/Source/Repos/ts-data-annotations/src/display.attribute.js.map