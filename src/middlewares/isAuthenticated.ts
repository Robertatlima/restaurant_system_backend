import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  //en sub temos o id do usuario
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET) as Payload;

    //recuperar o id do token e colocar dentro de uma variavel user_id dentro do request
    req.user_id = sub;
  } catch (err) {
    return res.status(401).end();
  }

  return next();
}
