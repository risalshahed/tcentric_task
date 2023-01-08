import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EachArrival from '../EachArrival/EachArrival';
import './Arrivals.css';

const Arrivals = () => {
  const [arrivals, setArrivals] = useState([]);

  useEffect(() => {
    const url = 'arrivals.json';
    axios.get(url)
    .then(res => {
      const { data } = res;
      setArrivals(data);
    })
  }, [])

  return (
    <div className='arrivals'>
      <div id='arrival'>
        <h2>
          NEW ARRIVALS
        </h2>
        <div id='btn'>
          <button>
            view all
          </button>
        </div>
      </div>

      <div className="each-arrival">
        {
          arrivals.map(arrival => (
            <EachArrival
              key={arrival.id}
              eachArrival={arrival}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Arrivals;