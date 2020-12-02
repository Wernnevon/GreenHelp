import express, { Application } from "express";
import cors from "cors";
import { DenouncementRoutes } from "./components/denouncement";
import mongoose from "mongoose";

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
    this.express.use("/greenhelp", DenouncementRoutes);
  }
}

export default new App().express;
