const db = require("../data/config")
const usersModel = require("./usersModel")
beforeEach(async () => {
	await db.seed.run()
})
afterAll(async () => {
	await db.destroy()
})
test("insert", async () => {
	const res = await usersModel.insert({ name: "Fitzy" })
	expect(res.name).toBe("Fitzy")
})
test("findById", async () => {
	const res = await usersModel.findById(1)
	expect(res.name).toBe("Fitz")
})
test("update", async () => {
	const res = await usersModel.update(1, { name: "Fitz" })
	expect(res.name).toBe("Fitz")
})
test("remove", async () => {
	await usersModel.remove(1)
	const users = await db("users").select()
	expect(users).toHaveLength(3)
})