export default async function BlogPostPage({ params }) {
    const res = await fetch("http://localhost:3000/api/posts");
    const posts = await res.json();
    const post = posts.find(p => p.id === params.id);
    if (!post) {
      return <h1>Inlägget hittades inte!</h1>;
    }
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }