import React from "react";
import AllPosts from "../../components/posts/allPosts/allPosts";
import { getAllPosts } from "../../helpers/posts-utils";
import Head from "next/head";

const AllPostsPage = ({ posts }) => {
  console.log(posts);

  return (
    <>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
