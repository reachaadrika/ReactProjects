import styled from 'styled-components';
import ImgBg from '../../images/pizza2.jpg';

export const LandingPageContainer=styled.div`
background:linear-gradient(to right ,rgba(0,0,0,0.7) , rgba(0,0,0,0.1)),
url(${ImgBg});
height:100vh;
background-position:center;
background-size:cover;
`;

export const LandingPageContent = styled.div `
height:calc(100vh -80px);
max-height:100%;
width:100vw;
padding:0 rem calc((100vw - 1300px) /2);

`;

export const LandingPageItems=styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
height:100vh;
max-height:100%;
padding:0 2rem;
width:650px;
color:white;
text-transform:uppercase;
line-height:1;
font-weight:bold;

@media screen and (max-width:650px)
{
    width:100%;

}

`;


export const Heading=styled.h1 `
font-size:64px;
margin-bottom:1rem;
box-shadow:3px 5px yellow;
letter-spacing:3px;

`;

export const Paragraph=styled.p `
font-size:32px;
margin-bottom:2rem;

`


export const LandingPageBtn = styled.button `
font-size:18px;
padding:1rem 4rem;
border:none;
background:#e31837;
color:white;
transition:0.2s ease-out;

&:hover{
      
      transition:0.2s ease-out;
      cursor:pointer;
      color:#000;
      background:yellow;
}
`;


