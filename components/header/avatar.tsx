"use client";

import imageUrlBuilder from "@sanity/image-url";
import { dataset, projectId } from "@/sanity/env";
import Image from "next/image";

const builder = imageUrlBuilder({ projectId, dataset });

export const HeaderAvatar = ({ url, alt }: { url: string; alt: string }) => {
  return (
    <Image
      src={builder.image(url).auto("format").quality(100).url()}
      alt={alt}
      width={200} // adjust this to match the original image width
      height={200} // adjust this to match the original image height
      className="w-12 h-12 border rounded-full object-fill"
    />
  );
};
