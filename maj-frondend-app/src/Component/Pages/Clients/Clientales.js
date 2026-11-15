import React, { useState,useEffect } from "react";
import "./Clientales.css";
import Saravana from '../../Images/clientsImgs/saravana.png'
import Fathima from '../../Images/clientsImgs/fathima.png'
import Mohanlal from '../../Images/clientsImgs/mohanlal.png'
import Pothys from '../../Images/clientsImgs/pothys.png'
import Sreekumaran from '../../Images/clientsImgs/sreekumaran.png'
import Malabar from '../../Images/clientsImgs/malabar.png'
import WordReveal from "../../Assets/WordReveal/WordReveal";
import Reveal from "../../Assets/Reveal/Reveal";
import Counter from '../../Assets/Counter/Counter'


const Clientales = () => {
  const [activeFaq, setActiveFaq] = useState(null);
   const[brandlogo,setBrandLogo]= useState([{
name:"Saravana",img:Saravana
   },
   {
name:"Fathima",img:Fathima
   },
    {
name:"Mohanlal",img:Mohanlal
   },
    {
name:"Pothys",img:Pothys
   },
    {
name:"Sreekumaran",img:Sreekumaran
   },
     {
name:"Malabar",img:Malabar
   },
  
  
  ])

  const faqs = [
    {
      question: "Who can order from us?",
      answer:
        "Jewellery retailers, wholesalers, showrooms and established jewellery brands can place orders with us.",
    },
    {
      question: "How long does an order take?",
      answer:
        "Delivery timelines depend on the design, quantity and order requirements. Contact our team for an estimated timeline.",
    },
    {
      question: "Can you make chains to our own designs?",
      answer:
        "Yes. We can manufacture gold chains based on your custom designs and specifications.",
    },
    {
      question: "Do you offer hallmarked jewellery?",
      answer:
        "Please contact our team to discuss hallmarking requirements for your orders.",
    },
    {
      question: "How do we start an order?",
      answer:
        "Simply contact our team or request a call. We will discuss your requirements, designs and quantities.",
    },
  ];
   const review=[{
    name:'Ananya',
    message:"“MAJGOLD has supplied our showroom for [number] years. The quality is consistent and the finish is always clean.”",
    location:'~Dealer, Chennai'
   }
   ,
   {
    name:'Rajesh Sunder',
    message:"“They understand what our customers want, and they deliver on the date they promise.”",
    location:"~Dealer, Chennai"
   },
    {
    name:'Abbas Ali',
    message:"“Dealing with them feels personal, not transactional. We trust them with our repeat orders.”",
    location:"~Customer, Chennai"
   },
     {
    name:'Sushmitha Prem',
    message:"“We’ve been ordering gold chains from MAJGOLD for several years. The finish is consistent, the weight is always exact, and they deliver on the date they promise. It feels like dealing with people who care about our business.”",
    location:"~Dealer, Chennai"
   },

  ]
  const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentIndex((prev) => (prev + 1) % review.length);
  }, 2000);

  return () => clearInterval(interval);
}, [review.length]);

  return (
    <main className="clientales-page">

      {/* Hero Section */}
      <section className="clients-hero">
        <div className="clients-hero-content">
          <Reveal as="p" delay={0.5}>
            <span className="section-label">
            OUR CLIENTS & PARTNERS
            </span>
            </Reveal>
            {/* </span> */}
          <h1>
          <WordReveal as="h1" text="Trusted by Brands" />
            {/* <br /> */}
            <WordReveal as="h1" text="Across Tamil Nadu." />
            </h1>
            {/* <span>Across Tamil Nadu.</span> */}
          {/* </h1> */}
         <Reveal delay={0.7}>
          <p>
            Building lasting relationships through craftsmanship,
            quality and trust since 2003.
          </p>
        </Reveal> 
          
        </div>
        <div className={'headerExp'}> </div>
      </section>

      {/* Statistics */}
      <section className="clients-stats">
  <div className="stat-item">
    <h2>
      <Counter target={30} />
    </h2>
    <p>Brand Clients</p>
  </div>

  <div className="stat-item">
    <h2>
      <Counter target={100} />
    </h2>
    <p>Various Designs Delivered</p>
  </div>

  <div className="stat-item">
    <h2>
      <Counter target={20} />
    </h2>
    <p>Years of Craftsmanship</p>
  </div>
</section>

      {/* Story Section */}
      
      <section className="clients-story">
          <Reveal direction="left" aria-hidden="true">
        <div className="story-heading">
          <span className="section-label">BUILT ON TRUST</span>

          <h2>
            Our Clients Are
            <br />
            <span>Our Family.</span>
          </h2>

          <p className="story-quote">
            "Over 30 brands across Tamil Nadu have made MAJGOLD
            part of their story, one chain at a time."
          </p>
        </div>
  </Reveal>
  <Reveal direction="right" aria-hidden="true">
        <div className="story-content">
          <h3>Our story with our clients</h3>

          <p>
            When we started in T-Nagar in 2003, we had a small
            unit and one promise: make every chain as if it were
            our own.
          </p>

          <p>
            Twenty years later, that promise hasn't changed,
            and neither have many of the people we started with.
            Some clients began with a single order and now trust
            us with their full collections.
          </p>

          <p>
            We're proud of that, because in this business,
            trust is the most valuable thing we make.
          </p>
        </div>
      </Reveal>
      </section>

      {/* Brands Section */}
      <section className="brands-section">
        <Reveal as="p" delay={0.5}>
            <span className="section-label">OUR PARTNERS</span>
            </Reveal>
            <Reveal as="p" delay={0.5}>
              <h2>Brands We've Grown With</h2>
            </Reveal>
     
<Reveal direction="left" aria-hidden="true">
        <div className="brands-grid">
          {/* Add actual client logos here */}
          {brandlogo.map((data)=>
      <div className="brand-placeholder">
       <img src={data.img}/>
        </div>
          )}
        </div>
        </Reveal>
      </section>

      {/* FAQ Section */}
      <section className="clients-faq">
        <div className="faq-heading">
            <Reveal as="p" delay={0.5}>
             <span className="section-label">NEED TO KNOW?</span>
            </Reveal>
                     <Reveal as="p" delay={0.5}>
          <h2>Quick Questions <span>~ FAQ's</span></h2>
          </Reveal>
        </div>
<Reveal as="p" delay={0.5}>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button
                className="faq-question"
                onClick={() =>
                  setActiveFaq(activeFaq === index ? null : index)
                }
              >
                <span>{faq.question}</span>
                <span className="faq-icon">
                  {activeFaq === index ? "−" : "+"}
                </span>
              </button>

              {activeFaq === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        </Reveal>
      </section>

      {/* Testimonials */}
  <section className="clients-testimonials">
          <Reveal as="p" delay={0.5}>
        <span className="section-label">TESTIMONIALS</span>
          </Reveal>
        <Reveal as="p" delay={0.5}>
        <h2>Words From Clients And Customers</h2>
       </Reveal>
        <div className="testimonial-card">
          <Reveal as="p" delay={0.5}>
          <div className="testimonial-stars">★★★★★</div>
        </Reveal>
        <Reveal as="p" delay={0.5}>
<div className="testimonial-card" key={currentIndex}>
  <p>{review[currentIndex].message}</p>

  <div className="testimonial-author">
    <h4>{review[currentIndex].name}</h4>
    <span>{review[currentIndex].location}</span>
  </div>
</div>
</Reveal>
          {/* {review.map((data)=><>
            <p>{data.message}</p>
            <div className="testimonial-author">
            <h4>{data.name}</h4>
            <span>{data.location}</span>
          </div>
          </>)} */}
        </div>
      </section> 
      {/* <section className="clients-testimonials">
        <span className="section-label">TESTIMONIALS</span>

        <h2>Words From Clients And Customers</h2>

        <div className="testimonial-card">
          <div className="testimonial-stars">★★★★★</div>

          <p>
            "MAJGOLD has supplied our showroom for [number] years.
            The quality is consistent and the finish is always clean."
          </p>

          <div className="testimonial-author">
            <h4>Ananya</h4>
            <span>Dealer, Chennai</span>
          </div>
        </div>
      </section> */}

    </main>
  );
};

export default Clientales;