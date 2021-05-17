import React,{useState,useEffect} from 'react'

const Home5 = () => {
    const [count, setcount] = useState(0)
    const tick =()=>{
        setcount(count+1)
    }
    useEffect(() => {
        const countset = setInterval(tick,1000)
        return () => {
            clearInterval(countset)
        }
    }, [count])
    return (
        <div>
            <center>
             <span className="m-5">{count}</span>  
            </center>
        </div>
    )
}

export default Home5
