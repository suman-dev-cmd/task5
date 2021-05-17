import React from 'react'
import {UserContext} from './Home6'
const Home6C = () => {
    return (
        <div>
            <UserContext.consumer>
                {
                    value=>{
                        return <div>{value}</div>
                    }
                }
            </UserContext.consumer>
        </div>
    )
}

export default Home6C
