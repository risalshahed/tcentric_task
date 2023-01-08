import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Diamonds.css';
import EachDiamond from '../EachDiamond/EachDiamond';

const Diamonds = () => {
  const [diamonds, setDiamonds] = useState([]);

  useEffect(() => {
    const url = 'diamonds.json';
    axios.get(url)
    .then(res => {
      const { data } = res;
      setDiamonds(data);
    })
  }, []);

  return (
    <div className='diamonds'>
      <div id='diamond'>
        <h2>
          DIAMOND JEWELRY
        </h2>
        <div id='btn'>
          <button>
            view all
          </button>
        </div>
      </div>
      <div className="each-diamond">
        {
          diamonds.map(diamond => (
            <EachDiamond
              key={diamond.id}
              eachDiamond={diamond}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Diamonds;