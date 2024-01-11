"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const items = [
    {
      name: "blog",
      path: "/",
    },
    {
      name: "about",
      path: "/about",
    },
  ];
  console.log(pathname.startsWith("/"));
  return (
    <nav className="flex gap-6 items-center w-full">
      {items.map((item) => (
        <Link
          href={item.path}
          key={item.name}
          className={cn(
            "text-gray-400 text-sm hover:text-gray-600 capitalize",
            pathname.startsWith(item.path) && "text-gray-900"
          )}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
