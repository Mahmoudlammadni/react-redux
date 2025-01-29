const initialstate = {
    taches: [{id:1,titre:"tache1",date:"2025-1-12",etate :"en cours"}]
}
const redux_todo =(state=initialstate,action)=>{
    switch (action.type) {
        case "add":
                return {...state,taches:[...state.taches,action.payload]}
        case "modify":
            const tch = state.taches.find((t)=>t.id==action.payload.id)
            if (tch) {
                tch.titre=action.payload.titre
                tch.date=action.payload.date
                tch.etate=action.payload.etate
            }
           
        case "delete":
            return{...state,taches:state.taches.filter(tch=>tch.id!==action.payload)}
            case 'supprimer':
    
        default:
            return state
    }
}
export default redux_todo