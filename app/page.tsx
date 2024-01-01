import { draftMode } from "next/headers";
import Container from "@/components/layout/container";

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
