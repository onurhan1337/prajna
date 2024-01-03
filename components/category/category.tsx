"use client";

import { useRouter } from "next/navigation";
import { SanityDocument } from "next-sanity";

import { PostCard } from "../post/card";

export const Category = ({ category }: { category: SanityDocument }) => {
  return (
    <section className="space-y-2">
      <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
        {category.title}
      </h1>
      <p className="text-sm text-zinc-600 text-balance">
        {category.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 my-6">
        {category.posts?.length > 0 ? (
          category.posts.map((post: SanityDocument) => (
            <PostCard key={post._id} post={post} />
          ))
        ) : (
          <div className="py-2 text-red-500">
            No posts found for this category.
          </div>
        )}
      </div>

      <SeeAllButton />
    </section>
  );
};

export const SeeAllButton = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/post")}
      className="w-full flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
    >
      <svg
        className="w-5 h-5 rtl:rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
        />
      </svg>
      <span>Go back</span>
    </button>
  );
};
