# Course Notes
https://www.codecademy.com/courses/react-101/lessons/react-jsx-intro/

## Why React
React.js is a JavaScript library. It was developed by engineers at Facebook.

A few reasons why people choose it:
 - *fast*: Apps made in React can handle complex updates and still feel quick and responsive.
 - *modular*: Instead of writing large, dense files of code, you can write many smaller, reusable files. React's modularity can be a beautiful solution to JavaScript's maintainability problems (https://en.wikipedia.org/wiki/Spaghetti_code)
 - *scalable*: Large programs that display a lot of changing data are where React performs best.
 -  *flexible*: You can use React for interesting projects that have nothing to do with making a web app. People are still figuring out React's potential. There's room to explore. (https://medium.mybridge.co/22-amazing-open-source-react-projects-cb8230ec719f)
 - *popular*: While this reason has admittedly little to do with React's quality, the truth is that understanding React will make you more employable.

If you are new to React, then this course is for you! No prior React knowledge is expected. We will start at the very beginning and move slowly.

## What is JSX?
JSX is a syntax extension for JavaScript. It was written to be used with React. JSX code looks a lot like HTML.

What does "syntax extension" mean? In this case, it means that JSX is not valid JavaScript. Web browsers can't read it!

If a JavaScript file contains JSX code, then that file will have to be compiled. That means that before the file reaches a web browser, a JSX compiler will translate any JSX into regular JavaScript.

Eventually we'll walk through how to set up a JSX compiler on your personal computer.

## JSX Elements
A basic unit of JSX is called a JSX element.
This JSX element looks exactly like HTML! The only noticeable difference is that you would find it in a JavaScript file, instead of in an HTML file.

## JSX Elements And Their Surroundings
JSX elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go. That means that a JSX element can be saved in a variable, passed to a function, stored in an object or array...you name it.

## Attributes In JSX
JSX elements can have attributes, just like HTML elements can.

A JSX attribute is written using HTML-like syntax: a name, followed by an equals sign, followed by a value. The value should be wrapped in quotes.

Ex: `my-attribute-name="my-attribute-value"`

## Nested JSX
You can nest JSX elements inside of other JSX elements, just like in HTML.
Ex: `<a href="https://www.example.com"><h1>Click me!</h1></a>`
If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses. This looks strange at first, but you get used to it:
nested-non nested jsx expressions are literally treated the same, nothing fancy about it really.

## JSX Outer Elements
a JSX expression must have exactly one outermost element.

In other words, this code will work:

```
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);
```
But this code will not
```
const paragraphs = (
  <p>I am a paragraph.</p> 
  <p>I, too, am a paragraph.</p>
);
```

The first opening tag and the final closing tag of a JSX expression must belong to the same JSX element!

If you notice that a JSX expression has multiple outer elements, the solution is usually simple: wrap the JSX expression in a `<div></div>`.

## Rendering JSX
To render a JSX expression means to make it appear onscreen.

The following code will render a JSX expression:
```
ReactDOM.render(<h1>Hello world</h1>, document.getElementById('app'));
```

JavaScript is case-sensitive, so make sure to capitalize ReactDOM correctly!

## ReactDOM.render() I
`ReactDOM` is the name of a JavaScript library. This library contains several React-specific methods, all of which deal with the DOM in some way or another.

`ReactDOM.render()` is the most common way to render JSX. It takes a JSX expression, creates a corresponding tree of DOM nodes, and adds that tree to the DOM. That is the way to make a JSX expression appear onscreen.

```
ReactDOM.render(<h1>Render me!</h1>,
document.getElementById('app'))
```

## ReactDOM.render() II
You just learned that ReactDOM.render() makes its first argument appear onscreen. But where on the screen should that first argument appear?

## Passing a Variable to ReactDOM.render()
ReactDOM.render()'s first argument should evaluate to a JSX expression, it doesn't have to literally be a JSX expression.
The first argument could also be a variable, so long as that variable evaluates to a JSX expression.

## The Virtual DOM
One special thing about ReactDOM.render() is that it only updates DOM elements that have changed.

That means that if you render the exact same thing twice in a row, the second render will do nothing:

Ex:
```
const hello = <h1>Hello world</h1>;

// This will add "Hello world" to the screen:

ReactDOM.render(hello, document.getElementById('app'));

// This won't do anything at all:

ReactDOM.render(hello, document.getElementById('app'));
```

Must read: https://www.codecademy.com/articles/react-virtual-dom


