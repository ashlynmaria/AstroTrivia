import React, { useState, useEffect, useRef } from 'react';
import { stats } from '../constants'; 
import styles from '../style'; 

const Stats = () => {
  const [animatedStats, setAnimatedStats] = useState([]);
  const [animationStarted, setAnimationStarted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationStarted) {
            startAnimation();
            setAnimationStarted(true);
          }
        });
      },
      {
        threshold: 0.5, 
      }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [animationStarted]);

  const startAnimation = () => {
    setAnimatedStats(stats.map((stat) => ({
      ...stat,
      animatedValue: 0 
    })));

    const interval = setInterval(() => {
      setAnimatedStats((prevStats) =>
        prevStats.map((stat) => {
          const targetValue = stat.title === 'Positive User Ratings' ? parseFloat(stat.value) : parseInt(stat.value, 10);
          const increment = stat.title === 'Positive User Ratings' ? 1 : Math.ceil(targetValue / 100); 
          const newValue = Math.min(targetValue, stat.animatedValue + increment);
          return {
            ...stat,
            animatedValue: newValue
          };
        })
      );
    }, 41); 

    
    return () => clearInterval(interval);
  };

  return (
    <section ref={statsRef} className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      {animatedStats.map((stat) => (
        <div key={stat.id} className="flex-1 flex justify-start items-center flex-row m-3">
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.title === 'Positive User Ratings' ? `${stat.animatedValue.toFixed(0)}%` : stat.animatedValue}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
