import { draftMode } from "next/headers";
import Container from "@/components/layout/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Prajna",
  description: "Prajna is a portolio about software development and design.",
};

export default function Page() {
  return draftMode().isEnabled ? <></> : <AboutMe />;
}

const AboutMe = () => {
  return (
    <Container>
      <h1>About Me</h1>
    </Container>
  );
};
