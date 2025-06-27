import Footer from "@/components/layout/footer";
import MainHeader from "@/components/layout/header";
import { ReactNode } from "react";
import "../globals.css"

type MainLayoutProps = {
  children: ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <MainHeader />
      {children}
      <Footer />
    </>
  );
}

export default MainLayout;
