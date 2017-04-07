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
import { parseCSParameters } from './parse-cs-parameters';
import { ValidationAttribute } from './validation.attribute';
import { DataTypeEnum } from './data-type';
/**
 * Allows for clarification of the DataType represented by a given
 * property (such as DataType.PhoneNumber
 * or DataType.Url)
 */
var DataTypeAttribute = (function (_super) {
    __extends(DataTypeAttribute, _super);
    function DataTypeAttribute(param) {
        var _this = _super.call(this) || this;
        if (typeof param == 'string') {
            _this.DataType = DataTypeEnum.Custom;
            _this.CustomDataType = param;
        }
        else {
            _this.DataType = param;
        }
        var value;
        switch (_this.DataType) {
            case DataTypeEnum.CreditCard:
                throw new Error('Not Implemented');
            case DataTypeEnum.Currency:
                throw new Error('Not Implemented');
            case DataTypeEnum.Custom:
                value = param;
                break;
            case DataTypeEnum.Date:
                value = 'date';
                break;
            case DataTypeEnum.DateTime:
                value = 'datetime';
                break;
            case DataTypeEnum.Duration:
                throw new Error('Not Implemented');
            case DataTypeEnum.EmailAddress:
                value = 'email';
                break;
            case DataTypeEnum.Html:
                throw new Error('Not Implemented');
            case DataTypeEnum.ImageUrl:
                value = 'url';
                break;
            case DataTypeEnum.MultilineText:
                // TODO inforce textarea??
                throw new Error('Not Implemented');
            case DataTypeEnum.Password:
                value = 'password';
                break;
            case DataTypeEnum.PhoneNumber:
                value = 'tel';
                break;
            case DataTypeEnum.PostalCode:
                throw new Error('Not Implemented');
            case DataTypeEnum.Text:
                value = 'text';
                break;
            case DataTypeEnum.Time:
                value = 'time';
                break;
            case DataTypeEnum.Upload:
                value = 'file';
                break;
            case DataTypeEnum.Url:
                value = 'url';
                break;
            default:
                throw new Error('Not Implemented');
        }
        return _this;
    }
    return DataTypeAttribute;
}(ValidationAttribute));
export { DataTypeAttribute };
export function DataType(param, properties) {
    if (properties === void 0) { properties = {}; }
    var attribute = new DataTypeAttribute(param);
    Object.assign(attribute, properties);
    return Reflect.metadata(DataTypeAttribute, attribute);
}
export function TypewriterDataType(csParameters) {
    var parameters = parseCSParameters(csParameters);
    var namespacePath = parameters.parameters[0].split('.');
    var dataType = namespacePath[namespacePath.length - 1];
    return Reflect.metadata(DataTypeAttribute, new DataTypeAttribute(DataTypeEnum[dataType]));
}
//# sourceMappingURL=C:/Users/user/Source/Repos/ts-data-annotations/src/data-type.attribute.js.map