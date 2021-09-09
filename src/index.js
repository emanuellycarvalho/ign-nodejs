const { request, response } = require("express");
const { v4: uuid } = require("uuid");

const express = require("express");
const app = express();

app.use(express.json());

const customers = []; //"database"

//middleware
function verifyIfAccountExistsByCPF(request, response, next) {
    const { cpf } = request.headers;
    const customer = customers.find(customer => customer.cpf === cpf);

    if (!customer) {
        return response.status(404).json({ error: "Customer not found" });
    }

    request.customer = customer;
    return next();
}

function getBalance(statement) {
    const balance = statement.reduce((acc, operation) => {
        if (operation.type === "credit") {
            return acc + operation.amount;
        }
        return acc - operation.amount;
    }, 0);

    return balance;
}

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

app.get("/customers", (request, response) => {
    return response.status(201).json(customers);
});

app.use(verifyIfAccountExistsByCPF);

app.get("/statement", (request, response) => {
    const { customer } = request;

    return response.json(customer.statement);
});

app.get("/statement/:date", (request, response) => {
    const { date } = request.query;
    const { customer } = request;

    const formattedDate = new Date(date + " 00:00");

    const statement = customer.statement.filter(
        (statement) => statemen.created_at.toDateString() == new Date(formattedDate).toDateString()
    );

    return response.json(statement);
});

app.get("/account", (request, response) => {
    const { customer } = request;

    return response.json(customer);
})

app.get("/balance", (request, response) => {
    const { customer } = request;

    const balance = getBalance(customer.statement);

    return response.json(balance);
})

app.post("/deposit", (request, response) => {
    const { message, amount } = request.body;
    const { customer } = request;

    const operation = {
        message,
        amount,
        created_at: new Date(),
        type: "credit"
    }

    customer.statement.push(operation);;

    return response.status(201).send();
});

app.post("/withdraw", (request, response) => {
    const { amount } = request.body;
    const { customer } = request;

    const balance = getBalance(customer.statement);
    if (balance < amount) {
        return response.status(400).json({ error: "Insufficient funds" });
    }

    const operation = {
        amount,
        created_at: new Date(),
        type: "debit",
    };

    customer.statement.push(operation);

    return response.status(201).send();
});

app.put("/account", (request, response) => {
    const { name } = request.body;
    const { customer } = request;

    customer.name = name;

    return response.status(201).send();
});

app.delete("/account", (request, response) => {
    const { customer } = request;

    customers.splice(customer, 1);

    return response.status(200).json(customers);
});

//startar a aplicação na porta  do parâmetro
app.listen(3333);