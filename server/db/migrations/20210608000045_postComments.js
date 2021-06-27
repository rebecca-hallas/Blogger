exports.up = (knex) => {
  return knex.schema.createTable('postComments', (table) => {
    table.increments().primary()
    table.integer('post_id').references('blogPosts.id')
    table.date('date_commented')
    table.string('comment')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('postComments')
}
