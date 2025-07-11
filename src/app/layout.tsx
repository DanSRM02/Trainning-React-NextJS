import type { Metadata } from "next";
// Es crucial importar los estilos globales en el layout principal
import "./globals.css";
// 1. Importamos los componentes de Header y Footer
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Password Security Checker",
  description: "Verificador de contraseñas con estilo futurista",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {/* 2. Añadimos el contenedor principal y los componentes */}
        <div className="main-layout">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
