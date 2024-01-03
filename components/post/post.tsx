import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "next-sanity";

import { dataset, projectId } from "@/sanity/env";
import CodeBlock from "./code-block";
import Container from "../layout/container";

const builder = imageUrlBuilder({ projectId, dataset });

export default function Post({ post }: { post: SanityDocument }) {
  const { title, subtitle, estimatedReadingTime, categories, mainImage, body } =
    post;

  return (
    <Container>
      <main className="relative container mx-auto prose prose-lg p-2">
        <div>
          {title && (
            <h1 className="font-display text-3xl font-semibold m-0 py-2">
              {title}
            </h1>
          )}
          {subtitle && (
            <h2 className="text-lg font-medium text-zinc-500 m-0">
              {subtitle}
            </h2>
          )}
          <div className="flex items-center justify-between">
            <div className="space-x-2">
              {categories?.length > 0 &&
                categories.map((category: any) => (
                  <Link
                    key={category._id}
                    href={`/category/${category.slug.current}`}
                  >
                    <span
                      key={category._id}
                      className="inline-block bg-zinc-100 border border-zinc-300 text-zinc-600 rounded-full px-3 py-1 text-xs font-semibold cursor-pointer hover:bg-zinc-200/70"
                    >
                      {category.title}
                    </span>
                  </Link>
                ))}
            </div>
            {estimatedReadingTime && (
              <p className="text-sm text-pretty text-zinc-600">
                {estimatedReadingTime} min read
              </p>
            )}
          </div>
        </div>
        {mainImage && (
          <Image
            className="rounded-lg w-80 h-12"
            src={builder.image(mainImage).auto("format").quality(100).url()}
            width={150}
            height={150}
            layout="responsive"
            alt={mainImage.alt || ""}
          />
        )}
        <article className="leading-relaxed text-sm text-pretty text-zinc-600 post-body">
          {body && (
            <PortableText value={body} components={PortableTextComponents} />
          )}
        </article>
      </main>
    </Container>
  );
}

const PortableTextComponents = {
  types: {
    code: CodeBlock,
  },
};
