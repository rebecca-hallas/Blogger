exports.up = function (knex) {
  knex.schema.createTable('Posts', function (table) {
    table.increments('id').primary()
    table.string('title')
    table.date('date_added')
    table.integer('comment_count').defaultsTo(0)
    table.string('post_content')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('Posts')
}
