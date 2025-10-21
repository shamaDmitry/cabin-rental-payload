'use client'

import React, { useState } from 'react'
import Headline from './core/Headline'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import 'yet-another-react-lightbox/styles.css'
import Counter from 'yet-another-react-lightbox/plugins/counter'

interface LightBoxCardProps {
  headline: string
  imageSrc: string
}

const LightBoxCard: React.FC<LightBoxCardProps> = ({ headline, imageSrc }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex flex-col text-center">
      <Lightbox
        plugins={[Zoom, Counter]}
        open={open}
        close={() => {
          setOpen(false)
        }}
        slides={[{ src: imageSrc }]}
      />

      <Image
        src={imageSrc}
        width={500}
        height={500}
        alt={headline}
        className="rounded mb-5 aspect-video object-cover w-full"
        onClick={() => {
          setOpen(true)
        }}
      />

      <Headline level={3}>{headline}</Headline>
    </div>
  )
}

export default LightBoxCard
