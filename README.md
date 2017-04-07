# ts-data-annotations

Typescript / ES6 decorators compatible with .net's `System.ComponentModel.DataAnnotations`. Helpful for generating Typscript models from C#.

## Basic Usage

To use data annotations on Typescript model.

```ts
// person.ts
export class Person {

	@Required()
	@MaxLength(15)
	public FirstName: string;
    
	@MaxLength(30)
	public LastName: string;
    
	@EmailAddress()
	public Email: string;

}
```

## Typewriter Usage

To use data annotations on Typescript generated from .net.

```cs
// Person.cs
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class Person
    {

        [Required(AllowEmptyStrings = false)]
        [MaxLength(15, ErrorMessage = "First name must be less then 15 characters.")]
        public string FirstName { get; set; }

        [MaxLength(30)]
        public string LastName { get; set; }

        [EmailAddress]
        public string Email { get; set; }

    }
}
```

```cs
// models.tst
${

    Template(Settings settings)
    {
        // settup
    }
    
    public class AttributeParameter : Item {
      public string Value { get; set; }
    }
    List<AttributeParameter> AttributeParameters(Attribute attribute)
    {
      List<AttributeParameter> parameters = new List<AttributeParameter>();
      if (attribute.Value != null)
      {
        List<string> values = attribute.Value.Split(',').Select(value => value.Trim()).ToList();

        // constructor params
        List<string> paramValues = values.Where(value => !value.Contains("=")).ToList();
        parameters = paramValues.Select(value => new AttributeParameter() { Value = value } ).ToList();;

        // properites
        List<string> properites = values.Where(value => value.Contains("="))
          .Select(prop => prop.Replace(" =", ":")).ToList();
        if (properites.Count > 0)
        {
          parameters.Add(new AttributeParameter()  { Value = "{ " + string.Join(", ", properites) + " }" });
        }
        
      }
      return parameters;
    }

}
$Classes(Models.*)[
export class $Name {
    $Properties[$Attributes[
	@$Name($AttributeParameters[$Value][, ])]
	public $Name: $Type;
    ]
}]
```

```ts
// Person.ts (generated)
export class Person {
    
	@Required({ AllowEmptyStrings: false })
	@MaxLength(15, { ErrorMessage: "First name must be less then 15 characters." })
	public FirstName: string;
    
	@MaxLength(30)
	public LastName: string;
    
	@EmailAddress()
	public Email: string;
    
}
```