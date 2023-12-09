import UserContext from "./UserContext"
import React from "react"
import propTypes from "prop-types"

const UserContextProvider = ({children}) =>{
    UserContextProvider.propTypes = {
        children: children
    }
    const [user,setUser] = React.useState(null)
    return (
        <>
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
        </>
    )
}

export default UserContextProvider