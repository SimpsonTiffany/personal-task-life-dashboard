const request = require("supertest");
const app = require("../index");

describe("GET /health", () => {
    it("should return status OK", async () => {
        const response = await request(app).get("/health");
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("OK");
    });
});
