import CardPost from "@/components/post/cardPost";
import { DUMMY_POSTS } from "@/utils/data";
import { useRouter } from "next/router";
import MainLayout from "../layout";
import { notFound } from "next/navigation";

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  const cardInfoPost = DUMMY_POSTS.find((post) => {
    return post.slug === slug;
  });

  if (!cardInfoPost) {
    notFound();
  }

  return (
    <>
      <MainLayout>
        <CardPost {...cardInfoPost} />
      </MainLayout>
    </>
  );
}
