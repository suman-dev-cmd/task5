import React,{useContext} from 'react'
import Home6B from './Home6B'
import {UserContext} from './Home6'

const Home6A = () => {
    const user = useContext(UserContext)
    return (
        <div>
           {user}
        </div>
    )
}

export default Home6A
