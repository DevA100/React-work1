import React from 'react'

const Button = (props) => {
    const name = props.name;
  return (
    <span style={{
        padding: "10px 20px 10px 20px", 
        backgroundColor: props.Bgcolor,
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        borderRadius: "5px"
    }
        

    }
    onClick={() => props.onClick()}
    onhover={()=>props.onhover()}
    >{name}</span>
  );
};
const  OrangeButton= () =>(
<div>helloworld</div>  

)
export default Button