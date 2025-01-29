import { useState } from "react";

export default function Form() {
    const [inp1,setinp1]=useState('')
    const [inp2,setinp2]=useState('')
    const [inp,setinp]=useState('')

    function in1(e) {
        setinp1(e)
    }
    function in2(e) {
        setinp2(e)
    }
    function i(e) {
        e.preventDefault()
        setinp(inp1+" "+inp2)
        
    }

    return(<>
        <form action="" onSubmit={i}>
            <input type="text" onChange={(e)=>{in1(e.target.value)}} />
            <input type="text" onChange={(e)=>{in2(e.target.value)}} />
            <button>aff</button>
        </form>
        <p>{inp}</p>
        </>
    )
}