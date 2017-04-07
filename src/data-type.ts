
export enum DataTypeEnum {
    /**
     * Custom data type, not one of the static data types we know
     */
    Custom,

    /**
     * DateTime data type
     */
    DateTime,

    /**
     * Date data type
     */
    Date,

    /**
     * Time data type
     */
    Time,

    /**
     * Duration data type
     */
    Duration,

    /**
     * Phone number data type
     */
    PhoneNumber,

    /**
     * Currency data type
     */
    Currency,

    /**
     * Plain text data type
     */
    Text,

    /**
     * Html data type
     */
    Html,

    /**
     * Multiline text data type
     */
    MultilineText,

    /**
     * Email address data type
     */
    EmailAddress,

    /**
     * Password data type -- do not echo in UI
     */
    Password,

    /**
     * URL data type
     */
    Url,

    /**
     * URL to an Image -- to be displayed as an image instead of text
     */
    ImageUrl,

    /**
     * Credit card data type
     */
    CreditCard,

    /**
     * Postal code data type
     */
    PostalCode,

    /**
     * File upload data type
     */
    Upload
}
