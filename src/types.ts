import { Connection, EntityManager, IDatabaseDriver } from "@mikro-orm/core";
import Express, { Request, Response } from "express";

export type MyContext = {
  em: EntityManager<any> & EntityManager<IDatabaseDriver<Connection>>;
  req: Request & { session: Express.Session };
  res: Response;
};
