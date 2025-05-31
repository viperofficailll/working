import { PORT } from "./config";
import { app } from "./app";
import { conn } from "./db/conn";
conn();

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
