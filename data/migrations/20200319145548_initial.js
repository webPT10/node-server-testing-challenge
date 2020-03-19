
exports.up = async function(knex) {
  await knex.schema.createTable("users", (table) => {
      table.increments()
      table.text("name").unique().notNullable()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("users")
};
