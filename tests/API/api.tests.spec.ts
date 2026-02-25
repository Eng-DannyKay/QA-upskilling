import { test, expect } from '@playwright/test';
import { request } from 'http';


test.only('API Post Request', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/users', {
        data: {
            "name": "John Doe",
            "Job":"Developer"
        }
    });
    expect(response.status()).toBe(201);
    const text = response.text();
    expect(text).toContain('John Doe');
    
});
test('API GET test', async({request}) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/2', {
        headers: {
             'x-api-key': 'reqres-free-v1',
        }
    });
    expect(response.status()).toBe(200);
    const text = await response.text();
    expect(text).toContain('Antonette');
    console.log(await response.json());

});

test('API PUT test', async ({ request }) => {
    const response = await request.put('https://jsonplaceholder.typicode.com/users/2', {
        data: {
            name: 'Jane Doe',
            Job: 'Tester'
        }
    })
    expect(response.status()).toBe(200);
    const text = await response.text();
})

test('API DELETE test', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/users/2');
    expect(response.status()).toBe(204);
})