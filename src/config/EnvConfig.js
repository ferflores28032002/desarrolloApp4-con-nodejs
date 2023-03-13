import dotenv from "dotenv";

dotenv.config({ path: ".env" });

// Variable de entorno para levantar el servidor

export const PORT = process.env.PORT;
