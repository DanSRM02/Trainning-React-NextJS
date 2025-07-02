import Footer from "@/components/layout/footer";
import MainHeader from "@/components/layout/header";
import type { AppProps } from "next/app";
import "./globals.css";

function MainLayout({ Component, pageProps }: AppProps) {
  return (
    <main className="flex flex-col">
      <MainHeader />
      <div className="mx-[42rem]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </main>
  );
}

export default MainLayout;
