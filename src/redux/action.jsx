
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