import React from "react"
import './builder.css'
const builder = (props) =>{

    return(

        <div className="Builder">
            <div> {props.title} </div>
            <button>Add</button>
            <button>Remove</button>
        </div>
    )
    
}
export default builder