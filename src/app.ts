import express, { Application } from "express";
import cors from "cors";
import { DenouncementRoutes } from "./components/denouncement";
import { AgentRoutes } from "./components/Agent";
import mongoose from "mongoose";
import path from "path";

class App {
  public readonly express: Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    App.database();
    this.routes();
    console.log('Server UP')
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }
  private static async database() {
    await mongoose.connect("mongodb://localhost:27017/Crealit", {useUnifiedTopology:true, useNewUrlParser:true});
  }
  private routes() {
    console.log(path.join(__dirname, "ImageUpload"))
    this.express.use("/greenhelp", DenouncementRoutes);
    this.express.use("/agent", AgentRoutes)
    this.express.use(
      "/image",
      express.static(path.join(__dirname, "ImageUpload"))
    );
    this.express.use(
      "/audio",
      express.static(path.join(__dirname, "AudioUpload"))
    );
  }
}

export default new App().express;
