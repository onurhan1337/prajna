import Container from "@/components/layout/container";
import { Metadata } from "next";
import { loadQuery } from "@/sanity/lib/store";
import { SanityDocument } from "next-sanity";
import { BOOKMARKS_QUERY } from "@/sanity/lib/queries";
import { draftMode } from "next/headers";
import { BookmarksList } from "@/components/bookmark/list";

export const metadata: Metadata = {
  title: "Bookmark - Prajna",
  description: "Bookmarks about software development and design",
};

export default async function BookmarkPage() {
  const initial = await loadQuery<SanityDocument[]>(
    BOOKMARKS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return draftMode().isEnabled ? (
    <></>
  ) : (
    <Container>
      <section className={"space-y-2"}>
        <h1 className={"scroll-m-20 text-xl font-semibold tracking-tight"}>
          Bookmarks
        </h1>
        <BookmarksList bookmarks={initial.data} />
      </section>
    </Container>
  );
}
