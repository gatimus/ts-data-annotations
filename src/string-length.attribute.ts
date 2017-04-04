
export class StringLengthAttribute {

}

export function StringLength() {
    return Reflect.metadata(StringLengthAttribute, new StringLengthAttribute());
}

export function TypewriterStringLength(csParameters: string) {
    return StringLength();
}
