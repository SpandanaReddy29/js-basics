//forEach() method calls a function (a callback function) once for each array element

const num = [1,2,3,4,5,6];
let sum = 0;
num.forEach(ele => sum += ele);
console.log(sum);

//forEach in array of objects
const posts = [
    { id: 23, title: 'Daily JS News' },
    { id: 52, title: 'Code Refactor City' },
    { id: 105, title: 'The Brightest Ruby' }
];
const handlePosts = () => posts.forEach((post) => savePost(post));
const savePost = (post) => console.log('saving post:' + post.title);
handlePosts();
