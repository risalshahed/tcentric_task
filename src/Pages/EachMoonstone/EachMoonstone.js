import React from 'react';

const EachMoonstone = ({ eachMoonstone }) => {
  const { img, title, price } = eachMoonstone;

  return (
    <div>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p><strong>Tk {price}</strong></p>
    </div>
  );
};

export default EachMoonstone;