import React from 'react'
import { Button } from './Button';

const Login = () => {
    return(
        <div>
            <h1>Login Page</h1>
            <form>
                        <input type='email' name='email' placeholder='Your Email Address' className='login-input'>
                        </input>
                        <input type='password' name='password' placeholder='Your Password' className='login-input'>
                        </input>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
        </div>
    );
};

export default Login;