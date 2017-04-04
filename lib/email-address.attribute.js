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
import { DataTypeAttribute } from './data-type.attribute';
import { DataType } from './data-type';
var EmailAddressAttribute = (function (_super) {
    __extends(EmailAddressAttribute, _super);
    function EmailAddressAttribute() {
        return _super.call(this, DataType.EmailAddress) || this;
    }
    return EmailAddressAttribute;
}(DataTypeAttribute));
export { EmailAddressAttribute };
export function EmailAddress() {
    return Reflect.metadata(EmailAddressAttribute, new EmailAddressAttribute());
}
export function TypeWriterEmailAddress(csParameters) {
    // TODO get extra properties
    return EmailAddress();
}
//# sourceMappingURL=C:/Users/User/Source/Repos/ts-data-annotations/src/email-address.attribute.js.map