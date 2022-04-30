import axios from "axios"
import { useEffect, useState } from "react"
import "../App.css"


export const RestorantDetails=(()=>{
    const[datas,setDatas]=useState([]);
    useEffect(()=>{
      axios.get("http://localhost:8080/posts ").then((res)=>{
           setDatas(res.data)
      })
    },[])
    console.log(datas)
    return <div id="box-border-2">
        {datas.map((e)=>{
            return <div id="box-border">
               <div id="img-div">
                   <img src={e.img} alt="" />
               </div>
               <div id="contend-div">
                   <h2>{e.name}</h2>
                   <i>Total votes:<span>{e.totalvotes}</span></i>
                   <h4>Price:<span>{e.cost}</span></h4>
                   <p>{e.categories}</p>
                   <p id="payment">payment:{e.payment}</p>
               </div>
              
            </div>
        })}
    </div>
})