
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