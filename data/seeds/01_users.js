
exports.seed = async function(knex) {
  await knex("users").truncate()
  await knex("users").insert([
    { name: "Fitz" },
    { name: "Effie"},
    { name: "Max"},
    { name: "Snoopy"}
  ])
};
