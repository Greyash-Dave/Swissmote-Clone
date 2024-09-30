import React, { useEffect, useRef, useState } from 'react';
import './Details.css';

const Details = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, entry.target.dataset.index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const titleObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsTitleVisible(true);
          titleObserver.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) cardObserver.observe(card);
    });

    if (titleRef.current) {
      titleObserver.observe(titleRef.current);
    }

    return () => {
      cardObserver.disconnect();
      titleObserver.disconnect();
    };
  }, []);

  const cardData = [
    { num: 1, text: "Tell us what you are hiring for by jumping on a call with us, sending us a quick video, or providing us with a job description." },
    { num: 2, text: "We create a \"mini challenge\" for candidates to complete. The top 1% of candidates complete high quality submissions, ensuring great talent." },
    { num: 3, text: "We send you the best candidates for final approval and then get the contracts signed so your company can flourish!" },
  ];

  const cardData2 = [
    { text: "Your team comprises the top 1% of global talent, driving exceptional results.", sub:"Top 1%" },
    { text: "Recruiting costs are reduced by 90% , driving exceptional results.", sub:"90%" },
    { text: "Your team grows rapidly, empowering you to secure the #1 spot in your industry.", sub:"#1 position" },
    { text: "Your team comprises the top 1% of global talent, driving exceptional results.", sub:"Top 1%" },
    { text: "Recruiting costs are reduced by 90% , driving exceptional results.", sub:"90%" },
    { text: "Your team grows rapidly, empowering you to secure the #1 spot in your industry.", sub:"#1 position" },
  ];

  return (

    <>
    <div className="details-imagine">
      <h1>Imagine...</h1>
      <div className="card-container">
        {cardData2.map((card, index) => (
            <div
              key={card.num}
              ref={(el) => (cardsRef.current[index] = el)}
              data-index={index}
              className={`card ${visibleCards.includes(index.toString()) ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className="card-text">{card.text}</div>
              <div className="card-sub">{card.sub}</div>
            </div>
          ))}
      </div>
    </div>
    <div className="details-howitworks">
      <div className="details-elements">
        <div className={`details-title ${isTitleVisible ? 'animate' : ''}`} ref={titleRef}>
          <h2>How it Works</h2>
          <div className="horizontal-line"></div>
        </div>
        <div className="details-howitworks-cards">
          {cardData.map((card, index) => (
            <div 
              key={card.num}
              ref={(el) => (cardsRef.current[index] = el)}
              data-index={index}
              className={`details-howitworks-card ${visibleCards.includes(index.toString()) ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <img src={`/${card.num}.svg`} alt={`howitworks-card-${card.num}`} />
              <h3>{String(card.num).padStart(2, '0')}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Details;