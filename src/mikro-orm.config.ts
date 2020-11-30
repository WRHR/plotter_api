import path from "path";
import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
export default {
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [],
  user: "w",
  dbName: "plotter",
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
