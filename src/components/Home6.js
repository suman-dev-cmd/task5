import React from 'react'
import Home6A from './Home6A'
export const UserContext = React.createContext();
const Home6 = () => {
    return (
        <div>
            <UserContext.provider value={'suman'}>
                <Home6A></Home6A>
            </UserContext.provider>
        </div>
    )
}

export default Home6
