import PostContent from "../../components/posts/postDetails/postContent/postContent";
import { getPostData, getPostsFiles } from "../../helpers/posts-utils";
import Head from "next/head";

const PostDetailPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.text} />
      </Head>
      <PostContent post={post} />
    </>
  );
};

export function getStaticProps(context) {
  const { params } = context;

  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilesNames = getPostsFiles();

  const slugs = postFilesNames.map((filename) => filename.replace(/\.md$/, ""));

  const path = slugs.map((slug) => {
    return { params: { slug: slug } };
  });

  return {
    paths: path,
    fallback: false,
  };
}

export default PostDetailPage;
