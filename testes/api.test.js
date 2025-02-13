const axios = require("axios");
const createUser = require("../utils/createUser");
const BASE_URL = "http://localhost:3000";

describe("Verificando comportamento do endpoint de usuario", () => {
    test("Criando um Usuario", async () => {
        const response = await axios.post(`${BASE_URL}/users`, {
            name: "Princesa Leia",
            email: "starwarsestrela@gmail.com"
        })

        expect(response.status).toBe(201)
        expect(response.data).toHaveProperty("id")
    });

    test("Listando usuario", async () => {
        const response = await axios.get(`${BASE_URL}/users`);

        expect(response.status).toBe(200)
        expect(Array.isArray(response.data)).toBe(true)
    })

    test("Verificando um usuario pelo o ID", async () => {
        const novoUsuario = await createUser("Darth Vader", "starwarsestrela@gmail.com")
        let userId = novoUsuario.id
        const response = await axios.get(`${BASE_URL}/users/${userId}`);

        expect(response.status).toBe(200)
        expect(response.data.id).toBe(userId)
    })

    test("atualizando o nome do usuario", async () => {
        const novoUsuario = await createUser("Darth Vader", "starwarsestrela@gmail.com")
        let userId = novoUsuario.id
        const response = await axios.patch(`${BASE_URL}/users/${userId}`, {
            name: "Luke Skywalker"
        })
        
        expect(response.status).toBe(200)
        expect(response.data.name).toBe("Luke Skywalker")
    })

    test("Deletando um usuario", async () => {
        const novoUsuario = await createUser("Darth Vader", "starwarsestrela@gmail.com")
        let userId = novoUsuario.id
        const response = await axios.delete(`${BASE_URL}/users/${userId}`);

        expect(response.status).toBe(200)
        try {
            await axios.get(`${BASE_URL}/users/${userId}`);
        } catch (error) {
            expect(error.response.status).toBe(404) 
        }
    })
}); 

