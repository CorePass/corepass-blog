import React from "react";
import BlogPostItem from "@theme-original/BlogPostItem";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";

let classIterator = 0;

export default function BlogPostItemWrapper(props) {
  let nameOfClass;
  let id;

  if (classIterator % 2 === 0) {
    nameOfClass = "firstBlogPost";
    id = "firstItem";
  } else {
    nameOfClass = "secondBlogPost";
    id = "secondItem";
  }

  classIterator++;

  return (
    <>
      <div className={nameOfClass} id={id}>
        <BlogPostItemContainer {...props} />
      </div>
    </>
  );
}
