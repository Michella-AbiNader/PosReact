import React, {useState} from 'react'
import { useAsyncError } from 'react-router-dom'

function LoginPage() {
    const [userData, setUserData] = useState({
        email: "", password: ""
    })
    const [showPass, setShowPass] = useState(false)
    const handleShowPass = () =>{
        setShowPass(!showPass);
    }

    const handleChanges =(e) =>{
        setUserData({
            ...userData, 
            [e.target.name]: e.target.value})
    }

    const handleLogin = (e) =>{
        e.preventDefault();
        
    }
  return (
    <React.Fragment>
        <div className='Login'>
            <form onSubmit={handleLogin} className='login-content'>
                <div className='mail-field'>
                    <input 
                        className='mail-input'
                        type='text'
                        autoComplete='off'
                        name='email'
                        onChange={handleChanges}
                        required
                    />
                    <label className='mail-label'>Email</label>
                </div>
                <div className='pass-field'>
                    <input 
                        className='pass-input'
                        type={showPass? "text": "password"}
                        autoComplete='off'
                        name='password'
                        onChange={handleChanges}
                        required
                    />
                    <label className='pass-label'>Password</label>
                </div>
                <div className='show-pass-field'>
                    <input 
                        className='show-pass-check'
                        type="checkbox"
                        onChange={handleShowPass}
                    />
                    <label className='show-pass-label'>Show password</label>
                </div>
                <div className='submitting-field'>
                    <button className='login-btn' type="submit">Login</button>
                    <label className="not-registered">Not registedred? 
                        <span>Register</span>
                    </label>
                </div>
            </form>
        </div>

    </React.Fragment>
  )
}

export default LoginPage