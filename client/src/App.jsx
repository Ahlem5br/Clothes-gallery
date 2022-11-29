import React, { useEffect, useState } from "react";
import Axios from "axios";
import Clothes from "./components/clothes.jsx";
import Add from "./components/add.jsx";
var App = () => {
  const [clothes, setClothes] = useState([]);
  useEffect(() => { 
        
    Axios.get("http://localhost:3000/clothes").then((res) => {
      console.log(res.data);
      setClothes(res.data);
    });
  }, []);

  return (
    
    <div>
<div className="nv_bar">
  <h1> Welcome To Your Clothes Gallery</h1>
  </div><br></br>
  <Add />
  <br></br>
      {/* <h1 className="head_div"><img src="https://cdn.shopify.com/s/files/1/0272/6769/4694/files/300_pixel_cg_new_logo_black_2.1_April_30_2015-0_225b5b82-2e0a-47d3-ac36-5612162c2702.png?v=1646936533&width=500"
      height="150px"
      width="150px"
      alt="no image"></img></h1> */}
     
      <Clothes clothes={clothes} />
      
    </div>
  );
};

export default App;