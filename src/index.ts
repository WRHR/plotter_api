import express from "express";
import { MikroORM } from "@mikro-orm/core";
import mikroConfig from "./mikro-orm.config";
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from "type-graphql";
import MyContext from './types' 
// import cors from "cors";

const main = async () => {
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();

  const app = express();

  // app.use(
  //   cors({
  //     origin: "http://localhost:3000",
  //     credentials: true,
  //   })
  // );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers:[],
      validate:false
    }),
    context: ({req, res}): MyContext => ({ em: orm.em, req, res})
  })

  app.listen(4000, () => {
    console.log("Server running on port 4000");
  });
};

main();
