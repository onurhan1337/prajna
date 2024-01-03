import { draftMode } from "next/headers";
import { SanityDocument } from "next-sanity";

import { loadQuery } from "@/sanity/lib/store";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { ProjectCard } from "./card";

export const ProjectsList = async () => {
  const projects = await loadQuery<SanityDocument[]>(
    PROJECTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return draftMode().isEnabled ? (
    <></>
  ) : (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      {projects.data.length > 0 ? (
        projects.data.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))
      ) : (
        <div className="py-2 text-red-500">
          No posts found for this category.
        </div>
      )}
    </article>
  );
};
