# COMPONENTS AND ADVANCED JSX

## Use Multiline JSX in a Component
Need to use the JSX () here as well of course.

## Use a Variable Attribute in a Component

## Put Logic in a Render Function
A `render()` function can also be a fine place to put simple calculations that need to happen right before a component renders. Here's an example of some calculations inside of a `render` function:
```
class Random extends React.Component {
  render() {
    // First, some logic that must happen
    // before rendering:
    const n = Math.floor(Math.random() * 10 + 1);
    // Next, a return statement
    // using that logic:
    return <h1>The number is {n}!</h1>;
  }
}
```

Watch out for this common mistake:

```
class Random extends React.Component {
  // This should be in the render function:
  const n = Math.floor(Math.random() * 10 + 1);

  render() {
    return <h1>The number is {n}!</h1>;
  }
};
```
In the above example, the line with the const n declaration will cause a syntax error, as is it should not be part of the class declaration itself, but should occur in a method like render().

## Use a Conditional in a Render Function
the if statement is located inside of the render function, but before the return statement. This is pretty much the only way that you will ever see an if statement used in a render function.

## Use this in a Component
The word this gets used in React a lot!

You are especially likely to see this inside of the body of a component class declaration. Here's an example:
```
class IceCreamGuy extends React.Component {
  get food() {
    return 'ice cream';
  }

  render() {
    return <h1>I like {this.food}.</h1>;
  }
}
```
`this` refers to the instance of your Component Class
'The less simple answer is that this refers to the object on which this's enclosing method, in this case .render(), is called. It is almost inevitable that this object will be an instance of IceCreamGuy, but technically it could be something else.

Why don't you need parentheses after this.food? Shouldn't it be this.food()?

You don't need those parentheses because .food is a getter method.

You can tell this from the get in the above class declaration body.

There's nothing React-specific about getter methods, nor about `this` behaving in this way! However, in React you will see `this` used in this way almost constantly.

## Use an Event Listener in a Component
Render functions often contain event listeners. Here's an example of an event listener in a render function:
```
render() {
  return (
    <div onHover={myFunc}>
    </div>
  );
}
```
Recall that an event handler is a function that gets called in response to an event. In the above example, the event handler is `myFunc()`.

In React, you define event handlers as methods on a component class. Like this:
```
class MyClass extends React.Component {
  myFunc() {
    alert('Stop it.  Stop hovering.');
  }

  render() {
    return (
      <div onHover={this.myFunc}>
      </div>
    );
  }
}
```