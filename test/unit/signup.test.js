'use strict';

jest.mock('api/httpService'); 

import httpService from 'api/httpService';
import signupService from 'api/signupService';
  
describe('SignupService', () => {
    test('mocks it', async () => {
        httpService.postData.mockResolvedValue({ status: 200, message: 'Everything is good' });
        const res = await signupService.submitEmail('hello@there.com');

        expect(res).toBeDefined();
        expect(res.status).toBe(200);
        expect(res.message).toBe('Everything is good');
    }, 1600000); 
});
