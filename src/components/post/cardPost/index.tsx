import Image from "next/image";
import { CalendarIcon } from "../../icons/calendarIcon";
import { postTypes } from "@/utils/types/postType";

function CardPost({ title, date, image, content }: postTypes) {
  return (
    <article className="max-w-4xl mx-auto p-4 sm:p-8 bg-gray-900">
      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 leading-tight">
          {title}
        </h1>
        <div className="flex items-center gap-2 text-gray-400">
          <CalendarIcon />
          <time dateTime={date}>{date}</time>
        </div>
      </header>

      <div className="w-full mb-8">
        {image && (
          <Image
            src={image}
            alt={title}
            className="w-full h-auto object-cover rounded-lg shadow-2xl"
            priority
          />
        )}
      </div>
      <p>{content}</p>
      <div className="prose prose-lg prose-invert max-w-none" />
    </article>
  );
}

export default CardPost;
