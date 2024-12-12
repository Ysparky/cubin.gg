import app from "./app";
import { config } from "./config";

app.listen(config.PORT, config.HOST, () => {
  console.log(`Server running on port ${config.PORT}`);
});
