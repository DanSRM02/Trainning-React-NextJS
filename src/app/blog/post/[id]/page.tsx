import CardPost from "@/components/post/cardPost";
import { getData, getPostById } from "@/utils/data";
import { notFound } from "next/navigation";

type PostProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  const posts = await getData();
  return posts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function Post({ params }: PostProps) {
  const { id } = await params;

  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  return <CardPost {...post} />;
}
