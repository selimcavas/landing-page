import styled from "styled-components";


export const InfoSec = styled.div`
color: #fff;
padding: 160px 0;
background: #D8DEE9;
display: flex;
height: 100vh;

`;

export const InfoColumn = styled.div`
margin-bottom: 15px;
padding-right: 200px;
padding-left: 200px;
flex: 1;
flex-basis: 50%;

@media screen and (max-width: 768px) {
    padding-right: 50px;
    padding-left: 50px;
    max-width: 100%;
    flex-basis: 100%;
    display: flex;   
    justify-content: center;
}
`;

export const TextWrap = styled.div`
padding-top: 0;
padding-bottom: 60px;
color: #434C5E;
text-align: center;

@media screen and (max-width: 768px) {
    padding-bottom: 65px;
}
`;

export const ImgWrap = styled.div`
padding-bottom: 25px;
display: flex;
justify-content: center;
`;

export const Img = styled.img`
border:0;
max-width: 50%;
max-height: 50%;
vertical-align: middle;
display: inline-block;
padding-top: 0;


@media screen and (max-width: 768px) {
    max-width: 100%;
    max-height: 100%;
}
`;
