import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "./action";
export default function Add_todo(){
    const id = useSelector(data=>data.taches[data.taches.length-1].id+1)
    const [titre,settitre]=useState("")
    const [etate,setetate]=useState("")
    const dis =useDispatch()
    const nav =useNavigate()
    return(
        <form onSubmit={addtodo}>
            <input type="text" placeholder="titre"onChange={(e)=>{settitre(e.target.value)}}  />
            <input type="text" placeholder="etate"onChange={(e)=>{setetate(e.target.value)}}  />
            <button>add todo</button>
        </form>
    )
    function addtodo(e) {
        e.preventDefault()
        const newd = new Date().toISOString().split("T")[0]; 
        dis(add({id:parseInt(id),titre:titre,date:newd,etate:etate}))
        nav("/")
       
    }

}