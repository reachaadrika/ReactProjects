import React from 'react'
import '../Bit/Bit.css'

const Bit = ({image,name,price,volume,symbol,priceChange}) => {
    return (
        <div className="bit-container">
            <div className="bit-row">
                <div className="bit">

                    <img src={image} alt='crypto' />
                    <h1>{name}</h1>
                    <p className='bit-symbol'>{symbol}</p>


           </div>
           <div className='bit-data'>
               <p className='bit-price'>€{price}</p>
               <p className='bit-volume'>€{volume.toLocaleString()}
               
               </p>
               {priceChange < 0 ? ( 
                <p className="bit-percent red">
                    {priceChange.toFixed(2)}%
                </p>
               ) : (
                <p className="bit-percent green">
                {priceChange.toFixed(2)}%
            </p>
               )}
        
           </div>


            </div>
            </div>
    )
}

export default Bit
