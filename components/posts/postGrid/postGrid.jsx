import styles from "./postGrid.module.css";
import PostItem from "../postItem/postItem";

const PostsGrid = ({ posts }) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem post={post} key={post.slug} />
      ))}
    </ul>
  );
};

export default PostsGrid;
