export var DataTypeEnum;
(function (DataTypeEnum) {
    /**
     * Custom data type, not one of the static data types we know
     */
    DataTypeEnum[DataTypeEnum["Custom"] = 0] = "Custom";
    /**
     * DateTime data type
     */
    DataTypeEnum[DataTypeEnum["DateTime"] = 1] = "DateTime";
    /**
     * Date data type
     */
    DataTypeEnum[DataTypeEnum["Date"] = 2] = "Date";
    /**
     * Time data type
     */
    DataTypeEnum[DataTypeEnum["Time"] = 3] = "Time";
    /**
     * Duration data type
     */
    DataTypeEnum[DataTypeEnum["Duration"] = 4] = "Duration";
    /**
     * Phone number data type
     */
    DataTypeEnum[DataTypeEnum["PhoneNumber"] = 5] = "PhoneNumber";
    /**
     * Currency data type
     */
    DataTypeEnum[DataTypeEnum["Currency"] = 6] = "Currency";
    /**
     * Plain text data type
     */
    DataTypeEnum[DataTypeEnum["Text"] = 7] = "Text";
    /**
     * Html data type
     */
    DataTypeEnum[DataTypeEnum["Html"] = 8] = "Html";
    /**
     * Multiline text data type
     */
    DataTypeEnum[DataTypeEnum["MultilineText"] = 9] = "MultilineText";
    /**
     * Email address data type
     */
    DataTypeEnum[DataTypeEnum["EmailAddress"] = 10] = "EmailAddress";
    /**
     * Password data type -- do not echo in UI
     */
    DataTypeEnum[DataTypeEnum["Password"] = 11] = "Password";
    /**
     * URL data type
     */
    DataTypeEnum[DataTypeEnum["Url"] = 12] = "Url";
    /**
     * URL to an Image -- to be displayed as an image instead of text
     */
    DataTypeEnum[DataTypeEnum["ImageUrl"] = 13] = "ImageUrl";
    /**
     * Credit card data type
     */
    DataTypeEnum[DataTypeEnum["CreditCard"] = 14] = "CreditCard";
    /**
     * Postal code data type
     */
    DataTypeEnum[DataTypeEnum["PostalCode"] = 15] = "PostalCode";
    /**
     * File upload data type
     */
    DataTypeEnum[DataTypeEnum["Upload"] = 16] = "Upload";
})(DataTypeEnum || (DataTypeEnum = {}));
//# sourceMappingURL=C:/Users/user/Source/Repos/ts-data-annotations/src/data-type.js.map