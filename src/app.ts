import express, { Request, Response } from "express";
import cors from "cors";

import globalErrorHandler from "./middlewares/globalErrorHandler";
import { QuranRoutes } from "./module/route/quran.routes";

const app = express();

app.use(cors());
app.use(express.json());


// Root route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Server is running successfully!",
  });
});


app.use("/api/quran", QuranRoutes);



app.use(globalErrorHandler);

export default app;