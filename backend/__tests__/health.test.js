const request = require("supertest");
const app = require("../index");

describe("GET /health/details", () => {
    it("should return service details", async () => {
        const response = await request(app).get("/health/details");

        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe("OK");
        expect(response.body.service).toBe("personal-task-life-dashboard");
        expect(response.body.version).toBeDefined();
        expect(response.body.timestamp).toBeDefined();
    });
});
