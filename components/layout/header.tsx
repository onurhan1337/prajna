"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Container from "@/components/layout/container";
import { cn } from "@/lib/utils";

const HEADER_ITEMS = {
  "/": "Home",
  "/about": "About",
  "/project": "Project",
  "/post": "Post",
  "/bookmark": "Bookmark",
};

export const Header = () => {
  const pathname = usePathname();
  return (
    <Container>
      <div className="my-12 space-y-8">
        <header className="flex flex-row items-center justify-start space-x-2">
          <div>
            <Image
              src="/avatar.png"
              alt="logo"
              width={200} // adjust this to match the original image width
              height={200} // adjust this to match the original image height
              className="w-12 h-12 border rounded-full object-fill"
            />
          </div>

          <div>
            <h1 className="text-zinc-900">Onurhan Demir</h1>
            <p className="text-sm text-zinc-500">Front-end Engineer</p>
          </div>
        </header>

        <nav>
          <ul className="flex flex-row items-center justify-start space-x-4">
            {Object.entries(HEADER_ITEMS).map(([key, value]) => {
              const isActive = key === pathname;

              return (
                <li key={key}>
                  <Link
                    href={key}
                    className={cn(
                      isActive
                        ? "text-zinc-900 bg-zinc-50"
                        : "text-zinc-600 hover:text-zinc-900",
                      "text-sm p-2 rounded"
                    )}
                  >
                    {value}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </Container>
  );
};
