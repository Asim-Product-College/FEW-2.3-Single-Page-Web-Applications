React uses functional reactive programming to solve many of the headaches of creating user interfaces.

## Learning Objectives
1. Create components
2. Define the virtual DOM
3. Use JSX
4. Differentiate props and state

What is React? *A JavaScript library for building user interfaces*

A JavaScript library for building user interfaces.

In a nutshell Reactive programming is programming with Event Streams.

An Event Stream is like an Array of events, or things that can happen.
- Arrays map things in space.
- _Event streams map things in time_

React uses Reactive Programming to create a front end architecture that updates components with streams of events as they occur in time.

React is built on two core features: *Components*, and *Virtual DOM*.

### Components

Encapsulate state and view. A component updates it's view in response to incoming events.

What you need to know:
- React Projects are built from components.
- Most of your work with React will be writing components.
- Components can be nested one with in another. In other words a component can have children or be the child of another component.
- Components are objects. You can make instances of them.
- Components encapsulate both logic (methods and code), state (properties), and a view (components render themselves.)
- The view of a component is written in JSX. JSX is an extension of the JavaScript language. You'll write it along with with your other JavaScript.

### Virtual DOM

Updating the DOM is a slow operation. To speed this up React creates a virtual DOM. Manipulating the virtual DOM is much faster than manipulating the DOM directly.

In a React app making changes to the virtual DOM has no effect on the actual DOM.

Your code makes changes to the virtual DOM while behind the scenes React makes changes to the DOM.

What you need to know:

- React keeps track of all components in the virtual DOM.
- Making changes to DOM directly does not work with React!
- Manipulating the DOM within a React project should almost always be handled with a Component!
- In other words document.getElementById() is not compatible with React!

Read more - https://reactjs.org/docs/faq-internals.html


To remember things, components use state.
React components can have state by setting this.state in their constructors. 
this.state should be considered as private to a React component that it’s defined in.

To collect data from multiple children, or to have two child components communicate with each other, you need to declare the shared state in their parent component instead. The parent component can pass the state back down to the children by using props; this keeps the child components in sync with each other and with the parent component.


https://reactjs.org/tutorial/tutorial.html#why-immutability-is-important
We’ll now discuss immutability and why immutability is important to learn.
There are generally two approaches to changing data. The first approach is to mutate the data by directly changing the data’s values. The second approach is to replace the data with a new copy which has the desired changes.

Data Change with Mutation
var player = {score: 1, name: 'Jeff'};
player.score = 2;
// Now player is {score: 2, name: 'Jeff'}

Data Change without Mutation
var player = {score: 1, name: 'Jeff'};

var newPlayer = Object.assign({}, player, {score: 2});
// Now player is unchanged, but newPlayer is {score: 2, name: 'Jeff'}

// Or if you are using object spread syntax proposal, you can write:
// var newPlayer = {...player, score: 2};

- Complex Features Become Simple
- Detecting Changes
- Determining When to Re-render in React


## Function Components
In React, function components are a simpler way to write components that only contain a render method and don’t have their own state. Instead of defining a class which extends React.Component, we can write a function that takes props as input and returns what should be rendered. Function components are less tedious to write than classes, and many components can be expressed this way.

In a class, we used an arrow function to access the correct this value, but in a function component we don’t need to worry about this.