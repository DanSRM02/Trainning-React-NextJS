import CardPost from "@/components/post/cardPost";
import { getPostById } from "@/utils/data";
import { notFound } from "next/navigation";

type PostProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Post({ params }: PostProps) {
  const { id } = await params;

  const post = await getPostById(id);

  if (!post) {
    notFound();
  }

  return <CardPost {...post} />;
}
