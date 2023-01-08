import React,{useState} from 'react';

const EachCollection = ({ eachCollection }) => {
  const { id, img, price, title, variant } = eachCollection;
  
  const [i, setI] = useState(0);

  return (
    <div>
      {
        !variant ?
        <div>
          <img src={img} alt={title} />
          <h3>{title}</h3>
          <p><strong>Tk {price}</strong></p>
        </div>
        :          
        <div>
          <img src={variant[i].img} alt={variant[i].title} />
          <h3>{variant[i].title}</h3>
          <p><strong>Tk {variant[i].price}</strong></p>
          <div id='variant'>
            {
              variant?.map((item, index) => {
                return <img
                  onClick={() => setI(index)}
                  src = {item.color}
                  alt = ''
                />
              })
            }
          </div>
          {/* <div id='variant'>
            {
              variant?.map((item,key)=>{
                return <img
                  onClick={()=>setI(key)}
                  src={item.color}
                  alt="" />
              })
            }
          </div> */}
        </div>
        
      }
    </div>
  );
};

export default EachCollection;