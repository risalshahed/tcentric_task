import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EachRing from '../EachRing/EachRing';
import './Rings.css';

const Rings = () => {
  const [rings, setRings] = useState([]);

  useEffect(() => {
    axios.get('rings.json')
    .then(res => {
      const { data } = res;
      setRings(data);
    })
  }, [])

  return (
    <div>
      <div className="rings">
        <div className="each-ring">
          <div>
            <img src="https://i.ibb.co/8xFhPbs/ring.png" alt="ring" />
          </div>
          {
            rings.map(ring => (
              <EachRing
                key={ring.id}
                eachRing={ring}
              />
            ))
          }
        </div>
      </div>

      <div id="btn">
        <button>shop -></button>
      </div>
    </div>
  );
};

export default Rings;