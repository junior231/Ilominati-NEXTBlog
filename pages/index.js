import FeaturedPosts from "../components/homePage/featuredPosts/FeaturedPosts";
import Hero from "../components/homePage/hero/Hero";
import { getFeaturedPosts } from "../helpers/posts-utils";
import Head from "next/head";

function HomePage({ posts }) {
  return (
    <>
      <Head>
        <title>{`Ilominati's Blog`}</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    // revalidate: 18000
  };
}

export default HomePage;
