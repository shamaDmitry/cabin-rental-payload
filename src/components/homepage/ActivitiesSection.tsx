import { cn } from "@/lib/utils";
import { FC } from "react";
import Container from "@/components/core/Container";
import Headline from "@/components/core/Headline";
import ActivityCard from "@/components/homepage/ActivityCard";

interface ActivitiesSectionProps {
  className?: string;
}

const ActivitiesSection: FC<ActivitiesSectionProps> = ({ className }) => {
  return (
    <section className={cn("min-h-[320px] py-20 relative", className)}>
      <div className="absolute size-full left-0 top-0 bg-[#f3f3f217] -z-20" />
      <div
        className="absolute size-full left-0 top-0 -z-10"
        style={{
          background: `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d01152af7f5810024cd30c3?nowebp")`,
        }}
      />

      <Container className="text-center text-card">
        <Headline className="mb-12 text-foreground">Things to Do</Headline>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <ActivityCard />

          <ActivityCard />

          <ActivityCard />

          <ActivityCard />
        </div>
      </Container>
    </section>
  );
};

export default ActivitiesSection;
