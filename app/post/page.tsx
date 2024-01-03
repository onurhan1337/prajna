import { Metadata } from "next";
import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";

import Posts from "@/components/post/posts";
import { PostsPreview } from "@/components/post/post-preview";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Container from "@/components/layout/container";

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
    <Container>
      <section className="space-y-2">
        <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Posts
        </h1>
        <Posts posts={initial.data} />
      </section>
    </Container>
  );
}
