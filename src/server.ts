import express from 'express';
import { cotegoriesRoutes } from './routes/categories.routes';

const app = express();
app.use(express.json());
app.use(cotegoriesRoutes);

app.listen(3333, () => console.log("Server is running!"));