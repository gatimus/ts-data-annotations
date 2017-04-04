# ts-data-annotations

Typescript / ES6 decorators compattble with .net's `System.ComponentModel.DataAnnotations`. Helpfull for generating Typscript models from C#.

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

```tst
// models.tst
${
    Template(Settings settings)
    {
        // settup
    }
}
$Classes(Models.*)[
export class $Name {
    $Properties[$Attributes[
	@Typewriter$Name('$Value')]
	public $Name: $Type;
    ]
}]
```

```ts
// Person.ts (generated)
export class Person {
    
	@TypewriterRequired('AllowEmptyStrings = false')
	@TypewriterMaxLength('15, ErrorMessage = "First name must be less then 15 characters."')
	public FirstName: string;
    
	@TypewriterMaxLength('30')
	public LastName: string;
    
	@TypewriterEmailAddress('')
	public Email: string;
    
}
```