import React,{useState , useContext} from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const {setUser} = useContext(UserContext)
    const handleClick = (e) =>{
        e.preventDefault()
        setUser({username , password})
    }
  return (
    <div>
        <h1>Login</h1>
        <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
        {" "}
        <input type="text" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={handleClick}>submit</button>
    </div>
  )
}

export default Login