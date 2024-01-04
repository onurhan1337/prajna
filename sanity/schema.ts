import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import bookmark from "./schemas/bookmark";
import project from "./schemas/project";
import header from "./schemas/header";
import post from "./schemas/post";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [header, post, bookmark, project, category, blockContent],
};
