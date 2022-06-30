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