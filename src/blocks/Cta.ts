import type { Block } from 'payload'

export const Cta: Block = {
  slug: 'cta',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'actions', type: 'text', required: true },
  ],
}
