interface PostcardProp {
  post: Post;
}

const PostCard = ({ post }: PostcardProp) => {
  return (
    <div className="card">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;
