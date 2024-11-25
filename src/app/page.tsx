import PostCard from "@/components/PostCard";

const fetchPost = async (): Promise<Post[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await res.json();
  return data.splice(1, 10);
};

export default async function Home() {
  const posts = await fetchPost();
  return (
    <main>
      <h2>Home</h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}
