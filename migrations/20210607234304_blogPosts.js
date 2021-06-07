exports.up = (knex) => {
  return knex.schema.createTable('blogPosts', (table) => {
    table.increments().primary()
    table.string('title')
    table.date('date_added')
    table.integer('comment_count').defaultsTo(0)
    table.string('post_content')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('blogPosts')
}
