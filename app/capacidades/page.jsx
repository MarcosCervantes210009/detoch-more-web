import { Check, Ruler, ScanLine, Settings2 } from "lucide-react";
import { CTA, SectionIntro } from "../ui";
const img = n => `/images/edited/edit-${String(n).padStart(2,"0")}.webp`;
export const metadata = { title: "Capacidades de manufactura", description: "Mecanizado CNC, electroerosión, rectificado, tratamientos, ajuste, ensamble, metrología e inspección." };
const groups=[
 {icon:Settings2,title:"Mecanizado",image:18,items:["Fresado CNC","Torneado CNC","Electroerosión por hilo","Maquinado convencional"]},
 {icon:Ruler,title:"Acabado y precisión",image:1,items:["Rectificado plano","Rectificado cilíndrico","Ajuste y ensamble de componentes de precisión"]},
 {icon:ScanLine,title:"Metrología e inspección",image:28,items:["Inspección dimensional","Verificación de geometrías y tolerancias","Control dimensional durante el proceso de manufactura"]},
 {icon:Settings2,title:"Procesos especiales",image:14,items:["Tratamientos térmicos","Tratamientos termoquímicos","Procesamiento de aceros templados y materiales de ingeniería"]}
];
export default function Capabilities(){return <>
 <section className="visual-page-hero"><img src={img(26)} alt="Detalle de placa mecanizada de precisión" data-motion="off"/><div className="visual-page-overlay"/><div className="container visual-page-content" data-reveal><span className="eyebrow">Capacidades</span><h1>Precisión respaldada por <em>proceso.</em></h1><p>Capacidades integrales para la fabricación de componentes, herramentales y sistemas de formato de alta precisión.</p></div></section>
 <section className="section section-white"><div className="container"><SectionIntro eyebrow="Manufactura" title="Cada proceso tiene una función dentro de la solución."/><div className="cap-editorial-grid">{groups.map(({icon:Icon,title,image,items},i)=><article className={`cap-editorial-card cap-card-${i+1}`} key={title}><div className="cap-editorial-image"><img src={img(image)} alt={title}/><span>0{i+1}</span></div><div className="cap-editorial-copy"><Icon size={25}/><h2>{title}</h2><ul>{items.map(item=><li key={item}><Check size={15}/>{item}</li>)}</ul></div></article>)}</div></div></section>
 <section className="full-bleed-photo-section capability-break"><img src={img(25)} alt="Detalle de sistema de guiado" data-motion="off"/><div className="full-bleed-photo-overlay"/><div className="container full-bleed-photo-copy" data-reveal><span className="eyebrow">Metrología e inspección</span><h2>La precisión no termina cuando sale de <em>la máquina.</em></h2><p>Inspección dimensional, geometrías, tolerancias y control durante el proceso.</p></div></section>
 <section className="section measurement-section"><div className="container measurement-grid"><div><span className="eyebrow">Control dimensional</span><h2>Medir también es parte de fabricar.</h2></div><div className="measurement-points"><div><strong>01</strong><span>Inspección dimensional</span></div><div><strong>02</strong><span>Verificación de geometrías y tolerancias</span></div><div><strong>03</strong><span>Control dimensional durante la manufactura</span></div></div></div></section><CTA/>
</>}
