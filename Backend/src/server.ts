import { app } from "./app";
import { conn } from "./db/conn";
import { config } from "dotenv";
import path from 'path'
config({
  path:path.resolve(__dirname,"../.env")
})
conn();
const Port = process.env.PORT

app.listen(Port, () => {
  console.log(`listening on ${Port}`);
});
