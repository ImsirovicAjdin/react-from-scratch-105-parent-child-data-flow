# About this React app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project is [deployed on Netlify](https://radiant-fudge-d06df6.netlify.app/).

## Learning Concepts covered

### Passing data from the parent to the child component

Commits:

**(1) Passing data as the props object in the child component, using JSX element attributes in the parent component**

To accept data in `Headings`, I use the `props` object.
```jsx
function Headings(props) {
    console.log(props)
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>Hello again!</h2>
        <h3>Hello yet again!</h3>
        <h4>Once again!</h4>
      </div>
    )
  }

export default Headings;
```

To pass the data to `Headings`, I add it as HTML properties in the `App` component that renders the `Headings` element.
```jsx
import Headings from "./Headings";

function App() {
  return (
    <div className="App">
      <Headings
        h1="Hello World!"
        h2="Hello again!"
        h3="Hello yet again!"
        h4="Once again!"
    />
    </div>
  )
}

export default App;
```

Since `props` are just an object, we can access each property on the props object using the dot notation:
```jsx
function Headings(props) {
    console.log(props)
    return (
        <div>
        <h1>{props.h1}</h1>
        <h2>{props.h2}</h2>
        <h3>{props.h3}</h3>
        <h4>{props.h4}</h4>
        </div>
    )
}

export default Headings;
```

**(2) Props values in the parent can come from variables**

An example of using a variable as a prop value.

```jsx
import Headings from "./Headings";

function App() {
  const h1 = "Hello World!"
  const h2 = "Hello again!"
  const h3 = "Hello yet again!"
  const h4 = "Once again!"
  return (
    <div className="App">
      <Headings
        h1={h1}
        h2={h2}
        h3={h3}
        h4={h4}
    />
    </div>
  )
}

export default App;
```

**(3) You can make the props values in the parent even more dynamic**

This proves with props are so useful.

```jsx
import Headings from "./Headings";

function App() {
  const h1 = prompt("Type the text for the h1 element")
  const h2 = prompt("Type the text for the h2 element")
  const h3 = "Hello yet again!"
  const h4 = "Once again!"
  return (
    <div className="App">
      <Headings
        h1={h1}
        h2={h2}
        h3={h3}
        h4={h4}
    />
    </div>
  )
}

export default App;
```

**(4) Change the h3 and h4 variables into calls to the prompt function**

```jsx
import Headings from "./Headings";

function App() {
  const h1 = prompt("Type the text for the h1 element")
  const h2 = prompt("Type the text for the h2 element")
  const h3 = prompt("Type the text for the h3 element")
  const h4 = prompt("Type the text for the h4 element")
  return (
    <div className="App">
      <Headings
        h1={h1}
        h2={h2}
        h3={h3}
        h4={h4}
    />
    </div>
  )
}

export default App;
```

### Tasks

1. Your task is to change the `h3` and `h4` variables into calls to the `prompt` function. Task solutions are in commit number 4.
