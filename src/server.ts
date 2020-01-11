import dotenv from "dotenv";
import setupServerDefaults from "./core/utils/setup-server-defaults";

const app = setupServerDefaults();

dotenv.config();

const DOMAIN = process.env.DOMAIN;
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server ready at http://${DOMAIN}:${PORT}`);
});
