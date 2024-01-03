import Link from "next/link";
import { SanityDocument } from "@sanity/client";
import { formatDistanceToNow } from "date-fns";

export const PostCard = ({ post }: { post: SanityDocument }) => {
  const {
    _id,
    title,
    _createdAt,
    slug,
    subtitle,
    categories,
    estimatedReadingTime,
  } = post;

  return (
    <article
      key={_id}
      className="container mx-auto grid grid-cols-1 divide-y divide-blue-100 bg-zinc-100 hover:bg-zinc-200/70 rounded-xl p-4 space-y-2"
    >
      <Link href={`/post/${slug.current}`} key={_id}>
        <div className="flex items-center justify-between space-x-2">
          <p className="text-md text-zinc-800">{title}</p>
          <p className="text-sm text-pretty text-zinc-600">
            {formatDistanceToNow(new Date(_createdAt), { addSuffix: true })}
          </p>
        </div>
        <p className="text-zinc-500 text-sm my-2">{subtitle}</p>
        <div className="flex items-center space-x-1">
          {categories?.length > 0 &&
            categories.map((category: any, index: number) => (
              <span
                key={category._id}
                className={`inline-block bg-zinc-200 border border-zinc-300 text-zinc-500 rounded-md px-3 py-1 text-xs font-medium ${
                  index < categories.length - 1 ? "mr-1" : ""
                }`}
              >
                {category.title}
              </span>
            ))}
          {categories?.length > 0 && <span className="opacity-60">·</span>}
          <p className="text-sm text-pretty text-zinc-600">
            {estimatedReadingTime} min read
          </p>
        </div>
      </Link>
    </article>
  );
};

export default PostCard;
