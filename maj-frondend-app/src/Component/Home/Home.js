
import "./Home.css";
import Reveal from '../Assets/Reveal/Reveal.js';
import WordReveal from '../Assets/WordReveal/WordReveal.js';
import Pic from '../Assets/Pic/Pic.js';
import BannerModel from "../Images/banner_Model.png";
import SectionOneImg from "../Images/section1-imgs.png";
import BannerModeltwo from "../Images/bannerTwoModel.png";
import BannerTwoWorking from "../Images/bannerTwoimg.png";
import bannerThreeUpper from "../Images/bannerThreeUpper.png";
import bannerThreeMiddle from "../Images/bannerThreeMiddle.png";
import bannerThreeLower from "../Images/bannerThreeLower.png";
import Catlalogone from "../Images/catlalogone.png";
import Catlalogtwo from "../Images/catlalogtwo.png";
import Catlalogthree from "../Images/catlalogthree.png";
import Catlalogfour from "../Images/catlalogfour.png";
import { useState } from "react";

  function Home() {
   const [products, setProducts] = useState([
    { id: 1, alt: "Gold chain necklace", image: Catlalogone },
    { id: 2, alt: "Gold chain bracelet", image: Catlalogtwo },
    { id: 3, alt: "Gold chain earrings", image: Catlalogthree },
    { id: 4, alt: "Gold chain pendant", image: Catlalogfour },
  ]);
  return (
//     <div>
//       <section className="herobanner">
//         <div className="heroLeft">
//           <div className="heroTitle">
//             <div>Elegance in</div>
//             <div>Every Touch.</div>
//           </div>
//           <p className="heroPara">
//             Every single link tells a story of precision.
//           </p>
//           <div className="button-container">
//   <button className="center-button">Explore Products</button>
// </div>
          
//         </div>
//         <div className="heroRightImg">
//           <img src={BannerModel} />
//         </div>
//       </section>
//       {/* section-2 */}
//     </div>
 
<>
 <section className="hero" id="home">
      <div className="hero__text">
        <WordReveal as="h1" text="Elegance in Every Touch." />
        <Reveal as="p" delay={0.5}>Every single link tells a story of precision.</Reveal>
        <Reveal delay={0.7}>
          <a href="#products" className="btn btn--light">Explore Products</a>
        </Reveal>
      </div>
      <Pic
        src={BannerModel}
        alt="Gold chain jewellery worn by a model"
        className="hero__img"
        placeholderClass="ph--glow"
      />
    </section>
    {/* section-2 */}
    <section className="split split--story" id="about">
      <Reveal direction="left" className="collage collage--gold" aria-hidden="true">
        <Pic src={BannerModeltwo} className="collage__img story-1" />
        <Pic src={BannerTwoWorking} className="collage__img story-2" />
      </Reveal>

      <div className="split__text">
        <h2 className="stair">
          <Reveal as="span">Everyday Gold,</Reveal>
          <Reveal as="span" delay={0.15}>Crafted With Care,</Reveal>
          <Reveal as="span" delay={0.3}>Since 2003.</Reveal>
        </h2>
        <Reveal className="copy" delay={0.2}>
          <p>
            Since 2003, we’ve been making gold chains at our factory in T-Nagar, Chennai — a neighbourhood that has long been the heart of South India’s jewellery tradition. What started as a small, dedicated unit has grown into a trusted name for everyday elegance, with over 100+ happy brand clients across Tamil Nadu.
          </p>
          <a href="/clientales" className="btn">See Clientales</a>
        </Reveal>
      </div>
    </section>
    {/* section-3 */}
      <section className="split split--craft">
      <div className="split__text">
        <h2 className="visually-hidden">Our craft</h2>
        <Reveal className="copy">
          <p>
            Over the past two decades, our focus has never changed: honest craftsmanship, personal attention, and jewellery that fits seamlessly into real life. From our factory, we proudly serve customers across Tamil Nadu, building relationships one chain at a time.
          </p>
          <a href="#products" className="btn">See Products</a>
        </Reveal>
      </div>
      <Reveal direction="right" className="collage collage--navy" aria-hidden="true">
        <Pic src={bannerThreeMiddle} className="collage__img craft-1" />
        <Pic src={bannerThreeUpper} className="collage__img craft-2" />
        <Pic src={bannerThreeLower} className="collage__img craft-3" />
      </Reveal>
    </section>
    {/* section-4 */}
    <section className="products" id="products">
      <WordReveal as="h2" text="Discover Our Elegant Collections" />
      <Reveal as="p" className="products__intro" delay={0.2}>
        Every piece we make is designed to be worn daily — light enough for comfort, strong enough to last, and beautiful enough to mark even the simplest of moments as special.
      </Reveal>
      <ul className="product-grid">
        {products.map((p, i) => (
          <Reveal as="li" key={p.id} delay={i * 0.12}>
            <Pic src={p.image} alt={p.alt} className="ph--arch" />
          </Reveal>
        ))}
      </ul>
      <a href="/products" className="btn">See all</a>
    </section>
</>
  );
}
 export default Home
