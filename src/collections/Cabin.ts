import type { CollectionConfig } from 'payload'

export const Cabin: CollectionConfig = {
  slug: 'cabin',
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
      name: 'bgImage',
      type: 'relationship',
      relationTo: 'media',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
    },
    {
      name: 'details',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'detail',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'amenities',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'amenity',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
