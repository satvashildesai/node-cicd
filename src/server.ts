import app from "./index";
import * as env from "dotenv";

env.config();

const PORT = process.env.PORT;

if (!PORT) throw new Error("CRITICAL: Missing env variable");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
