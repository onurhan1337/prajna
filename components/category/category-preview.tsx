"use client";

import { QueryParams, SanityDocument } from "next-sanity";
import { QueryResponseInitial, useQuery } from "@sanity/react-loader";

import { CATEGORY_QUERY } from "@/sanity/lib/queries";
import { Category } from "./category";

export const CategoryPreview = ({
  initial,
  params,
}: {
  initial: QueryResponseInitial<SanityDocument>;
  params: QueryParams;
}) => {
  const { data } = useQuery<SanityDocument | null>(CATEGORY_QUERY, params, {
    initial,
  });

  return data ? (
    <Category category={data} />
  ) : (
    <div className="bg-red-100">Category not found</div>
  );
};
