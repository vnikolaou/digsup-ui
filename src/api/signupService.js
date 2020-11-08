'use strict';

import httpService from './httpService';

/**
 * This service handles the communication with the server.
 */
class SignupService {
    /**
     * Submits the email to the server
     * @param {*} email the given email
     */
    async submitEmail(email) {
        return await httpService.postData('http://127.0.0.1:8081/api/signup/', { 'email': email });    
    }
}

// exports the service
export default new SignupService();