import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Cog, Crosshair, Factory } from "lucide-react";
import { SectionIntro, CTA, FeatureLink } from "./ui";

const img = n => `/images/edited/edit-${String(n).padStart(2,"0")}.webp`;

export default function Home() {
  const schema = {"@context":"https://schema.org","@type":"Organization",name:"Detoch More S.A. de C.V.",description:"Ingeniería y manufactura de precisión para la industria farmacéutica.",telephone:"+52 55 5800 6201",email:"ventas@dmaq.mx",url:"https://dmaq.mx"};
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />

    <section className="visual-hero home-visual-hero">
      <img className="visual-hero-bg" src={img(27)} alt="Componente de formato aplicado en proceso farmacéutico" data-motion="off" data-parallax="true" />
      <div className="visual-hero-overlay" />
      <div className="container visual-hero-content">
        <div className="visual-hero-copy" data-reveal>
          <span className="eyebrow">Ingeniería · Manufactura · Precisión</span>
          <h1>Ingeniería y Manufactura de <em>Precisión</em></h1>
          <p>Ingeniería y manufactura especializada en formatos, componentes y soluciones para maquinaria farmacéutica.</p>
          <div className="hero-actions"><Link href="/contacto" className="button">Cuéntanos tu proyecto <ArrowUpRight size={18}/></Link><Link href="/proyectos" className="text-link hero-light-link">Ver proyectos <ArrowUpRight size={16}/></Link></div>
        </div>
        <div className="hero-floating-card" data-reveal><img src={img(10)} alt="Detalle de ensamble de precisión"/><span>DET / 01 · INTEGRACIÓN</span></div>
      </div>
      <div className="container visual-hero-meta"><span>01 — Entender</span><span>02 — Desarrollar</span><span>03 — Fabricar</span><span>04 — Inspeccionar</span></div>
    </section>

    <section className="section section-white home-intro-photo">
      <div className="container asymmetric-two-col">
        <div className="sticky-copy" data-reveal><span className="eyebrow">Qué hacemos</span><h2>Entendemos antes de <em>fabricar.</em></h2><p>Analizamos la función, el proceso y la necesidad antes de desarrollar una solución. Así convertimos problemas de operación en ingeniería manufacturable.</p></div>
        <div className="stacked-photo-column">
          <div className="photo-captioned"><img src={img(20)} alt="Conjunto de componentes y formatos de precisión"/><span>COMPONENTES · FUNCIÓN</span></div>
          <div className="offset-copy"><span className="eyebrow">Trabajo alrededor de la aplicación</span><p>Diseño, manufactura e inspección se integran desde el inicio para que cada componente tenga sentido dentro del proceso.</p></div>
          <div className="photo-captioned narrow"><img src={img(17)} alt="Detalle de sistema de guiado"/><span>DET / 02 · GUIADO</span></div>
        </div>
      </div>
    </section>

    <section className="section home-services-band">
      <div className="container">
        <div className="section-heading-wide" data-reveal><span className="eyebrow">Áreas de trabajo</span><h2>Ingeniería visible en cada <em>detalle.</em></h2></div>
        <div className="feature-editorial-list">
          <FeatureLink href="/servicios" number="01" title="Ingeniería y desarrollo" text="Diseño, rediseño, ingeniería inversa, modelado 3D y documentación técnica."/>
          <FeatureLink href="/industrias" number="02" title="Soluciones para industria" text="Componentes y formatos para maquinaria de producción y empaque."/>
          <FeatureLink href="/calidad" number="03" title="Manufactura e inspección" text="Mecanizado, acabados, metrología y control dimensional."/>
        </div>
      </div>
    </section>

    <section className="full-bleed-photo-section">
      <img src={img(25)} alt="Detalle de sistema de guías de precisión" data-motion="off" data-parallax="true"/>
      <div className="full-bleed-photo-overlay"/>
      <div className="container full-bleed-photo-copy" data-reveal><span className="eyebrow">Industria farmacéutica</span><h2>La pieza importa. <em>El contexto también.</em></h2><p>Formatos, guías, estrellas, pinzas, componentes de sellado, arrastre y refacciones de precisión.</p><Link href="/industrias" className="button button-light">Ver aplicaciones <ArrowUpRight size={18}/></Link></div>
    </section>

    <section className="section dark-section home-values">
      <div className="container"><SectionIntro eyebrow="Nuestra diferencia" title="Ingeniería y manufactura integradas." text="Lo que desarrollamos se diseña considerando desde el inicio su fabricación, ajuste e implementación."/><div className="values-grid"><div className="value-card"><Crosshair/><span>01</span><h3>Precisión</h3><p>Control dimensional durante la fabricación e inspección antes de la entrega.</p></div><div className="value-card"><Cog/><span>02</span><h3>Respuesta</h3><p>Flexibilidad para atender proyectos y necesidades críticas de la industria.</p></div><div className="value-card"><Factory/><span>03</span><h3>Integración</h3><p>Ingeniería, manufactura e inspección dentro de un mismo equipo.</p></div><div className="value-card"><CheckCircle2/><span>04</span><h3>Compromiso</h3><p>Nos involucramos hasta asegurar que la solución cumpla con la función requerida.</p></div></div></div>
    </section>

    <section className="section home-project-teaser">
      <div className="container home-project-layout">
        <div className="project-teaser-main"><img src={img(1)} alt="Placa de formato de precisión"/><div><span className="eyebrow">Proyectos</span><h2>La pieza habla <em>primero.</em></h2><Link href="/proyectos" className="text-link">Explorar experiencia <ArrowUpRight size={16}/></Link></div></div>
        <div className="project-teaser-side"><img src={img(6)} alt="Componentes curvos de precisión"/><img src={img(29)} alt="Conjunto mecánico de precisión"/></div>
      </div>
    </section>
    <CTA />
  </>;
}
