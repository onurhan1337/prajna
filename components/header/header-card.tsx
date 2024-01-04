import { HEADER_QUERY } from "@/sanity/lib/queries";
import { loadQuery } from "@/sanity/lib/store";
import { SanityDocument } from "next-sanity";
import { HeaderAvatar } from "./avatar";

export const HeaderCard = async () => {
  const initial = await loadQuery<SanityDocument>(
    HEADER_QUERY,
    {}
    // {
    //     perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    // }
  );

  const { avatar, fullName, jobTitle } = initial.data;

  return (
    <header className="flex flex-row items-center justify-start space-x-2">
      <div>
        <HeaderAvatar url={avatar} alt={fullName} />
      </div>

      <div>
        <h1 className="text-zinc-900">{fullName || "Your Name"}</h1>
        <p className="text-sm text-zinc-500">{jobTitle || "Your Title"}</p>
      </div>
    </header>
  );
};
