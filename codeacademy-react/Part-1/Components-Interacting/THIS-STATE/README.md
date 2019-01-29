# THIS.STATE

## State

Dynamic information is information that can change.

React components will often need dynamic information in order to render. For example, imagine a component that displays the score of a basketball game. The score of the game might change over time, meaning that the score is dynamic. Our component will have to know the score, a piece of dynamic information, in order to render in a useful way.

There are two ways for a component to get dynamic information: props and state. Besides props` and state``, every value used in a component should always stay exactly the same.

`props` and `state` are all that you need to set up an ecosystem of interacting React components.

## Setting Initial State
A React component can access dynamic information in two ways: `props` and `state`.

Unlike `props`, a component's `state` is not passed in from the outside. A component decides its own `state`.

To make a component have state, give the component a state property. This property should be declared inside of a constructor method, like this:
```
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return <div></div>;
  }
}

<Example />
```

```
constructor(props) {
  super(props);
  this.state = { mood: 'decent' };
}
```

React components always have to call super in their constructors to be set up properly.

## Access a Component's state
To read a component's state, use the expression this.state.name-of-property.
```
lass TodayImFeeling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }

  render() {
    return (
      <h1>
        I'm feeling {this.state.mood}!
      </h1>
    );
  }
}
```

## Update state with this.setState
A component can do more than just read its own state. A component can also change its own state.

A component changes its state by calling the function `this.setState()`.

`this.setState()` takes two arguments: an *object* that will update the component's state, and a *callback*. You basically never need the callback.

this.setState() takes an object, and merges that object with the component's current state. If there are properties in the current state that aren't part of that object, then those properties remain how they were.

## Call this.setState from Another Function
The most common way to call `this.setState()` is to call a custom function that wraps a `this.setState()` call. `.makeSomeFog()` is an example:

```
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: 'sunny' };
    this.makeSomeFog = this.makeSomeFog.bind(this);
  }

  makeSomeFog() {
    this.setState({
      weather: 'foggy'
    });
  }
}
```

More on the binding trickery: https://reactjs.org/docs/handling-events.html

*When you write a component class method that uses `this`, then you need to bind that method inside of your constructor function!*

## this.setState Automatically Calls render
inside the render function.
`<div style={{background:this.state.color}}>`
that changes a virtual DOM object's color to the new this.state.color, eventually causing a change in the screen.

*Here's why: Any time that you call this.setState(), this.setState() AUTOMATICALLY calls .render() as soon as the state has changed.*

Think of `this.setState()` as actually being two things: `this.setState()`, immediately followed by `.render()`.

That is why you can't call `this.setState()` from inside of the `.render()` method! `this.setState()` automatically calls .render(). If `.render()` calls `this.setState()`, then an infinite loop is created.

## Components Interacting Recap
In this unit, you learned how to use import and export to access one file from another. You learned about props and state, and the countless variations on how they work.

Before this unit, you learned about JSX, components, and how they can work together.

A React app is basically just a lot of components, setting state and passing props to one another. Now that you have a real understanding of how to use props and state, you have by far the most important tools that you need!

In future lessons, the focus will shift slightly outward. In addition to learning more new skills, you'll also learn your first programming patterns. These large-scale strategies will help you combine what you've learned and really start building.