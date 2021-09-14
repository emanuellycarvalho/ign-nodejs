import express from 'express';

const app = express();

app.get("/", function(request, response){
    return response.json({ message: "Autoreload worked" });
});

app.listen(3333, () => console.log("Server is running!"));