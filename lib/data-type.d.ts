export declare enum DataType {
    /**
     * Custom data type, not one of the static data types we know
     */
    Custom = 0,
    /**
     * DateTime data type
     */
    DateTime = 1,
    /**
     * Date data type
     */
    Date = 2,
    /**
     * Time data type
     */
    Time = 3,
    /**
     * Duration data type
     */
    Duration = 4,
    /**
     * Phone number data type
     */
    PhoneNumber = 5,
    /**
     * Currency data type
     */
    Currency = 6,
    /**
     * Plain text data type
     */
    Text = 7,
    /**
     * Html data type
     */
    Html = 8,
    /**
     * Multiline text data type
     */
    MultilineText = 9,
    /**
     * Email address data type
     */
    EmailAddress = 10,
    /**
     * Password data type -- do not echo in UI
     */
    Password = 11,
    /**
     * URL data type
     */
    Url = 12,
    /**
     * URL to an Image -- to be displayed as an image instead of text
     */
    ImageUrl = 13,
    /**
     * Credit card data type
     */
    CreditCard = 14,
    /**
     * Postal code data type
     */
    PostalCode = 15,
    /**
     * File upload data type
     */
    Upload = 16,
}
