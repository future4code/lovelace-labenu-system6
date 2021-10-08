import { AddressInfo } from "net";
import express, { Express } from "express";
import cors from "cors";
import { createStudant } from "./endpoints/createStudant";
import {createTeacher} from "./endpoints/createTeacher";
import { createClasses } from "./endpoints/createClass";
import { addStudantClass } from "./endpoints/addStudantClass";

const app: Express = express();

app.use(express.json());
app.use(cors());

//endpoint de criar estudante
app.put("/studant", createStudant);

//endpoint de criar professores
app.put("/teacher", createTeacher);

app.post("/classes", createClasses)

app.put("/classes/:id", addStudantClass)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
