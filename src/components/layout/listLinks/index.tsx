import { dataResponse } from "@/utils/types/reponseType";
import Link from "next/link";

type ListLinksProps = {
  listPostInfo: dataResponse[];
};
function ListLinks({ listPostInfo }: ListLinksProps) {
  return listPostInfo.map((post) => (
    <li key={post.title}>
      <Link
        href={`/blog/post/${post.id}`}
        className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 hover:shadow-lg transition-all duration-300"
      >
        <h2 className="text-xl font-semibold text-cyan-400">{post.title}</h2>
      </Link>
    </li>
  ));
}

export default ListLinks;
