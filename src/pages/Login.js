import Nav from '../components/Nav'

const Login = () => {

    const authToken = false

    const handleLogin = () => {
        console.log("login in")
    }

    const handleSignUp = () => {
        console.log("signing up")
    }

    return (
        <div className='overlay'>
            <Nav/>
            <div className="home">
                <h1>Login</h1>
                {authToken && <h4>logged in</h4>}
                <button className="primary-button" onClick={handleLogin}>Login</button>
                <button className="primary-button" onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
    )
}

export default Login