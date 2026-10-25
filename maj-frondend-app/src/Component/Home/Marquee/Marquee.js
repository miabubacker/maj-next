import "./Marquee.css";

/**
 * Infinite scrolling logo strip.
 * items: [{ name: "Brand", logo: importedImage }]
 * speed: seconds for one full loop (bigger = slower)
 * reverse: true = move left to right
 */
function Marquee({ items, speed = 30, reverse = false }) {
  const group = (hidden) => (
    <ul className="marquee__group" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item.name} className="marquee__item">
          <img src={item.logo} alt={hidden ? "" : item.name} loading="lazy" />
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={`marquee ${reverse ? "marquee--reverse" : ""}`}
      style={{ "--duration": `${speed}s` }}
    >
      <div className="marquee__track">
        {group(false)}
        {group(true)}   {/* exact copy = the seamless loop */}
      </div>
    </div>
  );
}

export default Marquee
/* Usage:
   import Marquee from "./Marquee";
   import logo1 from "../assets/clients/brand1.png";
   ...
   const clients = [
     { name: "Brand One", logo: logo1 },
     { name: "Brand Two", logo: logo2 },
   ];
   <Marquee items={clients} speed={30} />
*/