import { getData } from "@/utils/data";
import ListLinks from "@/components/layout/listLinks";
import { useState } from "react";

export default function Blog() {
  const [data, setData] = useState([]);

  const promiseData = async () => {
    const json = await getData();
    setData(json);
    
    return json;
  };

  promiseData();

  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen">
        <main className="max-w-4xl mx-auto p-8">
          <h1 className="text-4xl font-bold text-white mb-8 border-b-2 border-cyan-500 pb-2">
            Blog: React
          </h1>

          <ul className="space-y-4">
            <ListLinks listPostInfo={data} />
          </ul>
        </main>
      </div>
    </>
  );
}
