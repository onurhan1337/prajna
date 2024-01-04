import Link from "next/link";
import { SanityDocument } from "next-sanity";
import { formatDistanceToNow } from "date-fns";

export const BookmarkCard = ({ bookmark }: { bookmark: SanityDocument }) => {
  const { _id, title, description, url, _createdAt } = bookmark;

  return (
    <article className="py-4" key={_id}>
      <Link href={url} target={"_blank"} passHref rel={"noopener noreferrer"}>
        <h1
          className={
            "scroll-m-20 text-md text-zinc-800 font-semibold decoration-2 decoration-zinc-300 underline underline-offset-4 hover:text-blue-600 hover:decoration-blue-500"
          }
        >
          {title}
        </h1>
      </Link>
      <div className={"flex items-center space-x-1 py-1"}>
        <span
          className={
            "text-sm font-normal text-zinc-600 text-pretty tracking-tight"
          }
        >
          {description}
        </span>
        <span className="opacity-60">·</span>
        <p className="text-sm text-pretty font-normal tracking-tight text-zinc-600">
          {formatDistanceToNow(new Date(_createdAt), { addSuffix: true })}
        </p>
      </div>
    </article>
  );
};
