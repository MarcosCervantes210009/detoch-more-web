import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { privacyBlocks } from "./privacy-data";

export const metadata = {
  title: "Aviso de privacidad integral",
  description: "Aviso de Privacidad Integral de Detoch More, S.A. de C.V. para clientes, prospectos y contactos comerciales."
};

function Lines({ text }) {
  return <>{text.split("\n").map((line, i) => <span className="legal-line" key={`${line}-${i}`}>{line}</span>)}</>;
}

function LegalContent(){
  const out=[];
  let i=0;
  while(i<privacyBlocks.length){
    const block=privacyBlocks[i];
    if(block.type === "doc-title" || block.type === "doc-subtitle"){ i++; continue; }
    if(block.type === "ul" || block.type === "ol"){
      const type=block.type;
      const items=[];
      while(i<privacyBlocks.length && privacyBlocks[i].type===type){ items.push(privacyBlocks[i].text); i++; }
      const Tag=type==="ol"?"ol":"ul";
      out.push(<Tag className="legal-list" key={`list-${i}`}>{items.map((text,j)=><li key={`${text}-${j}`}>{text}</li>)}</Tag>);
      continue;
    }
    if(block.type === "table"){
      const [head,...rows]=block.rows;
      out.push(<div className="legal-table-wrap" key={`table-${i}`}><table className="legal-table"><thead><tr>{head.map((cell,j)=><th key={j}>{cell}</th>)}</tr></thead><tbody>{rows.map((row,r)=><tr key={r}>{row.map((cell,c)=><td key={c}>{cell}</td>)}</tr>)}</tbody></table></div>);
      i++; continue;
    }
    if(block.type === "doc-meta") out.push(<div className="legal-meta" key={`meta-${i}`}><Lines text={block.text}/></div>);
    if(block.type === "h2") out.push(<h2 key={`h2-${i}`}>{block.text}</h2>);
    if(block.type === "h3") out.push(<h3 key={`h3-${i}`}>{block.text}</h3>);
    if(block.type === "h4") out.push(<h4 key={`h4-${i}`}>{block.text}</h4>);
    if(block.type === "p") out.push(<p key={`p-${i}`}><Lines text={block.text}/></p>);
    i++;
  }
  return out;
}

export default function Privacy(){
  return <>
    <section className="legal-hero">
      <img src="/images/edited/edit-26.webp" alt="Detalle de manufactura de precisión" data-motion="off"/>
      <div className="legal-hero-overlay"/>
      <div className="container legal-hero-content" data-reveal>
        <span className="eyebrow">Legal · Protección de datos</span>
        <h1>Aviso de privacidad <em>integral.</em></h1>
        <p>Clientes, prospectos y contactos comerciales · Vigente desde el 18 de septiembre de 2026.</p>
      </div>
    </section>

    <section className="legal-layout-section">
      <div className="container legal-layout">
        <aside className="legal-aside">
          <span className="eyebrow">Contacto de privacidad</span>
          <strong>Detoch More, S.A. de C.V.</strong>
          <a href="mailto:ventas@dmaq.mx"><Mail size={16}/> ventas@dmaq.mx</a>
          <a href="tel:+525558006201"><Phone size={16}/> 55 5800 6201</a>
          <p>Área responsable: Departamento Administrativo.</p>
          <Link href="/contacto" className="text-link">Ir a contacto</Link>
        </aside>
        <article className="legal-article">
          <LegalContent/>
        </article>
      </div>
    </section>
  </>;
}
