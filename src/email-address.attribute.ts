import { MdInputDirective } from '@angular/material';
import { DataTypeAttribute } from './data-type.attribute';
import { DataType } from './data-type';

export class EmailAddressAttribute  extends DataTypeAttribute {
    constructor() {
        super(DataType.EmailAddress);
    }
}

export function EmailAddress() {
    return Reflect.metadata(EmailAddressAttribute, new EmailAddressAttribute());
}

export function TypeWriterEmailAddress(csParameters: string) {
    // TODO get extra properties
    return EmailAddress();
}
