import express from "express";
import { PORT } from "./config/EnvConfig.js";

const app = express();

app.listen(PORT, () =>
  console.log(`Servidor corriendo en el puerto: http://localhost:${PORT}`)
);
