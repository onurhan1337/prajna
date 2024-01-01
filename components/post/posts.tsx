import { SanityDocument } from "next-sanity";
import Link from "next/link";
import Container from "../layout/container";

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <Container>
      <article className="container mx-auto grid grid-cols-1 divide-y divide-blue-100 bg-zinc-100 hover:bg-zinc-200/70 rounded-xl p-4 space-y-2">
        {posts?.length > 0 ? (
          posts.map((post) => (
            <Link key={post._id} href={`post/${post.slug.current}`}>
              <h2 className=" text-zinc-800">{post.title}</h2>
              <p className=" text-zinc-500">{post.subtitle}</p>
            </Link>
          ))
        ) : (
          <div className="p-4 text-red-500">No posts found</div>
        )}
      </article>
    </Container>
  );
}
