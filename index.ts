import express from "express";
import todoRoutes from "./services/todo";
const app = express();
var cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "*",
  })
);

app.use("/todo", todoRoutes);

const port = 8080;



app.use(async (req: any, res: any, next: any) => {
  res.status(404).send({ message: "Not Found" });
});

app.listen(port, () => {
  console.log("Express app is listening on the port 8080!");
});
