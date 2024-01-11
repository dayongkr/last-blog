import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
import { Button } from "./ui/button";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="border-b-gray-200 border-b flex justify-start py-3 px-8 items-center gap-6">
      <Link href="/" className="font-bold shrink-0">
        Dayong Lee
      </Link>
      <Nav />
      <Button variant="ghost" className="px-2">
        <Link href="https://github.com/dayongkr" target="_blank">
          <FaGithub className="text-lg" />
        </Link>
      </Button>
    </header>
  );
}
