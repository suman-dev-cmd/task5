import React,{useState,useEffect} from 'react'

const Home4 = () => {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    const mouselistener = e =>{
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        window.addEventListener('mousemove',mouselistener)
    })
    return (
        <div>
           <span>X ---- {x}</span> 
           <span>Y ---- {y}</span> 
        </div>
    )
}

export default Home4
