import React,{useState}from 'react'

const Home1 = () => {
   const [name, setname] = useState({firstname:'',lastname:''})
   const handleSubmit =()=>{
       console.log(name)
   }
    return (
        <div className="container">
            <div className="card mt-5">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">

                    <div className="col-md-12">
                       <input type='text' onChange={(e)=>setname({...name,firstname:e.target.value})} value={name.firstname} className="form-control m-2" /> 
                       <input type='text' onChange={(e)=>setname({...name,lastname:e.target.value})} value={name.lastname} className="form-control m-2" /> 
                    </div>
                    <div className="col-md-12">
                      <span>First Name: {name.firstname}</span>
                      <span>Last Name: {name.lastname}</span>
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-success btn-sm m-2" onClick={handleSubmit}>Submit</button>
                    </div>
                    </div>
                    <div className="col-md-4"></div>

                </div>
            </div>   
        </div>
    )
}

export default Home1
