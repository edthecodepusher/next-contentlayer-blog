import {
  defineDocumentType,
  makeSource,
  ComputedFields,
} from "contentlayer/source-files";

// Define computed fields with TypeScript typing
const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};

// Page document type
export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
  },
  computedFields,
}));

// Post document type with thumbnail and category fields
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    thumbnail: {
      type: "string",
      description: "Path or URL to the thumbnail image",
      required: false,
    },
    category: {
      type: "string",
      description: "Category of the blog post",
      required: false, // Set to true if mandatory
    },
  },
  computedFields,
}));

// Export the source configuration
export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Page],
});
