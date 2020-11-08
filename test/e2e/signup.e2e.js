'use strict';

jest.mock('api/signupService'); 

import signupService from 'api/signupService';
import puppeteer from 'puppeteer';

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch(
    {
      headless: false,
      slowMo: 150, 
    }
  );
 
  page = await browser.newPage();

  page.emulate({
    viewport: {
      width: 500,
      height: 2400
    },
    userAgent: ''
  });
})

describe('Signup form assures that', () => {
  test('the loads correctly with proper visual elements', async () => {
    await page.goto('http://localhost:8080/');
    await page.waitForSelector('.header');

    const title = await page.$eval('.header h2', e => e.innerHTML);
    expect(title).toBe('Signup');

    const emailLabel = await page.$eval('div.label', e => e.innerHTML);
    expect(emailLabel).toBe('Email:');

    const emailInputName = await page.$eval('input[type=text]', e => e.name);    
    expect(emailInputName).toBe('email');

    const submitButtonType = await page.$eval('button', e => e.type);    
    expect(submitButtonType).toBe('submit');    

  }, 1600000);

  test('validations apply correctly', async () => {
    await page.click('button[type=submit]');
    const noEmailError = await page.$eval('div.error', e => e.innerHTML);
    expect(noEmailError).toBe('Please type an email address.');

    await page.type('input[name=email]', 'dummy');
    await page.click('button[type=submit]');
    const invalidEmailError = await page.$eval('div.error', e => e.innerHTML);
    expect(invalidEmailError).toBe('Please provide only a valid email address.');
  }, 1600000);

  test('submittion returns error message', async () => {
    const res = await signupService.submitEmail.mockResolvedValue({ status: 400, message: 'Wrong input' });

    const input = await page.$('input[name=email]');
    await input.click({ clickCount: 5 }); // selects the current text

    await page.type('input[name=email]', 'vnikolaou@gmail.com');
    await page.click('button[type=submit]');
    const serverError = await page.$eval('div.error', e => e.innerHTML);
    expect(serverError).toBe('There was a server error. Please try again.');
  }, 1600000); 
  
  test('submittion returns success message', async () => {
    const res = await signupService.submitEmail.mockResolvedValue({ status: 200, message: 'Done!' });

    await page.click('button[type=submit]');
    const serverSuccess = await page.$eval('div.error', e => e.innerHTML);
    expect(serverSuccess).toBe('Your email was sent successfully !!');
  }, 1600000);   
});

afterAll(() => {
  browser.close()
})