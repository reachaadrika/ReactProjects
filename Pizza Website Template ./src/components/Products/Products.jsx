import React from 'react';
import {ProductContainer,ProductHead,ProductWrap,ProductCard,ProductImg,ProductInfo,ProductTitle,ProductDesc,ProductPrice,ProductBtn}
from './ProductStyles';

const Products = ({head,data}) => {
    return (
        <ProductContainer>
            <ProductHead> {head}🍕  </ProductHead>
            <ProductWrap>

                {data.map((product,ind) => {
                    return(
                        <ProductCard key ={ind} >
                         <ProductImg src={product.img} alt={product.alt} />
                         <ProductInfo>
                             <ProductTitle>{product.name}</ProductTitle>
                             <ProductDesc>{product.desc}</ProductDesc>
                             <ProductPrice>{product.price}</ProductPrice>
                             <ProductBtn>{product.button}</ProductBtn>
                         </ProductInfo>
                        </ProductCard>
                    )
                })} 
            </ProductWrap>
        </ProductContainer>
    )
}

export default Products
