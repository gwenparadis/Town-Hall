const { Posts } = require('../models');

const postsData = [
  {
    id: '1',
    content:'Hello',
    topic: 'Test',
  },
  {
    id: '2',
    content: 'Howdy',
    topic: 'Test 02',
  },
  {
    id: '3',
    content: 'Longer string to see what happens',
    topic: 'Test 03',
  },
  {
    id: '4',
    content: 'Different content same Topic 03',
    topic: 'Test 03',
  },
];

const seedPosts = () => Posts.bulkCreate(postsData);

module.exports = seedPosts;
