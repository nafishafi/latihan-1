import CardList from "../components/Posts/CardList";
import ViewUserButton from "../components/Posts/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Posts = async() => {
  const response = await fetch(base_url, {
    cache: "no-store",
    // next: { revalidate: 3600 }, // Opsi lain dalam mili detik
  });
  const posts: Iposts[] = await response.json()
  return (
    <>
        <p>{new Date().toLocaleTimeString()}</p>
        <div className="bg-amber-500">
        <h1>Posts Page</h1>
        </div>
        {posts.map((post) => {
            return (
                <CardList key={post.id}>
                <p>{post.id}</p>
                <i>{post.title}</i>
                <p>{post.body}</p>
                <ViewUserButton userId={post.userId}/>
                </CardList>
            )
        })}

    </>
  );
}

export default Posts;