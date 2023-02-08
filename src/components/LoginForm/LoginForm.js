
import { Navigate, Router, useNavigate, useLocation} from 'react-router-dom';
import {useMemo} from 'react'
import { useUser } from '../../App';

function LoginForm() {
    const location = useLocation()
    const nextLocation = useMemo(function() {
        return(location.state?.url || "/")
    }, [])
    const {username, setUsername} = useUser();

    console.log(nextLocation);
    
    const loginFunc = (event) =>{
        console.log(location)
        event.preventDefault()
        fetch(`https://petstore3.swagger.io/api/v3/user/login?username=${event.target.elements.login.value}&password=${event.target.elements.password.value}}`)
            .then((response) => setUsername(event.target.elements.login.value))
    }
    if (username) {
        return(
            <Navigate to={nextLocation}/> 
        )
    }
  return (
    <form onSubmit={loginFunc}>
        <input name="login" type="text" placeholder="Login"/>
        <input name="password" type="password" placeholder="Password"/>
        <button>Login</button>
    </form>
  )
}
export default LoginForm