import Footer from "@/components/layout/footer";
import MainHeader from "@/components/layout/header";
import type { AppProps } from "next/app";
import "./globals.css";

function MainLayout({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainHeader />
        <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MainLayout;
