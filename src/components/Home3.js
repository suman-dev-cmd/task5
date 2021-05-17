import React,{useState,useEffect} from 'react'

const Home3 = () => {
    const [count,setcount] = useState(0)
    useEffect(() => {
      if(count == 5){
       document.title = `your click time is ${count}`
      }
    },[count])
    return (
        <div>
            <button onClick={()=>setcount(count+1)} className="btn btn-sm btn-success">Click Me</button>
        </div>
    )
}

export default Home3
