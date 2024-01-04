import { defineField, defineType } from "sanity";

export default defineType({
  name: "header",
  title: "Header",
  type: "document",
  fields: [
    defineField({
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "text",
    }),
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "text",
    }),
  ],
});
