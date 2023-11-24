function Heading(props) {
  console.log(props);
    return ( 
      <h1>Welcome {props.userName}, your color: {props.color}</h1> 
    ) 
  }

  export default Heading;