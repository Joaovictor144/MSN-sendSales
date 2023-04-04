import 'dotenv/config';

import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors({
  origin: `${process.env.URI}`,
  methods: ["POST"],
}));

app.use(
  express.urlencoded({
    extended: true,
  })
);


app.use(express.json());

export { app };