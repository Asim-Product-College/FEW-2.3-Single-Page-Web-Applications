## The Component
React applications are made out of components.

What's a component?

A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.

Take a look at the code below. This code will create and render a new React component:
```
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
```

## Import React
`import React from 'react';`
This line of code creates a new variable. That variable's name is `React`, and its value is a particular, imported JavaScript object:
```
// create a variable named React:
import React from 'react';
// evaluate this variable and get a particular, imported JavaScript object:
React // { imported object properties here... }
```

This imported object contains methods that you need in order to use React. The object is called the React library.

For now, just know that you get the React library via `import React from 'react';`.

React.createElement() must be available in order for JSX to work

## Import ReactDOM
`import ReactDOM from 'react-dom';`
The methods imported from `'react-dom'` are meant for interacting with the DOM. You are already familiar with one of them: `ReactDOM.render()`.

The methods imported from `'react'` don't deal with the DOM at all. They don't engage directly with anything that isn't part of React.

To clarify: the DOM is used in React applications, but it isn't part of React. After all, the DOM is also used in countless non-React applications. Methods imported from 'react' are only for pure React purposes, such as creating components or writing JSX elements.

## Create a Component Class
Every component must come from a component class.
A component class is like a factory that creates components. If you have a component class, then you can use that class to produce as many components as you want.

To make a component class, you use a base class from the React library: React.Component.

`React.Component` is a JavaScript class.

To create your own component class, you must subclass `React.Component`.

You can do this by using the syntax `class YourComponentNameGoesHere extends React.Component {}`.

## Name a Component Class
Component class variable names must begin with capital letters!
This adheres to JavaScript's class syntax. It also adheres to a broader programming convention in which class names are written in UpperCamelCase.

In addition, there is a React-specific reason why component class names must always be capitalized. We'll get to that soon!

## Component Class Instructions

By subclassing React.Component, you create a new component class. This is not a component! A component class is more like a factory that produces components. When you start making components, each one will come from a component class.

## The Render Function
in between the curly brackets of the ComponentClass is the body aka instructions go right there.

The instructions should be written in typical JavaScript ES2015 class syntax(http://exploringjs.com/es6/ch_classes.html).

There is only one property that you have to include in your instructions: a render method.

A render method is a property whose name is render, and whose value is a function. The term "render method" can refer to the entire property, or to just the function part.

A render method must contain a return statement. Usually, this return statement returns a JSX expression:

```
class ComponentFactory extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}
```

## Create a Component Instance
`<MyComponentClass />`
To make a React component, you write a JSX element. 
Instead of naming your JSX element something like h1 or div like you've done before, give it the same name as a component class. Voilà, there's your component instance!
JSX elements can be either HTML-like, or component instances. JSX uses capitalization to distinguish between the two! That is the React-specific reason why component class names must begin with capital letters.

## Render A Component
When you make a component by using the expression <MyComponentClass />, what do these instructions do?

Whenever you make a component, that component inherits all of the methods of its component class. MyComponentClass has one method: MyComponentClass.render(). Therefore, <MyComponentClass /> also has a method named render.

In order to render a component, that component needs to have a method named render.

Since your component has a render method, all that's left to do is call it. This happens in a slightly unusual way.

To call a component's render method, you pass that component to ReactDOM.render(). Notice your component, being passed as ReactDOM.render()'s first argument:

```
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
```
