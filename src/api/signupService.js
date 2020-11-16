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
        return await httpService.postData('/api/signup/', { 'email': email });    
    }
}

// exports the service
export default new SignupService();