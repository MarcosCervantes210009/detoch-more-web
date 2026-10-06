import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Cog, Crosshair, Factory } from "lucide-react";
import { SectionIntro, CTA, FeatureLink, ClientsSection } from "./ui";

const img = n => n;

function DynamicShowcase() {
  return (
    <section className="home-mosaic-section section-white">
      <div className="container home-mosaic-grid">
        <div className="home-mosaic-copy" data-reveal>
          <span className="eyebrow">Selección visual</span>
          <h2>Componentes que integran <em>ingeniería y precisión.</em></h2>
          <p>
            Desarrollamos componentes y conjuntos de precisión considerando su función y el contexto de aplicación.
          </p>
          <Link href="/proyectos" className="button">Ver proyectos <ArrowUpRight size={18} /></Link>
        </div>
        <div className="home-mosaic-stage" data-reveal>
          <article className="home-mosaic-card card-large">
            <div className="home-mosaic-media"><img src={img("/images/seleccion-30sep/inicio-redondeado/principales-portada-2.svg")} alt="Conjunto de componentes de precisión" /></div>
            <div className="home-mosaic-body"><span className="eyebrow">01 · Conjuntos</span><p>Soluciones completas listas para integrarse en el proceso.</p></div>
          </article>
          <article className="home-mosaic-card card-top">
            <div className="home-mosaic-media"><img src={img("/images/seleccion-30sep/inicio-redondeado/secundarias-81.svg")} alt="Pines y elementos de precisión" /></div>
            <div className="home-mosaic-body"><span className="eyebrow">02 · Detalle</span><p>Componentes donde la precisión dimensional es crítica.</p></div>
          </article>
          <article className="home-mosaic-card card-bottom">
            <div className="home-mosaic-media"><img src={img("/images/seleccion-30sep/inicio-redondeado/secundarias-web47.svg")} alt="Detalle de integración" /></div>
            <div className="home-mosaic-body"><span className="eyebrow">03 · Integración</span><p>Ingeniería aplicada a sistemas y formatos funcionales.</p></div>
          </article>
        </div>
      </div>
    </section>
  );
}

