import {posts} from "./data.js";

export let postsArray = JSON.parse(localStorage.getItem('posts')) || posts;
 
  try{
    postsArray = JSON.parse(localStorage.getItem('posts')) || [];
    
  }catch(error){
    
    console.log(error);
    
  };

  if (!localStorage.getItem('posts')) {
    localStorage.setItem('posts', JSON.stringify(postsArray));
  }; 