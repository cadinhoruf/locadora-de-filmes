import "dotenv/config"
import express, { Application, json } from "express";
import { startDatabase } from "./database";
import middlewares from "./middlewares";
import logics from "./logics";


const app: Application = express();

app.use(json());

app.use("/movies/:id", middlewares.ensureIdExists)

app.get("/movies/:id", logics.readById)
app.get("/movies", logics.read)
app.post("/movies", middlewares.ensureNameExists, logics.create)
app.patch("/movies/:id", middlewares.ensureNameExists, logics.partialUpdate)
app.delete("/movies/:id", logics.remove)

const PORT: number = 3000;
app.listen(PORT, async (): Promise<void> => {
  await startDatabase()
  console.log(`Application is running on PORT:${PORT}`);
});
