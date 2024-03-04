import React from 'react';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';

export default function ContainerWrapper(props) {

  return (
    <>
      <BlogPostItemContent>{props.children}</BlogPostItemContent>
      <div className='descriprtion'>
      <BlogPostItemHeader />

      <BlogPostItemFooter />
     
      </div>
     
    
     
    </>
  );
}
