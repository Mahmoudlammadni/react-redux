
export const add = (tch)=>{
    return{
        type:"add",
        payload :tch
    }
}
export function modify(tch) {
    return{
        type:"modify",
        payload : tch
    }
    
}
export function delet(id) {
    return{
        type:"delete",
        payload:id
    }
    
}
export const addc =(cn)=>{
    return{
        type:"addc",payload:cn
    }

}
export const deletc=(id)=>{
    return{
        type:"deletc",payload:id
    }
}
export const modyc =(cn)=>{
    return{
        type:"modyc",payload:cn
    }
}

export const addp=(p)=>{
    return{
        type:"addp",payload:p
    }
}
export function delp(p) {
    return{
        type : "supp",
        payload : p

} 
}
export function modp(p) {
    return{
        type : "modp",
        payload:p


    }
}
export function suppa(p) {
    return{
        type : "suppa",
        payload:p


    }
}
 
export function addpa(p) {
    return{
        type : "addpa",
        payload:p


    }
}
export function annuler(p) {
    return{
        type : "annuler",
        payload:p


    }
}


export const add_note = (tch)=>{
    return{
        type:"add_note",
        payload :tch
    }
}
export function modify_note(tch) {
    return{
        type:"modify_note",
        payload : tch
    }
    
}
export function delete_note(id) {
    return{
        type:"delete_note",
        payload:id
    }
    
}


export const add_user=(u)=>{
    return{
        type:"add_user",
        payload:u
    }
}
export const update_user=(u)=>{
    return{
        type:"update_user",
        payload:u
    }
}
export function delete_user(u){
return{
    type:"delete_user",
    payload:u
}
}