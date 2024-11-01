import { registerUser } from './api/registerApi.js';
import { loginUser } from './api/loginApi.js';

async function main() {
    const newUser = {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
    };

    const credentials = {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
    };

    try {
        const result = await registerUser(newUser);
        console.log('Registration successful:', result);

        const loginResponse = await loginUser(credentials);
        console.log('Login successful:', loginResponse);
    } catch (error) {
        console.error(error);
    }
};

main();