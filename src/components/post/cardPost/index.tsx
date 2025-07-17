import { postTypes } from "@/utils/types/postType";

function CardPost({ title, body }: postTypes) {
  return (
    <article className="max-w-4xl mx-auto p-4 sm:p-8 bg-gray-900">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 leading-tight">
          {title}
        </h1>
      </header>
      <p>{body}</p>
      <div className="prose prose-lg prose-invert max-w-none" />
    </article>
  );
}

export default CardPost;
