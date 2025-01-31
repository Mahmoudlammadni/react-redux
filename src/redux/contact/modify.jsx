import { useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { modyc } from "../action"
import { useNavigate } from "react-router-dom"

export default function Mody_contact() {

    const {id}=useParams()
    const con = useSelector(data=>data.contact.find((p)=>p.id===parseInt(id)))
    const dis =useDispatch()
    const [nom,setnom]=useState(con.nom)
    const [telephone,settelephone]=useState(con.telephone)
    const [email,setemail]=useState(con.email)
    const nav =useNavigate()
    function add(e) {
        e.preventDefault()
        const con ={id:id,nom:nom,telephone:telephone,email:email}
         dis(modyc(con))
         nav("/c/")
 
        
    }
    return(
     <form onSubmit={add}>
        <input type="text" value={nom} onChange={(e)=>setnom(e.target.value)}  />
        <input type="text" value={telephone} onChange={(e)=>settelephone(e.target.value)} />
        <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} />
        <button>add</button>
     </form>
    )
    
}