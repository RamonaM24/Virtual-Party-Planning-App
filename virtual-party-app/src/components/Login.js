import React from 'react'
import { Button } from './Button';

const Login = () => {
    return(
        <div>
            <h1>Login Page</h1>
            <form>
                        <input type='email' name='email' placeholder='Your Email Address' className='footer-input'>
                        </input>
                        <input type='password' name='password' placeholder='Your Password' className='footer-input'>
                        </input>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </form>
        </div>
    );
};

export default Login;