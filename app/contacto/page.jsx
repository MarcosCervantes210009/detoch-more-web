import ContactForm from "./form";
import {
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

const img = (n) => n;

export const metadata = {
  title: "Contacto",
  description:
    "Contacta a Detoch More para proyectos de ingeniería y manufactura de precisión.",
};

export default function Contact() {
  return (
    <>
      <section className="visual-page-hero contact-visual-hero">
        <img
          src={img("/images/seleccion-30sep/principales/50.webp")}
          alt="Componentes de precisión Detoch More"
          data-motion="off"
        />

        <div className="visual-page-overlay" />

        <div className="container visual-page-content" data-reveal>
          <span className="eyebrow">Contacto</span>

          <h1>
            Hablemos de tu <em>proyecto.</em>
          </h1>

          <p>
            Compártenos tu necesidad, componente o aplicación. Nuestro equipo
            revisará la información para entender el requerimiento y dar
            seguimiento a tu proyecto.
          </p>
        </div>
      </section>

      <section className="section section-white">
        <div className="container contact-grid contact-editorial-grid">
          <div className="contact-info">

            <div className="contact-photo-stack">
              <img
                src={img("/images/seleccion-30sep/secundarias/73.webp")}
                alt="Componentes Detoch More"
              />

              <img
                src={img("/images/seleccion-30sep/secundarias/83.webp")}
                alt="Conjunto mecánico de precisión"
              />
            </div>

            <span className="eyebrow">
              Detoch More S.A. de C.V.
            </span>

            <h2>
              Ingeniería y manufactura de precisión.
            </h2>

            <p>
              Escríbenos o llámanos para conversar sobre tu proyecto.
            </p>

            <div className="contact-items">

              <a href="tel:+525522668224">
                <Phone />

                <span>
                  <small>Teléfono</small>
                  +52 55 2266 8224
                </span>
              </a>

              <a href="mailto:ventas@dmaq.mx">
                <Mail />

                <span>
                  <small>Correo</small>
                  ventas@dmaq.mx
                </span>
              </a>

              <a
                href="https://wa.me/525522668224"
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle />

                <span>
                  <small>WhatsApp Business</small>
                  +52 55 2266 8224
                </span>
              </a>

              <div>
                <span className="contact-hours-badge">
                  08–18
                </span>

                <span>
                  <small>Horario de atención</small>
                  Lunes a viernes · 8:00 a 18:00
                </span>
              </div>

            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}