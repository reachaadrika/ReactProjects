import React from 'react'
import {FeatureContainer,FeatureBtn} from './FeatureStyles';

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Pizza of the Day</h1>
            <p> It is hot. It is spicy. It is oh-so-Indian. 
            Tandoori paneer with capsicum I red paprika 
            <br></br>I mint mayo. </p>
            <FeatureBtn>Place Order</FeatureBtn>
        </FeatureContainer>
    )
}

export default Feature
