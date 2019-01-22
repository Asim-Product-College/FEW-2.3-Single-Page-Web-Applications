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

