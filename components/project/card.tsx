"use client";

import { SanityDocument } from "next-sanity";
import Link from "next/link";

export const ProjectCard = ({ project }: { project: SanityDocument }) => {
  const { _id, name, description, link, githubLink } = project;

  return (
    <article
      key={_id}
      className="container mx-auto grid grid-cols-1 bg-zinc-50/40 border hover:border-zinc-300 border-zinc-200 rounded-lg p-3 space-y-2 shadow-sm"
    >
      <div className="flex items-center justify-between">
        <p className="text-md text-zinc-800">{name}</p>
      </div>

      <p className="text-zinc-500 text-pretty text-sm my-2">{description}</p>

      <div className="flex items-center space-x-1">
        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            className="inline-flex items-center space-x-1 bg-zinc-100 border border-zinc-300 text-zinc-500 rounded-md px-3 py-1 text-xs font-medium cursor-pointer hover:bg-zinc-200/70 animate-hover transition-all duration-200 ease-in-out "
          >
            <GitHubIcon />
            <span>GitHub</span>
          </Link>
        )}

        {link && (
          <Link
            href={link}
            target="_blank"
            className="inline-flex items-center space-x-1 bg-zinc-100 border border-zinc-300 text-zinc-500 rounded-md px-3 py-1 text-xs font-medium cursor-pointer hover:bg-zinc-200/70 animate-hover transition-all duration-200 ease-in-out "
          >
            <ExternalLinkIcon />
            <span>Go Live</span>
          </Link>
        )}
      </div>
    </article>
  );
};

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-brand-github"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-external-link"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
    <path d="M11 13l9 -9" />
    <path d="M15 4h5v5" />
  </svg>
);
