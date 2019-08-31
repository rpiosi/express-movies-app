import request, { Response } from "supertest";
import app from "../app";

describe("POST /api/v1/movies", () => {
	it("should return 422 without Authorization header", () => {
		return request(app)
			.post("/api/v1/movies")
			.expect((res: Response) => {
				expect(res.status).toBe(422);
			});
	});
});