import express, { Request, Response, Application } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "API is operational",
    data: {
      environment: process.env.NODE_ENV || "development",
      port: process.env.PORT,
      version: "1.0.0",
    },
    timestamp: new Date().toISOString(),
  });
});

export default app;
