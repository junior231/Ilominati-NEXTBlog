import PostsGrid from "../../posts/postGrid/postGrid";
import styles from "./featuredPosts.module.css";

const FeaturedPosts = ({ posts }) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
