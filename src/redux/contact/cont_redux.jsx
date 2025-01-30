const initialstate = {
    contact :[{id:1,nom:"morad",telephone:"0612345667",email:"morad@gmail.com"}]
}
const redux_contact =(state=initialstate,action)=>{
    switch (action.type) {
        case "add":
            return{...state,contact:[...state.contact,action.payload]}
        case "delet":
            return {...state,contact:state.contact.filter((c)=>c.id!==action.payload)}
        case "mody":
            const cnt = state.contact.find((c)=>c.id===action.payload.id)
            if (cnt) {
                cnt.nom=action.payload.nom
                cnt.telephone=action.payload.telephone
                cnt.email.action.payload.telephone
            }
    
        default:
            return state
    }
}