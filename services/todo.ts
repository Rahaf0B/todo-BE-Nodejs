import express, { Router, Request, Response } from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import requestValidation from "../middleware/requestValidation";
import CTodo from "../controllers/todo";

const router = Router();

router.use(cookieParser());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));



router.get(
  "/",
  async (req: Request, res: Response) => {
    try {
      const instance = CTodo.getInstance();
      const data= await instance.getAllTodoData(
      );
      res.status(200).send({ items: data });
    } catch (error: any) {
      res.status(500).send;
    }
  }
);



router.post(
  "/add-todo",
  requestValidation.validateAddTodo,
  async (req: Request, res: Response) => {
    try {
      const instance = CTodo.getInstance();
     await instance.addTodo(req.body);
      res.status(200).send();
    } catch (error: any) {
      res.status(500).send;
    }
  }
);


export default router;
