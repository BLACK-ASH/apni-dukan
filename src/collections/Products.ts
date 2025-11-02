import {
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { CollectionOverride } from 'node_modules/@payloadcms/plugin-ecommerce/dist/types'
import { slugField } from 'payload'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Products: CollectionOverride = ({ defaultCollection }) => ({
  ...defaultCollection,
  admin: {
    ...defaultCollection?.admin,
    defaultColumns: ['title', 'enableVariants', '_status', 'variants.variants'],

    useAsTitle: 'title',
  },
  slug: 'products',
  versions: {
    drafts: {
      autosave: true,
    },
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
                  name: 'priceInINR',
                  label: 'Sale Price',
                  type: 'number',
                  required: true,
                },
                {
                  name: 'discount',
                  label: 'Discount',
                  type: 'number',
                  required: true,
                },
                {
                  name: 'quantity',
                  type: 'number',
                  required: true,
                  defaultValue: 0,
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
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
  ],
})
