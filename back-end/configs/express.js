import express from "express";
import session from "express-session";
import cors from "cors";
export default (app) => {
  app.use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  );
  app.use(
    session({
      secret: "#TopSECRETsecret*!",
      resave: false,
      saveUninitialized: false,
      cookie: {
        sameSite: "lax",
      },
    })
  );
  app.use(express.json());
};
