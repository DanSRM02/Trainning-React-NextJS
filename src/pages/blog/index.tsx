import { DUMMY_POSTS } from "@/utils/data";
import Link from "next/link";
import MainLayout from "./layout";
import ListLinks from "@/components/layout/listLinks";

export default function Blog() {
  return (
    <>
      <MainLayout>
        <div className="bg-gray-900 text-white min-h-screen">
          <main className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-white mb-8 border-b-2 border-cyan-500 pb-2">
              Blog: React
            </h1>

            <ul className="space-y-4">
              <ListLinks listPostInfo={DUMMY_POSTS}/>
            </ul>
          </main>
        </div>
      </MainLayout>
    </>
  );
}
