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
export declare class DisplayAttribute extends Attribute implements _DisplayAttribute {
    ShortName: string;
    Name: string;
    Description: string;
    Prompt: string;
    GroupName: string;
    ResourceType: any;
    AutoGenerateField: boolean;
    AutoGenerateFilter: boolean;
    Order: number;
    /**
     * Default constructor for DisplayAttribute.  All associated string properties and methods will return null.
     */
    constructor();
}
export declare function Display(): any;
export declare function Display(properties: _DisplayAttribute): any;
export declare function TypewriterDisplay(csParameters: string): any;
