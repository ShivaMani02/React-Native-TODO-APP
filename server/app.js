import express from 'express';
import User from './router/user.js'

export const app = express();

app.use(express.json());
app.use("/api/v1", User);
