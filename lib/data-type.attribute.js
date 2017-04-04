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
import { ValidationAttribute } from './validation.attribute';
import { DataType } from './data-type';
/**
 * Allows for clarification of the DataType represented by a given
 * property (such as DataType.PhoneNumber
 * or DataType.Url)
 */
var DataTypeAttribute = (function (_super) {
    __extends(DataTypeAttribute, _super);
    function DataTypeAttribute(param) {
        var _this = this;
        var dataType;
        var value;
        if (typeof param == 'string') {
            dataType = DataType.Custom;
        }
        else {
            dataType = param;
        }
        switch (dataType) {
            case DataType.CreditCard:
                throw new Error('Not Implemented');
            case DataType.Currency:
                throw new Error('Not Implemented');
            case DataType.Custom:
                value = param;
                break;
            case DataType.Date:
                value = 'date';
                break;
            case DataType.DateTime:
                value = 'datetime';
                break;
            case DataType.Duration:
                throw new Error('Not Implemented');
            case DataType.EmailAddress:
                value = 'email';
                break;
            case DataType.Html:
                throw new Error('Not Implemented');
            case DataType.ImageUrl:
                value = 'url';
                break;
            case DataType.MultilineText:
                // TODO inforce textarea??
                throw new Error('Not Implemented');
            case DataType.Password:
                value = 'password';
                break;
            case DataType.PhoneNumber:
                value = 'tel';
                break;
            case DataType.PostalCode:
                throw new Error('Not Implemented');
            case DataType.Text:
                value = 'text';
                break;
            case DataType.Time:
                value = 'time';
                break;
            case DataType.Upload:
                value = 'file';
                break;
            case DataType.Url:
                value = 'url';
                break;
            default:
                throw new Error('Not Implemented');
        }
        _this = _super.call(this, 'type', value) || this;
        return _this;
    }
    DataTypeAttribute.prototype.RenderHTMLAttribute = function (element, renderer, mdinput) {
        if (!!mdinput) {
            mdinput.type = this.value;
        }
        else {
            _super.prototype.RenderHTMLAttribute.call(this, element, renderer, mdinput);
        }
    };
    return DataTypeAttribute;
}(ValidationAttribute));
export { DataTypeAttribute };
// TODO DataType name conflict
// export function DataType(dataType: DataType)
// export function DataType(customDataType: string)
// export function DataType(param: DataType | string) {
//     return Reflect.metadata(DataTypeAttribute, new DataTypeAttribute(param));
// }
//# sourceMappingURL=C:/Users/User/Source/Repos/ts-data-annotations/src/data-type.attribute.js.map