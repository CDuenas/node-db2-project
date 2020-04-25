
exports.up = async function(knex) {
    await knex.schema.createTable("cars", (table) => {
        table.increments("id")
        table.integer("VIN").notNull().unique()
        table.text("Make").notNull()
        table.text("Model").notNull()
        table.integer("Mileage").notNull()
        table.text("Transmission").defaultTo("Automatic")
        table.text("Title Status")
    })
}

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("cars")
}
