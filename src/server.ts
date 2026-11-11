import express from "express";
import { livroRouter } from "./routes/livros.route.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/livros", livroRouter);

app.listen(port, () => {
  console.log(`API funcionando em: http://localhost:${port}`);
});
