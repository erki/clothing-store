import React, {Component} from "react";
import {Styled} from "./sign-up.styles";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if (password !== confirmPassword) {
            alert("passwords don't match!");
            return;
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
            <Styled.SignUpContainer>
                <Styled.Title>I do not have an account</Styled.Title>
                <span>Sign up with email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' required name='displayName' value={displayName} onChange={this.handleChange}
                               label='Display Name'/>
                    <FormInput type='text' required name='email' value={email} onChange={this.handleChange}
                               label='Email'/>
                    <FormInput type='password' required name='password' value={password} onChange={this.handleChange}
                               label='Password'/>
                    <FormInput type='password' required name='confirmPassword' value={confirmPassword}
                               onChange={this.handleChange} label='Confirm Password'/>

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </Styled.SignUpContainer>
        )
    }
}

export default SignUp;
