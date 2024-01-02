import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";

import Posts from "@/components/post/posts";
import { PostsPreview } from "@/components/post/post-preview";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts - Prajna",
  description: "Posts about software development and design",
};

export default async function PostPage() {
  const initial = await loadQuery<SanityDocument[]>(
    POSTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return draftMode().isEnabled ? (
    <PostsPreview initial={initial} />
  ) : (
    <Posts posts={initial.data} />
  );
}
