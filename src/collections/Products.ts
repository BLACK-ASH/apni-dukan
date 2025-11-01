import {
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { slugField, type CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  versions: {
    drafts: true,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'General Info',
          fields: [
            {
              name: 'title',
              type: 'text',
              required: true,
            },
            slugField({
              fieldToUse: 'title',
            }),
            {
              name: 'description',
              type: 'text',
              required: true,
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'actualPrice',
                  type: 'number',
                  required: true,
                },
                {
                  name: 'offerPrice',
                  type: 'number',
                  required: true,
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'category',
                  type: 'relationship',
                  relationTo: 'categories',
                  required: true,
                },
                {
                  name: 'brand',
                  type: 'relationship',
                  relationTo: 'brands',
                  required: true,
                },
              ],
            },
            {
              name: 'images',
              type: 'upload',
              relationTo: 'media',
              required: true,
              hasMany: true,
              maxRows: 3,
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'compatibilty',
              type: 'textarea',
            },
            {
              name: 'content',
              type: 'richText',
              required: true,
              editor: lexicalEditor({
                features: ({ defaultFeatures, rootFeatures }) => {
                  return [
                    ...defaultFeatures,
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
            },
          ],
        },
      ],
    },
  ],
}
