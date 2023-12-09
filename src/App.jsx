import UserContextProvider from "./CONTEXT/UserContextProvider"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import "./App.css" 


function App() {

  return (
    <UserContextProvider>
      <h1>Hello World</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
