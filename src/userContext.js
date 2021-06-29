import React from 'react'

const UserContext = React.createContext('codevolution')

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext

//steps
// 1. create 
// 2. Provider
// 3. Calling 