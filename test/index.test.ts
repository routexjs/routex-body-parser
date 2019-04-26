import * as request from "supertest";
import { JsonBody, Routex, TextBody } from "routex";
import * as bodyParser from "../src";

it("Parses JSON", () => {
  const app = new Routex();

  app.middleware(bodyParser.json());

  app.post("/", ctx => {
    ctx.body = new JsonBody(ctx.req.body);
  });

  return request(app.handler)
    .post("/")
    .send({ name: "john" })
    .expect("Content-Type", /json/)
    .expect("Content-Length", "15")
    .expect(200);
});

it("Parses URL encoded", () => {
  const app = new Routex();

  app.middleware(
    bodyParser.urlencoded({
      extended: false
    })
  );

  app.post("/", ctx => {
    ctx.body = new JsonBody(ctx.req.body);
  });

  return request(app.handler)
    .post("/")
    .send("name=john")
    .expect("Content-Type", /json/)
    .expect("Content-Length", "15")
    .expect(200);
});

it("Parses raw", () => {
  const app = new Routex();

  app.middleware(bodyParser.raw());

  app.post("/", ctx => {
    ctx.body = new TextBody(ctx.req.body.toString());
  });

  return request(app.handler)
    .post("/")
    .type("application/octet-stream")
    .send("john")
    .expect("Content-Type", /text/)
    .expect("Content-Length", "4")
    .expect(200);
});

it("Parses text", () => {
  const app = new Routex();

  app.middleware(bodyParser.text());

  app.post("/", ctx => {
    ctx.body = new TextBody(ctx.req.body);
  });

  return request(app.handler)
    .post("/")
    .type("text")
    .send("john")
    .expect("Content-Type", /text/)
    .expect("Content-Length", "4")
    .expect(200);
});
