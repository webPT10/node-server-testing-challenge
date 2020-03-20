const db = require('../data/config.js');

async function insert(users) {
  const [id] = await db("users").insert(users);
  return db("users")
    .where("id", id)
    .first();
}

async function update(id, changes) {
  await db("users").update(changes).where("id", id)
  return findById(id)
}

function remove(id) {
  return db("users").where("id", id).del()
}

function getAll() {
  return db('users');
}

function findById(id) {
  return db('users').where({ id }).first();
}

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
  };