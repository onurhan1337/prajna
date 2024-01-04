import { SanityDocument } from "next-sanity";
import { BookmarkCard } from "@/components/bookmark/card";
import {
  format,
  startOfMonth,
  endOfMonth,
  eachWeekOfInterval,
  endOfWeek,
} from "date-fns";

const sortByCreatedDateDescending = (bookmarks: SanityDocument[]) => {
  return [...bookmarks].sort((a, b) => {
    const dateA = new Date(a._createdAt).getTime();
    const dateB = new Date(b._createdAt).getTime();
    return dateB - dateA;
  });
};

const formatBookmarkDate = (bookmark: SanityDocument) => {
  return format(new Date(bookmark._createdAt), "yyyy-MM-dd");
};

export const BookmarksList = ({
  bookmarks,
}: {
  bookmarks: SanityDocument[];
}) => {
  const startOfMonthDate = startOfMonth(new Date());
  const endOfMonthDate = endOfMonth(new Date());
  const weeks = eachWeekOfInterval({
    start: startOfMonthDate,
    end: endOfMonthDate,
  });

  const sortedBookmarks = sortByCreatedDateDescending(bookmarks);

  return (
    <div>
      {weeks.map((weekStart, index) => {
        const weekStartDate = format(weekStart, "yyyy-MM-dd");
        const weekEndDate = format(endOfWeek(weekStart), "yyyy-MM-dd");

        const bookmarksForWeek = sortedBookmarks.filter((bookmark) => {
          const bookmarkDate = formatBookmarkDate(bookmark);
          return bookmarkDate >= weekStartDate && bookmarkDate <= weekEndDate;
        });

        if (bookmarksForWeek.length === 0) {
          return null;
        }

        return (
          <div key={index}>
            <h2 className="text-2xl leading-snug opacity-40 pt-2">
              {`${index + 1}. Week, ${new Date().getFullYear()}`}
            </h2>
            {renderBookmarks(bookmarksForWeek)}
          </div>
        );
      })}
    </div>
  );
};

const renderBookmarks = (bookmarks: SanityDocument[]) => {
  return bookmarks.map((bookmark) => (
    <BookmarkCard key={bookmark._id} bookmark={bookmark} />
  ));
};

export default BookmarksList;
