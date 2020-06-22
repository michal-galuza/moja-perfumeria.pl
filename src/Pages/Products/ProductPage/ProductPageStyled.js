import styled from 'styled-components';

export const Wrapper = styled.div`
width:100%;
min-height: calc(100vh - 80px);
margin-top:80px;
background: ${({theme})=>theme.colors.background};
display:grid;
grid-template-columns: 400px  1fr 1fr;
grid-template-areas: "sideMenu img content";
@media (max-width: 1300px){
    min-height: calc(100vh - 115px);
    grid-template-columns: 1fr;
    margin-top:115px;
    grid-template-rows:calc(100vh - 115px) 1fr;
grid-template-areas: 
" img "
"content";
}

@media(max-width: 400px){
    margin-top:85px;
    grid-template-rows:calc(100vh - 85px) 1fr;
}
`;

export const WrapperImg=styled.div`
grid-area: img;
width:100%;
height:100%;
padding:60px;
display: flex;
justify-content:center;
align-items:center;
background: ${({type})=>type==="dlaNiej"
 ?
 ({theme})=>theme.gradients.pink
:
type==="dlaNiego"
?
({theme})=>theme.colors.sideMenuOne
:
type==="wszystkieProdukty"?
({theme})=>theme.colors.sideMenuTwo
:
({theme})=>theme.colors.primaryChanged
 };
@media (max-width: 1300px){
padding:40px;
border-top:none;
}
@media (max-width: 500px){
padding:10px;
}
`;
export const Img=styled.img`
width:100%;
height:100%;
object-fit:scale-down;
object-position:center;
transition: transform .3s linear .1s;
:hover{
transform: scale(1.05);
}
`;
export const WrapperContent=styled(WrapperImg)`
grid-area: content;
display:flex;
justify-content:center;
align-items:flex-start;
flex-direction:column;
background:${({theme})=>theme.colors.background};
height:100%;
@media (max-width: 1080px){
    padding-bottom: 60px;
}
`;
export const Name=styled.h1`
width:80%;
border-bottom: 1px solid lightgrey;
display:flex;
align-items:flex-end;
font-size:3em;
font-weight: normal;
text-align: start;
padding:0px 10px;
`;
export const Brand=styled.p`
width:80%;
border-bottom: 1px solid lightgrey;
display:flex;
align-items:flex-end;
font-size:1.2em;
text-align: start;
padding:15px 10px;

`;
export const Type=styled(Brand)`
font-style:italic;
`;
export const Description = styled(Brand)`
flex-wrap:wrap;
font-style:italic;
`;
export const Price = styled(Brand)`
align-items:flex-start;
margin: 10px 0;
font-weight: bold;
font-size:1.2em;
`;
export const BtnWrapper=styled.div`
width:80%;
padding:5px 10px;
font-size:1.1em;
display:flex;
align-items:center;
justify-content:space-between;
flex-wrap:wrap;
@media (min-width: 1444px){
    flex-wrap: nowrap;
}

@media (max-width: 360px){
    width:90%;
    justify-content:flex-start;
}
`;
export const Label= styled.label`
display: flex;
    justify-content: center;
    align-items: center;  
`;
export const Input = styled.input`
width:100px;

    font-size: 1.05em;
    padding:2px;
    margin-left:10px;
    border-radius:10px;
    border:1px solid lightgrey;
    outline:none;
    text-align:center;
::placeholder{
    text-align:center;
    font-size: .8em;
}
`;
export const Btn=styled.button`
outline:none;
position:relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    text-decoration: none;
    width:250px;
    height: 40px;
    font-size: 1.05em;
    border-radius: 50px;
    border: 1px solid lightgrey;
    overflow:hidden;
    z-index:1;
    @media (hover: hover) and (pointer: fine) {
 
 ::before{
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        background: pink;
        z-index:-1;
        transition: transform .3s ease-in-out ;
        transform: translateX(-110%);
    }
    :hover{
        ::before{
            transform: translateX(0);
        }
    }
    }
    @media (max-width: 1444px){
        background: ${({theme})=>theme.colors.button};
        color:white;
        width:200px;
        margin-top:20px;
    }
    @media (max-width: 1080px){
        background: ${({theme})=>theme.colors.button};
        color:white;
        margin-top:20px;
    }
    @media (max-width: 775px){
        margin-top:20px;
    }
  
`;
