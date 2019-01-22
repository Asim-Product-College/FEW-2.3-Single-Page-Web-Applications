# COMPONENTS RENDER OTHER COMPONENTS
A React application can contain dozens, or even hundreds, of components.

Each component might be small and relatively unremarkable on its own. When combined, however, they can form enormous, fantastically complex ecosystems of information.

## Components Interact
React apps are made out of components, but what makes React special isn't components themselves. What makes React special is the ways in which components interact.

This unit is an introduction to components interacting.

## A Component in a Render Function
Render methods can also return another kind of JSX: component instances.
```
class OMG extends React.Component {
  render() {
    return <h1>Whooaa!</h1>;
  }
}

class Crazy extends React.Component {
  render() {
    return <OMG />;
  }
}
```

In the above example, Crazy's render method returns an instance of the OMG component class. You could say that Crazy renders an <OMG />.

## Apply a Component in a Render Function
When a component renders another component, what happens is very similar to what happens when ReactDOM.render() renders a component.

## Require A File
When you use React.js, every JavaScript file in your application is invisible to every other JavaScript file by default. ProfilePage.js and NavBar.js can't see each other.

## export

When you import a variable from a file that is not the current file, then an import statement isn't quite enough. You also need an export statement, written in the other file, exporting the variable that you hope to grab.

`export` comes from ES6's module system, just like import does. export and import are meant to be used together, and you rarely see one without the other.

There are a few different ways to use export. In this course, we will be using a style called "named exports." Here's how named exports works:

In one file, place the keyword export immediately before something that you want to export. That something can be any top-level var, let, const, function, or class:
```
// Manifestos.js:

export const faveManifestos = {
  futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
  SCUM:     'http://www.ccs.neu.edu/home/shivers/rants/scum.html',
  cyborg:   'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
};
```
You can export multiple things from the same file:
```
// Manifestos.js:

export const faveManifestos = {
  futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
  SCUM:     'http://www.ccs.neu.edu/home/shivers/rants/scum.html',
  cyborg:   'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
};

export const alsoRan = 'TimeCube';
```

In a different file, import the name of the var, let, const, function, or class from the first file:
```
// App.js:

// Import faveManifestos and alsoRan from ./Manifestos.js:
import { faveManifestos, alsoRan } from './Manifestos';

// Use faveManifestos:
console.log(`A Cyborg Manifesto:  ${faveManifestos.cyborg}`);
```

### Done
By nesting components inside of other components, you can build infinitely complex architectures, even if each component is relatively simple. The relationship that you just built is the fundamental relationship of React.js.
