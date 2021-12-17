const Posts = [
  { id: '1', name: 'Post 1', author: 'Author 1' },
  { id: '2', name: 'Post 2', author: 'Author 2' },
  { id: '3', name: 'Post 3', author: 'Author 3' },
];

const listPosts = () => {
  console.log(`Id|Name|Author`);
  console.log(`-----------------`);
  Posts.map(post => {
    console.log(`${post.id}|${post.name}|${post.author}`);
  });
  console.log(`-----------------`);
};

const addPost = newPost => {
  const promise1 = new Promise((resolve, reject) => {
    Posts.push(newPost);
    resolve(Posts);
    // reject('Bir Hata Olustu');
  });

  return promise1;
};

async function showPosts() {
  console.log('OLD POSTS');
  console.log(`-----------------`);
  listPosts();
  try {
    await addPost({ id: '4', name: 'Post 4', author: 'Author 4' });
    console.log('NEW POSTS');
    console.log(`-----------------`);
    listPosts();
  } catch (err) {
    console.log(err);
  }
}

showPosts();
