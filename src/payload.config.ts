// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { importExportPlugin } from '@payloadcms/plugin-import-export'

import { Users } from '@/collections/Users'
import { Media } from '@/collections/Media'
import { AdventureCards } from '@/collections/AdventureCards'
import { Pages } from '@/collections/Pages'
import { Cabin } from '@/collections/Cabin'
import { Activity } from '@/collections/Activity'
import { CafeCards } from '@/collections/CafeCards'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {},
    livePreview: {
      url: 'http://localhost:3000',
      collections: ['pages'],
    },
  },
  collections: [Users, Media, Pages, AdventureCards, Cabin, Activity, CafeCards],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    importExportPlugin({
      collections: ['users', 'pages', 'media', 'activity'],
      // see below for a list of available options
    }), // storage-adapter-placeholder
  ],
})
