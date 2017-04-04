
export class CompareAttribute {

}

export function Compare() {
    return Reflect.metadata(CompareAttribute, new CompareAttribute());
}

export function TypewriterCompare(csParameters: string) {
    return Compare();
}
