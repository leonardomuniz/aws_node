const axios = require('axios');

describe('testing my app server', () => {
    const item = {
        _id: "61b291898e8a895c71e5c576",
        nome: "Francisco Avila",
        idade: 34,
        cargo: "Organizador de eventos",
        __v: 0
    };

    const newUser = {
        nome: new Date().toString(),
        idade: 34,
        cargo: "Organizador de eventos"
    }

    test('localhost connection for / endpoint', async () => {
        const { status } = await axios.get('http://localhost:3333/');

        expect(status).toEqual(200);
    });
    test('server connection for / endpoint', async () => {
        const { status } = await axios.get('http://18.228.10.57:3333/');

        expect(status).toEqual(200);
    });
    test('localhost connection for GET funcionario endpoint', async () => {
        const { status } = await axios.get('http://localhost:3333/funcionario');

        expect(status).toEqual(200);
    });
    test('server connection for GET funcionario endpoint', async () => {
        const { status } = await axios.get('http://18.228.10.57:3333/funcionario/');

        expect(status).toEqual(200);
    });
    test('localhost count a certain user for GET funcionario endpoint', async () => {
        const { data } = await axios.get('http://localhost:3333/funcionario');

        expect(data).toContainEqual(item);
    });
    test('server count a certain user for GET funcionario endpoint', async () => {
        const { data } = await axios.get('http://18.228.10.57:3333/funcionario/');

        expect(data).toContainEqual(item);
    });
    test('localhost search for a certain user by id for GET funcionario endpoint', async () => {
        const { data } = await axios.get('http://localhost:3333/funcionario/61b291898e8a895c71e5c576');

        expect(data.nome).toBe(item.nome)
    });
    test('server search for a certain user by id for GET funcionario endpoint', async () => {
        const { data } = await axios.get('http://18.228.10.57:3333/funcionario/61b291898e8a895c71e5c576');

        expect(data.nome).toBe(item.nome)
    });
    test('localhost create a user for POST funcionario endpoint', async () => {
        const { status } = await axios.post('http://localhost:3333/funcionario/', newUser);

        expect(status).toEqual(200);
    });
    test('server create a user for POST funcionario endpoint', async () => {
        const { status } = await axios.post('http://18.228.10.57:3333/funcionario/', newUser);

        expect(status).toEqual(200);
    });
    test('localhost create a user with the same name as an existing user for POST funcionario endpoint and get error', async () => {
        const { data } = await axios.post('http://localhost:3333/funcionario/', { nome: "novo usuario", });

        expect(data).toMatchObject({ message: 'Este funcionario(a) já foi cadastrado(a)!' });
    });
    test('server create a user with the same name as an existing user for POST funcionario endpoint and get error', async () => {
        const { data } = await axios.post('http://localhost:3333/funcionario/', { nome: "novo usuario", });

        expect(data).toMatchObject({ message: 'Este funcionario(a) já foi cadastrado(a)!' });
    });
});

jest.setTimeout(9000)

//http://18.228.10.57/