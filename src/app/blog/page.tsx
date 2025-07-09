
import ListLinks from "@/components/layout/listLinks";

export default async function Blog() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts"); 
  const data = await response.json()  
  
  return (
    <main className="bg-gray-900 text-white">
      <section className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-white mb-8 border-b-2 border-cyan-500 pb-2">
          Blog: React
        </h1>

        <ul className="space-y-4">
          <ListLinks listPostInfo={data} />
        </ul>
      </section>
    </main>
  );
}
