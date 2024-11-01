import { registerUser } from './api/registerApi.js';

async function main() {
    const newUser = {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
    };

    try {
        const result = await registerUser(newUser);
        console.log('Registration successful:', result);
    } catch (error) {
        console.error('Error in registration:', error);
    }
};

main();