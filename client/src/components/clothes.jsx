import React ,{useState} from "react"
import Axios from "axios"


var Clothes =(props) => {

//   const [price,setPrice]=useState('')
//  const update=(id,price)=>{
//    Axios.put(`http://localhost:3000/clothes/${id}`,
//    {price:  price})
//  }


  var del = (id,price)=>{
    Axios.delete(`http://localhost:3000/clothes/${id}`)
    .then((res)=>{
      window.location.reload(false)
      console.log("oh you deleted me ")
    })
    .catch(err=>{
      console.log(err)
    })
   }
       return (
        <div className="main_div">
      {props.clothes.map((element, i ) => {
        return (
          <div className="main_divv">
            <ul>
            <img
        src={element.image}
        height="400px"
        width="280px"
        alt="no image"
      ></img>
              <span id="des">{element.description}</span><br></br><br></br>
              <span id='per'>{element.price}</span><br></br><br></br>
              <span><button className="but_delete" onClick={()=>{
                   del(element.id)
                }} >Delete</button></span> 
    
             </ul>
             
            {/* <div className="up">
            
             <input type="text" placeholder="price"  onChange={(e)=>{setPrice(e.target.value)}}/>
             <button className="up" onClick={()=>{update(i,price)}}>uup</button>
            </div>  */}
          </div>
        )})}
        
        </div>
    )
}

export default Clothes;
