const supertest = require("supertest")
const server = require("./server")

test("a placeholder test", async() => {
    const res = await supertest(server).get("/")
    console.log(res)
})

// test("a placeholder test", () => {
//     expect(4+4).toBe(8)
// })