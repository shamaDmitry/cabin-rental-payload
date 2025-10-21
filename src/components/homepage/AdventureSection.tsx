import Headline from '@/components/core/Headline'
import Container from '@/components/core/Container'
import LightBoxCard from '@/components/LightBoxCard'
import { FC } from 'react'
import { cn } from '@/lib/utils'

interface AdventureSectionProps {
  className?: string
}

const AdventureSection: FC<AdventureSectionProps> = ({ className }) => {
  return (
    <section
      className={cn('text-center py-20', className)}
      style={{
        background:
          "url('https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5d00dd1ebd7a91002452e0b6?nowebp') 10.31% 73.54% / cover no-repeat, rgb(243, 243, 242)",
      }}
    >
      <Container className="">
        <Headline as="h2" className="mb-5">
          Your Adventure Starts Here
        </Headline>

        <p className="max-5xl mx-auto mb-8 text-lg text-foreground/60">
          Welcome to a perfect escape in Yosemite Mariposa County, California! Yosemite National
          Park is known for its giant sequoias and the observation deck of the Portal View, which
          overlooks the Briddlevale Falls, the El Capitan granite rocks and the Half House. The
          Yosemite village proudly offers a lot of shops, restaurants, hotels, and a museum, along
          with the Ansel Adams Gallery. Plan your adventure and find your place in Yosemite!
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
          {Array(6)
            .fill(0)
            .map((_, index) => {
              return (
                <LightBoxCard
                  key={index}
                  headline="Yosemite Gateway Horse Ranch 'Getaway' Cottage"
                  imageSrc="https://cabin-rental.weblium.site/res/5ce40621b84b1a002410eb9e/5ce425c34045b70023557d9f_optimized_1317.webp"
                />
              )
            })}
        </div>
      </Container>
    </section>
  )
}

export default AdventureSection
