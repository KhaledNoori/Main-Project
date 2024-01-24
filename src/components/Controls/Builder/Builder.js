import React from "react"
import './Builder.css'
const builder = (props) =>{

    return(

        <div className="Builder">
            <div> {props.title} </div>
            <button onClick={props.add}>Add</button>
            <button onClick={props.remove}>Remove</button>
        </div>
    )
    
}
export default builder