
export class DisplayAttribute {

}

export function Display() {
    return Reflect.metadata(DisplayAttribute, new DisplayAttribute());
}

export function TypewriterDisplay(csParameters: string) {
    return Display();
}
