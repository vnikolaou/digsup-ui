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
        console.log('--- inside submitEmail ---');
        const result = await httpService.postData('/api/signup', { email }); 
        console.log(result);
        console.log('--- end submitEmail ---');
        return result;   
    }
}

// exports the service
export default new SignupService();