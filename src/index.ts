import { httpServerHandler } from "cloudflare:node";
import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.json({ message: "Hello Express on Cloudflare Workers!" });
});

app.get("/api/status", (_req, res) => {
  res.json({
    status: "ok",
    subject: "PaaS",
    week: 5,
    platform: "Cloudflare Workers"
  });
});

app.get("/api/info", (_req, res) => {
  res.json({
    framework: "Express",
    runtime: "Cloudflare Workers",
    course: "Platform as a Service"
  });
});

app.listen(3000);

export default httpServerHandler({ port: 3000 });
