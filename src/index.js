import express from "express";

const PORT = 5000;
const app = express();


app.listen(PORT, () =>
  console.log(`Servidor corriendo en el puerto: http://localhost:${PORT}`)
);
