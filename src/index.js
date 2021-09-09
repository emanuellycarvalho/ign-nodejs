const { request, response } = require("express");
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

app.get("/account", (request, response) => {
    const { cpf } = request.headers;
    const customer = customers.find(customer => customer.cpf === cpf);

    if (!customer) {
        return response.status(404).json({ error: "Customer not found" });
    }

    return response.json(customer.statement);
});

//startar a aplicação na porta  do parâmetro
app.listen(3333);