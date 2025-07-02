import CardPost from "@/components/post/cardPost";
import { DUMMY_POSTS, getData } from "@/utils/data";
import { dataResponse } from "@/utils/types/reponseType";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState<dataResponse[]>();
  useEffect(() => {
    const promiseData = async () => {
      const json = await getData();
      setData(json);
      return json;
    };

    promiseData();
  }, []);

  const cardInfoPost = data?.find((post) => {
    return post.id === Number(id);
  });

  // const cardInfoPost = DUMMY_POSTS.find((post) => {
  //   return post.slug === slug;
  // });


  return cardInfoPost ? <CardPost {...cardInfoPost} /> : "loading";
}
