import { SanityDocument } from "next-sanity";

import Container from "../layout/container";
import { PostCard } from "./card";

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <>
      {posts?.length > 0 ? (
        posts.map((post) => <PostCard key={post._id} post={post} />)
      ) : (
        <div className="py-2 text-red-500">No posts found.</div>
      )}
    </>
  );
}
