import { Attribute } from './attribute';

export interface _DisplayAttribute {
    ShortName?: string;
    Name?: string;
    Description?: string;
    Prompt?: string;
    GroupName?: string;
    ResourceType?: any;
    AutoGenerateField?: boolean;
    AutoGenerateFilter?: boolean;
    Order?: number;
}

/**
 * DisplayAttribute is a general-purpose attribute to specify user-visible globalizable strings for types and members.
 * The string properties of this class can be used either as literals or as resource identifiers into a specified
 */
export class DisplayAttribute extends Attribute implements _DisplayAttribute {

    public ShortName: string;

    public Name: string;

    public Description: string;

    public Prompt: string;

    public GroupName: string;

    public ResourceType: any;

    public AutoGenerateField: boolean;

    public AutoGenerateFilter: boolean;

    public Order: number;

    /**
     * Default constructor for DisplayAttribute.  All associated string properties and methods will return null.
     */
    constructor() {
        super();
    }

}

export function Display()
export function Display(properties: _DisplayAttribute)
export function Display(properties: _DisplayAttribute = {}) {
    let attribute = new DisplayAttribute();
    Object.assign(attribute, properties);
    return Reflect.metadata(DisplayAttribute, attribute);
}

export function TypewriterDisplay(csParameters: string) {
    return Display();
}
