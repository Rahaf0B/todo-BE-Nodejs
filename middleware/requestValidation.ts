import { object, string, number, date, mixed, lazy, array, bool } from "yup";
import { Request, Response, NextFunction, query } from "express";

async function validateAddTodo(
  req: Request,
  res: Response,
  next: NextFunction
) {
  let schema = object({
    body: object({
      title: string().strict(true).typeError("The title Should be String"),

      content: string().strict(true).typeError("The content Should be String"),
    })
      .required("The title and content are required")
      .nullable()
      .strict(true)
      .noUnknown(true),
  });

  try {
    const response = await schema.validate({ body: req.body });
    next();
  } catch (e: any) {
    return res.status(400).send(e.message);
  }
}

export default {
  validateAddTodo,
};
