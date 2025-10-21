import { FC } from "react";
import Headline from "@/components/core/Headline";
import RentalCard from "@/components/homepage/RentalCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "@/components/core/Container";
import { cn } from "@/lib/utils";

interface RentalSection {
  className?: string;
}

const RentalSection: FC<RentalSection> = ({ className }) => {
  return (
    <section
      className={cn("min-h-[320px] py-[140px]", className)}
      style={{
        background: `url("https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00cfdbe885cb00231936b3?nowebp")`,
      }}
    >
      <Container className="text-center text-card">
        <Headline className="mb-12">Cabin Rentals</Headline>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mb-12">
          <RentalCard
            title="River Chalet"
            price="$65/night"
            description="1 Bedroom, 1 Bathroom, Sleeps 2"
            imageUrl="https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5ce4e927dc5e3800248d0e8e_optimized_1071.webp"
            href="/accommodation"
          />
          <RentalCard
            title="River Chalet"
            price="$65/night"
            description="1 Bedroom, 1 Bathroom, Sleeps 2"
            imageUrl="https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5ce4e927dc5e3800248d0e8e_optimized_1071.webp"
            href="/accommodation"
          />
          <RentalCard
            title="River Chalet"
            price="$65/night"
            description="1 Bedroom, 1 Bathroom, Sleeps 2"
            imageUrl="https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5ce4e927dc5e3800248d0e8e_optimized_1071.webp"
            href="/accommodation"
          />
          <RentalCard
            title="River Chalet"
            price="$65/night"
            description="1 Bedroom, 1 Bathroom, Sleeps 2"
            imageUrl="https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5ce4e927dc5e3800248d0e8e_optimized_1071.webp"
            href="/accommodation"
          />
        </div>

        <Link href={"/accommodation"}>
          <Button
            size={"xl"}
            variant="outline"
            className="rounded-full text-background border-background hover:bg-background hover:text-foreground"
          >
            See all cabins
          </Button>
        </Link>
      </Container>
    </section>
  );
};

export default RentalSection;
