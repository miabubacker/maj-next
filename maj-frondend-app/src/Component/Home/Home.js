
import "./Home.css";
import Reveal from '../Assets/Reveal/Reveal.js';
import WordReveal from '../Assets/WordReveal/WordReveal.js';
import Pic from '../Assets/Pic/Pic.js';
import BannerModel from "../Images/banner_Model.png";
import BannerThree from "../Images/bannerthreeimg.png";
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
import useMediaQuery from "../Assets/UseMediaQuery/UseMediaQuery.js";

  function Home() {
   const [products, setProducts] = useState([
    { id: 1, alt: "Gold chain necklace", image: Catlalogone },
    { id: 2, alt: "Gold chain bracelet", image: Catlalogtwo },
    { id: 3, alt: "Gold chain earrings", image: Catlalogthree },
    { id: 4, alt: "Gold chain pendant", image: Catlalogfour },
  ]);
  const isMobile = useMediaQuery('(max-width: 700px)');
   const [sectionTextContent,setSectionTextContent]=useState({stair:{
    header1:'Everyday Gold,',
    header2:'Crafted With Care,',
    header3:'Since 2003.',
    paragraph:'Since 2003, we’ve been making gold chains at our factory in T-Nagar, Chennai — a neighbourhood that has long been the heart of South India’s jewellery tradition. What started as a small, dedicated unit has grown into a trusted name for everyday elegance, with over 100+ happy brand clients across Tamil Nadu.'
   },section3:{
paragraph:' Over the past two decades, our focus has never changed: honest craftsmanship, personal attention, and jewellery that fits seamlessly into real life. From our factory, we proudly serve customers across Tamil Nadu, building relationships one chain at a time.'
   }
   })
  const [index, setIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const total = products.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  // swipe support on touch screens
  const onTouchStart = (e) => setStartX(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (startX === null) return;
    const diff = e.changedTouches[0].clientX - startX;
    if (diff > 40) prev();
    if (diff < -40) next();
    setStartX(null);
  };

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
       {isMobile?(<>
       <div className="split__text">
        <h2 className="stair">
          <Reveal as="span">{sectionTextContent.stair.header1}</Reveal>
          <Reveal as="span" delay={0.15}>{sectionTextContent.stair.header2}</Reveal>
          <Reveal as="span" delay={0.3}>{sectionTextContent.stair.header3}</Reveal>
        </h2>
        <Reveal className="copy" delay={0.2}>
          <p>
{sectionTextContent.stair.paragraph}
          </p>
          
        </Reveal>
      </div>
       <Reveal direction="left" className="collage collage--gold" aria-hidden="true">
        <Pic src={BannerModeltwo} className="collage__img story-1" />
        <Pic src={BannerTwoWorking} className="collage__img story-2" />
      </Reveal>
         <a href="/clientales" className="btn">See Clientales</a>
       </>):(
    <>
     <Reveal direction="left" className="collage collage--gold" aria-hidden="true">
        <Pic src={BannerModeltwo} className="collage__img story-1" />
        <Pic src={BannerTwoWorking} className="collage__img story-2" />
      </Reveal>

      <div className="split__text">
        <h2 className="stair">
       <Reveal as="span">{sectionTextContent.stair.header1}</Reveal>
          <Reveal as="span" delay={0.15}>{sectionTextContent.stair.header2}</Reveal>
          <Reveal as="span" delay={0.3}>{sectionTextContent.stair.header3}</Reveal>
        </h2>
        <Reveal className="copy" delay={0.2}>
          <p>
           {sectionTextContent.stair.paragraph}
          </p>
          
          <a href="/clientales" className="btn">See Clientales</a>
        </Reveal>
      </div>
    </>)}
    </section>
    {/* section-3 */}
      <section className="split split--craft">
        {isMobile?(<>
         <div className="split__text">
        <h2 className="visually-hidden">Our craft</h2>
        <Reveal className="copy">
          <p>
           {sectionTextContent.section3.paragraph}
          </p>
         
        </Reveal>
      </div>
      <Reveal direction="right" className="collage collage--navy" aria-hidden="true">
        {/* <Pic src={bannerThreeMiddle} className="collage__img craft-1" />
        <Pic src={bannerThreeUpper} className="collage__img craft-2" />
        <Pic src={bannerThreeLower} className="collage__img craft-3" /> */}
        <Pic src={BannerThree} className="collagemobile"/>
      </Reveal>
      {/* <Reveal direction="right" className="collage collage--navy" aria-hidden="true"> */}
         <a href="#products" className="btn">See Products</a>
      {/* </Reveal> */}

        
        </>):(<>
      <div className="split__text">
        <h2 className="visually-hidden">Our craft</h2>
        <Reveal className="copy">
          <p>
           {sectionTextContent.section3.paragraph}
          </p>
          <a href="#products" className="btn">See Products</a>
        </Reveal>
      </div>
      <Reveal direction="left" className="collage collage--navy" aria-hidden="true">
        <Pic src={bannerThreeMiddle} className="collage__img craft-1" />
        <Pic src={bannerThreeUpper} className="collage__img craft-2" />
        <Pic src={bannerThreeLower} className="collage__img craft-3" />
        <Pic src={BannerThree} className="collagemobile"/>
      </Reveal>
      </>)}
    </section>
    {/* section-4 */}
    <section className="products" id="products">
      <WordReveal as="h2" text="Discover Our Elegant Collections" />
      <Reveal as="p" className="products__intro" delay={0.2}>
        Every piece we make is designed to be worn daily — light enough for comfort, strong enough to last, and beautiful enough to mark even the simplest of moments as special.
      </Reveal>

      {isMobile ? (
        <div className="carousel" role="group" aria-roledescription="carousel" aria-label="Featured products">
          <button className="carousel__btn" onClick={prev} aria-label="Previous product">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
          </button>

          <div className="carousel__viewport" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <ul className="carousel__track" style={{ transform: `translateX(-${index * 100}%)` }}>
              {products.map((p, i) => (
                <li key={p.id} aria-hidden={i !== index}>
                  <Pic src={p.image} alt={p.alt} className="carousel__img" />
                </li>
              ))}
            </ul>
          </div>

          <button className="carousel__btn" onClick={next} aria-label="Next product">
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      ) : (
        <ul className="product-grid">
          {products.map((p, i) => (
            <Reveal as="li" key={p.id} delay={i * 0.12}>
              <Pic src={p.image} alt={p.alt} className="ph--arch" />
            </Reveal>
          ))}
        </ul>
      )}

      <a href="/products" className="btn">See all</a>
    </section>
</>
  );
}
 export default Home
