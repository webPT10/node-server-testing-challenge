const supertest = require("supertest")
const db = require("../data/config")
const server = require("../server")

beforeEach(async () => {
	await db.seed.run()
})

test("welcome route", async() => {
    const res = await supertest(server).get("/")

    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Welcome to the Testing Welcome.")
    expect(res.body.message).toHaveLength(31)
    expect(res.body.message).toMatch(/welcome/i)
})

test("create users router", async() => {
        const res = await supertest(server)
            .post("/api/users")
            .send({ name: "Trigger" })
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("Trigger")
    })

afterAll(async () => {
    await db.destroy()
})