"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-6 items-center w-full">
      <Link
        href="/"
        className={cn(
          "text-gray-400 text-sm hover:text-gray-600 capitalize",
          !pathname.startsWith("/about") && "text-gray-900 dark:text-gray-100"
        )}
      >
        blog
      </Link>
      <Link
        href="/about"
        className={cn(
          "text-gray-400 text-sm hover:text-gray-600 capitalize",
          pathname.startsWith("/about") && "text-gray-900 dark:text-gray-100"
        )}
      >
        about
      </Link>
    </nav>
  );
}
