import Footer from "@/components/layout/footer";
import MainHeader from "@/components/layout/header";
import { ReactNode } from "react";
import "../globals.css";

type BlogLayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: "Test Blog",
  description: "",
};
function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <html>
      <body className="flex flex-col min-h-screen">
        <MainHeader />
        {children}
        <Footer />
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 backdrop-blur-sm">      
          Post Blog
        </span>
      </body>
    </html>
  );
}

export default BlogLayout;
