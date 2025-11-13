import React from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Nitin K. Gupta',
    date: 'January 1, 2025',
    text: 'Every video is very detailed. Very well explained.',
  },
  {
    id: 2,
    name: 'Barry M. L. Coops',
    date: 'May 4, 2025',
    text: 'Excellent explanations. The most important part is the practical, highly relevant tips.',
  },
  {
    id: 3,
    name: 'Pranab L. Coops',
    date: 'February 14, 2025',
    text: 'Excellent touch with practical experience. The course was well structured.',
  },
  {
    id: 4,
    name: 'Harold G. J. Coops',
    date: 'August 1, 2025',
    text: 'Really really recommended. Very helpful.',
  },
  // Add more testimonials as needed
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>Hear from the <span className="accent">Data With Baraa</span> community</h2>
      <div className="testimonials-grid">
        {testimonialsData.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <div className="testimonial-author">
              <strong>{testimonial.name}</strong> - <span>{testimonial.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
