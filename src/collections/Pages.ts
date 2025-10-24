import { Cta } from '@/blocks/Cta'
import { Testimonials } from '@/blocks/Testimonials'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'headline',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [Cta, Testimonials],
      required: true,
    },
  ],
}
