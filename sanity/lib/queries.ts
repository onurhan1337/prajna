import { groq } from "next-sanity";

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug)]{ 
  title,
  subtitle,
  categories[]->,
  slug,
  _createdAt,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
}`;

export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  subtitle,
  mainImage,
  categories[]->,
  slug,
  body,
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)

}`;

export const CATEGORY_QUERY = groq`*[_type == "category" && slug.current ==   $slug][0]{ 
  title,
  slug,
  description,
  "posts": *[_type == "post" && references(^._id)]{
    title,
    subtitle,
    slug,
    _createdAt,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
  }
}`;
