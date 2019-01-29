## class vs className
Grammar in JSX is mostly the same as in HTML, but there are subtle differences to watch out for. Probably the most frequent of these involves the word `class`.

In HTML, it's common to use class as an attribute name:

Ex: 
```
<h1 class="big">Hey</h1>
```

In JSX, you can't use the word class! You have to use className instead:
```
<h1 className="big">Hey</h1>
```

This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript. 
Question: What is class reserved for in JS?

When JSX is rendered, JSX className attributes are automatically rendered as class attributes.

## Self-Closing Tags
Another JSX 'gotcha' involves self-closing tags.

When you write a self-closing tag in HTML, it is optional to include a forward-slash immediately before the final angle-bracket:
```
Fine in HTML with a slash:

  <br />

Also fine, without the slash:

  <br>
```

But!

In JSX, you have to include the slash. If you write a self-closing tag in JSX and forget the slash, you will raise an error:

## JavaScript In Your JSX In Your JavaScript
Any code in between the tags of a JSX element will be read as JSX, not as regular JavaScript! JSX doesn't add numbers - it reads them as text, just like HTML.

"Even though I am located in between JSX tags, treat me like ordinary JavaScript and not like JSX."

You can do this by wrapping your code in curly braces.

The curly braces themselves won't be treated as JSX nor as JavaScript. They are markers that signal the beginning and end of a JavaScript injection into JSX, similar to the quotation marks that signal the boundaries of a string.

## 20 Digits of Pi in JSX
```
import React from 'react';
import ReactDOM from 'react-dom';

const pi = (
  <div>
    <h1>
      PI, YALL!
    </h1>
    <p>
      {Math.PI.toFixed(20)}
    </p>
  </div>
);

ReactDOM.render(
	pi,
	document.getElementById('app')
);
```
```
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const math = (
	<h1>2 + 3 = {2 + 3}</h1>
);

ReactDOM.render(math, document.getElementById('app')
);
```

## Variables in JSX
When you inject JavaScript into JSX, that JavaScript is part of the same environment as the rest of the JavaScript in your file.

That means that you can access variables while inside of a JSX expression, even if those variables were declared on the outside.

```
// Declare a variable:
const name = 'Gerdo';

// Access your variable 
// from inside of a JSX expression:
const greeting = <p>Hello, {name}!</p>;
```

## Variable Attributes in JSX
When writing JSX, it's common to use variables to set attributes.

Here's an example of how that might work:
```
// Use a variable to set the `height` and `width` attributes:

const sideLength = "200px";

const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);
```

Object properties are also often used to set attributes:

```
const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);

const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);

const owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
);
```

## Event Listeners in JSX
JSX elements can have event listeners.
Question? Diff between JSX element and expression?

Programming in React means constantly working with event listeners. Programming in React means constantly working with event listeners.

You create an event listener by giving a JSX element a special attribute.

You create an event listener by giving a JSX element a special attribute. Here's an example:

```
<img onClick={myFunc} />
```

An event listener attribute's name should be something like onClick or onMouseOver: the word on, plus the type of event that you're listening for.
Supported Events: https://reactjs.org/docs/events.html#supported-events

An event listener attribute's value should be a function.

The above example would only work if `myFunc` were a valid function that had been defined elsewhere:

Note that in HTML, event listener names are written in all lowercase, such as `onclick` or `onmouseover`. In JSX, event listener names are written in camelCase, such as `onClick` or `onMouseOver`.

## JSX Conditionals: If Statements That Don't Work
You can not inject an if statement into a JSX expression.

This code will break:

```
(
  <h1>
    {
      if (purchase.complete) {
        'Thank you for placing an order!'
      }
    }
  </h1>
)
```

Read more about why this doesn't work because of the way JSX is compiled in depth: https://reactjs.org/docs/jsx-in-depth.html

## JSX Conditionals: If Statements That Do Work
How can you write a conditional, if you can't inject an if statement into JSX?

Well, one option is to write an if statement, and not inject it into JSX.

Code works when the if statement is on the outside, and no JavaScript injection is necessary.

This is a common way to express conditionals in JSX.

## JSX Conditionals: The Ternary Operator
There's a more compact way to write conditionals in JSX: the ternary operator.

The ternary operator works the same way in React as it does in regular JavaScript. However, it shows up in React surprisingly often.

Recall how it works: you write `x ? y : z`, where x, `y`, and `z` are all JavaScript expressions. When your code is executed, `x` is evaluated as either "truthy" or "falsy." If `x` is truthy, then the entire ternary operator returns `y`. If `x` is falsy, then the entire ternary operator returns `z`.

Quick refresher if needed: https://stackoverflow.com/questions/6259982/how-do-you-use-the-conditional-operator-in-javascript

Here's how you might use the ternary operator in a JSX expression:

```
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);
```

In the above example, if `age` is greater than or equal to `drinkingAge`, then `headline` will equal `<h1>Buy Drink</h1>`. Otherwise, `headline` will equal `<h1>Do Teen Stuff</h1>`.

## JSX Conditionals: &&

Like the ternary operator, `&&` is not React-specific, but it shows up in React surprisingly often.

`&&` works best in conditionals that will sometimes do an action, but other times do nothing at all.

Here's an example:
```
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);
```

Every time that you see && in this example, either some code will run, or else no code will run.

## .map in JSX
The array method .map() comes up often in React. It's good to get in the habit of using it alongside JSX.

If you want to create a list of JSX elements, then .map() is often your best bet. It can look odd at first:
```
const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map(string => <li>{string}</li>);

<ul>{listItems}</ul>
```

In the above example, we start out with an array of strings. We call .map() on this array of strings, and the .map() call returns a new array of <li>.

## Keys
When you make a list in JSX, sometimes your list will need to include something called keys:
```
<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>
```

A `key` is a JSX attribute. The attribute's name is `key`. The attribute's value should be something unique, similar to an `id` attribute.
`keys` don't do anything that you can see! 

React uses them internally to keep track of lists. If you don't use keys when you're supposed to, React might accidentally scramble your list-items into the wrong order.

Not all lists need to have keys. A list needs keys if either of the following are true:

1. The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must "remember" whether it was checked off. The items shouldn't get amnesia when they render.
2. A list's order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.

If neither of these conditions are true, then you don't have to worry about keys. If you aren't sure then it never hurts to use them!

## React.createElement
You can write React code without using JSX at all!

The majority of React programmers do use JSX, and we will use it for the remainder of this tutorial, but you should understand that it is possible to write React code without it.

The following JSX expression:
`const h1 = <h1>Hello world</h1>;`

```
const h1 = React.createElement(
  "h1",
  null,
  "Hello, world"
);
```

When a JSX element is compiled, the compiler transforms the JSX element into the method that you see above: React.createElement(). Every JSX element is secretly a call to React.createElement().
Read into how the method works from a top level: https://reactjs.org/docs/react-api.html#react.createelement



You are now ready to put your JSX knowledge to use! It's time to move on to the next major topic: React Components.