import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EachJewelry from '../EachJewelry/EachJewelry';
import './Jewelries.css';
import { Carousel } from 'react-bootstrap';

const Jewelries = () => {
  const [jewelries, setJewelries] = useState([]);

  useEffect(() => {
    const url = 'jewelries.json'
    axios.get(url)
    .then(res => {
      const { data } = res;
      setJewelries(data);
    })
  }, [])

  return (
    <div className="jewelries">
      <h2>
        Discover Our Premium Jewelry
      </h2>

      <Carousel>
        <Carousel.Item>
          <div className="each-jewelry">
            {
              jewelries.map(jewelry => (
                <EachJewelry
                  key={jewelry.id}
                  eachJewelry={jewelry}
                />
              )).slice(0,4)
            }
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="each-jewelry">
            {
              jewelries.map(jewelry => (
                <EachJewelry
                  key={jewelry.id}
                  eachJewelry={jewelry}
                />
              )).slice(4,8)
            }
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="each-jewelry">
            {
              jewelries.map(jewelry => (
                <EachJewelry
                  key={jewelry.id}
                  eachJewelry={jewelry}
                />
              )).slice(8,12)
            }
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="each-jewelry">
            {
              jewelries.map(jewelry => (
                <EachJewelry
                  key={jewelry.id}
                  eachJewelry={jewelry}
                />
              )).slice(10,14)
            }
          </div>
        </Carousel.Item>
      
      </Carousel>

      <div id='btn'>
        <button>
          shop all
        </button>
      </div>

    </div>
  );
};

export default Jewelries;