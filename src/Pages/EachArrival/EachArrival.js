import React from 'react';

const EachArrival = ({ eachArrival }) => {
  const { img, title, price } = eachArrival;

  return (
    <div>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p><strong>Tk {price}</strong></p>
    </div>
  );
};

export default EachArrival;