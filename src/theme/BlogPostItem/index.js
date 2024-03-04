import React from "react";
import BlogPostItem from "@theme-original/BlogPostItem";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";

let classIterator = 0;

export default function BlogPostItemWrapper(props) {
  let nameOfClass;

  if (classIterator % 2 === 0) {
    nameOfClass = "firstBlogPost";
  } else {
    nameOfClass = "secondBlogPost";
  }

  classIterator++;

  return (
    <>
      <div className={nameOfClass}>
        <BlogPostItemContainer {...props} />
      </div>
    </>
  );
}
