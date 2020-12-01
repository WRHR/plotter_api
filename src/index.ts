import express from "express";
import cors from "cors";
import { MikroORM } from "@mikro-orm/core";
import mikroConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();

  const app = express();

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.listen(4000, () => {
    console.log("Server running on port 4000");
  });
};

main();
