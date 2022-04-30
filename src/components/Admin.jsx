import axios from "axios";
import { useState } from "react";
import "../App.css"


export const Admin=(()=>{
    const [datas,setDatas]=useState([]);
    const handlechange=((e)=>{
      const {id,value}=e.target;
      setDatas({...datas,
    [id]:value
    })
    })
    const handlesubmit=((e)=>{
        e.preventDefault()
       axios.post("http://localhost:8085/posts",datas)
    })
    return <div>
        <h3>Welcome Admin .Please Give Us Datas!</h3>
        <form id="admin" onSubmit={handlesubmit} action="">
            <input type="text" id="name" onChange={handlechange} placeholder="name" />
            <br />
            <select onChange={handlechange} name="" id="payment">
                <option  value="">select</option>
                <option value="card">card</option>
                <option value="COD">COD</option>
                <option value="netbanking">netbanking</option>
            </select>
            <br />
            <input  onChange={handlechange} type="number" id="totalvotes" placeholder="total votes" />
            <br />
            <input  onChange={handlechange} type="number" id="cost" placeholder="cost" />
            <br />
           <select  onChange={handlechange} name="" id="categories">
               <option  value="">select</option>
               <option  value="Non-veg">non-veg</option>
               <option value="veg">veg</option>
           </select>
           <br />
           <input  onChange={handlechange} type="text" id="img" placeholder="image" />
           <input type="submit" />
        </form>
    </div>
})