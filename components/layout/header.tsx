import Container from "@/components/layout/container";
import { HeaderCard } from "../header/header-card";
import { HeaderLinks } from "../header/links";

export const Header = () => {
  return (
    <Container>
      <div className="my-12 space-y-8">
        <HeaderCard />

        <HeaderLinks />
      </div>
    </Container>
  );
};
