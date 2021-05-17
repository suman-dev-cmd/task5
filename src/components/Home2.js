import React,{useState} from 'react'

const Home2 = () => {
    const [item,setitem] = useState([])
    const [inival,setinival] = useState(1)
    const handleSubmit =()=>{
        setitem([...item,{
            id:item.length,
            value:Math.floor(Math.random()*10 +1)
        }])
    }
    const handleSubmit1 =()=>{
        setinival(inival+1)
        const  removeArry = item.filter(obj=>obj.id !== inival)
        setitem(removeArry)
    }
    return (
        <div className="container">
        <div className="card mt-5">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                 <button className="btn btn-success btn-sm m-2" onClick={handleSubmit}>Push Array</button>
                 {/* <button className="btn btn-success btn-sm m-2" onClick={handleSubmit1}>Pop Array</button> */}
                 
                
                <div className="col-md-12">
                    <ul>
                        {
                            item.map((obj,i)=><li key={i}>{obj.value}</li>)
                        }
                    </ul>
                </div>
                </div>
                <div className="col-md-4"></div>

            </div>
        </div>   
    </div>
    )
}

export default Home2
