import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { SanityDocument } from "next-sanity";

import { loadQuery } from "@/sanity/lib/store";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import Container from "@/components/layout/container";
import { ProjectsList } from "@/components/project/list";
import ProjectsPreview from "@/components/project/project-preview";

export const metadata: Metadata = {
  title: "Projects - Prajna",
  description: "Projects I've worked on",
};

export default async function ProjectPage() {
  const initial = await loadQuery<SanityDocument[]>(
    PROJECTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? "previewDrafts" : "published",
    }
  );

  return draftMode().isEnabled ? (
    <ProjectsPreview initial={initial} />
  ) : (
    <Container>
      <section className="space-y-2">
        <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Projects
        </h1>
        <ProjectsList projects={initial.data} />
      </section>
    </Container>
  );
}
