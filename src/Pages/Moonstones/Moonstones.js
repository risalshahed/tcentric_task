import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EachMoonstone from '../EachMoonstone/EachMoonstone';
import './Moonstones.css';

const Moonstones = () => {
  const [moonstones, setMoonstones] = useState([]);

  useEffect(() => {
    const url = 'moonstones.json';
    axios.get(url)
    .then(res => {
      const { data } = res;
      setMoonstones(data);
    })
  }, []);

  return (
    <div className='moonstones'>
      <div id='moonstone'>
        <h2>
          MOONSTONE COLLECTION
        </h2>
        <div id='btn'>
          <button>
            view all
          </button>
        </div>
      </div>

      <div className="each-moonstone">
        {
          moonstones.map(moonstone => (
            <EachMoonstone
              key={moonstone.id}
              eachMoonstone={moonstone}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Moonstones;