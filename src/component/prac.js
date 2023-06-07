import { useState } from "react"

function Prac(){
   const array=[]
   const Object1={
        name:"suman",
        title:"bando"
        
   }

    const Object2={
        name:"vishal",
        tilw:"bando"
    }
    function func(){
        array.push(Object1)
        console.log(array)
    }
    function funcy(){
        array.push(Object2)
        console.log(array)
    }
    return(
        <div>
            <button onClick={func}>click me</button>   
            <button onClick={funcy}>click me</button>     
        </div>
    )
}
export default Prac;