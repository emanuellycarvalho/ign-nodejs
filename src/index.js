const { request } = require('express');
const express = require('express');
const app = express();

app.get("/", (request, response) => {
    return response.json({ message: "Hello world, but with json and nodemon" });
});

//startar a aplicação na porta  do parâmetro
app.listen(3333);