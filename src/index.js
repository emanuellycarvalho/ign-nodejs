const { request } = require("express");
const { v4: uuid } = require("uuid");

const express = require("express");
const app = express();

app.use(express.json());

const customers = []; //"database"

app.post("/account", (request, response) => {
    const { cpf, name } = request.body;

    if (customers.some((customer) => customer.cpf === cpf)) {
        return response.status(400).json({ error: "CPF already exists" });
    }

    customers.push({
        cpf,
        name,
        id: uuid(),
        statement: []
    });

    return response.status(201).send();
});


//startar a aplicação na porta  do parâmetro
app.listen(3333);