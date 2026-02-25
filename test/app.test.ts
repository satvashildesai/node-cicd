import request from "supertest";
import app from "../src/index";

describe("GET /", () => {
  it("Should return message and status 200", async () => {
    const res = await request(app).get("/");

    expect(res.status).toEqual(200);
    expect(typeof res.body.message).toBe("string");
  });
});
