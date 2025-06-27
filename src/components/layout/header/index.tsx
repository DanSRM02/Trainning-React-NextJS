import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="w-full p-4 bg-gray-800 text-white flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">
        <Link href="/blog" className="hover:text-cyan-400 transition-colors">
          Blog
        </Link>
      </div>

      <nav>
        <ul className="flex gap-4 items-center">
          <li>
            <Link href="/blog" className="hover:underline">
              Post
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
