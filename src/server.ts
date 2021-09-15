import express from 'express';

const app = express();
app.use(express.json());

app.get("/", function(request, response){
    return response.json({ message: "Autoreload worked" });
});

app.post("/course", (request, response) => {
    // console.log(request.body);    [usaria p debugar]
    const { name } = request.body;;
    return response.json({ name });
});

app.listen(3333, () => console.log("Server is running!"));