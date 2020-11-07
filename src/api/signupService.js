'use strict';

/**
 * This service handles the communication with the server.
 */
class SignupService {
    constructor() {
        console.log('Creating new SignupService instance !!');
    }

    /**
     * Submits the email to the server
     * @param {*} email the given email
     */
    submitEmail(email) {
        return (Math.floor(Math.random() * 6)) % 2; 
    }
}

// exports the service
export default new SignupService();