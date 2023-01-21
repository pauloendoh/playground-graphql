import { config } from "dotenv";
import { DataSource } from "typeorm";

config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "recipes",
  synchronize: true,
  logging: true,
  entities: [__dirname + "/models/**/*.{ts,js}"],
  subscribers: [],
  migrations: [__dirname + "/migrations/**/*.{js,ts}"],
});
