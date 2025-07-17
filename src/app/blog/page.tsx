
import ListLinks from "@/components/layout/listLinks";
import { getData } from "@/utils/data";

export default async function Blog() {
  const dataPost = await getData();
  
  return (
    <main className="bg-gray-900 text-white">
      <section className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-white mb-8 border-b-2 border-cyan-500 pb-2">
          Blog: Password Checker
        </h1>

        <ul className="space-y-4">
          <ListLinks listPostInfo={dataPost} />
        </ul>
      </section>
    </main>
  );
}
