import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { modify } from "./action"

export default function Mod_todo() {
    const {id} = useParams()
    const parseid = parseInt(id)
    const tach = useSelector(data => data.taches.find((p) => p.id === parseid))
    const dis = useDispatch()
    const nav = useNavigate()
    const [titre, settitre] = useState(tach.titre)
    const [date, setdate] = useState(tach.date)
    const [etat, setetat] = useState(tach.etat)

    function mod(e) {
        e.preventDefault()
        if (etat=="en cours" || etat=="complète") {
            dis(modify({id: parseid, titre: titre, date: date, etat: etat}))
                nav("/t");
                }
                else{
        
                    alert('etate accepter seulment en cours ou complète')
                }
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Modifier la tâche</h2>
            <form onSubmit={mod} className="form-group">
                <div className="mb-3">
                    <label htmlFor="titre" className="form-label">Titre</label>
                    <input type="text" id="titre"value={titre}onChange={(e) => {settitre(e.target.value)}}className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input type="text" $value={date} onChange={(e) => {setdate(e.target.value)}}className="form-control" />
                </div>
                <div className="mb-3">
                    <label htmlFor="etate" className="form-label">État</label>
                    <input type="text"value={etat}onChange={(e) => {setetat(e.target.value)}}  className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary">Modifier</button>
            </form>
        </div>
    )
}
