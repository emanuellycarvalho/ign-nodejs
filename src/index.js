const { request } = require('express');
const express = require('express');
const app = express();

app.get("/", (request, response) => {
    return response.send("hello world");
});

//startar a aplicação na porta  do parâmetro
app.listen(3333);