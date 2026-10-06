import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CTA } from "../ui";

export const metadata = {
  title: "Proyectos y experiencia",
  description: "Selección de soluciones, formatos, guías y componentes de ingeniería y manufactura de precisión para aplicaciones farmacéuticas."
};

const img = n => n;

export default function Projects(){
  return <div className="finalp-page">
    <section className="finalp-hero">
      <img className="finalp-hero-bg" src={img("/images/seleccion-30sep/principales/58.webp")} alt="Conjunto de formatos y piezas de precisión" data-motion="off" data-parallax="true"/>
      <div className="finalp-hero-overlay"/>
      <div className="container finalp-hero-content" data-reveal>
        <span className="finalp-kicker">PROYECTOS · EXPERIENCIA</span>
        <h1>Ingeniería que se integra al <em>proceso.</em></h1>
        <p>Una selección de formatos, guías, placas y componentes desarrollados alrededor de funciones reales de producción y empaque.</p>
        <div className="finalp-actions"><Link href="/contacto" className="button button-light">Cotizar proyecto <ArrowUpRight size={18}/></Link><a href="#experiencia" className="finalp-link">Ver experiencia</a></div>
      </div>
    </section>

    <section className="finalp-intro" id="experiencia">
      <div className="container finalp-intro-grid">
        <div data-reveal><span className="eyebrow">Experiencia aplicada</span><h2>Componentes y conjuntos de <em>precisión.</em></h2></div>
        <p data-reveal>Formatos, herramentales y componentes fabricados de acuerdo con los requerimientos funcionales de cada aplicación.</p>
      </div>
    </section>

    <section className="finalp-split finalp-paper">
      <div className="container finalp-split-grid">
        <figure className="finalp-media finalp-media-large"><img src={img("/images/seleccion-30sep/secundarias/web-21.webp")} alt="Sistema de formato para maquinaria farmacéutica"/></figure>
        <div className="finalp-copy" data-reveal><span className="finalp-step">01 / FORMATOS</span><span className="eyebrow">Conjuntos completos</span><h2>La pieza se diseña entendiendo el <em>sistema.</em></h2><p>Componentes desarrollados y fabricados de acuerdo con la geometría y los requerimientos funcionales de cada aplicación.</p></div>
      </div>
    </section>

    <section className="finalp-fullband">
      <img src={img("/images/seleccion-30sep/secundarias/web38.webp")} alt="Detalle de componentes de maquinaria farmacéutica" className="finalp-fullband-bg" data-motion="off" data-parallax="true"/>
      <div className="finalp-fullband-overlay"/>
      <div className="container finalp-fullband-copy" data-reveal><span className="finalp-kicker">02 / GUIADO Y TRANSPORTE</span><h2>Sistemas de alimentación y <em>manejo de producto.</em></h2><p>Componentes de precisión para guiado, posicionamiento y transferencia dentro del proceso.</p></div>
    </section>

    <section className="finalp-split finalp-soft">
      <div className="container finalp-split-grid finalp-reverse">
        <div className="finalp-copy" data-reveal><span className="finalp-step">03 / INTEGRACIÓN</span><span className="eyebrow">Ingeniería aplicada</span><h2>Componentes y <em>conjuntos especiales.</em></h2><p>Fabricación de piezas y conjuntos destinados a integrarse con equipos y sistemas existentes.</p><Link href="/capacidades" className="text-link">Ver capacidades <ArrowUpRight size={16}/></Link></div>
        <figure className="finalp-media finalp-media-large"><img src={img("/images/seleccion-30sep/secundarias/web46.webp")} alt="Componentes especiales mecanizados"/></figure>
      </div>
    </section>

    <section className="finalp-pair">
      <div className="container">
        <div className="finalp-pair-head" data-reveal><span className="eyebrow">Herramentales y placas</span><h2>Herramentales de <em>precisión.</em></h2></div>
        <div className="finalp-pair-grid">
          <figure className="finalp-card"><div className="finalp-card-media"><img src={img("/images/seleccion-30sep/secundarias/web28.webp")} alt="Componentes instalados en maquinaria"/></div></figure>
          <figure className="finalp-card"><div className="finalp-card-media"><img src={img("/images/seleccion-30sep/secundarias/web-18.webp")} alt="Componentes de manufactura"/></div></figure>
        </div>
      </div>
    </section>

    <section className="finalp-process finalp-process-background">
      <img src="/images/seleccion-30sep/secundarias/74.webp" alt="Conjunto mecanizado de precisión" className="process-background-photo"/>
      <div className="process-background-overlay"/>
      <div className="container finalp-process-grid">
        <div className="finalp-process-copy" data-reveal><span className="finalp-step">04 / MANUFACTURA</span><span className="eyebrow">Proceso</span><h2>Diseño y fabricación dentro del <em>mismo flujo.</em></h2><p>La manufactura se integra al proyecto desde el inicio para conservar función, ajuste y geometría.</p></div>

      </div>
    </section>

    <section className="finalp-split finalp-paper">
      <div className="container finalp-split-grid">
        <figure className="finalp-media finalp-media-square"><img src={img("/images/seleccion-30sep/secundarias/77.webp")} alt="Eje mecanizado de precisión"/></figure>
        <div className="finalp-copy" data-reveal><span className="finalp-step">05 / ESPECIALES</span><span className="eyebrow">Componentes especiales</span><h2>Componentes para aplicaciones de <em>precisión.</em></h2><p>Elementos fabricados para aplicaciones donde el ajuste, la geometría y la repetibilidad son críticos.</p><Link href="/contacto" className="button">Hablemos del proyecto <ArrowUpRight size={18}/></Link></div>
      </div>
    </section>

    <section className="finalp-closing">
      <img src={img("/images/seleccion-30sep/secundarias/web-16.webp")} alt="Conjunto de cilindros mecanizados" className="finalp-closing-bg" data-motion="off" data-parallax="true"/>
      <div className="finalp-closing-overlay"/>
      <div className="container finalp-closing-copy" data-reveal><span className="finalp-kicker">DETOCH MORE</span><p>Comparte la aplicación, la pieza o el problema de operación y definimos contigo el siguiente paso.</p><Link href="/contacto" className="button button-light">Cuéntanos tu proyecto <ArrowUpRight size={18}/></Link></div>
    </section>
    <CTA compact/>
  </div>
}
