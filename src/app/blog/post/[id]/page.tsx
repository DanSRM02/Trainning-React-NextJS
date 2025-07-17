import CardPost from "@/components/post/cardPost";
import { dataResponse } from "@/utils/types/reponseType";
import { notFound } from "next/navigation";

type PostProps = {
  post: dataResponse[];
  params: Promise<{
    id: string;
  }>;
};

export default async function Post({ params, post }: PostProps) {
  const { id } = await params;
  
  const cardInfoPost = post.find((post) => {
    return post.id === Number(id);
  });

  console.log(cardInfoPost);

  if (!cardInfoPost) {
    notFound();
  }

  return <CardPost {...cardInfoPost} />;
}
