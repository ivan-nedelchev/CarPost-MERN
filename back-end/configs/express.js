import express from "express";
import session from "express-session";
import cors from "cors";
export default (app) => {
  app.use(
    cors({
      origin: "http://localhost:5174",
      credentials: true,
    })
  );
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        sameSite: "lax",
      },
    })
  );
  app.use(express.json());
};
