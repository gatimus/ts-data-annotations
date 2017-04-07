import { MdInputDirective } from '@angular/material';
import { DataTypeAttribute } from './data-type.attribute';
import { DataTypeEnum } from './data-type';

export class EmailAddressAttribute  extends DataTypeAttribute {
    constructor() {
        super(DataTypeEnum.EmailAddress);
    }
}

export function EmailAddress() {
    return Reflect.metadata(EmailAddressAttribute, new EmailAddressAttribute());
}

export function TypewriterEmailAddress(csParameters: string) {
    // TODO get extra properties
    return EmailAddress();
}
