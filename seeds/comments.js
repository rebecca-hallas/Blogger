exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('postComments').del()
    .then(function () {
      // Inserts seed entries
      return knex('postComments').insert([
        {
          id: 1,
          post_id: 1,
          date_commented: new Date(Date.now()),
          comment: 'Congratulations on your first blog post'
        },
        {
          id: 2,
          post_id: 2,
          date_commented: new Date(Date.now()),
          comment: 'Congratulations on your second blog post'
        },
        {
          id: 3,
          post_id: 3,
          date_commented: new Date(Date.now()),
          comment: 'Congratulations on your third blog post'
        }
      ])
    })
}
