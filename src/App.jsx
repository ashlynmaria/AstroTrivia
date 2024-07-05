import React, { useEffect, useState } from 'react';
import styles from './style'; 
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from './components';
import './app.css'; 

const App = () => {
  const [animateRocket, setAnimateRocket] = useState(false);
  const [rocketTop, setRocketTop] = useState('10%'); 

  useEffect(() => {
    const section = document.getElementById('app');
    section.classList.add('fadeIn');

    const handleNavigation = (sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        const sectionTop = sectionElement.getBoundingClientRect().top;
        setRocketTop(`${sectionTop}px`);
        setAnimateRocket(true);
        setTimeout(() => {
          setAnimateRocket(false);
          sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 2000); 
      }
    };

    document.addEventListener('navigation', (event) => {
      const { sectionId } = event.detail;
      handleNavigation(sectionId);
    });

    return () => {
      section.classList.remove('fadeIn');
      document.removeEventListener('navigation', handleNavigation);
    };
  }, []);

  return (
    <div id="app" className="bg-primary w-full overflow-hidden">
      <div className={`rocket ${animateRocket ? 'rocket-active' : ''}`} style={{ top: rocketTop }}></div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero id="hero" />
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats id="stats" />
          <Business id="business" />
          <Billing id="billing" />
          <CardDeal id="card-deal" />
          <Testimonials id="testimonials" />
          <Clients id="clients" />
          <CTA id="cta" />
          <Footer id="footer" />
        </div>
      </div>
    </div>
  );
};

export default App;
