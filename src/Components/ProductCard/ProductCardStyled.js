import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Wrapper = styled(Link)`
color: black;
text-decoration: none;
display:grid;
grid-template-rows: repeat(7 , 1fr);
width: 270px;
height: 400px;
margin: 20px;
padding:5px;
text-align: center;
justify-items:center;
align-items:center;
background:white;
transition: transform .3s ease-in ;
border: 2px solid  ${({color})=>color==="dlaNiej"
?
`#ffdae0`
:
color==="dlaNiego"
?
({theme})=>theme.colors.sideMenuOne
:
color==="wszystkieProdukty"?
({theme})=>theme.colors.sideMenuTwo
:
({theme})=>theme.colors.primaryChanged
};
    border-radius: 5px;
    z-index: 2;
} ;
:hover {
    transform: scale(1.1);
`;



export const Brand=styled.h4`
grid-row: 5/6;
display:flex;
justify-content:center;
align-items:center;
`;
export const Image = styled.img`
width:100%;
height:100%;
object-fit:contain;
grid-row: 1/4;
object-position:center;
`;
export const Name = styled.h3`
grid-row: 4/5;
display:flex;
justify-content:center;
align-items:center;
`;
export const Type = styled.p`
grid-row: 6/7;
display:flex;
justify-content:center;
align-items:center;
`;
export const Price = styled.p`
grid-row: 7/8;
display:flex;
justify-content:center;
align-items:center;

`;


