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