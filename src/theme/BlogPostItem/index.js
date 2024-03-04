import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';

let classIterator = 0;

export default function BlogPostItemWrapper(props) {
 
  let nameOfClass;
  

  if(classIterator % 2 === 0){
    nameOfClass = 'first'
  }else{
    nameOfClass = 'second'
  }
  
  classIterator++;

  return (
    <>
       
       <BlogPostItem className={nameOfClass} {...props} />    </>
  );
}
