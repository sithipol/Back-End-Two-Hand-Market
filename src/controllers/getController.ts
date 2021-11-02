import { Request, Response } from "express";

export const showData = async (req: Request, res: Response) => {
  res.send("hello");
};

export const printReq = async (req: Request, res: Response) => {
  res.send("hello : " + req.params.id);
};
