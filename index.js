import express, { json } from "express";
import cors from "cors";
// import  Pool  from "./db.js";

const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = { origin: process.env.URL || "*" };

app.use(cors(corsOptions)); // Enable CORS for all routes (or specify a route) that your server should accept requests from
app.use(json());