function EditorialCardsBand() {
  const cards = [
    { title: "Formatos y herramentales", text: "Componentes para cambio de formato, formado, sellado y procesos de empaque.", image: "/images/seleccion-30sep/inicio-redondeado/principales-49.svg" },
    { title: "Componentes de precisión", text: "Piezas especiales fabricadas de acuerdo con los requerimientos funcionales de cada aplicación.", image: "/images/seleccion-30sep/inicio-redondeado/secundarias-82.svg" },
    { title: "Ingeniería aplicada", text: "Desarrollo y fabricación de soluciones para integración, reemplazo y mejora de componentes.", image: "/images/seleccion-30sep/inicio-redondeado/secundarias-84.svg" },
  ];
  return (
    <section className="dmx-editorial-band">
      <div className="container dmx-editorial-band-head" data-reveal>
        <span className="eyebrow">Qué hacemos visible</span>
        <h2>Soluciones para procesos de producción y empaque.</h2>
      </div>
      <div className="container dmx-editorial-cards">
        {cards.map((card, index) => (
          <article className={`dmx-editorial-card card-${index + 1}`} key={card.title} data-reveal>
            <div className="dmx-editorial-card-media"><img src={img(card.image)} alt={card.title} /></div>
            <div className="dmx-editorial-card-body">
              <span className="eyebrow">0{index + 1}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const schema = {"@context":"https://schema.org","@type":"Organization",name:"Detoch More S.A. de C.V.",description:"Ingeniería y manufactura de precisión para la industria farmacéutica.",telephone:"+52 55 5800 6201",email:"ventas@dmaq.mx",url:"https://dmaq.mx"};
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />

    <section className="home-hero-clean home-hero-background">
      <img className="home-cover-photo" src={img("/images/seleccion-30sep/principales/portada-2-1.webp")} alt="Conjunto de formatos y componentes farmacéuticos de precisión" fetchPriority="high" />
      <div className="container home-hero-layout">
        <div className="home-hero-copy" data-reveal>
          <span className="eyebrow">Ingeniería · Manufactura · Precisión</span>
          <h1>Ingeniería y manufactura de <em>precisión</em>.</h1>
          <p>Desarrollamos formatos, componentes y soluciones para maquinaria farmacéutica con enfoque en función, integración y control dimensional.</p>
          <div className="hero-actions">
            <Link href="/contacto" className="button">Cuéntanos tu proyecto <ArrowUpRight size={18}/></Link>
            <Link href="/proyectos" className="text-link">Ver proyectos <ArrowUpRight size={16}/></Link>
          </div>
        </div>


      </div>
    </section>

    <DynamicShowcase />

    <section className="section section-white home-intro-photo">
      <div className="container asymmetric-two-col">
        <div className="sticky-copy" data-reveal><span className="eyebrow">Qué hacemos</span><h2>Entendemos antes de <em>fabricar.</em></h2><p>Analizamos la función de cada componente dentro del proceso para desarrollar soluciones precisas, funcionales y fabricables.</p></div>
        <div className="stacked-photo-column">
          <div className="photo-captioned"><img src={img("/images/seleccion-30sep/inicio-redondeado/principales-53.svg")} alt="Conjunto de componentes y formatos de precisión"/><span>COMPONENTES · FUNCIÓN</span></div>
          <div className="offset-copy"><span className="eyebrow">Trabajo alrededor de la aplicación</span><p>Diseño, manufactura e inspección se integran desde el inicio para que cada componente tenga sentido dentro del proceso.</p></div>
          <div className="photo-captioned narrow"><img src={img("/images/seleccion-30sep/inicio-redondeado/secundarias-72.svg")} alt="Detalle de sistema de guiado"/><span>DET / 02 · GUIADO</span></div>
        </div>
      </div>
    </section>

    <EditorialCardsBand />

    <section className="section home-services-band">
      <div className="container">
        <div className="section-heading-wide" data-reveal><span className="eyebrow">Áreas de trabajo</span><h2>Ingeniería visible en cada <em>detalle.</em></h2></div>
        <div className="feature-editorial-list">
          <FeatureLink href="/servicios" number="01" title="Ingeniería y desarrollo" text="Diseño, rediseño, ingeniería inversa, modelado 3D y documentación técnica."/>
          <FeatureLink href="/capacidades" number="02" title="Manufactura de precisión" text="Fabricación de componentes y herramentales de acuerdo con los requerimientos de la aplicación."/>
          <FeatureLink href="/calidad" number="03" title="Inspección y control dimensional" text="Verificación de dimensiones, geometrías y características críticas."/>
        </div>
      </div>
    </section>

    <section className="home-context-band">
      <div className="container home-context-grid">
        <div className="home-context-media" data-reveal>
          <img src={img("/images/seleccion-30sep/inicio-redondeado/principales-54.svg")} alt="Detalle de sistema de guías de precisión" />
        </div>
        <div className="home-context-copy" data-reveal>
          <span className="eyebrow">Industria farmacéutica</span>
          <h2>La pieza importa. <em>El contexto también.</em></h2>
          <p>Formatos, guías, estrellas, pinzas, componentes de sellado, arrastre y refacciones de precisión.</p>
          <Link href="/industrias" className="button">Ver aplicaciones <ArrowUpRight size={18}/></Link>
        </div>
      </div>
    </section>

    <section className="section dark-section home-values">
      <div className="container"><SectionIntro eyebrow="Nuestra diferencia" title="Ingeniería y manufactura integradas." text="Lo que desarrollamos se diseña considerando desde el inicio su fabricación, ajuste e implementación."/><div className="values-grid"><div className="value-card"><Crosshair/><span>01</span><h3>Precisión</h3><p>Control dimensional durante la fabricación e inspección antes de la entrega.</p></div><div className="value-card"><Cog/><span>02</span><h3>Respuesta</h3><p>Flexibilidad para atender proyectos y necesidades críticas de la industria.</p></div><div className="value-card"><Factory/><span>03</span><h3>Ingeniería</h3><p>Ingeniería, manufactura e inspección dentro de un mismo equipo.</p></div><div className="value-card"><CheckCircle2/><span>04</span><h3>Compromiso</h3><p>Nos involucramos hasta asegurar que la solución cumpla con la función requerida.</p></div></div></div>
    </section>

    <ClientsSection />

    <section className="section home-project-teaser">
      <div className="container home-project-layout">
        <div className="project-teaser-main"><img src={img("/images/seleccion-30sep/principales/56.webp")} alt="Placa de formato de precisión"/><div><span className="eyebrow">Proyectos</span><h2>La pieza habla <em>primero.</em></h2><Link href="/proyectos" className="text-link">Explorar experiencia <ArrowUpRight size={16}/></Link></div></div>
        <div className="project-teaser-side"><img src={img("/images/seleccion-30sep/inicio-redondeado/secundarias-web21.svg")} alt="Componentes curvos de precisión"/><img src={img("/images/seleccion-30sep/inicio-redondeado/secundarias-86.svg")} alt="Conjunto mecánico de precisión"/></div>
      </div>
    </section>
    <CTA />
  </>;
}
