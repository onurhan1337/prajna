import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import project from "./schemas/project";
import post from "./schemas/post";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, project, category, blockContent],
};
