const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post: 'Proident sit duis do irure laborum sit et esse',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post: 'Dolore excepteur cupidatat exercitation veniam velit.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post: 'Amet nostrud ex sint ex labore cillum ipsum non enim.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post: 'Sit tempor in anim amet commodo labore cillum minim nulla irure est ad aliquip reprehenderit.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post: 'Non est ad est non.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post: 'Ut et ut amet duis magna dolor ut aliquip laboris sint labore dolore exercitation amet.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post: 'Ad magna sint veniam adipisicing aliqua esse eiusmod eiusmod veniam duis velit non adipisicing.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post: 'Minim cupidatat mollit quis mollit sint.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post: 'Commodo officia commodo cillum in et fugiat est occaecat nostrud sit reprehenderit sint.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post: 'Sunt irure duis tempor sit elit elit excepteur do.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post: 'Sit pariatur minim laboris sunt.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post: 'Lorem est incididunt reprehenderit amet excepteur irure fugiat sit cupidatat exercitation dolore laborum deserunt.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post: 'Enim fugiat pariatur sunt fugiat culpa culpa minim consequat nostrud exercitation.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post: 'Laboris consectetur sunt qui anim.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post: 'Duis mollit tempor ut dolore ad.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post: 'Eiusmod anim do ullamco dolore magna et aliquip minim occaecat non anim elit et nisi.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post: 'Consectetur veniam tempor ea dolore non.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post: 'Quis aliqua consectetur eiusmod aute non et commodo cupidatat qui anim.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post: 'Aliqua ad velit incididunt sit proident exercitation.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post: 'Fugiat exercitation sint Lorem nulla occaecat eiusmod adipisicing pariatur consectetur proident minim qui.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;