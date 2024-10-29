import express from "express";
import rootRoutes from "./src/routes/rootRoutes.js";

const app = express();

app.use(express.json());

app.use(rootRoutes);

app.listen(8080, () => {
  console.log("BE starting with port 8080");
});
