# this.props

Previously, you learned one way that components can interact: a component can render another component.

In this lesson, you will learn another way that components can interact: a component can pass information to another component.

Information that gets passed from one component to another is known as "props."

## Access a Component's props
Every component has something called props.
A component's props is an object. It holds information about that component.

To see a component's props object, you use the expression this.props. Here's an example of this.props being used inside of a render method:
```
render() {
  console.log("Props object comin' up!");

  console.log(this.props);

  console.log("That was my props object!");

  return <h1>Hello world</h1>;
}
```

## Pass `props` to a Component
You can pass information to a React component.
How? By giving that component an attribute:
`<MyComponent foo="bar" />`

Let's say that you want to pass a component the message, "This is some top secret info.". Here's how you could do it:

`<Example message="This is some top secret info." />`

If you want to pass information that isn't a string, then wrap that information in curly braces. Here's how you would pass an array:

`<Greeting myInfo={["top", "secret", "lol"]} />`

n this next example, we pass several pieces of information to <Greeting />. The values that aren't strings are wrapped in curly braces:

`<Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />`

## Render a Component's props
You will often want a component to display the information that you pass.

Here's how to make a component display passed-in information:
1. - Find the component class that is going to receive that information.
2. - Include this.props.name-of-information in that component class's render method's return statement.

you simply use `this.props.name-of-info` in the Components Class render method return statement.

## Pass props From Component To Component
A curmudgeonly clarification about grammar:
You may have noticed some loose usage of the words prop and props. Unfortunately, this is pretty inevitable.

`props` is the name of the object that stores passed-in information.

`this.props` refers to that storage object.

At the same time, each piece of passed-in information is called a prop.
This means that props could refer to two pieces of passed-in information, or it could refer to the object that stores those pieces of information :(

Awesome! You passed a prop from a component to a different component, accessed that prop from the receiver component, and rendered it!

You can do more with props than just display them. You can also use props to make decisions.

## Put an Event Handler in a Component Class
You can, and often will, pass functions as props. It is especially common to pass event handler functions.

How do you define an event handler in React?

You define an event handler as a method on the component class, just like the render method. Almost all functions that you define in React will be defined in this way, as methods in a class.

```
import React from 'react';

class Example extends React.Component {
  handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }

  render() {
    return (
      <h1 onClick={this.handleEvent}>
        Hello world
      </h1>
    );
  }
}
```

## Pass an Event Handler as a prop
Now you're ready to pass that function to another component.
You can pass a method in the exact same way that you pass any other information. Behold, the mighty JavaScript.

## handleEvent, onEvent, and this.props.onEvent
Let's talk about naming things.

When you pass an event handler as a prop, as you just did, there are two names that you have to choose.

Both naming choices occur in the parent component class - that is, in the component class that defines the event handler and passes it.

These two names can be whatever you want. However, there is a naming convention that they often follow. You don't have to follow this convention, but you should understand it when you see it.

Here's how the naming convention works: first, think about what type of event you are listening for. In our example, the event type was "click."

If you are listening for a "click" event, then you name your event handler handleClick. If you are listening for a "keyPress" event, then you name your event handler handleKeyPress:
```
class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
    alert('I will be called in response to "hover" events.');
  }
}
```
Your prop name should be the word on, plus your event type. If you are listening for a "click" event, then you name your prop onClick. If you are listening for a "keyPress" event, then you name your prop onKeyPress:
```
class MyClass extends React.Component {
  handleHover() {
    alert('I am an event handler.');
    alert('I will listen for a "hover" event.');
  }

  render() {
    return <Child onHover={this.handleHover} />;
  }
}
```

## this.props.children
Every component's props object has a property named children.
this.props.children will return everything in between a component's opening and closing JSX tags.

So far, all of the components that you've seen have been self-closing tags, such as <MyComponentClass />. They don't have to be! You could write <MyComponentClass></MyComponentClass>, and it would still work.

this.props.children would return everything in between <MyComponentClass> and </MyComponentClass>.

If a component has more than one child between its JSX tags, then this.props.children will return those children in an array. However, if a component has only one child, then this.props.children will return the single child, not wrapped in an array.