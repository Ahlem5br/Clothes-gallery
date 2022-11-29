import React ,{useState} from "react";
import Axios from "axios";

var Add =()=>{
    
    const [description,setDescription]=useState("")
    const [price,setPrice]=useState("")
    const [image,setImage]=useState("")
console.log(description)

    var add =() =>{
        Axios.post("http://localhost:3000/clothes",{
            description:description,
            price:price,
            image:image})
        .then((res)=>{
            window.location.reload(false)
            console.log("added")
        })
    }

    return(
        <div className="create">
        <input  placeholder="type your description"  onChange={(e)=>{
            setDescription(e.target.value)
        }}/>
        <input placeholder="type the price"  onChange={(e)=>{
            setPrice(e.target.value)
        }} />
        <input placeholder="insert the image link"  onChange={(e)=>{
            setImage(e.target.value)
        }} />
         <button  onClick={()=>{
             add();
         }} >Add cloth</button>
        </div>
    )
}


export default Add