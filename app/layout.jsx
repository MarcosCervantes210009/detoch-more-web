import "./globals.css";
import { Header, Footer, WhatsAppFloat } from "./ui";
import MotionLayer from "./motion";

export const viewport = { width: "device-width", initialScale: 1 };

export const metadata = {
  metadataBase: new URL("https://dmaq.mx"),
  title: {
    default: "Detoch More | Ingeniería y Manufactura de Precisión",
    template: "%s | Detoch More"
  },
  description:
    "Ingeniería y manufactura de precisión para la industria farmacéutica. Desarrollo de soluciones, formatos, herramentales y componentes de precisión.",
  keywords: [
    "ingeniería de precisión",
    "manufactura de precisión",
    "industria farmacéutica",
    "formatos para maquinaria",
    "herramentales",
    "blister",
    "CNC",
    "ingeniería inversa",
    "Detoch More"
  ],
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <MotionLayer />
        <Header />
        <main>{children}</main>
        <WhatsAppFloat />
        <Footer />
      </body>
    </html>
  );
}
