import React from 'react';

const EachJewelry = ({ eachJewelry }) => {
  const { img, title } = eachJewelry;
  console.log(eachJewelry);

  return (
    <div>
      <img src={img} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default EachJewelry;