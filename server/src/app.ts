import express from "express";
import cors from "cors";
import scrambleRoutes from "./routes/scrambleRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", scrambleRoutes);

export default app;
