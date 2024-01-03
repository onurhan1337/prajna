import { SanityDocument } from "next-sanity";
import { draftMode } from "next/headers";

import { loadQuery } from "@/sanity/lib/store";
import { CATEGORY_QUERY } from "@/sanity/lib/queries";
import { Metadata } from "next";
import { Category } from "@/components/category/category";
import { CategoryPreview } from "@/components/category/category-preview";
import Container from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Category - Prajna",
  description: "",
};

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const category = await loadQuery<SanityDocument>(CATEGORY_QUERY, { slug });
  return draftMode().isEnabled ? (
    <CategoryPreview initial={category} params={{ slug }} />
  ) : (
    <Container>
      <Category category={category.data} />
    </Container>
  );
}
