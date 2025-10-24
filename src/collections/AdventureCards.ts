import type { CollectionConfig } from 'payload'

export const AdventureCards: CollectionConfig = {
  slug: 'adventure-cards',
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
      name: 'image',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'sort',
      type: 'number',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
