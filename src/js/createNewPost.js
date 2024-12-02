import { postsArray } from "./posts.js";
import { posts } from "./data.js";

document.addEventListener('DOMContentLoaded', function(event) {
  const form = document.getElementById('formSection');
  form.onsubmit = function(event) {
    event.preventDefault(); 
  
    const form = event.target;
    const title = form.title.value;
    const story = form.story.value;
    const authorName = form.authorName.value;
    const img = form.img.value;
    const newPost = {
        id: postsArray.length + 1, 
        title: title,
        story: story,
        authorName: authorName,
        img: img
    };
    posts.push(newPost);

    localStorage.setItem('posts', JSON.stringify(posts));

    window.location.href = "./home.html"; 
  };
});

 
