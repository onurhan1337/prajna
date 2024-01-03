import { SanityDocument } from "next-sanity";

import { ProjectCard } from "./card";

export const ProjectsList = ({ projects }: { projects: SanityDocument[] }) => {
  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
      {projects.length > 0 ? (
        projects.map((project) => (
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
