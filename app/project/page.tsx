import type { Metadata } from "next";
import Container from "@/components/layout/container";
import { ProjectsList } from "@/components/project/list";

export const metadata: Metadata = {
  title: "Projects - Prajna",
  description: "Projects I've worked on",
};

export default function ProjectPage() {
  return (
    <Container>
      <section>
        <h1 className="scroll-m-20 text-xl font-semibold tracking-tight">
          Projects
        </h1>
        <ProjectsList />
      </section>
    </Container>
  );
}
