export default async function BlogPage() {
    const res = await fetch("http://localhost:3000/api/posts");
    const posts = await res.json();
    return (
      <div>
        <h1>Blogginlägg</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <a href={`/blog/${post.id}`}>{post.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }