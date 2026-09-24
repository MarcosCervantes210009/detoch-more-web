import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CTA } from "../ui";

export const metadata = {
  title: "Proyectos y experiencia",
  description: "Selección de soluciones, formatos, guías y componentes de ingeniería y manufactura de precisión para aplicaciones farmacéuticas."
};

const img = n => `/images/edited/edit-${String(n).padStart(2,"0")}.webp`;

export default function Projects(){
  return <div className="finalp-page">
    <section className="finalp-hero">
      <img className="finalp-hero-bg" src={img(27)} alt="Componente de formato en aplicación farmacéutica" data-motion="off" data-parallax="true"/>
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
        <div data-reveal><span className="eyebrow">Experiencia aplicada</span><h2>No es una galería.<br/><em>Es una lectura del trabajo.</em></h2></div>
        <p data-reveal>Las fotografías se distribuyen por aplicación y capacidad. Cada pieza tiene espacio, escala y contexto; no hay mosaicos, imágenes encimadas ni numeración visual.</p>
      </div>
    </section>

    <section className="finalp-split finalp-paper">
      <div className="container finalp-split-grid">
        <figure className="finalp-media finalp-media-large"><img src={img(20)} alt="Conjunto de formatos y componentes de precisión"/></figure>
        <div className="finalp-copy" data-reveal><span className="finalp-step">01 / FORMATOS</span><span className="eyebrow">Conjuntos completos</span><h2>La pieza se diseña entendiendo el <em>sistema.</em></h2><p>Placas, guías, insertos y elementos de formato se desarrollan considerando montaje, interacción y condiciones de operación.</p></div>
      </div>
    </section>

    <section className="finalp-fullband">
      <img src={img(25)} alt="Detalle de sistema de guiado" className="finalp-fullband-bg" data-motion="off" data-parallax="true"/>
      <div className="finalp-fullband-overlay"/>
      <div className="container finalp-fullband-copy" data-reveal><span className="finalp-kicker">02 / GUIADO Y TRANSPORTE</span><h2>Geometría pensada para acompañar el <em>movimiento.</em></h2><p>El producto se posiciona, se guía y se transfiere. La solución parte de esa función y del comportamiento real del proceso.</p></div>
    </section>

    <section className="finalp-split finalp-soft">
      <div className="container finalp-split-grid finalp-reverse">
        <div className="finalp-copy" data-reveal><span className="finalp-step">03 / INTEGRACIÓN</span><span className="eyebrow">Ingeniería aplicada</span><h2>Del requerimiento a un conjunto <em>manufacturable.</em></h2><p>Podemos partir de una necesidad, una muestra física o un componente existente para desarrollar una solución funcional y reproducible.</p><Link href="/capacidades" className="text-link">Ver capacidades <ArrowUpRight size={16}/></Link></div>
        <figure className="finalp-media finalp-media-large"><img src={img(3)} alt="Conjunto de guías y mecanismo de precisión"/></figure>
      </div>
    </section>

    <section className="finalp-pair">
      <div className="container">
        <div className="finalp-pair-head" data-reveal><span className="eyebrow">Herramentales y placas</span><h2>Superficies, cavidades y patrones con una lectura <em>limpia.</em></h2></div>
        <div className="finalp-pair-grid">
          <figure className="finalp-card"><div className="finalp-card-media"><img src={img(1)} alt="Placa de precisión perforada"/></div><figcaption><strong>Placa de formato</strong><span>Mecanizado de precisión</span></figcaption></figure>
          <figure className="finalp-card"><div className="finalp-card-media"><img src={img(28)} alt="Conjunto de placas mecanizadas"/></div><figcaption><strong>Conjunto de placas</strong><span>Geometría y repetibilidad</span></figcaption></figure>
        </div>
      </div>
    </section>

    <section className="finalp-process">
      <div className="container finalp-process-grid">
        <div className="finalp-process-copy" data-reveal><span className="finalp-step">04 / MANUFACTURA</span><span className="eyebrow">Proceso</span><h2>Diseño y fabricación dentro del <em>mismo flujo.</em></h2><p>La manufactura se integra al proyecto desde el inicio para conservar función, ajuste y geometría.</p></div>
        <figure className="finalp-process-media"><img src={img(10)} alt="Detalle de montaje y ajuste de componente"/></figure>
      </div>
    </section>

    <section className="finalp-split finalp-paper">
      <div className="container finalp-split-grid">
        <figure className="finalp-media finalp-media-square"><img src={img(29)} alt="Componente especial de ingeniería"/></figure>
        <div className="finalp-copy" data-reveal><span className="finalp-step">05 / ESPECIALES</span><span className="eyebrow">Componentes especiales</span><h2>Cuando no existe una solución estándar, empieza la <em>ingeniería.</em></h2><p>Desarrollamos componentes y conjuntos para necesidades específicas de maquinaria, formato y manejo de producto.</p><Link href="/contacto" className="button">Hablemos del proyecto <ArrowUpRight size={18}/></Link></div>
      </div>
    </section>

    <section className="finalp-closing">
      <img src={img(26)} alt="Detalle de placa mecanizada" className="finalp-closing-bg" data-motion="off" data-parallax="true"/>
      <div className="finalp-closing-overlay"/>
      <div className="container finalp-closing-copy" data-reveal><span className="finalp-kicker">DETOCH MORE</span><h2>Una necesidad concreta.<br/><em>Una solución hecha para ella.</em></h2><p>Comparte la aplicación, la pieza o el problema de operación y definimos contigo el siguiente paso.</p><Link href="/contacto" className="button button-light">Cuéntanos tu proyecto <ArrowUpRight size={18}/></Link></div>
    </section>
    <CTA/>
  </div>
}
