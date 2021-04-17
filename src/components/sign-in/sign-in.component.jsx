import React, {useState} from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {auth, SignInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {

const [user, setUser] = useState({email:'',password:''});

const handleSubmit = async event => {
    event.preventDefault();
    const { email, password} = user;

try {
await auth.signInWithEmailAndPassword(email, password);
setUser(prevUser => ({email:'',password:''})
    );

}catch (error) {
    alert(error);
}




}

const handleChange =(e)=> {
    const {value, name} = e.target;
    setUser(prevUser => ({
        ...prevUser, [name]: value}
    ));
}


return (
<div className='sign-in'>
<h2>I already have an account</h2>
<span>Sign In with your email and password</span>
<form onSubmit={handleSubmit}>
    <FormInput name='email' 
    type='email' 
    value={user.email} 
    label='email'
    handleChange ={handleChange} 
    required />
    <FormInput name='password' 
    type='password' 
    value={user.password}  
    label='password'
    handleChange ={handleChange} 
    required />
    <div className ='buttons'>
    <CustomButton type ='submit'>Sign In</CustomButton>
    <CustomButton type ='button' onClick={SignInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
    </div>
</form>
</div>
);

}

export default SignIn;