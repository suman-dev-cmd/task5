import React, { useState } from 'react'

const Home = () => {
    const Initialvalue = 0
    const [count,setCount] = useState(Initialvalue)
    const incrementFive =()=>{
        for(let i =0 ; i<5; i++){
            setCount(prevCount=>prevCount+1)
        }
       
    }
    return (
        <div className="container">
            <div className="card mt-5">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">

                    <div className="col-md-12">
                        <span>count: {count}</span>
                    </div>
                    <div className="col-md-12">
                        <div className="col-md-1"></div>
                        <div className="col-md-8">
                        <button className="btn btn-success btn-sm " onClick={()=>setCount(count+1)}>Increment</button>
                        <button className="btn btn-info btn-sm m-2" onClick={()=>setCount(Initialvalue)}>Reset</button>
                        <button className="btn btn-danger btn-sm" onClick={()=>setCount(count-1)}>Decrement</button>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-success btn-sm " onClick={incrementFive}>Increment 5</button>
                    </div>
                    </div>
                    <div className="col-md-4"></div>

                </div>
            </div>   
        </div>
    )
}

export default Home
