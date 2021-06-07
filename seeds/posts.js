exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('blogPosts').del()
    .then(function () {
      // Inserts seed entries
      return knex('blogPosts').insert([
        {
          id: 1,
          title: 'My First Blog Post',
          date_added: new Date(Date.now()),
          comment_count: 0,
          post_content: JSON.stringify([
            'This is my very first blog post.'
          ])
        },
        {
          id: 2,
          title: 'My Second Blog Post',
          date_added: new Date(Date.now()),
          comment_count: 0,
          post_content: JSON.stringify([
            'This is my second blog post.'
          ])
        },
        {
          id: 3,
          title: 'My Third Blog Post',
          date_added: new Date(Date.now()),
          comment_count: 0,
          post_content: JSON.stringify([
            'This is my third blog post.'
          ])
        }
      ])
    })
}
