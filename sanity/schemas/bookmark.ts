import { defineType, defineArrayMember, defineField } from "sanity";

export default defineType({
  name: "bookmark",
  title: "Bookmark",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "url",
    }),
  ],
});
