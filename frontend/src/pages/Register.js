import React from 'react'

const Register = () => {
    return (
        <div>
            <h1>Registration Page</h1>
            <form>
                        <input type='name' name='name' placeholder='Your First Name' className='register-input'>
                        </input>
                        <input type='surname' name='surname' placeholder='Your Last Name' className='register-input'>
                        </input>
                        <input type='email' name='email' placeholder='Your Email Address' className='register-input'>
                        </input>
                        <input type='company' name='company' placeholder='Name of Company (if applicable)' className='register-input'>
                        </input>
                        <input type='dateofbirth' name='dateofbirth' placeholder='Date / Month / Year of Birth' className='register-input'>
                        </input>
                        <button type="submit">Register</button>
                    </form>
        </div>
    );
};

export default Register;