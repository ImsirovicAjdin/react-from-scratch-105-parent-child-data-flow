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
