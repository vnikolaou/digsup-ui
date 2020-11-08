'use strict';

import React, { Component } from 'react';
import SignupService from '../../api/signupService';

/**
 * The signup form react component.
 */
class SignupForm extends Component {
    /**
     * The class constructor
     * @param {*} props the props 
     */
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            errors: {},
            message: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    /**
     * Validates the form fields (ie. the email field).
     */
    validateFields() {
        const errors = {};
        if(!this.state.email) {
            errors['email'] = 'Please type an email address.';
        } else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            .test(this.state.email)) {
            errors['email'] = 'Please provide only a valid email address.';
        }

        return errors;      
    }

    /**
     * It is called when the user types into the email field.
     * @param {*} event the event
     */
    handleChange(event) {
        const value = event.target.value;

        this.setState((state) => {
            return {
                email: value
            }
        });
    }

    /**
     * It is called when the user clicks on the 'submit' button.
     * It performs validations and submits the email to the server.
     * @param {*} event the event
     */
    async handleSubmit(event) {
        event.preventDefault();
        
        const errors = this.validateFields();

        let message = {};
        if(Object.keys(errors).length == 0) {    
            const result = await SignupService.submitEmail(this.state.email);
            console.log('Submission result=' + result);

            message = {
                text: result ? 'Your email was sent successfully !!': 
                    'There was a server error. Please try again.',
                error: result? false: true
            }
        } 

        this.setState((state) => {
            return {
                errors: errors,
                message: message
            }
        });           
    }

    /**
     * It renders the component layout.
     */
    render() {
        const { email, errors, message }= this.state;
        return (
            <React.Fragment>
                <section className="container">
                    <header className="header">
                        <h2>Signup</h2>
                    </header>
                    <main>
                        <div className='message'>
                        <div className={message.error?'error':'success'}>{message.text}&#160;</div>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <div className='label'>Email:</div>
                                <div className='error'>{errors.email}</div>
                                <div>
                                    <input type='text' maxLength='250' name='email'
                                        value={email}
                                        onChange={this.handleChange}></input>
                                </div>    
                            </div>    
                            <br/>
                            <div className='footer'>            
                                <button type='submit'>Submit</button>
                            </div>
                        </form>
                      
                    </main>
                </section>
        </React.Fragment>
        )
    }
}

// exports the component
export default SignupForm;