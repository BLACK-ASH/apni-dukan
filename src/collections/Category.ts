import { slugField, type CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  fields: [
    slugField({
      fieldToUse: 'label',
    }),
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
  defaultPopulate: {
    slug: true,
    label: true,
    // image: true,
  },
  admin: {
    useAsTitle: 'label',
  },
}
