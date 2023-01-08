import React from 'react';

const EachRing = ({ eachRing }) => {
  const { img, title, price } = eachRing;

  return (
    <div>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p><strong>Tk {price}</strong></p>
    </div>
  );
};

export default EachRing;