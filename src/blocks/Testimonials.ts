import type { Block } from 'payload'

export const Testimonials: Block = {
  slug: 'testimonials',
  fields: [{ name: 'images', type: 'ui', admin: { position: 'sidebar' } }],
}
