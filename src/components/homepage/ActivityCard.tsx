import React, { FC } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Headline from "@/components/core/Headline";

interface ActivityCardProps {
  className?: string;
  title?: string;
  price?: string;
  description?: string;
}

const ActivityCard: FC<ActivityCardProps> = () => {
  return (
    <Card className="p-5">
      <Image
        src="https://cabin-rental.weblium.site/res/weblium/5c8a6770f6c6a2002564fc11_optimized_1384_c1384x938-0x0.webp"
        alt=""
        width={1200}
        height={200}
        className="w-full rounded-xl"
      />

      <Headline as="h5">Horse Riding</Headline>

      <div className="text-primary font-medium text-xl">$4/hour</div>

      <p>
        Take a measured romantic horseback riding tour and enjoy our
        unforgettable picturesque surroundings.
      </p>
    </Card>
  );
};

export default ActivityCard;
