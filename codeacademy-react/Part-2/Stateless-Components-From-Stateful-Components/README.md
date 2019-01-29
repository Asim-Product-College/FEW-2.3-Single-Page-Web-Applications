# STATELESS COMPONENTS FROM STATEFUL COMPONENTS

## STATELESS COMPONENTS FROM STATEFUL COMPONENTS

programming pattern. 

Our programming pattern uses two React components: a stateful component, and a stateless component. "Stateful" describes any component that has a state property; "stateless" describes any component that does not.

In our pattern, a stateful component passes its state down to a stateless component.

## Build a Stateful Component Class

Let's make a stateful component pass its `state` to a stateless component.

To make that happen, you need two component classes: a stateful class, and a stateless class.

## Build a Stateless Component Class


## Pass a Component's State

so if a Child class is going to get its name from a Parent class, then we need to export the Child class and in the Parent class, import the Child class obj.

`import { Child } from './Child'`
`import { ComponentName } from './Component'`

## Don't Update props

You learned earlier that a component can change its state by calling this.setState(). You may have been wondering: how does a component change its props?

The answer: it doesn't!

A component should never update this.props. 

an example of what not to do:

```
import React from 'react';

class Bad extends React.Component {
  render() {
    this.props.message = 'yo'; // NOOOOOOOOOOOOOO!!!
    return <h1>{this.props.message}</h1>;
  }
}
```

This is potentially confusing. props and state store dynamic information. Dynamic information can change, by definition. If a component can't change its props, then what are props for?

***A React component should use props to store information that can be changed, but can only be changed by a different component.***

***A React component should use state to store information that the component itself can change.***



# Child Components Update their Parents State

In this lesson, you'll be expanding on that pattern. The stateless, child component will update the state of the parent component.

Here's how that works:

Many steps for this to work
https://www.codecademy.com/courses/react-102/lessons/child-updates-parents-state/exercises/child-parent-define-handler?action=resume_content_item

## Define an Event Handler

To make a child component update its parent's state, the first step is something that you've seen before: you must define a state-changing method on the parent.

## Receive the Event Handler

## Automatic Binding

# New Section: Child Components Update Sibling Components

## Child Components Update Sibling Components

## Pass the Right props to the Right Siblings
    