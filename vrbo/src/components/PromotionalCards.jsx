import React from 'react';
import './PromotionalCards.css';

const PromotionalCards = ({ cards }) => {
  return (
    <section className="promotional-cards-section">
      <div className="promotional-cards-wrapper">
        {cards.map((card) => (
          <div key={card.id} className="promotional-card">
            <div className="card-content-left">
              <h3 className="card-title">{card.title}</h3>
              <a href={card.link} className="card-call-to-action">
                Book now <span className="arrow">→</span>
              </a>
            </div>
            <div className="card-image-right">
              <img src={card.imageUrl} alt={card.title} className="card-image" loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PromotionalCards;
