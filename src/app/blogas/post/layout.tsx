import { ReactNode } from "react";

type PostLayoutProps = {
  children: ReactNode;
};

function PostLayout({ children }: PostLayoutProps) {
  return (
    <main className="max-w-4xl mx-auto p-4 sm:p-8">
      {children}    
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 backdrop-blur-sm">
          Post Layout
        </span>    
    </main>
  );
}

export default PostLayout;
