export var DataType;
(function (DataType) {
    /**
     * Custom data type, not one of the static data types we know
     */
    DataType[DataType["Custom"] = 0] = "Custom";
    /**
     * DateTime data type
     */
    DataType[DataType["DateTime"] = 1] = "DateTime";
    /**
     * Date data type
     */
    DataType[DataType["Date"] = 2] = "Date";
    /**
     * Time data type
     */
    DataType[DataType["Time"] = 3] = "Time";
    /**
     * Duration data type
     */
    DataType[DataType["Duration"] = 4] = "Duration";
    /**
     * Phone number data type
     */
    DataType[DataType["PhoneNumber"] = 5] = "PhoneNumber";
    /**
     * Currency data type
     */
    DataType[DataType["Currency"] = 6] = "Currency";
    /**
     * Plain text data type
     */
    DataType[DataType["Text"] = 7] = "Text";
    /**
     * Html data type
     */
    DataType[DataType["Html"] = 8] = "Html";
    /**
     * Multiline text data type
     */
    DataType[DataType["MultilineText"] = 9] = "MultilineText";
    /**
     * Email address data type
     */
    DataType[DataType["EmailAddress"] = 10] = "EmailAddress";
    /**
     * Password data type -- do not echo in UI
     */
    DataType[DataType["Password"] = 11] = "Password";
    /**
     * URL data type
     */
    DataType[DataType["Url"] = 12] = "Url";
    /**
     * URL to an Image -- to be displayed as an image instead of text
     */
    DataType[DataType["ImageUrl"] = 13] = "ImageUrl";
    /**
     * Credit card data type
     */
    DataType[DataType["CreditCard"] = 14] = "CreditCard";
    /**
     * Postal code data type
     */
    DataType[DataType["PostalCode"] = 15] = "PostalCode";
    /**
     * File upload data type
     */
    DataType[DataType["Upload"] = 16] = "Upload";
})(DataType || (DataType = {}));
//# sourceMappingURL=C:/Users/user/Source/Repos/ts-data-annotations/src/data-type.js.map