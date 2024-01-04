/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { presentationTool } from "sanity/presentation";
import { codeInput } from "@sanity/code-input";
import { locate } from "@/sanity/presentation/locate";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

// Define the singleton document types
const singletonTypes = new Set(["header"]);

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Header")
              .id("header")
              .child(S.document().schemaType("header").documentId("Header")),
            S.documentTypeListItem("post").title("Post"),
            S.documentTypeListItem("bookmark").title("Bookmark"),
            S.documentTypeListItem("project").title("Project"),
            S.documentTypeListItem("category").title("Category"),
          ]),
    }),
    codeInput(),
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      locate,
      previewUrl: {
        draftMode: {
          enable: "/api/draft",
        },
      },
    }),
  ],
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
