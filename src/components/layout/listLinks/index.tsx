import { postTypes } from "@/utils/types/postType";
import Link from "next/link";

type ListLinksProps = {
  listPostInfo: postTypes[];
};
function ListLinks({ listPostInfo }: ListLinksProps) {
  return listPostInfo.map((post) => (
    <li key={post.title}>
      <Link
        href={`/blog/post/${post.slug}`}
        className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 hover:shadow-lg transition-all duration-300"
      >
        <h2 className="text-xl font-semibold text-cyan-400">{post.title}</h2>
      </Link>
    </li>
  ));
}

export default ListLinks;
