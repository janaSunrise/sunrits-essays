import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Essay = defineDocumentType(() => ({
  name: 'Essay',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the essay',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the essay',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (essay) => `/essays/${essay._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'essays',
  documentTypes: [Essay],
})
